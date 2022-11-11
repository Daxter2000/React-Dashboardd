import "./table.scss"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';





const List = () => {
    const rows = [
        {
            id: 11544564525,
            product: "Laptop",
            img: "https://images.prismic.io/frameworkmarketplace/46cbf974-cdff-4cd8-b761-8b4a3343f6c4_FW-chromebook-homepage-carousel.png?auto=compress,format",
            customer: "Alfredo Hernandez",
            date: "1 marzo",
            amount: 785,
            method: "Cash on Delivery",
            status: "Approved",
        },
        {
            id: 11563456425,
            product: "Laptop",
            img: "https://images.prismic.io/frameworkmarketplace/46cbf974-cdff-4cd8-b761-8b4a3343f6c4_FW-chromebook-homepage-carousel.png?auto=compress,format",
            customer: "Alfredo Hernandez",
            date: "1 marzo",
            amount: 785,
            method: "Cash on Delivery",
            status: "Approved",
        },
        {
            id: 11567425,
            product: "Laptop",
            img: "https://images.prismic.io/frameworkmarketplace/46cbf974-cdff-4cd8-b761-8b4a3343f6c4_FW-chromebook-homepage-carousel.png?auto=compress,format",
            customer: "Alfredo Hernandez",
            date: "1 marzo",
            amount: 785,
            method: "Cash on Delivery",
            status: "Approved",
        },
        {
            id: 11534456425,
            product: "Laptop",
            img: "https://images.prismic.io/frameworkmarketplace/46cbf974-cdff-4cd8-b761-8b4a3343f6c4_FW-chromebook-homepage-carousel.png?auto=compress,format",
            customer: "Alfredo Hernandez",
            date: "1 marzo",
            amount: 785,
            method: "Cash on Delivery",
            status: "Approved",
        },
        {
            id: 11542325,
            product: "Laptop",
            img: "https://images.prismic.io/frameworkmarketplace/46cbf974-cdff-4cd8-b761-8b4a3343f6c4_FW-chromebook-homepage-carousel.png?auto=compress,format",
            customer: "Alfredo Hernandez",
            date: "1 marzo",
            amount: 785,
            method: "Cash on Delivery",
            status: "Pending",
        },
        {
            id: 11542655,
            product: "Laptop",
            img: "https://images.prismic.io/frameworkmarketplace/46cbf974-cdff-4cd8-b761-8b4a3343f6c4_FW-chromebook-homepage-carousel.png?auto=compress,format",
            customer: "Alfredo Hernandez",
            date: "1 marzo",
            amount: 785,
            method: "Cash on Delivery",
            status: "Approved",
        },
    ]
    return (

            <TableContainer component={Paper} className="table">
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell className="tableCell">ID seguimiento</TableCell>
                    <TableCell className="tableCell">Producto</TableCell>
                    <TableCell className="tableCell">Client</TableCell>
                    <TableCell className="tableCell">Fecha</TableCell>
                    <TableCell className="tableCell">Cantidad</TableCell>
                    <TableCell className="tableCell">Metodo de pago</TableCell>
                    <TableCell className="tableCell">Status</TableCell>

                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow
                      key={row.id}
                    >
                      <TableCell className="tableCell">
                        {row.id}
                      </TableCell>
                      <TableCell className="tableCell">
                        <div className="cellWrapper">
                            <img src={row.img} alt="" className="image" />
                            {row.product}
                        </div>
                      </TableCell>
                      <TableCell className="tableCell">{row.customer}</TableCell>
                      <TableCell className="tableCell">{row.date}</TableCell>
                      <TableCell className="tableCell">{row.amount}</TableCell>
                      <TableCell className="tableCell">{row.method}</TableCell>
                      <TableCell className="tableCell">
                          <span className={`status ${row.status}`}>{row.status}</span>
                      </TableCell>
                      <TableCell className="tableCell">{row.protein}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          );

    }
export default List;
