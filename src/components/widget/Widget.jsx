import "./widget.scss"
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Person2Icon from '@mui/icons-material/Person2';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import BalanceIcon from '@mui/icons-material/Balance';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';


const Widget = ({type}) => {
    let data;
    //termporal

    const amount = 100
    const diff = 20
    
    switch (type) {
        case "usuarios":
            data={
                title:"Usuarios",
                isMoney: false,
                link: "Ver todos los usuarios",
                icon: 
                    <Person2Icon  
                        className="icon"    
                        style={{
                            backgroundColor: "rgba(218,165,32,0.2)",
                            color: "purple"
                }}/>
                
            }
            break;

            case "ganancias":
                data={
                    title:"Ganancias",
                    isMoney: true,
                    link: "Ver ganancias",
                    icon:  <AttachMoneyIcon  
                        className="icon"    
                        style={{
                            backgroundColor: "rgba(218,165,32,0.2)",
                            color: "golden"
            }}/>
                }
                break;

            case "balance":
                data={
                    title:"Balance",
                    isMoney: false,
                    link: "Ver balance",
                    icon:  <BalanceIcon  
                        className="icon"    
                        style={{
                            backgroundColor: "rgba(218,165,32,0.2)",
                            color: "goldenrod"
            }}/>
                }
                break;

            case "ordenes":
                data={
                    title:"Ordenes",
                    isMoney: false,
                    link: "Ver ordenes",
                    icon:  <LocalShippingIcon  
                        className="icon"    
                        style={{
                            backgroundColor: "rgba(218,165,32,0.2)",
                            color: "lightgreen"
                }}/>
                }
                break;    
    
        default:
            break;
    }




    return (
        <div className="widget">
            <div className="left">
                <span className="title">{data.title}</span>
                <span className="counter">
                    {data.isMoney && '$'} {amount}
                    </span>
                <span className="link">{data.link}</span>
            </div>
            <div className="right">
                <div className="percentage positive">
                    <KeyboardArrowUpIcon />
                    %20
                </div>
                {data.icon}
            </div>
        </div>
    );
}

export default Widget;
