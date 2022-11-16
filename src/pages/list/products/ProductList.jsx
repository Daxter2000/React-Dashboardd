import "./product_list.scss"
import SideBar from "../../../components/sidebar/Sidebar"
import Navbar from  "../../../components/navbar/Navbar"
import ProductsDatatable from "../../../components/datatable/products/ProductsDatatable"


const ProductList = () => {
    return (
        <div>
            <div className="list">
                <SideBar />
                <div className="listContainer">
                    <Navbar />
                    <ProductsDatatable />
                </div>
            </div>
        </div>
    );
}

export default ProductList;
