"use client"
import SideBarButtonMax from "./SideBarButtonMax";
import MenuButton  from "../../MenuButton/MenuButton"
import { getUserSession } from "@/lib/session";
import { useState, useContext, useEffect } from "react";
import GlobalStateContext from "@/Providers/GlobalStateContext";
import SectionTitle from "./SectionTitle";

const SideBarTwMax = (maximized) => {
  const [session, setSession] = useState(null);
  const [minimized, setMinimized] = useState(false);
  useEffect(() => {
    (async () => {
      const sessionData = await getUserSession(false);
      setSession(sessionData);
    });
  },[]);
  // const c = useContext(GlobalStateContext);
  // c.updateState("State updated");
  // console.log(c);

  // const toggleSideBar = () => {
  //   setMinimized(!minimized);
  // }
  return (
      <aside className={`min-h-0 flex overflow-hidden shrink h-webkit-available left-0 top-16 fixed ${maximized? "flex" : "none"}`}>
          <nav aria-label="Sidebar" className="block flex-shrink-0 bg-white overflow-y-auto">
              <div className="relative w-52 flex flex-col gap-2 p-3">  
                <MenuButton outerContainer="cursor-pointer p-3 m-auto hidden" innerContainer="rounded-full hover:bg-gray-100 flex flex-col"/>      
                <SideBarButtonMax text="Home" action="dashboard"/>
                <SideBarButtonMax text="Subscriptions" action="subscriptions"/>
                <SideBarButtonMax text="Playlists" action="playlists"/>
                <SideBarButtonMax text="Playlists" action="playlists"/>
                <hr></hr>       
                <SectionTitle title="You" />
                <SideBarButtonMax text="Playlists" action="playlists"/> 
                <SideBarButtonMax text="Playlists" action="playlists"/> 
                <SideBarButtonMax text="Playlists" action="playlists"/>
                <hr></hr>
                <SectionTitle title="Subscriptions" />
                <SideBarButtonMax text="Playlists" action="playlists"/> 
                <SideBarButtonMax text="Playlists" action="playlists"/> 
                <SideBarButtonMax text="Playlists" action="playlists"/>
                <SideBarButtonMax text="Playlists" action="playlists"/> 
                <SideBarButtonMax text="Playlists" action="playlists"/> 
                <SideBarButtonMax text="Playlists" action="playlists"/>
                <SectionTitle title="Explore" />
                <SideBarButtonMax text="Playlists" action="playlists"/> 
                <SideBarButtonMax text="Playlists" action="playlists"/> 
                <SideBarButtonMax text="Playlists" action="playlists"/>
                <SideBarButtonMax text="Playlists" action="playlists"/> 
                <SideBarButtonMax text="Playlists" action="playlists"/> 
                <SideBarButtonMax text="Playlists" action="playlists"/>
              </div>
          </nav>
      </aside>
  );
}
export default SideBarTwMax;