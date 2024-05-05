import { Inter } from "next/font/google";
import "./globals.css";
import { getServerSession } from "next-auth";
import Providers from "@/components/Providers/Providers";
import Navbar from "@/components/NavBar/NavBar";
import SideBar from "@/components/SideBar/SideBar";
import NewSideBar from "@/components/SideBar/NewSideBar";
import NewSideBar2 from "@/components/SideBar/NewSideBar2";
import SideBarTw from "@/components/SideBar/SideBarTw";
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
          <div>
            <div className="flex">
              <SideBarTw />
              <div className="grow shrink-0">
                {children}
              </div>
            </div>
            {/* <NewSideBar2>
              {children}
            </NewSideBar2> */}
            {/* <NewSideBar /> */}
            {/* <SideBar /> */}
          </div>
          
          {/* <Providers>{children}</Providers> */}
        </body>
      {/* </AuthProvider> */}
    </html>
  );
}
