using API_BL;
using API_BO;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace DATN_API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthenticationController : BaseController<Account>
    {
        public AuthenticationController(IConfiguration configuration, IBLBase<Account> bLBase) : base(configuration, bLBase)
        {
        }

        private string GenerateToken(Account account)
        {
            // Tạo một payload cho JWT
            var claims = new[]
            {
                new Claim(ClaimTypes.Name, account.AccountName),
                new Claim(ClaimTypes.Role, account.AccountRole.ToString())
            };

            // Tạo secret key
            var secretKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration["JWT:Secret"]));

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

        [HttpPost]
        [Route("register")]
        public ServiceResult Register(Account acc)
        {
            ServiceResult result = new ServiceResult();
            try
            {
                result.Data = GenerateToken(acc);
            }
            catch (Exception ex)
            {
                result.SetError(errorMessage: ex.Message);
            }
            return result;
        }

        [Authorize]
        [HttpPost]
        [Route("getData")]
        public ServiceResult GetData()
        {
            return new ServiceResult();
        }
    }
}
