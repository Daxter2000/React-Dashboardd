import "./list.scss"
import SideBar from "../../components/sidebar/Sidebar"
import Navbar from  "../../components/navbar/Navbar"
import Datatable from "../../components/datatable/Datatable";


const List = () => {
    return (
        <div>
            <div className="list">
                <SideBar />
                <div className="listContainer">
                    <Navbar />
                    <Datatable />
                </div>
            </div>
        </div>
    );
}

export default List;
