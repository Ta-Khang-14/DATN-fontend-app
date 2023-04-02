using Dapper;
using MySqlConnector;
using System.Data;

namespace API_DL
{
    public class DapperDataAccess : IDapperDataAccess
    {
        public static string _connectionString = string.Empty;

        public DapperDataAccess()
        {

        }

        public DapperDataAccess(string connectionString)
        {
            _connectionString = connectionString;
        }

        // Lấy danh sách đối tượng
        public List<T> Query<T>(string sql, object? param = null, CommandType commandType = CommandType.Text)
        {
            List<T> list = new List<T>();
            using (var mysqlConnection = new MySqlConnection(_connectionString))
            {
                list = mysqlConnection.Query<T>(sql, param, commandType: commandType).ToList();
            }
            return list;
        }
    }
}
