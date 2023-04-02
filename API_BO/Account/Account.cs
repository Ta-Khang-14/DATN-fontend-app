namespace API_BO
{
    public class Account : BaseEntity
    {
        public string? AccountCode { get; set; }

        public string? AccountName { get; set; }

        public string? AccountPassword { get; set; }

        public string? AccountEmail { get; set; }

        public string? AccountPhone { get; set; }

        public int? AccountPoint { get; set; }

        public Role AccountRole { get; set; }
    }
}
