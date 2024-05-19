"use client"

import SideBarButtonMax from "./SideBarButtonMax";
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
  return (
      <aside className="min-h-0 flex overflow-hidden shrink h-webkit-available left-0 top-16 fixed">
          <nav aria-label="Sidebar" className="block flex-shrink-0 bg-white overflow-y-auto">
              <div className="relative w-60 w-\[300px\] flex flex-col gap-16 p-3">  
                <MenuButton outerContainer="cursor-pointer p-3 m-auto hidden" innerContainer="rounded-full hover:bg-gray-100 flex flex-col"/>             
                <SideBarButtonMax text="Home" action="dashboard"/>
                <SideBarButtonMax text="Shorts" action="shorts"/>
                <SideBarButtonMax text="Subscriptions" action="subscriptions"/>
              </div>
          </nav>
      </aside>
  );
}
export default SideBarTw;