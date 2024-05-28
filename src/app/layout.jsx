import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/NavBar/NavBar";
import SideBarTw from "@/components/SideBar/SideBarMinimized/SideBarTw";
import SideBarContainer from "@/components/SideBar/SideBarContainer/SideBarContainer";
import ReactQueryProvider from "@/Providers/ReactQueryProvider";
import { GlobalStateProvider } from "@/Providers/GlobalStateContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "YoutubeClone",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
        <body className={inter.className}>
          <GlobalStateProvider>
            {/* I cannot use directly QueryClient on a server component, but I can create a custom provider (client), and wrap my server app with it, like I did below */}
            <ReactQueryProvider>
              <div className="pl-20 pt-16">
                <Navbar />
                <div className="flex h-screen">
                  <SideBarContainer />
                  <div className="grow shrink">
                    {children}
                  </div>
                </div>                
              </div>
            </ReactQueryProvider>
          </GlobalStateProvider>
        </body>        
    </html>
  );
}
