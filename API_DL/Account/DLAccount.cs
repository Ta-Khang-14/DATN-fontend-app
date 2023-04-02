using API_BO;

namespace API_DL
{
    public class DLAccount : DLBase<Account>, IDLAccount
    {
        public DLAccount(IDapperDataAccess dapperDataAccess) : base(dapperDataAccess)
        {

        }

    }
}
