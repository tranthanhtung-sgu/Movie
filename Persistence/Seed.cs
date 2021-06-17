using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json;
using System.Threading.Tasks;
using Domain;

namespace Persistence
{
    public class Seed
    {
        public static async Task SeedData(DataContext context)
        {
            if (!context.Movies.Any())
            {
                var movie = await System.IO.File.ReadAllTextAsync("../Persistence/movie.json");
                var movies = JsonSerializer.Deserialize<List<Movie>>(movie);
                foreach (var item in movies)
                {
                    item.Id = Guid.NewGuid();
                    item.Category = "phim le";
                    context.Movies.Add(item);
                }

                var movierap = await System.IO.File.ReadAllTextAsync("../Persistence/movierap.json");
                var moviesrap = JsonSerializer.Deserialize<List<Movie>>(movierap);
                foreach (var item in moviesrap)
                {
                    item.Id = Guid.NewGuid();
                    item.Category = "phim rap";
                    context.Movies.Add(item);
                }

                await context.SaveChangesAsync();
            }
            await context.SaveChangesAsync();
        }
    }
}