import { Inter } from "next/font/google";
import "./globals.css";
import { getServerSession } from "next-auth";
import Providers from "@/Providers/Providers";
import Navbar from "@/components/NavBar/NavBar";
import SideBar from "@/components/SideBar/SideBar";
import NewSideBar from "@/components/SideBar/NewSideBar";
import NewSideBar2 from "@/components/SideBar/NewSideBar2";
import SideBarTw from "@/components/SideBar/SideBarTw";
// import AuthProvider from "./lib/AuthProvider";
import ReactQueryProvider from "@/Providers/ReactQueryProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "YoutubeClone",
};

export default function RootLayout({ children }) {
  const session = getServerSession();
  return (
    <html lang="en">
        <body className={inter.className}>
          {/* I cannot use directly QueryClient on a server component, but I can create a custom provider (client), and wrap my server app with it, like I did below */}
          <ReactQueryProvider>
            <Navbar />
              <div className="flex h-screen">
                <SideBarTw />
                <div className="grow shrink-0">
                  {children}
                </div>
              </div>          
          </ReactQueryProvider>
        </body>        
    </html>
  );
}
