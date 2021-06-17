using System;

namespace Domain
{
    public class Movie
    {
        public Guid Id { get; set; }
        public string Url { get; set; }
        public string Title { get; set; }
        public string Image { get; set; }
        public string Category { get; set; }
        public string Description { get; set; }
        public string Director { get; set; }
        public string Time { get; set; }
        public string PublishYear { get; set; }
    }
}