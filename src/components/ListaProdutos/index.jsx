import Destaque from "../Destaque";
import HiokiSushi from "../HiokiSushi";
import LaDolceVita from "../LaDolceVita";

import { Grid } from "./style";
const ListaProdutos = () => {
  return (
    <div className="container">
      <Grid>
        <Destaque />
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
