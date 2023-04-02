using API_BL;
using API_BO;
using Microsoft.AspNetCore.Mvc;

namespace DATN_API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BaseController<T> : ControllerBase
    {
        protected readonly IConfiguration _configuration;
        protected readonly IBLBase<T> _bLBase;

        public BaseController(IConfiguration configuration, IBLBase<T> bLBase)
        {
            _configuration = configuration;
            _bLBase = bLBase;
        }

        [HttpPost]
        [Route("")]
        public ServiceResult GetMulti(BaseRequest<T> data)
        {
            ServiceResult rs = new ServiceResult();
            try
            {
                rs.Data = this._bLBase.GetEntitys(data.WhereCondition, data.SortCondition, data.PagingCondition);
            }
            catch (Exception ex)
            {
                rs.SetError(errorMessage: ex.Message);
            }
            return rs;
        }
    }
}
