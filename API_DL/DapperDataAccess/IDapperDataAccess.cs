using System.Data;

namespace API_DL
{
    public interface IDapperDataAccess
    {
        // Lấy danh sách đối tượng
        public List<T> Query<T>(string sql, object? param = null, CommandType commandType = CommandType.Text);

        public T QueryFirstOrDefault<T>(string sql, object? param = null, CommandType commandType = CommandType.Text);

        public bool Excute(string sql, object entity);
    }
}
