import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
    return new ImageResponse(
        (
            <div
                style={{
                    width: 64,
                    height: 64,
                    borderRadius: 16,
                    background: "linear-gradient(135deg, #0056B3 0%, #20B2AA 100%)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0 2px 8px rgba(0,86,179,0.3)",
                }}
            >
                <svg
                    width="42"
                    height="42"
                    viewBox="0 0 100 100"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    {/* Tooth shape */}
                    <path
                        d="M50 10
                           C38 10 28 18 26 28
                           C24 37 25 44 26 50
                           C28 58 28 65 26 74
                           C25 80 26 88 32 89
                           C38 90 40 86 42 80
                           C44 74 46 70 50 70
                           C54 70 56 74 58 80
                           C60 86 62 90 68 89
                           C74 88 75 80 74 74
                           C72 65 72 58 74 50
                           C75 44 76 37 74 28
                           C72 18 62 10 50 10Z"
                        fill="white"
                    />
                    {/* Shine line */}
                    <path
                        d="M38 22 C36 28 36 34 38 40"
                        stroke="rgba(0,86,179,0.25)"
                        strokeWidth="3"
                        strokeLinecap="round"
                        fill="none"
                    />
                </svg>
            </div>
        ),
        { ...size }
    );
}
