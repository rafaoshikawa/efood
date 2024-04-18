import HiokiSushi from "../HiokiSushi";
import LaDolceVita from "../LaDolceVita";

import { Grid } from "./style";
const ListaProdutos = () => {
  return (
    <div className="container">
      <Grid>
        <HiokiSushi />
        <LaDolceVita />
        <HiokiSushi />
        <LaDolceVita />
        <HiokiSushi />
        <LaDolceVita />
      </Grid>
    </div>
  );
};

export default ListaProdutos;
