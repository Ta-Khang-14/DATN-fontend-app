using API_BO;

namespace API_BL
{
    public interface IBLBase<T>
    {
        public List<T> GetEntitys(List<WhereCondition> whereClause, Dictionary<string, object> sortCondition,
            Dictionary<string, object> paging, string col = "*");

        public T GetEntity(List<WhereCondition> whereClause, string col = "*");

        public bool UpdateEntity(Dictionary<string, object> data);
    }
}
