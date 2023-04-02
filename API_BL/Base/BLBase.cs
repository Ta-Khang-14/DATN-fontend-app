using API_DL;

namespace API_BL
{
    public class BLBase<T> : IBLBase<T>
    {
        protected IDLBase<T> _baseDL;

        public BLBase(IDLBase<T> baseDL)
        {
            _baseDL = baseDL;
        }

        public List<T> GetEntitys(Dictionary<string, object> whereClause, Dictionary<string, object> sortCondition,
            Dictionary<string, object> paging)
        {
            return this._baseDL.GetEntitys();
        }
    }
}
