import { ImageResponse } from "next/og";

export const alt =
  "Cabinet A.YOUBI — Comptabilité et commissariat aux comptes à Réghaïa";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0A2342",
          color: "#F7F4ED",
          padding: 64,
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 28,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "#2D8BC3",
          }}
        >
          Réghaïa · Alger
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div
            style={{
              display: "flex",
              fontSize: 72,
              fontWeight: 700,
              letterSpacing: "-0.02em",
            }}
          >
            Cabinet A.YOUBI
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 32,
              color: "rgba(247,244,237,0.82)",
              maxWidth: 860,
            }}
          >
            Comptabilité et commissariat aux comptes
          </div>
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 24,
            color: "rgba(247,244,237,0.7)",
          }}
        >
          0561 37 80 58
        </div>
      </div>
    ),
    size,
  );
}
