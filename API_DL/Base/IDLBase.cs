namespace API_DL
{
    public interface IDLBase<T>
    {
        public List<T> GetEntitys(string whereClause = "", string sortCondition = "", string paging = "");
    }
}
