import Navbar from "../../components/navbar/Navbar";
import { useState } from 'react'
import Sidebar from "../../components/sidebar/Sidebar";
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
import TextField from '@mui/material/TextField';
import "./new.scss"

const New = ({title, inputs, img}) => {
    const [file, setFile] = useState();

    console.log(file)
    return (
            <div className="new">
                <Sidebar />
                <div className="newContainer">
                   <Navbar /> 
                   <div className="top">
                       <h1>{title}</h1>
                   </div>
                   <div className="bottom">
                    { (img  && 
                        <div className="left">
                           <img src={file ? URL.createObjectURL(file) : "https://images.assetsdelivery.com/compings_v2/pavelstasevich/pavelstasevich1811/pavelstasevich181101032.jpg"} alt="" />
                       </div>
                        )
                    }
                       
                       <div className="right">
                           <form >
                            {
                                ( img && 
                                    <div className="formInput">
                                    <label htmlFor="file"> 
                                        Image: <DriveFolderUploadIcon  className=""/>
                                    </label>
                                    <input  style={{display: "none"}} id="file" type="file" onChange={e=> setFile(e.target.files[0])}/>
                                </div>
                               )

                            }
                               
                               {inputs.map((input)=> (
                                   <div className="formInput" key={input.id}>
                                       <label>{input.label}</label>
                                       <input type={input.type} placeholder={input.placeholder} />
                                   </div>
                               ))}



                               <button>Enviar</button>
                           </form>
                       </div>
                   </div>
                </div>
                New
            </div>
    );
}

export default New;
