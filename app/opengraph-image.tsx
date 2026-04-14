import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "SUDS Tech Company Ltd — Software & IT Solutions";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0d1117",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "sans-serif",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://www.suds-tech.com/logo.png"
          alt=""
          width={320}
          height={128}
          style={{ objectFit: "contain" }}
        />
        <p
          style={{
            color: "#6b7280",
            fontSize: 28,
            marginTop: 24,
            letterSpacing: "0.05em",
            textTransform: "uppercase",
          }}
        >
          Software &amp; IT Solutions · Kampala, Uganda
        </p>
      </div>
    ),
    size
  );
}
