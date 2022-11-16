import "./client_list.scss"
import SideBar from "../../../components/sidebar/Sidebar"
import Navbar from  "../../../components/navbar/Navbar"
import ClientsDatatable from "../../../components/datatable/clients/ClientsDatatable"


const ClientList = () => {
    return (
        <div>
            <div className="list">
                <SideBar />
                <div className="listContainer">
                    <Navbar />
                    <ClientsDatatable />
                </div>
            </div>
        </div>
    );
}

export default ClientList;
