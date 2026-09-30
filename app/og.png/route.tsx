import { ImageResponse } from "next/og";
import { business, hero } from "@/site.config";

/* The preview image shown when someone shares the site in a text, Facebook, LinkedIn, etc.
   It's drawn from site.config.ts every time the site builds, and saved as /og.png. */

export const dynamic = "force-static";

export function GET() {
  const [before] = hero.headline.split(hero.headlineHighlight);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          color: "#f5f7fa",
          background: "radial-gradient(ellipse 80% 70% at 50% 0%, rgba(59,130,246,0.4), #05060a 70%)",
          backgroundColor: "#05060a",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              display: "flex",
              width: 56,
              height: 56,
              borderRadius: 14,
              background: "linear-gradient(135deg, #38bdf8, #1d4ed8)",
            }}
          />
          <div style={{ fontSize: 40, fontWeight: 700 }}>{business.name}</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div style={{ display: "flex", flexWrap: "wrap", fontSize: 84, fontWeight: 800, lineHeight: 1.05, letterSpacing: -2 }}>
            <span>{before}</span>
            <span
              style={{
                backgroundImage: "linear-gradient(95deg, #7dd3fc, #60a5fa 45%, #a78bfa)",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              {hero.headlineHighlight}
            </span>
          </div>
          <div style={{ fontSize: 34, color: "#8b93a3" }}>
            {`AI receptionist for HVAC & plumbing companies · ${business.homeBase}, ${business.state}`}
          </div>
        </div>
      </div>
    ),
    { width: 1200, height: 630 },
  );
}
