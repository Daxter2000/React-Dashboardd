import "./single.scss"
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Chart from "../../components/chart/Chart"
import List from "../../components/table/Table"
const Single = () => {
    return (
        <div>
            <div className="single">
                <Sidebar />

                <div className="singleContainer">
                    <Navbar />
                    <div className="top">
                        <div className="left">
                            <div className="editButton">Edit</div>
                            <h1 className="title">Informacion</h1>
                            <div className="item">
                                <img 
                                    src="https://sm.ign.com/ign_latam/news/m/michael-b-/michael-b-jordan-downplays-superman-casting-rumors_tdc3.jpg" 
                                    alt="" 
                                    className="itemImg" 
                                    />
                                    <div className="details">
                                        <h1 className="itemTitle">Michael B. Jordan</h1>
                                        <div className="detailItem">
                                            <span className="itemKey">Email:</span>
                                            <span className="itemValue">michael.b@gmail.com</span>
                                        </div>
                                        
                                        <div className="detailItem">
                                            <span className="itemKey">Phone:</span>
                                            <span className="itemValue">+52-568-89-56</span>
                                        </div>
                                        <div className="detailItem">
                                            <span className="itemKey">Address:</span>
                                            <span className="itemValue">LA. wst Brook 54</span>
                                        </div>
                                        <div className="detailItem">
                                            <span className="itemKey">Country:</span>
                                            <span className="itemValue">USA</span>
                                        </div>
                                    </div>
                                </div>
                        </div> 
                        <div className="right">
                            <Chart aspect={3/1} title="Ventas del empleado (6 meses)"/>
                        </div>
                        
                    </div>
                    <div className="bottom">
                        <h1 className="title">Last Transactions</h1>
                        <List />
                    </div>
                </div>
                
            </div>
        </div>
    );
}

export default Single;
