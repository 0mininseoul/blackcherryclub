const MUSIC_PLATFORMS = [
  {
    name: "Spotify",
    url: "https://open.spotify.com/album/3vBCDGbCdQhrwYId0JCNn1",
  },
  {
    name: "Apple Music",
    url: "https://music.apple.com/us/album/cherrish-single/1828620757",
  },
  {
    name: "YouTube Music",
    url: "https://music.youtube.com/playlist?list=OLAK5uy_ldBgbrcbzv6DoAPAyRUtE7zTYNkYo273o",
  },
  {
    name: "Melon",
    url: "https://www.melon.com/album/detail.htm?albumId=11969787",
  },
  {
    name: "Genie",
    url: "https://www.genie.co.kr/detail/albumInfo?axnm=86545355",
  },
  {
    name: "Bugs",
    url: "https://music.bugs.co.kr/album/20743106?wl_ref=list_ab_01_ar",
  },
];

const LIVE_VIDEOS = {
  full: "xvS7KgipJqU",
  shorts: [
    "QMVqcBOZ150",
    "3uFcfCyd3ac",
    "1ESKio4-rwA",
  ],
};

export default function Home() {
  return (
    <div className="max-w-[1200px] mx-auto px-6 md:px-12 py-12 md:py-20">
      {/* Discography Section */}
      <section className="mb-20 md:mb-32">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-center text-over-prism">
          Discography
        </h2>

        <div className="liquid-glass-card p-6 md:p-10 rounded-2xl max-w-2xl mx-auto">
          {/* Album Cover */}
          <div className="w-full aspect-square rounded-2xl mb-6 overflow-hidden">
            <img
              src="/images/album-cherrish.png"
              alt="Cherrish Album Cover"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Album Info */}
          <h3 className="text-2xl md:text-3xl font-bold mb-2 text-center text-over-prism">
            [Cherrish]
          </h3>
          <p className="text-white/70 text-center mb-6 text-over-prism">
            2025.07.31
          </p>

          {/* Platform Links */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
            {MUSIC_PLATFORMS.map((platform) => (
              <a
                key={platform.name}
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                className="liquid-glass-button px-4 py-3 md:px-6 md:py-4 rounded-xl text-center text-sm md:text-base min-h-[48px] flex items-center justify-center"
              >
                {platform.name}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Live Videos Section */}
      <section className="mb-20">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-center text-over-prism">
          Live Videos
        </h2>

        {/* Full Video */}
        <div className="mb-12 md:mb-16">
          <div className="liquid-glass-card p-4 md:p-6 rounded-2xl max-w-3xl mx-auto">
            <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
              <iframe
                className="absolute inset-0 w-full h-full rounded-xl"
                src={`https://www.youtube.com/embed/${LIVE_VIDEOS.full}`}
                title="Black Cherry Club Live Performance"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>

        {/* YouTube Shorts */}
        <div className="grid grid-cols-3 gap-4 md:gap-6 max-w-4xl mx-auto">
          {LIVE_VIDEOS.shorts.map((videoId, index) => (
            <div key={videoId} className="liquid-glass-card p-3 md:p-4 rounded-2xl">
              <div className="relative w-full" style={{ paddingBottom: '177.78%' }}>
                <iframe
                  className="absolute inset-0 w-full h-full rounded-xl"
                  src={`https://www.youtube.com/embed/${videoId}`}
                  title={`Black Cherry Club Shorts ${index + 1}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
