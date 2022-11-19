import "../datatable.scss";
import { quotationColumns, quotationsRows } from "../../../datatablesource";
import { useState } from "react";
import Datatable from "../Datatable";

const QuotationsDatatable = () => {
  const [data, setData] = useState(quotationsRows);

  return (
    <Datatable  title="Productos" link="/products/new" columns={quotationColumns} rows={data} />
  );
};

export default QuotationsDatatable;