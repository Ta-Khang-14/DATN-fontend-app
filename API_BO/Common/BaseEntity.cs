using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace API_BO
{
    public class BaseEntity
    {
        [Key]
        public int ID { get; set; }

        [Column]
        public DateTime CreatedDate { get; set; }

        [Column]
        public string? CreatedBy { get; set; }

        [Column]
        public DateTime ModifiedDate { get; set; }

        [Column]
        public string? ModifiedBy { get; set; }
    }
}
