export default function App() {
  const fadeStyle = `
  html {
    scroll-behavior: smooth;
  }

  @keyframes fade {
    from {
      opacity: 0;
      transform: translateY(20px);
    }

    to {
      opacity: 1;
      transform: translateY(0px);
    }
  }

 @keyframes glow {
  0% {
    transform: scale(1);
    opacity: 0.4;
  }

  50% {
    transform: scale(1.2);
    opacity: 0.7;
  }

  100% {
    transform: scale(1);
    opacity: 0.4;
  }
}

@keyframes reveal {
  from {
    opacity: 0;
    transform: translateY(40px);
  }

  to {
    opacity: 1;
    transform: translateY(0px);
  }
}
  `;

  return (
    <>
      <style>{fadeStyle}</style>

      <div
        style={{
          background: "#050505",
          backgroundImage:
            "radial-gradient(circle at top, rgba(255,26,61,0.12), transparent 45%)",
          color: "white",
          minHeight: "100vh",
          fontFamily: "'Poppins', sans-serif",
          padding: "40px",
          animation: "fade 1s ease",
          overflow: "hidden",
        }}
      >
        {/* BACKGROUND GLOW */}
        <div
          style={{
            position: "fixed",
            width: "500px",
            height: "500px",
            background: "rgba(255,26,61,0.08)",
            filter: "blur(140px)",
            top: "-150px",
            right: "-150px",
            zIndex: "0",
            animation: "glow 6s infinite ease-in-out",
            pointerEvents: "none",
          }}
        ></div>
<div
  style={{
    position: "fixed",
    inset: "0",
    backgroundImage:
      "url('https://www.transparenttextures.com/patterns/asfalt-dark.png')",
    opacity: "0.08",
    pointerEvents: "none",
    zIndex: "1",
  }}
></div>
        {/* NAVBAR */}

        <div
          style={{
            position: "sticky",
            top: "20px",
            zIndex: "999",
            backdropFilter: "blur(10px)",
            background: "rgba(255,255,255,0.08)",
            padding: "18px 30px",
            border: "1px solid rgba(255,26,61,0.2)",
            borderRadius: "20px",
            boxShadow: "0 0 30px rgba(255,26,61,0.12)",
            marginBottom: "70px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <img
            src="/images/logo.png"
            style={{
              height: "120px",
              marginTop: "-35px",
              marginBottom: "-35px",
              filter:
                "drop-shadow(0 0 12px rgba(252,250,250,0.6))",
              objectFit: "contain",
              cursor: "pointer",
            }}
          />

          <div
            style={{
              display: "flex",
              gap: "35px",
            }}
          >
            {["Reels", "Branding", "Contact"].map(
              (item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color =
                      "#ffffff";

                    e.currentTarget.style.textShadow =
                      "0 0 15px #ff1a3d";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color =
                      "#e8e8e8";

                    e.currentTarget.style.textShadow =
                      "none";
                  }}
                  style={{
                    color: "#e8e8e8",
                    textDecoration: "none",
                    transition: "0.3s",
                    fontWeight: "bold",
                  }}
                >
                  {item}
                </a>
              )
            )}
          </div>
        </div>

        {/* HERO */}

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "80px",
            flexWrap: "wrap",
            marginBottom: "140px",
            position: "relative",
            zIndex: "2",
          }}
        >
          <div
            style={{
              flex: "1",
              minWidth: "320px",
            }}
          >
            <div
              style={{
                color: "#ff1a3d",
                fontSize: "18px",
                letterSpacing: "6px",
                marginBottom: "20px",
                textTransform: "uppercase",
                fontWeight: "bold",
              }}
            >
Cinematic Creative Studio            </div>

            <h1
              style={{
  fontSize: "80px",
  fontWeight: "900",
  lineHeight: "1.1",
  margin: "0",
  textTransform: "uppercase",
  textShadow:
    "0 0 20px rgba(255,26,61,0.35)",

  background:
    "linear-gradient(to right,#ffffff,#ff1a3d)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
}}
            >
              Grafiqo
              <div
  style={{
    marginTop: "18px",
    color: "#ff1a3d",
    fontSize: "22px",
    fontWeight: "600",
    letterSpacing: "2px",
  }}
>
  نحول الأفكار إلى تجارب بصرية سينمائية
</div>
            </h1>

            <div
  style={{
    marginTop: "35px",
    maxWidth: "760px",
    display: "flex",
    flexDirection: "column",
    gap: "22px",
  }}
>
  {/* ENGLISH TEXT */}
  <div
    style={{
      background: "rgba(255,255,255,0.03)",
      border: "1px solid rgba(255,26,61,0.18)",
      borderRadius: "24px",
      padding: "28px",
      backdropFilter: "blur(10px)",
      boxShadow:
        "0 0 30px rgba(255,26,61,0.08)",
    }}
  >
    <div
      style={{
        color: "#ff1a3d",
        fontSize: "13px",
        letterSpacing: "4px",
        textTransform: "uppercase",
        marginBottom: "16px",
        fontWeight: "bold",
      }}
    >
      Creative Direction
    </div>

    <p
      style={{
        color: "#f5f5f5",
        fontSize: "24px",
        lineHeight: "1.9",
        margin: "0",
        fontWeight: "500",
      }}
    >
      Creative Palestinian studio specialized in
      cinematic motion graphics, luxury branding,
      and high-end visual storytelling.
    </p>
  </div>

  {/* ARABIC TEXT */}
  <div
    style={{
      background: "rgba(255,255,255,0.03)",
      border: "1px solid rgba(255,26,61,0.18)",
      borderRadius: "24px",
      padding: "28px",
      backdropFilter: "blur(10px)",
      boxShadow:
        "0 0 30px rgba(255,26,61,0.08)",
      direction: "rtl",
    }}
  >
    <div
      style={{
        color: "#ff1a3d",
        fontSize: "13px",
        letterSpacing: "2px",
        marginBottom: "16px",
        fontWeight: "bold",
      }}
    >
      الهوية الإبداعية
    </div>

    <p
      style={{
        color: "#f5f5f5",
        fontSize: "24px",
        lineHeight: "2",
        margin: "0",
        fontWeight: "500",
      }}
    >
      نصنع إعلانات وتجارب بصرية بهوية
      حديثة ولمسة سينمائية احترافية تساعد
      العلامات التجارية على الظهور بشكل
      أقوى وأكثر تميزًا.
    </p>
  </div> 
  <hr />
</div>

            {/* CTA BUTTON */}
            <a
              href="https://wa.me/972528108417?text=Hi%20Qrafiqo%2C%20I%20want%20to%20start%20a%20project"
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={(e) => {
                e.currentTarget.style.transform =
                  "scale(1.05)";
                e.currentTarget.style.background =
                  "#ff1a3d";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform =
                  "scale(1)";
                e.currentTarget.style.background =
                  "#3b0008";
              }}
              style={{
  display: "inline-flex",
  alignItems: "center",
  gap: "12px",
  padding: "20px 42px",
  borderRadius: "20px",
  background:
    "linear-gradient(135deg,#ff1a3d,#7a0015)",
  border: "1px solid rgba(255,255,255,0.1)",
  color: "white",
  textDecoration: "none",
  fontWeight: "700",
  letterSpacing: "1px",
  transition: "0.4s",
  boxShadow:
    "0 10px 40px rgba(255,26,61,0.35)",
}}
            >
              Start Project on WhatsApp
            </a>
          </div>

          <div
            onMouseEnter={(e) => {
              e.currentTarget.style.transform =
                "translateY(-10px) scale(1.02)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform =
                "translateY(0px) scale(1)";
            }}
            style={{
              position: "relative",
              transition: "0.5s",
              borderRadius: "30px",
              overflow: "hidden",
              border:
                "1px solid rgba(255,26,61,0.3)",
              boxShadow:
                "0 0 50px rgba(255,26,61,0.18)",
            }}
          >
            <img
              src="/images/صورة شخصية.png"
              style={{
                width: "420px",
                height: "540px",
                objectFit: "cover",
                display: "block",
                transition: "0.5s",
              }}
            />

            <div
              style={{
                position: "absolute",
                width: "250px",
                height: "250px",
                background:
                  "rgba(255,26,61,0.18)",
                filter: "blur(120px)",
                top: "50%",
                left: "50%",
                transform:
                  "translate(-50%,-50%)",
                zIndex: "-1",
              }}
            ></div>
          </div>
        </div>

        {/* REELS */}

        <div id="reels"></div>

        <h1
          style={{
            marginTop: "120px",
            fontSize: "55px",
            fontWeight: "900",
            marginBottom: "50px",
            textTransform: "uppercase",
            textShadow: "0 0 10px #ff1a3d",
            letterSpacing: "4px",
          }}
        >
          ✦ Cinematic Reels ✦
          <p
  style={{
    color: "#777",
    marginTop: "-20px",
    marginBottom: "50px",
    fontSize: "18px",
    letterSpacing: "1px",
  }}
>
Premium branding identities designed with modern visual storytelling.</p>
        </h1>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
  "repeat(auto-fit,minmax(320px,340px))",
justifyContent: "center",
            gap: "30px",
          }}
        >
          {[
  
  {
    title: "BMW Campaign",
    video: "/videos/bmw.mp4",
    cover: "/covers/غلاف bmw.png",
  },

  {
    title: "Dior Perfume",
    video: "/videos/dior.mp4",
    cover: "/covers/غلاف ديور.png",
  },

  {
    title: "Naeem Library",
    video: "/videos/naeem-library.mp4",
    cover: "/covers/غلاف مكتبة نعيم.png",
  },

  {
    title: "Nike Commercial",
    video: "/videos/nike.mp4",
    cover: "/covers/غلاف نايك.png",
  },

  {
    title: "Noir Perfume",
    video: "/videos/nour.mp4",
    cover: "/covers/غلاف عطر نوار.png",
  },

  {
    title: "Redbull Campaign",
    video: "/videos/REDbull.mp4",
    cover: "/covers/غلاف فيديو ال red bull.png",
  },

  {
    title: "Smash Town",
    video: "/videos/smash-town.mp4",
    cover: "/covers/غلاف مطعم smash town.png",
  },

  {
    title: "Social Media Ad",
    video: "/videos/social-media.mp4",
    cover: "/covers/غلاف فيديو السوشل ميديا.png",
  },

  {
    title: "VYRO Campaign",
    video: "/videos/VYRO.mp4",
    cover: "/covers/غلاف VYRO.png",
  },

].map((project, index) => (
            <div
              key={index}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform =
  "translateY(-12px) scale(1.03)";

const video =
  e.currentTarget.querySelector("video");

if (video) {
  video.style.transform = "scale(1.08)";
}
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform =
  "scale(1)";

const video =
  e.currentTarget.querySelector("video");

if (video) {
  video.style.transform = "scale(1)";
}
              }}
              style={{
  background:
    "linear-gradient(180deg,#140004,#0b0b0b)",
  borderRadius: "30px",
  overflow: "hidden",
  border:
    "1px solid rgba(255,26,61,0.28)",
  transition: "0.4s",
  animation: "reveal 1s ease",
  cursor: "pointer",
  position: "relative",
  boxShadow:
    "0 10px 40px rgba(255,26,61,0.12)",
  backdropFilter: "blur(10px)",
}}
            >
              <div
  style={{
    position: "relative",
    overflow: "hidden",
    aspectRatio: "9 / 16",
    background: "#000",
  }}
>
  <video
  src={project.video}
  poster={project.cover}
  muted
  loop
  playsInline
  preload="metadata"
  onClick={(e) => {
    e.currentTarget.play();
  }}
  style={{
    width: "100%",
    height: "100%",
    objectFit: "cover",
    display: "block",
    transition: "0.5s",
    animation: "reveal 1s ease",
  }}
/>

  {/* DARK OVERLAY */}
  <div
    style={{
      position: "absolute",
      inset: "0",
      background:
        "linear-gradient(to top, rgba(0,0,0,0.6), transparent)",
      pointerEvents: "none",
    }}
  ></div>
  {/* VIDEO INFO */}
<div
  style={{
    position: "absolute",
    bottom: "0",
    left: "0",
    width: "100%",
    padding: "24px",
    zIndex: "5",
  }}
>
  <div
    style={{
      color: "#ff1a3d",
      fontSize: "12px",
      letterSpacing: "3px",
      textTransform: "uppercase",
      marginBottom: "10px",
      fontWeight: "bold",
    }}
  >
    Motion Graphics
  </div>

  <h2
    style={{
      margin: "0",
      fontSize: "28px",
      fontWeight: "900",
      textShadow:
        "0 0 10px rgba(0,0,0,0.5)",
    }}
  >
    {project.title}
  </h2>
</div>

  {/* PLAY BUTTON */}
  <div
    style={{
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%,-50%)",
      width: "75px",
      height: "75px",
      borderRadius: "50%",
      background: "rgba(255,255,255,0.12)",
      backdropFilter: "blur(10px)",
      border: "1px solid rgba(255,255,255,0.25)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      boxShadow: "0 0 30px rgba(255,26,61,0.35)",
      pointerEvents: "none",
    }}
  >
    <div
      style={{
        width: "0",
        height: "0",
        borderTop: "12px solid transparent",
        borderBottom: "12px solid transparent",
        borderLeft: "18px solid white",
        marginLeft: "5px",
      }}
    ></div>
  </div>
</div>

              
            </div>
          ))}
        </div>

        {/* BRANDING */}

        <div id="branding"></div>

        <h1
          style={{
            marginTop: "120px",
            fontSize: "50px",
            fontWeight: "900",
            marginBottom: "50px",
            textTransform: "uppercase",
            textShadow: "0 0 10px #ff1a3d",
          }}
        >
          Branding Showcase
        </h1>
        <p
  style={{
    color: "#8a8a8a",
    marginTop: "-20px",
    marginBottom: "50px",
    fontSize: "18px",
    letterSpacing: "1px",
    animation: "reveal 1s ease",
    textTransform: "uppercase",
    fontWeight: "700",
    textShadow:
      "0 0 18px rgba(255,26,61,0.45)",
  }}
>
  Premium branding identities designed with modern visual storytelling.
</p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(280px,1fr))",
            gap: "30px",
          }}
        >
          {[
            "/branding/البطاقة الشخصية.jpg",
            "/branding/الروضة 1.jpg",
            "/branding/المدرسة 1.jpg",
            "/branding/المطعم 1.jpg",
            "/branding/دعوة-رسمية.jpg",
            "/branding/عار-تحصيل-الديون.jpg",
            "/branding/فيوجن1.jpg",
            "/branding/موكأب بزنس كارد شركة محاماة 2.jpg",
            "/branding/موكأب بزنس كارد لشركة طاقة شمسية.jpg",
            "/branding/موكأب بزنس كارد لمطعم.jpg",
            "/branding/موكأب شعار التصميم الجرافيكي.jpg",
            "/branding/نهائي-01.jpg",
            "/branding/نهائي-02.jpg",
            "/branding/المكتبة 1.jpg",
          ].map((image, index) => (
            <div
  key={index}
  onMouseEnter={(e) => {
    e.currentTarget.style.transform =
      "translateY(-10px) scale(1.03)";

    const image =
      e.currentTarget.querySelector("img");

    if (image) {
      image.style.transform = "scale(1.08)";
    }
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.transform =
      "scale(1)";

    const image =
      e.currentTarget.querySelector("img");

    if (image) {
      image.style.transform = "scale(1)";
    }
  }}
  style={{
    position: "relative",
    overflow: "hidden",
    borderRadius: "30px",
    cursor: "pointer",
    transition: "0.5s",
    background:
      "linear-gradient(180deg,#140004,#0b0b0b)",
    border:
      "1px solid rgba(255,26,61,0.25)",
    boxShadow:
      "0 10px 40px rgba(255,26,61,0.12)",
  }}
>
              <img
                src={image}
                style={{
                  width: "100%",
                  height: "300px",
                  objectFit: "cover",
                  transition: "0.6s",
                }}
              />
            </div>
          ))}
        </div>

        {/* CONTACT */}
        <div
          id="contact"
          style={{
            marginTop: "120px",
            padding: "50px",
            borderRadius: "30px",
            background: "rgba(40,0,10,0.6)",
            border:
              "1px solid rgba(255,26,61,0.3)",
            boxShadow:
              "0 0 40px rgba(255,26,61,0.15)",
          }}
        >
          <h1
            style={{
              fontSize: "50px",
              fontWeight: "900",
              marginBottom: "25px",
              textTransform: "uppercase",
            }}
          >
            Contact Us
          </h1>

          <p
            style={{
              color: "#999",
              fontSize: "20px",
              lineHeight: "1.8",
              maxWidth: "700px",
              marginBottom: "35px",
            }}
          >
            Available for freelance projects,
            branding, motion graphics, and cinematic
            ads.
          </p>

          <div
            style={{
              display: "flex",
              gap: "20px",
              flexWrap: "wrap",
            }}
          >
            {/* INSTAGRAM */}
            <a
              href="https://www.instagram.com/grafiqo2/"
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={(e) => {
                e.currentTarget.style.transform =
                  "translateY(-5px)";
                e.currentTarget.style.background =
                  "#ff1a3d";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform =
                  "translateY(0px)";
                e.currentTarget.style.background =
                  "#3b0008";
              }}
              style={{
                background: "#3b0008",
                border: "1px solid #ff1a3d",
                padding: "16px 32px",
                borderRadius: "18px",
                color: "white",
                textDecoration: "none",
                fontWeight: "bold",
                transition: "0.3s",
                display: "flex",
                alignItems: "center",
                gap: "12px",
              }}
            >
              <img
                src="/images/instagram-brands-solid-full.svg"
                style={{
                  width: "22px",
                  height: "22px",
                  objectFit: "contain",
                  filter: "invert(1)",
                }}
              />

              Instagram
            </a>

            {/* BEHANCE */}
            <a
              href="https://www.behance.net/daliasaleh5"
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={(e) => {
                e.currentTarget.style.transform =
                  "translateY(-5px)";
                e.currentTarget.style.background =
                  "#ff1a3d";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform =
                  "translateY(0px)";
                e.currentTarget.style.background =
                  "#3b0008";
              }}
              style={{
                background: "#3b0008",
                border: "1px solid #ff1a3d",
                padding: "16px 32px",
                borderRadius: "18px",
                color: "white",
                textDecoration: "none",
                fontWeight: "bold",
                transition: "0.3s",
                display: "flex",
                alignItems: "center",
                gap: "12px",
              }}
            >
              <img
                src="/images/behance-brands-solid-full.svg"
                style={{
                  width: "22px",
                  height: "22px",
                  objectFit: "contain",
                  filter: "invert(1)",
                }}
              />

              Behance
            </a>

            {/* WHATSAPP */}
            <a
              href="https://wa.me/972528108417"
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={(e) => {
                e.currentTarget.style.transform =
                  "translateY(-5px)";
                e.currentTarget.style.background =
                  "#ff1a3d";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform =
                  "translateY(0px)";
                e.currentTarget.style.background =
                  "#3b0008";
              }}
              style={{
                background: "#3b0008",
                border: "1px solid #ff1a3d",
                padding: "16px 32px",
                borderRadius: "18px",
                color: "white",
                textDecoration: "none",
                fontWeight: "bold",
                transition: "0.3s",
                display: "flex",
                alignItems: "center",
                gap: "12px",
              }}
            >
              <img
                src="/images/whatsapp-brands-solid-full.svg"
                style={{
                  width: "22px",
                  height: "22px",
                  objectFit: "contain",
                  filter: "invert(1)",
                }}
              />

              WhatsApp
            </a>
          </div>
        </div>
        <div
  style={{
    marginTop: "120px",
    padding: "35px",
    textAlign: "center",
    color: "#666",
    borderTop:
      "1px solid rgba(255,255,255,0.08)",
    fontSize: "14px",
    letterSpacing: "1px",
  }}
>
  © 2026 Qrafiqo — Cinematic Creative Studio
</div>
      </div>
    </>
  );
}