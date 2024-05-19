"use client"

import SideBarButton from "./SideBarButton";
import MenuButton  from "../../MenuButton/MenuButton"
import { getUserSession } from "@/lib/session";
import { useState, useContext, useEffect } from "react";
import GlobalStateContext from "@/Providers/GlobalStateContext";

const SideBarTw = ({ children }) => {
  const [session, setSession] = useState(null);
  const [minimized, setMinimized] = useState(null);
  useEffect(() => {
    (async () => {
      const sessionData = await getUserSession(false);
      setSession(sessionData);
    });
  },[]);
  const c = useContext(GlobalStateContext);
  c.updateState("State updated");
  console.log(c);
  // console.log("user");
  // console.log(user);
  // console.log("user");
  return (
      <aside className="min-h-0 flex overflow-hidden shrink h-webkit-available left-0 top-16 fixed">
          <nav aria-label="Sidebar" className="block flex-shrink-0 bg-white overflow-y-auto">
              <div className="relative w-20 w-\[300px\] flex flex-col gap-16 p-3">  
                <MenuButton outerContainer="cursor-pointer p-3 m-auto hidden" innerContainer="rounded-full hover:bg-gray-100 flex flex-col"/>             
                <SideBarButton text="Home" action="dashboard"/>
                <SideBarButton text="Shorts" action="shorts"/>
                <SideBarButton text="Subscriptions" action="subscriptions"/>
                <SideBarButton text="You" action="you"/>
                <SideBarButton text="History" action="history"/>
                <SideBarButton text="Playlists" action="playlists"/>
              </div>
          </nav>
      </aside>
  );
}
export default SideBarTw;