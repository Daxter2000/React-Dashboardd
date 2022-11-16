import "../datatable.scss";
import { clientsColumns, clientRows } from "../../../datatablesource";
import { Link } from "react-router-dom";
import { useState } from "react";
import Datatable from "../Datatable";

const ClientsDatatable = () => {
  const [data, setData] = useState(clientRows);

  return (
    <Datatable  title="Clientes" link="/clients/new" columns={clientsColumns} rows={data} />
  );
};

export default ClientsDatatable;