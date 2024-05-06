import { redirect } from "next/navigation";
import SideBarButton from "./SideBarButton/SideBarButton";
const SideBarTw = ({ children }) => {
  return (
      <div className=" min-h-0 flex overflow-hidden shrink">
          <nav aria-label="Sidebar" className="block flex-shrink-0 bg-gray-800 overflow-y-auto">
              <div className="relative w-20 flex space-y-16 flex-col p-3">
                  <SideBarButton text="Home" action="dashboard"/>
                  <SideBarButton text="Playlists" action="playlists"/>
                  <SideBarButton text="Subscriptions" action="subscriptions"/>
              </div>
          </nav>
      </div>
  );
}
export default SideBarTw;