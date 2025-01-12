using System.ComponentModel.DataAnnotations;

namespace ChatAppServer.DTO
{
    public class UserDtos
    {
        [Required]
        [StringLength(15, MinimumLength = 3, ErrorMessage = "Name Must be at least {2} and Maximum {1} characters")]
        public string Name { get; set; }
    }
}
