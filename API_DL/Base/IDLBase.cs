namespace API_DL
{
    public interface IDLBase<T>
    {
        public T GetEntity(string whereClause = "", string col = "*");
        public List<T> GetEntitys(string whereClause = "", string sortCondition = "", string paging = "", string col = "*");
        public bool UpdateEntity(Dictionary<string, object> data);
    }
}
