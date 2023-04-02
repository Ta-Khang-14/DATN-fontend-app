namespace API_DL
{
    public class DLBase<T> : IDLBase<T>
    {
        protected IDapperDataAccess _dataAccess;

        public DLBase(IDapperDataAccess dapperDataAccess)
        {
            _dataAccess = dapperDataAccess;
        }

        public List<T> GetEntitys(string whereClause = "", string sortCondition = "", string paging = "")
        {
            string query = "Select * from {0}";
            string queryFormat = String.Format(query, typeof(T).Name);
            return _dataAccess.Query<T>(queryFormat);
        }
    }
}
