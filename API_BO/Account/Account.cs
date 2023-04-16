using System.ComponentModel.DataAnnotations.Schema;

namespace API_BO
{
    [Table("account")]
    public class Account : BaseEntity
    {
        [Column]
        public string? AccountName { get; set; }

        [Column]
        public string? AccountPassword { get; set; }

        [Column]
        public string? AccountEmail { get; set; }

        [Column]
        public string? AccountPhone { get; set; }

        [Column]
        public int? AccountPoint { get; set; }

        [Column]
        public Role AccountRole { get; set; }
    }
}
