using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json;
using System.Threading.Tasks;
using Domain;
using Microsoft.EntityFrameworkCore;

namespace Persistence
{
    public class Seed
    {
        public static async Task SeedData(DataContext context)
        {
            if (!context.Movies.Any())
            {
                var movie = await System.IO.File.ReadAllTextAsync("../Persistence/phimle.json");
                var movies = JsonSerializer.Deserialize<List<Movie>>(movie);
                foreach (var item in movies)
                {
                    if (item.ChapUrl.Any(x => x.Url == null))
                    {
                        continue;
                    }
                    else
                    {
                        item.Id = Guid.NewGuid();
                        item.Category = "phim le";
                        context.Movies.Add(item);
                    }
                }

                var movierap = await System.IO.File.ReadAllTextAsync("../Persistence/phimrap.json");
                var moviesrap = JsonSerializer.Deserialize<List<Movie>>(movierap);
                foreach (var item in moviesrap)
                {
                    if (item.ChapUrl.Any(x => x.Url == null))
                    {
                        continue;
                    }
                    else
                    {
                        item.Id = Guid.NewGuid();
                        item.Category = "phim rap";
                        context.Movies.Add(item);
                    }
                }

                var phimbo = await System.IO.File.ReadAllTextAsync("../Persistence/phimbofinal.json");
                var phimbos = JsonSerializer.Deserialize<List<Movie>>(phimbo);
                foreach (var item in phimbos)
                {
                    if (item.ChapUrl.Any(x => x.Url == null))
                    {
                        continue;
                    }
                    else
                    {
                        item.Id = Guid.NewGuid();
                        item.Category = "phim bo";
                        context.Movies.Add(item);
                    }
                }
                await context.SaveChangesAsync();
            }
            await context.SaveChangesAsync();
        }
    }
}