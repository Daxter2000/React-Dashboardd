import SideBar from "../../../components/sidebar/Sidebar"
import Navbar from  "../../../components/navbar/Navbar"
import ProjectsDatatable from "../../../components/datatable/projects/ProjectsDatatable"


const ProjectsList = () => {
    return (
        <div>
            <div className="list">
                <SideBar />
                <div className="listContainer">
                    <Navbar />
                    <ProjectsDatatable />
                </div>
            </div>
        </div>
    );
}

export default ProjectsList;
