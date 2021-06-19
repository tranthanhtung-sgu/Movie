using Application.Core;

namespace Application.Movies
{
    public class MovieParams : PagingParams
    { 
        public string Category { get; set; }
        public string Title { get; set; }
    }
}