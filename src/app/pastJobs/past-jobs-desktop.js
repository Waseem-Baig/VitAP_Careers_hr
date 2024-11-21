import Navbar from "../../components/desktopComponents/navbar";
import Sidebar from "../../components/desktopComponents/sidebar";
import PastMainBar from "./past-jobs-mainbar";

const PastJobsDesktop = () => {
  return (
    <div className="flex flex-col">
      <div className="flex">
        <Sidebar />
        <div className="flex flex-col">
          <Navbar />
          <PastMainBar />
        </div>
      </div>
    </div>
  );
};

export default PastJobsDesktop;
