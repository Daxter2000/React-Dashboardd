import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { useState } from "react";

const Datatable = ({title, link, columns, rows}) => {
  const [data, setData] = useState(rows);

  return (
    <div className="datatable">
      <div className="datatableTitle">
        {title}
        <Link to={link} className="link">
          Add New
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={data}
        columns={columns}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  );
};

export default Datatable;