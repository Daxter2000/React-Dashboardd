import SideBar from "../../../components/sidebar/Sidebar"
import Navbar from  "../../../components/navbar/Navbar"
import QuotationsDatatable from "../../../components/datatable/quotations/QuotationsDatatable"


const QuotationsList = () => {
    return (
        <div>
            <div className="list">
                <SideBar />
                <div className="listContainer">
                    <Navbar />
                    <QuotationsDatatable />
                </div>
            </div>
        </div>
    );
}

export default QuotationsList;
