using API_BO;

namespace API_DL
{
    public class DLAccount : DLBase<Account>, IDLAccount
    {
        public DLAccount(IDapperDataAccess dapperDataAccess) : base(dapperDataAccess)
        {
        }

        public bool Register(Account account)
        {
            string sql = HandleQuery.GenerateQuery<Account>((int)EntityState.Add);
            return this._dataAccess.Excute(sql, account); ;
        }

    }
}
