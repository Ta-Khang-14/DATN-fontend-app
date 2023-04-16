using System.ComponentModel.DataAnnotations.Schema;

namespace API_BO
{
    public static class HandleQuery
    {
        public static string GenerateQuery<T>(int entityState, string whereClause = "", string sortClause = "", string pageClause = "", string col = "*")
        {
            string query = string.Empty;
            try
            {
                // Get table name from attribute
                TableAttribute tba = (TableAttribute)Attribute.GetCustomAttribute(typeof(T), typeof(TableAttribute));
                string tableName = tba.Name;
                string listCol = string.Empty;
                string listParam = string.Empty;

                if (HandleQuery.GetColumnOfEntity<T>().Count > 0)
                {
                    listCol = HandleQuery.GetColumnOfEntity<T>()[0];
                    listParam = HandleQuery.GetColumnOfEntity<T>()[1];
                }

                switch (entityState)
                {
                    case (int)EntityState.View:
                        query += "Select {1} from {0}";
                        break;
                    case (int)EntityState.Add:
                        query += "Insert into {0}({5}) values({6})";
                        break;
                    case (int)EntityState.Edit:
                        break;
                    case (int)EntityState.Delete:
                        query += "Delete form {0}";
                        break;
                }

                if (!string.IsNullOrEmpty(whereClause))
                {
                    query += " where (1 = 1) {2} ";
                }

                if (!string.IsNullOrEmpty(sortClause))
                {
                    query += " {3} ";
                }

                if (!string.IsNullOrEmpty(pageClause))
                {
                    query += " {4} ";
                }

                query += ";";
                query = string.Format(query, tableName, col, whereClause, sortClause, pageClause, listCol, listParam);
            }
            catch (Exception)
            {

            }

            return query;
        }

        public static string HandleWhereClause(List<WhereCondition> whereConditions)
        {
            string whereClause = string.Empty;
            try
            {
                if (whereConditions != null && whereConditions.Count > 0)
                {
                    foreach (var item in whereConditions)
                    {
                        whereClause += item.GenerateCondition();
                    }
                }
            }
            catch (Exception)
            {

            }
            return whereClause;
        }

        public static List<string> GetColumnOfEntity<T>()
        {
            List<string> col = new List<string>();

            var props = typeof(T).GetProperties().Where(
                prop => Attribute.IsDefined(prop, typeof(ColumnAttribute))).Select(prop => prop.Name).ToList();

            if (props != null && props.Count > 0)
            {
                col.Add(string.Join(',', props));
                col.Add("@" + string.Join(",@", props));
            }
            return col;
        }
    }
}
