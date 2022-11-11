import "./featured.scss"
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css"
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const Featured = () => {
    return (
        <div className="featured">
            <div className="top">
                <h1 className="title">Ganancias totales</h1>
                <MoreVertIcon  fontSize="small"/>
            </div>

            <div className="bottom">
                <div className="featuredChart">
                    <CircularProgressbar  value={40} text={"70%"} strokeWidth={1}/>
                </div>
                <p className="title">Total de ventas del dia</p>
                <p className="amount">$420</p>
                <p className="desc"> Descripcion alternativa</p>
                <div className="summary">
                    <div className="item">
                        <div className="itemTitle">Meta</div>
                        <div className="itemResult positive ">
                            <KeyboardArrowUpIcon fontSize="small" />
                            <div className="resultAmount">40%</div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="itemTitle">Semana anterior</div>
                        <div className="itemResult negative">
                            <KeyboardArrowDownIcon fontSize="small" />
                            <div className="resultAmount">40%</div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="itemTitle">Mes anterior</div>
                        <div className="itemResult negative">
                            <KeyboardArrowDownIcon fontSize="small" />
                            <div className="resultAmount">40%</div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    );
}

export default Featured;
