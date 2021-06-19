using System;
using System.Threading;
using System.Threading.Tasks;
using Application.Core;
using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.Movies
{
    public class Details
    {
        public class Query : IRequest<Result<Movie>>
        {
            public Guid Id { get; set; }
        }

        public class Handler : IRequestHandler<Query, Result<Movie>>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<Result<Movie>> Handle(Query request, CancellationToken cancellationToken)
            {
                var movie = await _context.Movies
                    .Include(x=>x.ChapUrl)
                    .FirstOrDefaultAsync(x => x.Id == request.Id);

                return Result<Movie>.Success(movie);
            }
        }
    }
}