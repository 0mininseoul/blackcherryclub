const MUSIC_PLATFORMS = [
  {
    name: "🎵 Spotify",
    url: "https://open.spotify.com/album/3vBCDGbCdQhrwYId0JCNn1",
  },
  {
    name: "🍎 Apple Music",
    url: "https://music.apple.com/us/album/cherrish-single/1828620757",
  },
  {
    name: "▶️ YouTube Music",
    url: "https://music.youtube.com/playlist?list=OLAK5uy_ldBgbrcbzv6DoAPAyRUtE7zTYNkYo273o",
  },
  {
    name: "🍈 Melon",
    url: "https://www.melon.com/album/detail.htm?albumId=11969787",
  },
  {
    name: "🧞 Genie",
    url: "https://www.genie.co.kr/detail/albumInfo?axnm=86545355",
  },
  {
    name: "🐛 Bugs",
    url: "https://music.bugs.co.kr/album/20743106?wl_ref=list_ab_01_ar",
  },
];

const SOCIAL_LINKS = [
  {
    name: "Instagram",
    url: "https://www.instagram.com/blackcherry_club",
    icon: "📷",
  },
  {
    name: "YouTube",
    url: "https://www.youtube.com/@blackcherryclub",
    icon: "▶️",
  },
  {
    name: "Spotify",
    url: "https://open.spotify.com/artist/30JHqF9dcNMD6apw6vByVW",
    icon: "🎵",
  },
];

const LIVE_VIDEOS = {
  full: "xvS7KgipJqU",
};

const CONTACT_EMAIL = "blackcherryclub123@gmail.com";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-[600px]">
        {/* Profile Section */}
        <section className="text-center mb-8">
          <div className="inline-block liquid-glass-card p-6 rounded-3xl mb-6">
            <h1 className="text-4xl md:text-5xl font-bold text-white text-over-prism mb-3">
              블랙체리클럽
            </h1>
            <p className="text-lg md:text-xl text-white/90 text-over-prism mb-2">
              Black Cherry Club
            </p>
            <p className="text-sm md:text-base text-white/70 text-over-prism">
              얼터너티브 R&B 인디 밴드
            </p>
          </div>
        </section>

        {/* Latest Release */}
        <section className="mb-6">
          <div className="liquid-glass-card p-6 rounded-3xl">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-20 h-20 rounded-xl overflow-hidden flex-shrink-0">
                <img
                  src="/images/album-cherrish.png"
                  alt="Cherrish"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white text-over-prism mb-1">
                  Cherrish
                </h3>
                <p className="text-sm text-white/70 text-over-prism">
                  2025.07.31
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Music Platform Links */}
        <section className="mb-6 space-y-3">
          {MUSIC_PLATFORMS.map((platform) => (
            <a
              key={platform.name}
              href={platform.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full liquid-glass-button px-6 py-4 rounded-2xl text-center text-base md:text-lg font-semibold hover:scale-[1.02] transition-transform"
            >
              {platform.name}
            </a>
          ))}
        </section>

        {/* Live Video */}
        <section className="mb-6">
          <div className="liquid-glass-card p-4 rounded-3xl">
            <h3 className="text-lg font-bold text-white text-over-prism mb-3 px-2">
              🎬 Live Performance
            </h3>
            <div className="relative w-full rounded-2xl overflow-hidden" style={{ paddingBottom: '56.25%' }}>
              <iframe
                className="absolute inset-0 w-full h-full"
                src={`https://www.youtube.com/embed/${LIVE_VIDEOS.full}`}
                title="Black Cherry Club Live Performance"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </section>

        {/* Social Links */}
        <section className="mb-6">
          <div className="grid grid-cols-3 gap-3">
            {SOCIAL_LINKS.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="liquid-glass-button px-4 py-4 rounded-2xl text-center flex flex-col items-center gap-2 hover:scale-105 transition-transform"
              >
                <span className="text-2xl">{social.icon}</span>
                <span className="text-xs md:text-sm font-semibold">{social.name}</span>
              </a>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section className="text-center">
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="inline-block liquid-glass-card px-6 py-3 rounded-2xl text-sm text-white/80 hover:text-white text-over-prism transition-colors"
          >
            📧 {CONTACT_EMAIL}
          </a>
        </section>

        {/* Footer */}
        <footer className="text-center mt-8 text-white/50 text-xs text-over-prism">
          <p>© 2025 블랙체리클럽 (Black Cherry Club)</p>
        </footer>
      </div>
    </div>
  );
}
