export default function Home() {
  return (
    <>
      {/* 네비게이션 */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4 h-14 flex items-center justify-between">
          <a href="#" className="text-lg font-bold serif" style={{ color: "var(--clay)" }}>소반</a>
          <div className="hidden sm:flex gap-6 text-sm font-medium text-gray-500">
            <a href="#story" className="hover:text-gray-900">이야기</a>
            <a href="#menu" className="hover:text-gray-900">메뉴</a>
            <a href="#info" className="hover:text-gray-900">오시는 길</a>
          </div>
          <a href="#info" className="text-sm font-medium" style={{ color: "var(--clay)" }}>예약 안내</a>
        </div>
      </nav>

      {/* 히어로 */}
      <section
        className="relative h-screen flex items-center justify-center text-white text-center"
        style={{
          background: "linear-gradient(rgba(0,0,0,0.35), rgba(0,0,0,0.5)), url('https://images.unsplash.com/photo-1590301157890-4810ed352733?w=1600&q=80') center/cover",
        }}
      >
        <div className="px-4">
          <h1 className="text-5xl sm:text-7xl font-bold serif mb-4">소반</h1>
          <p className="text-lg sm:text-xl font-light mb-2 opacity-90">정성을 담은 한 상</p>
          <p className="text-sm opacity-60 mb-8">합정역 3번 출구 도보 3분</p>
          <a href="#info" className="btn-dark inline-block">예약하기</a>
        </div>
      </section>

      {/* 이야기 */}
      <section id="story" className="py-20 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold serif mb-6" style={{ color: "var(--clay)" }}>
            매일 아침, 정성으로 차립니다
          </h2>
          <p className="text-gray-600 leading-relaxed">
            소반은 매일 아침 직접 만드는 반찬과 제철 재료로 정갈한 한 상을 차립니다.
            어머니가 해주시던 집밥의 정성을 그대로 담아, 한 끼를 먹더라도 제대로 된
            한 끼를 드시길 바라는 마음으로 운영합니다.
          </p>
        </div>
      </section>

      {/* 메뉴 */}
      <section id="menu" className="py-20 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold serif text-center mb-12" style={{ color: "var(--clay)" }}>메뉴</h2>

          {/* 정식 */}
          <div className="mb-10">
            <h3 className="text-center text-sm tracking-[0.2em] mb-6" style={{ color: "var(--red)" }}>정식</h3>
            <div className="space-y-4">
              {[
                ["소반 정식", "제철 반찬 8종 + 된장찌개 + 공기밥", "13,000"],
                ["불고기 정식", "양념 불고기 + 반찬 6종 + 공기밥", "15,000"],
                ["생선구이 정식", "오늘의 생선구이 + 반찬 6종 + 공기밥", "16,000"],
                ["갈비찜 정식", "소갈비찜 + 반찬 6종 + 공기밥", "22,000"],
              ].map(([name, desc, price]) => (
                <div key={name} className="flex justify-between items-start border-b border-gray-100 pb-3">
                  <div>
                    <span className="font-bold text-gray-800">{name}</span>
                    <p className="text-xs text-gray-400 mt-0.5">{desc}</p>
                  </div>
                  <span className="text-sm font-medium whitespace-nowrap ml-4" style={{ color: "var(--clay)" }}>{price}원</span>
                </div>
              ))}
            </div>
          </div>

          {/* 단품 */}
          <div className="mb-10">
            <h3 className="text-center text-sm tracking-[0.2em] mb-6" style={{ color: "var(--red)" }}>단품 / 음료</h3>
            <div className="space-y-4">
              {[
                ["김치전", "직접 담근 묵은지로 만든 바삭한 김치전", "12,000"],
                ["해물파전", "싱싱한 해물이 가득", "14,000"],
                ["막걸리 (국산 쌀)", "700ml", "8,000"],
                ["매실차", "", "4,000"],
              ].map(([name, desc, price]) => (
                <div key={name} className="flex justify-between items-start border-b border-gray-100 pb-3">
                  <div>
                    <span className="font-bold text-gray-800">{name}</span>
                    {desc && <p className="text-xs text-gray-400 mt-0.5">{desc}</p>}
                  </div>
                  <span className="text-sm font-medium whitespace-nowrap ml-4" style={{ color: "var(--clay)" }}>{price}원</span>
                </div>
              ))}
            </div>
          </div>

          <p className="text-center text-xs text-gray-400">
            메뉴와 가격은 계절·재료 수급에 따라 변경될 수 있습니다
          </p>
        </div>
      </section>

      {/* 오시는 길 */}
      <section id="info" className="py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold serif text-center mb-12" style={{ color: "var(--clay)" }}>오시는 길</h2>

          <div className="rounded-xl overflow-hidden h-64 bg-gray-200 mb-8">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3163.5!2d126.91!3d37.549!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z!5e0!3m2!1sko!2skr!4v1"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              title="소반 위치"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            <div>
              <h3 className="text-xs font-bold text-gray-400 mb-1">주소</h3>
              <p className="text-sm text-gray-700">서울 마포구 양화로 45<br />합정역 3번 출구 도보 3분</p>
            </div>
            <div>
              <h3 className="text-xs font-bold text-gray-400 mb-1">영업시간</h3>
              <p className="text-sm text-gray-700">
                점심 11:30 - 14:30<br />
                저녁 17:30 - 21:00<br />
                <span className="text-gray-400">일요일 휴무</span>
              </p>
            </div>
            <div>
              <h3 className="text-xs font-bold text-gray-400 mb-1">예약</h3>
              <p className="text-sm text-gray-700">카카오톡 문의</p>
              <p className="text-xs text-gray-400 mt-1">당일 예약 가능</p>
            </div>
          </div>
        </div>
      </section>

      {/* 푸터 */}
      <footer className="py-8 px-4 text-center text-sm" style={{ background: "var(--ink)" }}>
        <p className="text-white/50">&copy; 2026 소반. All rights reserved.</p>
        <p className="text-white/30 mt-1 text-xs">서울 마포구 양화로 45 | 사업자등록번호 345-67-89012</p>
      </footer>
    </>
  );
}
