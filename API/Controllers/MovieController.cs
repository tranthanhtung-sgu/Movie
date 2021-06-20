using System;
using System.Threading.Tasks;
using Application.Movies;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    public class MovieController : BaseApiController
    {

        [HttpGet]
        public async Task<IActionResult> GetMovies([FromQuery] MovieParams param)
        {
            return HandlePagedResult(await Mediator.Send(new List.Query { Params = param }));
        }
        [HttpGet("{id}")]
        public async Task<IActionResult> GetMovie(Guid id)
        {
            return HandleResult(await Mediator.Send(new Details.Query { Id = id }));
        }

        [HttpGet("all")]
        public async Task<IActionResult> GetAll()
        {
            return HandleResult(await Mediator.Send(new All.Query { }));
        }

    }
}