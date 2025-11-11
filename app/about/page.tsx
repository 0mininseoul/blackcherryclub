const BAND_INFO = {
  formed: "2022년 9월",
  description: `블랙체리클럽은 얼터너티브 R&B 기반의 신선한 감성과 음악적 완성도를 동시에 제시하고 있는 대한민국 인디씬의 신예 밴드다. 장르에 구애받지 않는 자유로운 시도와 정교한 프로덕션을 보여주며 자신들만의 분명한 색깔을 드러내고 있다. 개성 있는 음악성과 확실한 비주얼로 점차 팬층을 넓혀가고 있으며, 각종 버스킹과 공연 무대에서도 활발히 활동 중이다.`,
};

const MEMBERS = [
  { name: "허주하", role: "Vocal", image: "member-jooha.jpg" },
  { name: "박영민", role: "Guitar", image: "member-youngmin.jpg" },
  { name: "김희성", role: "Keyboard", image: "member-heesung.jpg" },
  { name: "장영환", role: "Drums", image: "member-younghwan.jpg" },
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

const CONTACT_EMAIL = "blackcherryclub123@gmail.com";

export default function AboutPage() {
  return (
    <div className="max-w-[1200px] mx-auto px-6 md:px-12 py-12 md:py-20">
      {/* Band Photo */}
      <section className="mb-12 md:mb-20">
        <div className="liquid-glass-card p-6 md:p-8 rounded-2xl max-w-4xl mx-auto">
          <div className="w-full rounded-2xl overflow-hidden">
            <img
              src="/images/band-main.jpg"
              alt="블랙체리클럽 밴드 사진"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Band Description */}
      <section className="mb-16 md:mb-24">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-over-prism">
            블랙체리클럽
          </h2>
          <p className="text-lg md:text-xl text-center mb-6 text-white/80 text-over-prism">
            {BAND_INFO.formed} 결성
          </p>
          <div className="liquid-glass-card p-6 md:p-8 rounded-2xl">
            <p className="text-base md:text-lg leading-relaxed text-white/90 text-over-prism">
              {BAND_INFO.description}
            </p>
          </div>
        </div>
      </section>

      {/* Members Section */}
      <section className="mb-16 md:mb-24">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-center text-over-prism">
          Members
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
          {MEMBERS.map((member) => (
            <div key={member.name} className="liquid-glass-card p-6 md:p-8 rounded-2xl">
              {/* Member Photo */}
              <div className="w-full aspect-square rounded-2xl mb-4 overflow-hidden">
                {member.name === "박영민" ? (
                  <img
                    src="/images/member-youngmin.jpg"
                    alt={`${member.name} - ${member.role}`}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-red-900/20 to-red-600/20 flex items-center justify-center">
                    <div className="text-center">
                      <p className="text-white/60 text-sm mb-1">{member.name}</p>
                      <p className="text-white/40 text-xs">Photo Placeholder</p>
                      <p className="text-white/40 text-xs mt-1">/public/images/{member.image}</p>
                    </div>
                  </div>
                )}
              </div>

              {/* Member Info */}
              <h3 className="text-xl md:text-2xl font-bold text-center mb-2 text-over-prism">
                {member.name}
              </h3>
              <p className="text-white/70 text-center text-over-prism">
                {member.role}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact & SNS Section */}
      <section className="mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-center text-over-prism">
          Contact
        </h2>

        <div className="max-w-2xl mx-auto">
          {/* Email */}
          <div className="liquid-glass-card p-6 md:p-8 rounded-2xl mb-6 text-center">
            <p className="text-white/70 mb-2 text-over-prism">Email</p>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="text-lg md:text-xl font-semibold text-white hover:text-red-300 transition-colors text-over-prism"
            >
              {CONTACT_EMAIL}
            </a>
          </div>

          {/* Social Links */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {SOCIAL_LINKS.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="liquid-glass-button px-6 py-4 rounded-xl text-center min-h-[64px] flex flex-col items-center justify-center gap-2"
              >
                <span className="text-2xl">{social.icon}</span>
                <span className="text-sm md:text-base font-semibold">{social.name}</span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
