import { Inter } from "next/font/google";
import "./globals.css";
// import Providers from "../components/Providers/Providers";
import { getServerSession } from "next-auth";
import Providers from "@/components/Providers/Providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "YoutubeClone"
};

export default function RootLayout({ children }) {
  const session = getServerSession();
  return (
    <html lang="en">
      <body className={inter.className}>
      {children}
        {/* <Providers>{children}</Providers> */}
      </body>
    </html>
  );
}
