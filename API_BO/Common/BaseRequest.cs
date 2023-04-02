namespace API_BO
{
    public class BaseRequest<T>
    {
        public T Data { get; set; }

        public Dictionary<string, object> WhereCondition { get; set; }

        public Dictionary<string, object> SortCondition { get; set; }

        public Dictionary<string, object> PagingCondition { get; set; }
    }
}
