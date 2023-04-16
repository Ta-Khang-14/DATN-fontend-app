using API_BO;
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
            try
            {
                using (var mysqlConnection = new MySqlConnection(_connectionString))
                {
                    list = mysqlConnection.Query<T>(sql, param, commandType: commandType).ToList();
                }
            }
            catch (MySqlException)
            {
                throw new CustomException();
            }
            return list;
        }

        public T QueryFirstOrDefault<T>(string sql, object? param = null, CommandType commandType = CommandType.Text)
        {
            T data;
            try
            {
                using (var mysqlConnection = new MySqlConnection(_connectionString))
                {
                    data = mysqlConnection.QueryFirstOrDefault<T>(sql, param, commandType: commandType);
                    return data;
                }
            }
            catch (MySqlException)
            {
                throw new CustomException();
            }
        }

        public bool Excute(string sql, object entity)
        {
            bool result = false;
            try
            {
                using (var mysqlConnection = new MySqlConnection(_connectionString))
                {
                    // chưa mở kết nối thì open
                    if (mysqlConnection.State != ConnectionState.Open)
                    {
                        mysqlConnection.Open();
                    }

                    var transaction = mysqlConnection.BeginTransaction();
                    result = mysqlConnection.Execute(sql, entity, transaction) > 0;
                    if (result)
                    {
                        transaction.Commit();
                        return result;
                    }
                    transaction.Rollback();
                    return result;
                }
            }
            catch (MySqlException)
            {
                throw new CustomException();
            }


        }
    }
}
