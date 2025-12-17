const INSTAGRAM_URL =
  "https://www.instagram.com/sanabynuma/?igsh=eDh1eTE0M3cxMnh2";

export default function Landing() {
  return (
    <div className="min-h-screen w-full bg-[#FCF9F5] flex items-center justify-center p-4 sm:p-6 relative overflow-hidden">
      <svg
        className="absolute top-0 right-0 pointer-events-none w-[140px] sm:w-[200px] md:w-[240px] lg:w-[278px] h-auto"
        viewBox="0 0 278 157"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          opacity="0.5"
          d="M167.293 -21.6763C-65.8061 121.874 122.445 152.729 795.293 155.324"
          stroke="#E3CFB9"
          strokeWidth="3"
        />
        <path
          opacity="0.5"
          d="M35.9205 -29.4731C-81.0169 218.05 93.5525 141.135 658.714 -224"
          stroke="#E3CFB9"
          strokeWidth="3"
        />
      </svg>

      <img
        src="/stain.svg"
        alt="stain"
        className="absolute pointer-events-none hidden sm:block sm:w-[300px] md:w-[400px] bottom-0 right-0 opacity-60"
        style={{ filter: "brightness(1.3)" }}
      />
      <img
        src="/pancakes.svg"
        alt="pancakes"
        className="absolute pointer-events-none left-2 sm:left-4 md:left-8 lg:left-12 top-[68%] sm:top-1/2 -translate-y-1/2"
        style={{
          width: "clamp(100px, 12vw, 143.85px)",
          height: "clamp(85px, 10vw, 122.89px)",
          opacity: 1,
          filter: "brightness(0.6)",
        }}
      />
      <img
        src="/cup.svg"
        alt="cup"
        className="absolute pointer-events-none right-4 sm:right-8 md:right-12 lg:right-16 bottom-[5%] sm:bottom-auto sm:top-[30%] md:top-[32%]"
        style={{
          width: "clamp(120px, 15vw, 180.22px)",
          height: "clamp(70px, 9vw, 106.32px)",
          opacity: 1,
          filter: "brightness(0.6)",
        }}
      />

      <div className="relative w-full max-w-[1440px] flex flex-col items-center z-20 py-10 space-y-16">
        <img
          src="/card.png"
          alt="Sana by Numa"
          className="cursor-pointer w-[200px] h-auto sm:w-[280px] md:w-[340px] lg:w-[372px]"
          style={{ marginBottom: "48px" }}
        />

        <h1
          className="text-center"
          style={{
            width: "100%",
            maxWidth: "584px",
            fontFamily: "'Roca One', 'Nunito', 'Belleza', sans-serif",
            fontSize: "clamp(48px, 8vw, 80px)",
            fontWeight: 400,
            fontStyle: "normal",
            color: "#7F6654",
            lineHeight: "100%",
            letterSpacing: "0%",
            marginBottom: "48px",
          }}
        >
          Grand Opening
        </h1>

        <p
          className="text-center"
          style={{
            fontFamily: "'Belleza', serif",
            fontSize: "clamp(24px, 4vw, 36px)",
            fontWeight: 400,
            color: "#D0B292",
            lineHeight: "100%",
            marginBottom: "48px",
          }}
        >
          December 20<sup className="text-[0.6em]">th</sup>, 2025
        </p>

        <p
          className="text-center"
          style={{
            fontFamily: "'Roca One', 'Nunito', 'Belleza', sans-serif",
            fontSize: "clamp(16px, 3vw, 20px)",
            fontWeight: 400,
            color: "#7A6A5A",
            lineHeight: "100%",
          }}
        >
          Come speak to our model to
        </p>

        <img
          src="/getfreeticket.svg"
          alt="Get Free Ticket"
          className="w-[150px] h-auto sm:w-[168px] md:w-[185px] lg:w-[198px]"
          style={{ marginBottom: "64px" }}
        />

        <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">
          <button
            className="
              w-[280px] h-[52px] sm:w-[320px] sm:h-[58px] md:w-[336px] md:h-[64px]
              flex items-center justify-center gap-3
              rounded-xl px-6 sm:px-10
              text-[16px] sm:text-[18px] md:text-[20px]
              leading-none tracking-[0.005em]
              hover:bg-[#f6ede4]
              transition-colors duration-200
              cursor-pointer
            "
            style={{
              fontFamily: "'Inter', system-ui, sans-serif",
              fontWeight: 600,
              backgroundColor: "#F5EFE7",
              border: "1px solid #DABFA1",
              color: "#99774F",
            }}
          >
            Follow us on Instagram
            <img
              src="/instagram.svg"
              alt="Instagram"
              className="w-5 h-5 sm:w-6 sm:h-6"
            />
          </button>
        </a>
      </div>
    </div>
  );
}
