import { ImageResponse } from "next/og";

export const alt =
  "Stanley Chukwuma (Stanchiqa) — Product Designer & Design Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        position: "relative",
        overflow: "hidden",
        background:
          "linear-gradient(135deg, #0f0f12 0%, #1d1d20 55%, #121314 100%)",
        color: "#ffffff",
        fontFamily: "sans-serif",
      }}
    >
      {/* Ambient gradient orbs */}
      <div
        style={{
          position: "absolute",
          top: "-120px",
          right: "-80px",
          width: "520px",
          height: "520px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(104,84,255,0.45) 0%, rgba(104,84,255,0) 70%)",
          filter: "blur(10px)",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "-160px",
          left: "-100px",
          width: "460px",
          height: "460px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(138,122,255,0.28) 0%, rgba(138,122,255,0) 70%)",
          filter: "blur(12px)",
        }}
      />

      {/* Subtle grid */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          opacity: 0.6,
        }}
      />

      {/* Accent vertical rule */}
      <div
        style={{
          position: "absolute",
          left: "80px",
          top: "90px",
          width: "4px",
          height: "120px",
          borderRadius: "4px",
          background: "linear-gradient(180deg, #6854ff 0%, #8a7aff 100%)",
        }}
      />

      {/* Content */}
      <div
        style={{
          position: "absolute",
          left: "112px",
          top: "90px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            fontSize: 26,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            opacity: 0.6,
            marginBottom: 18,
          }}
        >
          Stanchiqa
        </div>
        <div
          style={{
            fontSize: 78,
            fontWeight: 700,
            lineHeight: 1.02,
            letterSpacing: "-0.02em",
          }}
        >
          Stanley Chukwuma
        </div>
        <div
          style={{
            fontSize: 34,
            marginTop: 20,
            opacity: 0.85,
            fontWeight: 500,
          }}
        >
          Product Designer &amp; Design Engineer
        </div>
        <div
          style={{
            fontSize: 22,
            marginTop: 36,
            opacity: 0.55,
            maxWidth: 720,
            lineHeight: 1.4,
          }}
        >
          Helping startups and enterprise businesses turn complex ideas into
          simple, scalable digital products.
        </div>
      </div>

      {/* Bottom bar */}
      <div
        style={{
          position: "absolute",
          left: "80px",
          right: "80px",
          bottom: "60px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderTop: "1px solid rgba(255,255,255,0.12)",
          paddingTop: "24px",
          fontSize: 20,
          opacity: 0.6,
        }}
      >
        <span>stanchiqa.com</span>
        <span>AI · Fintech · B2B SaaS · Healthcare</span>
      </div>
    </div>,
    { ...size },
  );
}
