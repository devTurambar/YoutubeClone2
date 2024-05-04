import { Inter } from "next/font/google";
import "./globals.css";
import { getServerSession } from "next-auth";
import Providers from "@/components/Providers/Providers";
import Navbar from "@/components/NavBar/NavBar";
import SideBar from "@/components/SideBar/SideBar";
// import AuthProvider from "./lib/AuthProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "YoutubeClone",
};

export default function RootLayout({ children }) {
  const session = getServerSession();
  return (
    <html lang="en">
      {/* <AuthProvider> */}
        <body className={inter.className}>
          <Navbar />
          <SideBar />
          {children}
          {/* <Providers>{children}</Providers> */}
        </body>
      {/* </AuthProvider> */}
    </html>
  );
}
