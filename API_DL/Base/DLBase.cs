using API_BO;

namespace API_DL
{
    public class DLBase<T> : IDLBase<T>
    {
        protected IDapperDataAccess _dataAccess;

        public DLBase(IDapperDataAccess dapperDataAccess)
        {
            _dataAccess = dapperDataAccess;
        }

        public T GetEntity(string whereClause = "", string col = "*")
        {
            string query = HandleQuery.GenerateQuery<T>((int)EntityState.View, whereClause, "", "", col);
            string queryFormat = String.Format(query, typeof(T).Name);
            return _dataAccess.QueryFirstOrDefault<T>(queryFormat);
        }

        public List<T> GetEntitys(string whereClause = "", string sortCondition = "", string paging = "", string col = "*")
        {
            string query = HandleQuery.GenerateQuery<T>((int)EntityState.View, whereClause, sortCondition, paging, col);
            string queryFormat = String.Format(query, typeof(T).Name);
            return _dataAccess.Query<T>(queryFormat);
        }

        public bool UpdateEntity(Dictionary<string, object> data)
        {
            string query = HandleQuery.GenerateQuery<T>((int)EntityState.Edit);
            return _dataAccess.Excute(query, data);
        }
    }
}
