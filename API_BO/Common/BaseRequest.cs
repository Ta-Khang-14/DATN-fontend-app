namespace API_BO
{
    public class BaseRequest<T>
    {
        public T? Data { get; set; }

        public string? Column { get; set; } = "*";

        public List<WhereCondition>? WhereCondition { get; set; } = new List<WhereCondition>();

        public Dictionary<string, object>? SortCondition { get; set; } = new Dictionary<string, object>();

        public Dictionary<string, object>? PagingCondition { get; set; } = new Dictionary<string, object>();
    }

    public enum Contidion
    {
        None = 0,

        // Chứa
        Contain = 1,

        // lớn hơn
        GreaterThan = 2,

        // Nhỏ hơn
        LessThan = 3,

        // Bằng
        Equal = 4,

        // Không bằng
        Not = 5,

        // Thuộc tập
        In = 6,

        // Không thuộc tập
        NotIn = 7,

    }

    public enum TypeWhere
    {
        And = 1,
        Or = 2
    }

    public class WhereCondition
    {
        public string FieldName { get; set; }

        public Contidion Condition { get; set; }

        public object Value { get; set; }

        public TypeWhere TypeWhere { get; set; } = TypeWhere.And;


        public string ConvertCondition()
        {
            string condition = string.Empty;
            switch (Condition)
            {
                case Contidion.Contain:
                    condition = "like";
                    break;
                case Contidion.GreaterThan:
                    condition = ">";
                    break;
                case Contidion.LessThan:
                    condition = "<";
                    break;
                case Contidion.Equal:
                    condition = "=";
                    break;
                case Contidion.Not:
                    condition = "<>";
                    break;
                case Contidion.In:
                    condition = "in";
                    break;
                case Contidion.NotIn:
                    condition = "not in";
                    break;
            }
            return condition;
        }

        public string ConvertTypeWhere()
        {
            string typeWhere = string.Empty;
            switch (TypeWhere)
            {
                case TypeWhere.And:
                    typeWhere = "and";
                    break;
                case TypeWhere.Or:
                    typeWhere = "or";
                    break;
            }
            return typeWhere;
        }

        public string GenerateCondition()
        {
            string conditionClause = string.Empty;

            string condition = ConvertCondition();

            string typeWhere = ConvertTypeWhere();

            if (!string.IsNullOrEmpty(condition) && Value != null && !string.IsNullOrEmpty(Value.ToString()))
            {
                string value = string.Empty;
                if (Value.GetType().Name.Equals("String"))
                {
                    value = $"'{Value.ToString()}'";
                }
                else
                {
                    value = Value.ToString();
                }
                conditionClause = string.Format("{0} {1} {2} {3} ", typeWhere, FieldName, condition, value);
            }

            return conditionClause;
        }
    }


}
