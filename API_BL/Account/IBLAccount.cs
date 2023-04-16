using API_BO;

namespace API_BL
{
    public interface IBLAccount
    {
        public string Register(Account account);
        public string Login(Account account);
        public Account Infor(int id);
        public List<Account> Accounts(BaseRequest<Account> data);
        public bool ChangePassword(Dictionary<string, object> data);
    }
}
