using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Application.Core;
using Application.Movies;
using AutoMapper;
using AutoMapper.QueryableExtensions;
using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.Movies
{
    public class List
    {
        public class Query : IRequest<Result<PagedList<Movie>>>
        {
            public MovieParams Params { get; set; }
        }

        public class Handler : IRequestHandler<Query, Result<PagedList<Movie>>>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<Result<PagedList<Movie>>> Handle(Query request, CancellationToken cancellationToken)
            {
                var query = _context.Movies
                    .Include(x => x.ChapUrl)
                    .AsQueryable();

                if (request.Params.Category != "all")
                {
                    query = query.Where(x => x.Category == request.Params.Category);
                }

                return Result<PagedList<Movie>>.Success(
                    await PagedList<Movie>.CreateAsync(query, request.Params.PageNumber,
                        request.Params.PageSize)
                );
            }
        }
    }
}