import { ImageResponse } from "next/og";

export const alt = "FORNO — Pizza New Haven en Querétaro";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          backgroundColor: "#15110d",
          backgroundImage:
            "radial-gradient(120% 90% at 30% 0%, rgba(216,64,47,0.30), transparent 60%)",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            color: "#e9cda9",
            fontSize: 30,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            fontWeight: 600,
          }}
        >
          <div
            style={{
              width: "14px",
              height: "14px",
              borderRadius: "9999px",
              backgroundColor: "#d8402f",
              display: "flex",
            }}
          />
          New Haven · Querétaro
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <div
            style={{
              display: "flex",
              fontSize: 190,
              fontWeight: 800,
              color: "#f7f1e6",
              lineHeight: 1,
              letterSpacing: "-0.04em",
            }}
          >
            FORNO
            <span style={{ color: "#d8402f" }}>.</span>
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 42,
              color: "rgba(247,241,230,0.72)",
              fontWeight: 500,
            }}
          >
            La pizza como debería ser.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 28,
            color: "rgba(247,241,230,0.5)",
          }}
        >
          Fermentación lenta. Horno caliente. No hacemos otra cosa.
        </div>
      </div>
    ),
    { ...size },
  );
}
