import React from "react";
import { MenuLateral, Button, ListaMenu, Text } from "./style";

function Sucessfull({ orderId }) {
  return (
    <MenuLateral>
      <ListaMenu>
        <h4>Pedido realizado - {orderId} </h4>
        <Text>
          Estamos felizes em informar que seu pedido já está em processo de
          preparação e, em breve, será entregue no endereço fornecido.
          <br />
          <br />
          Gostaríamos de ressaltar que nossos entregadores não estão autorizados
          a realizar cobranças extras.
          <br />
          <br />
          Lembre-se da importância de higienizar as mãos após o recebimento do
          pedido, garantindo assim sua segurança e bem-estar durante a refeição.
          <br />
          <br />
          Esperamos que desfrute de uma deliciosa e agradável experiência
          gastronômica. Bom apetite!
        </Text>
        <Button href="/">Concluir</Button>
      </ListaMenu>
    </MenuLateral>
  );
}

export default Sucessfull;
