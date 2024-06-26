import { Metadata } from "next";
import Navigation from "../components/navigation";
import "../styles/reset.css";
import "../styles/global.css";

export const metadata: Metadata = {
  title: {
    default: "NextJS APP",
    template: "%s | nextJS APP",
  },
  description: "Generated by Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
