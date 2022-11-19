import "../datatable.scss";
import { projectColumns, projectsRows } from "../../../datatablesource";
import { useState } from "react";
import Datatable from "../Datatable";

const ProjectsDatatable = () => {
  const [data, setData] = useState(projectsRows);

  return (
    <Datatable  title="Productos" link="/products/new" columns={projectColumns} rows={data} />
  );
};

export default ProjectsDatatable;