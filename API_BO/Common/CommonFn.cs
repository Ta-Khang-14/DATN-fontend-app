using System.Security.Cryptography;
using System.Text;

namespace API_BO
{
    public static class CommonFn
    {
        public static string HashString(string input)
        {
            byte[] buffer = Encoding.UTF8.GetBytes(input);
            byte[] digest = SHA256.HashData(buffer);
            return Convert.ToBase64String(digest);
        }
    }
}
