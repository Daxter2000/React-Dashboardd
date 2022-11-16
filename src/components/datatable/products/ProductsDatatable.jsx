import "../datatable.scss";
import { productColumns, productRows } from "../../../datatablesource";
import { useState } from "react";
import Datatable from "../Datatable";

const ClientsDatatable = () => {
  const [data, setData] = useState(productRows);

  return (
    <Datatable  title="Productos" link="/products/new" columns={productColumns} rows={data} />
  );
};

export default ClientsDatatable;