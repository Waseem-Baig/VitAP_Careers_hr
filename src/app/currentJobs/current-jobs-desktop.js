import Navbar from "../../components/desktopComponents/navbar";
import Sidebar from "../../components/desktopComponents/sidebar";
import CurrentMainBar from "./current-jobs-mainbar-desktop";

const CurrentJobsDesktop = () => {
  return (
    <div className="flex flex-col">
      <div className="flex">
        <Sidebar />
        <div className="flex flex-col">
          <Navbar />
          <CurrentMainBar />
        </div>
      </div>
    </div>
  );
};

export default CurrentJobsDesktop;
