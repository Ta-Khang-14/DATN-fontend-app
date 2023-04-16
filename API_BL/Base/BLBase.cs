using API_BO;
using API_DL;
using Microsoft.Extensions.Configuration;

namespace API_BL
{
    public class BLBase<T> : IBLBase<T>
    {
        protected IConfiguration _configuration;
        protected IDLBase<T> _baseDL;

        public BLBase(IDLBase<T> baseDL, IConfiguration configuration)
        {
            _baseDL = baseDL;
            _configuration = configuration;
        }

        public T GetEntity(List<WhereCondition> whereClause, string col = "*")
        {
            string whereClauseStr = string.Empty;

            if (whereClause != null && whereClause.Count > 0)
            {
                whereClauseStr = HandleQuery.HandleWhereClause(whereClause);
            }
            return this._baseDL.GetEntity(whereClauseStr, col);
        }

        public List<T> GetEntitys(List<WhereCondition> whereClause, Dictionary<string, object> sortCondition,
            Dictionary<string, object> paging, string col = "*")
        {
            string whereClauseStr = string.Empty;
            string sortConditionStr = string.Empty;
            string pagingStr = string.Empty;

            if (whereClause != null && whereClause.Count > 0)
            {
                whereClauseStr = HandleQuery.HandleWhereClause(whereClause);
            }
            return this._baseDL.GetEntitys(whereClauseStr, sortConditionStr, pagingStr, col);
        }

        public bool UpdateEntity(Dictionary<string, object> data)
        {
            return this._baseDL.UpdateEntity(data);
        }
    }
}
