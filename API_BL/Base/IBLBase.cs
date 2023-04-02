namespace API_BL
{
    public interface IBLBase<T>
    {
        public List<T> GetEntitys(Dictionary<string, object> whereClause, Dictionary<string, object> sortCondition,
    Dictionary<string, object> paging);
    }
}
