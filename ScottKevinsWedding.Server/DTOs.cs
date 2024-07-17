namespace ScottKevinsWedding.Server
{
    public class SongPick
    {
        public int Id { get; set; }
        public string title { get; set; }
        public string artists { get; set; }
        public string guestName { get; set; }
        public int votes { get; set; }

    }

    public class Images
    {
        public int Id { get; set; }
        public string itemImageSrc { get; set; }
        public string thumbnailImageSrc { get; set; }
    }

    public class Rsvp
    {
        public int Id { get; set; }
        public string firstName { get; set; }
        public string lastName { get; set; }
        public bool plusOne { get; set; }
        public string comment { get; set; }
    }
    
}
