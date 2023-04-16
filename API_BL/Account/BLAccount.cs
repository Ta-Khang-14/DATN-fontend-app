using API_BO;
using API_DL;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace API_BL
{
    public class BLAccount : BLBase<Account>, IBLAccount
    {
        private IDLAccount _dLAccount;

        public BLAccount(IDLBase<Account> baseDL, IConfiguration configuration, IDLAccount dLAccount) : base(baseDL, configuration)
        {
            _dLAccount = dLAccount;
        }

        private string GenerateToken(Account account)
        {
            // Tạo một payload cho JWT
            var claims = new[]
            {
                new Claim(ClaimTypes.Name, account.AccountName ?? ""),
                new Claim(ClaimTypes.Role, account.AccountRole.ToString())
            };

            // Tạo secret key
            var secretKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration["JWT:Secret"] ?? ""));

            // Tạo JWT từ payload và secret key
            var token = new JwtSecurityToken(
                issuer: _configuration["JWT:ValidIssuer"],
                audience: _configuration["JWT:ValidAudience"],
                claims: claims,
                expires: DateTime.UtcNow.AddDays(1),
                signingCredentials: new SigningCredentials(secretKey, SecurityAlgorithms.HmacSha256)
            );

            // Chuyển đổi JWT thành chuỗi để trả về cho người dùng
            var tokenString = new JwtSecurityTokenHandler().WriteToken(token);

            return tokenString;
        }

        public string Register(Account account)
        {
            account.CreatedDate = DateTime.Now;
            account.ModifiedDate = DateTime.Now;
            account.CreatedBy = "admin";
            account.ModifiedBy = "admin";
            if (string.IsNullOrEmpty(account.AccountPassword))
            {
                account.AccountPassword = CommonFn.HashString(account.AccountPassword ?? "");
            }
            else
            {
                throw new BadRequestException(ErrorCode.MissingInputValue);
            }

            bool result = this._dLAccount.Register(account);

            string tokenString = string.Empty;
            if (result)
            {
                if (account != null && !string.IsNullOrEmpty(account.AccountName) && !string.IsNullOrEmpty(account.AccountPassword))
                {
                    tokenString = GenerateToken(account);
                }
            }
            return tokenString;
        }

        public string Login(Account account)
        {
            List<WhereCondition> whereClause = new List<WhereCondition>()
            {
                new WhereCondition()
                {
                    FieldName = "AccountName",
                    Condition = Contidion.Equal,
                    Value = account.AccountName ?? ""
                },
                new WhereCondition()
                {
                    FieldName = "AccountPassword",
                    Condition = Contidion.Equal,
                    Value = CommonFn.HashString(account.AccountPassword ?? "")
                },
            };

            List<Account> result = GetEntitys(whereClause, new Dictionary<string, object>(),
                new Dictionary<string, object>(), "ID, AccountCode, AccountName, AccountRole, AccountEmail, AccountPhone, AccountRole");

            string tokenString = string.Empty;
            if (result.Count > 0)
            {
                if (account != null && !string.IsNullOrEmpty(account.AccountName) && !string.IsNullOrEmpty(account.AccountPassword))
                {
                    tokenString = GenerateToken(account);
                }
            }
            else
            {
                throw new AuthenticationException(ErrorCode.ErrorValidation);
            }
            return tokenString;
        }

        public Account Infor(int id)
        {
            List<WhereCondition> whereConditions = new List<WhereCondition>()
            {
                new WhereCondition()
                {
                    FieldName = "ID",
                    Condition = Contidion.Equal,
                    Value = id
                }
            };

            Account account = GetEntity(whereConditions, "ID, AccountCode, AccountName, AccountRole, AccountEmail, AccountPhone, AccountRole");
            return account;
        }

        public List<Account> Accounts(BaseRequest<Account> data)
        {
            List<Account> accounts = GetEntitys(data.WhereCondition, data.SortCondition, data.PagingCondition, data.Column);
            return accounts;
        }

        public bool ChangePassword(Dictionary<string, object> data)
        {
            bool result = false;
            return result;
        }
    }
}
