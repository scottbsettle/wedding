using Microsoft.AspNetCore.Mvc;
using WebApi.Helpers;

namespace ScottKevinsWedding.Server.Controllers
{
    [ApiController]
    [Route("[controller]/[action]")]

    public class WeddingController : ControllerBase
    {

        private readonly ILogger<WeddingController> _logger;
        private readonly DataContext _dataContext;
        public WeddingController(ILogger<WeddingController> logger, DataContext _context)
        {
            _logger = logger;
            _dataContext = _context;
        }

        [HttpGet(Name = "getSongPicks")]
        public IEnumerable<SongPick> GetSongPicks()
        {

            return _dataContext.songPicks.ToList();
        }

        [HttpGet(Name = "getRsvp")]
        public IEnumerable<Rsvp> GetRsvps()
        {
            return _dataContext.rsvps.ToList();
        }

        [HttpPut(Name = "putSongPick")]
        public IEnumerable<SongPick> PutSongPick(SongPick songPick)
        {
            return null;
        }

        [HttpPut(Name = "putRsvp")]
        public IEnumerable<Rsvp> PutRsvpPick(Rsvp rsvp)
        {
            return null;
        }
    }
}
