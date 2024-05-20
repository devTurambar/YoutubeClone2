"use client"

import SideBarButton from "./SideBarButton";
import MenuButton  from "../../MenuButton/MenuButton"
import { getUserSession } from "@/lib/session";
import { useState, useContext, useEffect } from "react";
import GlobalStateContext from "@/Providers/GlobalStateContext";

const SideBarTw = ({maximized, toggleSideBar}) => {
  const [session, setSession] = useState(null);
  useEffect(() => {
    (async () => {
      const sessionData = await getUserSession(false);
      setSession(sessionData);
    });
  },[]);
  // const c = useContext(GlobalStateContext);
  // c.updateState("State updated");
  // console.log(c);
  // console.log("user");
  // console.log(user);
  // console.log("user");

  return (
    <aside className="min-h-0 flex overflow-hidden shrink h-webkit-available left-0 top-0 fixed">
        <nav aria-label="Sidebar" className={`block flex-shrink-0 bg-white ${maximized ? "overflow-hidden" : "overflow-auto"} `}>
            <div className="relative w-20 w-\[300px\] flex flex-col gap-16 p-3"> 
              <div onClick={() => toggleSideBar()}>
                <MenuButton outerContainer="cursor-pointer p-3 m-auto hover:bg-gray-100 rounded-full" innerContainer="rounded-full hover:bg-gray-100 flex flex-col"/>             
              </div>
              <SideBarButton text="Home" action="dashboard"/>
              <SideBarButton text="Shorts" action="shorts"/>
              <SideBarButton text="Subscriptions" action="subscriptions"/>
              <SideBarButton text="You" action="you"/>
              <SideBarButton text="History" action="history"/>
              <SideBarButton text="Playlists" action="playlists"/>
              <SideBarButton text="Playlists" action="playlists"/>
              <SideBarButton text="Playlists" action="playlists"/>
              <SideBarButton text="Playlists" action="playlists"/>
            </div>
        </nav>
    </aside>
  );
}
export default SideBarTw;