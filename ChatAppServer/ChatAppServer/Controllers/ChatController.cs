using ChatAppServer.DTO;
using ChatAppServer.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace ChatAppServer.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ChatController : ControllerBase
    {
        private readonly ChatService _chatService;
        public ChatController(ChatService chatService)
        {
            _chatService = chatService;
        }
        [HttpPost("register-user")]
        public IActionResult RegisterUser(UserDtos model)
        {
            if (_chatService.AddUserToList(model.Name))
            {
                return NoContent();
            }
            return BadRequest("The name is taken, please choose another.");
        }
    }
}
