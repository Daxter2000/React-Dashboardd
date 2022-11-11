export const userColumns = 
[
    { field: 'id', headerName: 'ID', width: 70 },
    { 
        field: 'username',
        headerName:'Usuario', 
        width: 230, 
        renderCell: (params) => {
            return(
                <div className="cellWithImg">
                    <img className="cellImg" src={params.row.img} alt="avatar" />
                    {params.row.username}
                </div>
            )}
    },
    {
        field: 'email', headerName:'Email',width: 230,
    },
    {
        field: 'age', headerName:'Edad',width: 230,
    },
    {
        field: 'status', headerName:'Estado',width: 230,
        renderCell: (params) => {
            return(
                <div className={`cellWithStatus ${params.row.status}`} >
                    {params.row.status}
                </div>
            )
        }
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