import { Link } from "react-router-dom";

export const userColumns =
    [
        { field: 'id', headerName: 'ID', width: 70 },
        {
            field: 'username', headerName: 'Usuario', width: 230,
            renderCell: (params) => {
                return (
                    <div className="cellWithImg">
                        <img className="cellImg" src={params.row.img} alt="avatar" />
                        {params.row.username}
                    </div>
                )
            }
        },
        { field: 'email', headerName: 'Email', width: 230 },
        { field: 'age', headerName: 'Edad', width: 230 },
        {
            field: 'status', headerName: 'Estado', width: 230,
            renderCell: (params) => {
                return (
                    <div className={`cellWithStatus ${params.row.status}`} >
                        {params.row.status}
                    </div>
                )
            }
        },
        {
            field: "action", headerName: "Action", width: 200,
            renderCell: (params) => {
                return (
                    <div className="cellAction">
                        <Link to="/clients/test" style={{ textDecoration: "none" }}>
                            <div className="viewButton">View</div>
                        </Link>
                        <div
                            className="deleteButton" >
                            Delete
                        </div>
                    </div>
                );
            },
        }
    ]

export const userRows =
    [
        { "id": 1, "username": "ekindall0", "img": "http://dummyimage.com/176x100.png/ff4444/ffffff", "status": "pasive", "email": "mrathbourne0@icq.com", "age": 90 },
        { "id": 2, "username": "cjura1", "img": "http://dummyimage.com/228x100.png/cc0000/ffffff", "status": "pending", "email": "rtreadger1@admin.ch", "age": 48 },
        { "id": 3, "username": "ntomson2", "img": "http://dummyimage.com/187x100.png/cc0000/ffffff", "status": "pasive", "email": "shaw2@stanford.edu", "age": 95 },
        { "id": 4, "username": "tbanaszkiewicz3", "img": "http://dummyimage.com/103x100.png/ff4444/ffffff", "status": "active", "email": "lkeough3@businessweek.com", "age": 77 },
        { "id": 5, "username": "rbiagioni4", "img": "http://dummyimage.com/157x100.png/5fa2dd/ffffff", "status": "active", "email": "rmaffucci4@cnet.com", "age": 42 },
        { "id": 6, "username": "lmcmillam5", "img": "http://dummyimage.com/119x100.png/dddddd/000000", "status": "active", "email": "gwelfare5@va.gov", "age": 70 },
        { "id": 7, "username": "rgaywood6", "img": "http://dummyimage.com/126x100.png/dddddd/000000", "status": "pending", "email": "kabbes6@stanford.edu", "age": 38 },
        { "id": 8, "username": "kfazackerley7", "img": "http://dummyimage.com/113x100.png/dddddd/000000", "status": "pasive", "email": "mbrophy7@flickr.com", "age": 81 },
        { "id": 9, "username": "pantognetti8", "img": "http://dummyimage.com/189x100.png/cc0000/ffffff", "status": "pasive", "email": "ccopello8@independent.co.uk", "age": 97 },
        { "id": 10, "username": "apencott9", "img": "http://dummyimage.com/154x100.png/dddddd/000000", "status": "active", "email": "kmatis9@storify.com", "age": 62 },
        { "id": 11, "username": "lpetrushkevicha", "img": "http://dummyimage.com/191x100.png/dddddd/000000", "status": "pending", "email": "kpeea@multiply.com", "age": 76 },
        { "id": 12, "username": "agottsb", "img": "http://dummyimage.com/175x100.png/dddddd/000000", "status": "pasive", "email": "rlongfieldb@cafepress.com", "age": 78 },
        { "id": 13, "username": "aleggettc", "img": "http://dummyimage.com/147x100.png/cc0000/ffffff", "status": "pasive", "email": "mrookebyc@google.es", "age": 57 },
        { "id": 14, "username": "bnabarrod", "img": "http://dummyimage.com/228x100.png/dddddd/000000", "status": "pending", "email": "rdukelowd@fda.gov", "age": 81 },
        { "id": 15, "username": "blorkingse", "img": "http://dummyimage.com/131x100.png/cc0000/ffffff", "status": "active", "email": "pdenisarde@netvibes.com", "age": 86 },
        { "id": 16, "username": "jshowlf", "img": "http://dummyimage.com/124x100.png/5fa2dd/ffffff", "status": "pending", "email": "jlodingf@example.com", "age": 99 },
        { "id": 17, "username": "njardineg", "img": "http://dummyimage.com/183x100.png/ff4444/ffffff", "status": "active", "email": "thartgillg@prnewswire.com", "age": 52 },
        { "id": 18, "username": "dcomarh", "img": "http://dummyimage.com/130x100.png/dddddd/000000", "status": "pending", "email": "btravish@simplemachines.org", "age": 40 },
        { "id": 19, "username": "cvautini", "img": "http://dummyimage.com/127x100.png/dddddd/000000", "status": "active", "email": "rpluesi@comsenz.com", "age": 53 },
        { "id": 20, "username": "bmckeneyj", "img": "http://dummyimage.com/237x100.png/ff4444/ffffff", "status": "pasive", "email": "bbrimmellj@digg.com", "age": 78 }
    ]



export const clientsColumns =
    [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'name', headerName: 'Nombre completo', width: 230 },
        { field: 'phone', headerName: 'Telefono', width: 230 },
        { field: 'channel', headerName: 'Canal', width: 230 },
        { field: 'address', headerName: 'Direccion', width: 230 },
        {
            field: 'status', headerName: 'Estado', width: 230,
            renderCell: (params) => {
                return (
                    <div className={`cellWithStatus ${params.row.status}`} >
                        {params.row.status}
                    </div>
                )
            }
        },
        {
            field: "action", headerName: "Action", width: 200,
            renderCell: (params) => {
                return (
                    <div className="cellAction">
                        <Link to="/clients/test" style={{ textDecoration: "none" }}>
                            <div className="viewButton">View</div>
                        </Link>
                        <div
                            className="deleteButton" >
                            Delete
                        </div>
                    </div>
                );
            },
        }
    ]


export const clientRows =
    [
        { "id": 1, "name": "Aldrich Eicheler", "phone": "337-289-7565", "channel": "Publicidad", "address": "1 Debs Park", "status": "pending" },
        { "id": 2, "name": "Jocelyn Aberkirder", "phone": "193-724-0146", "channel": "Facebook", "address": "36180 Holmberg Avenue", "status": "active" },
        { "id": 3, "name": "Fionna Astley", "phone": "488-713-3467", "channel": "Facebook", "address": "127 School Street", "status": "active" },
        { "id": 4, "name": "Nancy Farquarson", "phone": "179-211-5312", "channel": "Instagram", "address": "429 Lunder Terrace", "status": "pasive" },
        { "id": 5, "name": "Giffie Kiddey", "phone": "133-726-7593", "channel": "Facebook", "address": "9 Clyde Gallagher Junction", "status": "pasive" },
        { "id": 6, "name": "Hersch Ganderton", "phone": "579-998-4091", "channel": "Instagram", "address": "4369 Kropf Street", "status": "pasive" },
        { "id": 7, "name": "Verna Dell'Abbate", "phone": "889-347-6348", "channel": "Publicidad", "address": "103 Esch Pass", "status": "pasive" },
        { "id": 8, "name": "Dorri Linzee", "phone": "168-208-3348", "channel": "Instagram", "address": "4982 Glacier Hill Center", "status": "pasive" },
        { "id": 9, "name": "Guss Carwardine", "phone": "810-721-2297", "channel": "Instagram", "address": "902 Cottonwood Hill", "status": "pasive" },
        { "id": 10, "name": "Phillipe Broomfield", "phone": "425-681-7165", "channel": "Instagram", "address": "0 Hooker Crossing", "status": "pending" },
        { "id": 11, "name": "Gerik Machin", "phone": "178-484-9320", "channel": "Instagram", "address": "63700 Corscot Center", "status": "active" },
        { "id": 12, "name": "Loralie McFadyen", "phone": "885-103-9543", "channel": "Facebook", "address": "78 Talmadge Avenue", "status": "pasive" },
        { "id": 13, "name": "Adrian Jirik", "phone": "546-950-6555", "channel": "Facebook", "address": "0 Monument Pass", "status": "pasive" },
        { "id": 14, "name": "Edgardo O'Doherty", "phone": "666-285-2477", "channel": "Instagram", "address": "75168 Logan Hill", "status": "pending" },
        { "id": 15, "name": "Aurore Reiner", "phone": "958-282-8947", "channel": "Instagram", "address": "9544 Gerald Park", "status": "pending" },
        { "id": 16, "name": "Chrystel Siss", "phone": "256-848-2060", "channel": "Publicidad", "address": "6261 Garrison Parkway", "status": "active" },
        { "id": 17, "name": "Lacy Dabel", "phone": "160-504-6964", "channel": "Publicidad", "address": "6 Buhler Junction", "status": "pasive" },
        { "id": 18, "name": "Haslett Napier", "phone": "574-266-8315", "channel": "Instagram", "address": "241 Fuller Crossing", "status": "active" },
        { "id": 19, "name": "Park Lynn", "phone": "295-329-4450", "channel": "Facebook", "address": "142 Carey Point", "status": "pasive" },
        { "id": 20, "name": "Fayre Terren", "phone": "453-299-7698", "channel": "Facebook", "address": "4 Columbus Pass", "status": "pending" },
        { "id": 21, "name": "Ferdinand Rosin", "phone": "719-805-7974", "channel": "Instagram", "address": "32492 Anthes Plaza", "status": "pasive" },
        { "id": 22, "name": "Chauncey Dagon", "phone": "267-183-0537", "channel": "Facebook", "address": "51 New Castle Terrace", "status": "pasive" },
        { "id": 23, "name": "Karena Musico", "phone": "220-227-7201", "channel": "Publicidad", "address": "904 Canary Crossing", "status": "pending" },
        { "id": 24, "name": "Leoline Francello", "phone": "887-299-6100", "channel": "Publicidad", "address": "13 Dunning Circle", "status": "active" },
        { "id": 25, "name": "Leela Mendez", "phone": "360-401-1975", "channel": "Facebook", "address": "6030 Merrick Place", "status": "pasive" },
        { "id": 26, "name": "Allayne Kevern", "phone": "611-592-6952", "channel": "Facebook", "address": "2 Dayton Trail", "status": "pasive" },
        { "id": 27, "name": "Ofelia Comberbach", "phone": "333-695-2282", "channel": "Facebook", "address": "37 Sullivan Terrace", "status": "pending" },
        { "id": 28, "name": "Kiley Amsden", "phone": "794-727-7606", "channel": "Publicidad", "address": "7 Pearson Trail", "status": "pasive" },
        { "id": 29, "name": "Mace Gammett", "phone": "957-873-9142", "channel": "Instagram", "address": "7 Shopko Way", "status": "active" },
        { "id": 30, "name": "Dusty Ewington", "phone": "545-542-9690", "channel": "Instagram", "address": "1 Messerschmidt Plaza", "status": "pasive" },
        { "id": 31, "name": "Jeanna Ilive", "phone": "746-557-4586", "channel": "Instagram", "address": "6 Crescent Oaks Junction", "status": "pasive" },
        { "id": 32, "name": "Winslow Martignoni", "phone": "336-688-3683", "channel": "Instagram", "address": "6 Rigney Center", "status": "active" },
        { "id": 33, "name": "Parnell Daugherty", "phone": "476-913-7393", "channel": "Facebook", "address": "952 Anniversary Pass", "status": "active" },
        { "id": 34, "name": "Eddy Cereceres", "phone": "780-950-0000", "channel": "Instagram", "address": "676 Sage Junction", "status": "active" },
        { "id": 35, "name": "Anjanette Dever", "phone": "760-933-2106", "channel": "Facebook", "address": "539 Weeping Birch Lane", "status": "active" },
        { "id": 36, "name": "Rossie Jacquet", "phone": "189-763-5870", "channel": "Publicidad", "address": "2 Jenifer Drive", "status": "pending" },
        { "id": 37, "name": "Roarke Vaines", "phone": "280-546-9420", "channel": "Instagram", "address": "09 Kennedy Way", "status": "pending" },
        { "id": 38, "name": "Corbie Sandbrook", "phone": "421-393-9841", "channel": "Facebook", "address": "94 Farmco Trail", "status": "pending" },
        { "id": 39, "name": "Pennie Mugridge", "phone": "622-980-5830", "channel": "Instagram", "address": "41838 Northport Avenue", "status": "pending" },
        { "id": 40, "name": "Celestyn Crownshaw", "phone": "413-717-4786", "channel": "Instagram", "address": "46554 Heath Way", "status": "pending" },
        { "id": 41, "name": "Ted Magson", "phone": "411-142-9839", "channel": "Publicidad", "address": "2 Village Green Street", "status": "active" },
        { "id": 42, "name": "Verge Emmer", "phone": "171-680-3523", "channel": "Publicidad", "address": "6 Victoria Lane", "status": "pasive" },
        { "id": 43, "name": "Reeba Betjes", "phone": "758-431-2446", "channel": "Facebook", "address": "585 Claremont Place", "status": "active" },
        { "id": 44, "name": "Gunar Spilsbury", "phone": "178-187-0542", "channel": "Publicidad", "address": "7205 Burning Wood Pass", "status": "pending" },
        { "id": 45, "name": "Dorothy Firle", "phone": "292-985-7277", "channel": "Facebook", "address": "0213 American Hill", "status": "pending" },
        { "id": 46, "name": "Jillana Parell", "phone": "269-802-5568", "channel": "Facebook", "address": "5 Clyde Gallagher Pass", "status": "pending" },
        { "id": 47, "name": "Harrietta Fairbrass", "phone": "840-162-6158", "channel": "Instagram", "address": "79 Arkansas Parkway", "status": "pasive" },
        { "id": 48, "name": "Bogart Ingall", "phone": "473-775-0968", "channel": "Instagram", "address": "1 Bluejay Lane", "status": "active" },
        { "id": 49, "name": "Mersey Tipple", "phone": "437-700-3341", "channel": "Publicidad", "address": "1227 Drewry Alley", "status": "pasive" },
        { "id": 50, "name": "Vania Swalowe", "phone": "947-296-3341", "channel": "Publicidad", "address": "3213 Haas Center", "status": "active" }
    ];

export const productColumns =
    [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'name', headerName: 'Producto', width: 180 },
        { field: 'description', headerName: 'Descripcion', width: 230, },
        { field: 'model', headerName: 'Modelo', width: 180 },
        { field: 'unit price', headerName: 'Precio Unitario', width: 130 },
        { field: 'unit', headerName: 'Unidad', width: 130 },
        {
            field: 'status', headerName: 'Estado', width: 130,
            renderCell: (params) => {
                return (
                    <div className={`cellWithStatus ${params.row.status}`} >
                        {params.row.status}
                    </div>
                )
            }
        },
        {
            field: "action", headerName: "Action", width: 200,
            renderCell: (params) => {
                return (
                    <div className="cellAction">
                        <Link to="/products/test" style={{ textDecoration: "none" }}>
                            <div className="viewButton">View</div>
                        </Link>
                        <div
                            className="deleteButton" >
                            Delete
                        </div>
                    </div>
                );
            },
        }
    ]


export const productRows =
    [
        { "id": 1, "name": "herreria", "description": "Granite Surfaces", "model": "8977864496", "unit price": 41, "unit": "Unidad", "status": "passive" },
        { "id": 2, "name": "herreria", "description": "HVAC", "model": "2156699038", "unit price": 94, "unit": "FtL", "status": "active" },
        { "id": 3, "name": "industrial", "description": "Drilled Shafts", "model": "3419600755", "unit price": 49, "unit": "Unidad", "status": "passive" },
        { "id": 4, "name": "residencial", "description": "Roofing (Metal)", "model": "5917014442", "unit price": 81, "unit": "Ft2", "status": "pending" },
        { "id": 5, "name": "mueble", "description": "Site Furnishings", "model": "8422220377", "unit price": 34, "unit": "Unidad", "status": "active" },
        { "id": 6, "name": "closet", "description": "Painting & Vinyl Wall Covering", "model": "2738093965", "unit price": 34, "unit": "Unidad", "status": "passive" },
        { "id": 7, "name": "residencial", "description": "Fire Sprinkler System", "model": "6716447784", "unit price": 21, "unit": "ML", "status": "pending" },
        { "id": 8, "name": "herreria", "description": "Drilled Shafts", "model": "1426040261", "unit price": 57, "unit": "Ft2", "status": "passive" },
        { "id": 9, "name": "closet", "description": "Overhead Doors", "model": "2218859564", "unit price": 37, "unit": "Unidad", "status": "active" },
        { "id": 10, "name": "industrial", "description": "Drywall & Acoustical (FED)", "model": "3812877139", "unit price": 34, "unit": "ML", "status": "pending" },
        { "id": 11, "name": "closet", "description": "Granite Surfaces", "model": "1098787072", "unit price": 39, "unit": "M2", "status": "passive" },
        { "id": 12, "name": "mueble", "description": "Roofing (Metal)", "model": "4315840947", "unit price": 74, "unit": "ML", "status": "passive" },
        { "id": 13, "name": "herreria", "description": "Rebar & Wire Mesh Install", "model": "6316954794", "unit price": 6, "unit": "Unidad", "status": "passive" },
        { "id": 14, "name": "mueble", "description": "Casework", "model": "5854143690", "unit price": 89, "unit": "ML", "status": "passive" },
        { "id": 15, "name": "residencial", "description": "Granite Surfaces", "model": "9755524347", "unit price": 38, "unit": "Ft2", "status": "passive" },
        { "id": 16, "name": "cocina", "description": "Asphalt Paving", "model": "9362478536", "unit price": 33, "unit": "FtL", "status": "pending" },
        { "id": 17, "name": "herreria", "description": "Drywall & Acoustical (FED)", "model": "0869206990", "unit price": 72, "unit": "FtL", "status": "active" },
        { "id": 18, "name": "industrial", "description": "Roofing (Metal)", "model": "5155887488", "unit price": 91, "unit": "Unidad", "status": "passive" },
        { "id": 19, "name": "industrial", "description": "Epoxy Flooring", "model": "3766048309", "unit price": 71, "unit": "M2", "status": "pending" },
        { "id": 20, "name": "residencial", "description": "Soft Flooring and Base", "model": "3150060214", "unit price": 25, "unit": "M2", "status": "pending" },
        { "id": 21, "name": "herreria", "description": "Roofing (Metal)", "model": "0091929911", "unit price": 34, "unit": "Ft2", "status": "active" },
        { "id": 22, "name": "residencial", "description": "Drilled Shafts", "model": "7822434756", "unit price": 79, "unit": "M2", "status": "active" },
        { "id": 23, "name": "residencial", "description": "Exterior Signage", "model": "1680732013", "unit price": 63, "unit": "Unidad", "status": "passive" },
        { "id": 24, "name": "herreria", "description": "Electrical", "model": "5499946019", "unit price": 70, "unit": "Unidad", "status": "passive" },
        { "id": 25, "name": "closet", "description": "Framing (Steel)", "model": "6219478592", "unit price": 43, "unit": "FtL", "status": "active" }]