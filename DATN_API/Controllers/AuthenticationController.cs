using API_BL;
using API_BO;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace DATN_API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthenticationController
    {
        private IBLAccount _bLAccount;
        private IConfiguration _configuration;
        public AuthenticationController(IConfiguration configuration, IBLAccount bLAccount)
        {
            _configuration = configuration;
            _bLAccount = bLAccount;
        }

        [HttpPost]
        [Route("register")]
        public ServiceResult Register(BaseRequest<Account> baseRequest)
        {
            ServiceResult result = new ServiceResult();
            try
            {
                Account acc = baseRequest.Data;
                result.Data = this._bLAccount.Register(acc);
            }
            catch (CustomException ex)
            {
                result.SetError(errorMessage: ex.Message, errorCode: ex.ErrorCode);
            }
            return result;
        }

        [HttpPost]
        [Route("login")]
        public ServiceResult Login(Account account)
        {
            ServiceResult result = new ServiceResult();
            try
            {
                result.Data = this._bLAccount.Login(account);
            }
            catch (CustomException ex)
            {
                result.SetError(errorMessage: ex.Message, errorCode: ex.ErrorCode);
            }
            return result;
        }

        [Authorize]
        [HttpGet]
        [Route("Infor/{id}")]
        public ServiceResult Infor(int id)
        {
            ServiceResult result = new ServiceResult();
            try
            {
                result.Data = this._bLAccount.Infor(id);
            }
            catch (CustomException ex)
            {
                result.SetError(errorMessage: ex.Message, errorCode: ex.ErrorCode);
            }
            return result;
        }

        [Authorize]
        [HttpPost]
        [Route("Accounts")]
        public ServiceResult Accounts(BaseRequest<Account> data)
        {
            ServiceResult result = new ServiceResult();
            try
            {
                result.Data = this._bLAccount.Accounts(data);
            }
            catch (CustomException ex)
            {
                result.SetError(errorMessage: ex.Message, errorCode: ex.ErrorCode);
            }
            return result;
        }

        [Authorize]
        [HttpPut]
        [Route("Accounts/change-password")]
        public ServiceResult ChangePassword(Dictionary<string, object> data)
        {
            ServiceResult result = new ServiceResult();
            try
            {
                result.Data = this._bLAccount.ChangePassword(data);
            }
            catch (CustomException ex)
            {
                result.SetError(errorMessage: ex.Message, errorCode: ex.ErrorCode);
            }
            return result;
        }
    }
}
