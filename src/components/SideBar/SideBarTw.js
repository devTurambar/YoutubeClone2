import { redirect } from "next/navigation";
import SideBarButton from "./SideBarButton/SideBarButton";
const SideBarTw = ({ children }) => {
  return (
      <aside className="min-h-0 flex overflow-hidden shrink h-full left-0 top-16 fixed">
          <nav aria-label="Sidebar" className="block flex-shrink-0 bg-white overflow-y-auto">
              <div className="relative w-20 flex flex-col gap-16 p-3">  
                <div className={`cursor-pointer m-auto flex flex-col hidden`}>
                  <div className={`bar1`}></div>
                  <div className={`bar2`}></div>
                  <div className={`bar3`}></div>
                </div>               
                <SideBarButton text="Home" action="dashboard"/>
                <SideBarButton text="Playlists" action="playlists"/>
                <SideBarButton text="Subscriptions" action="subscriptions"/>
              </div>
          </nav>
      </aside>
  );
}
export default SideBarTw;