// Checkout.js
import React, { useState } from "react";
import { MenuLateral, Button, ListaMenu, Cep, ContainerButton } from "./style";
import Payment from "../Payment";

function Checkout({ totalCartValue, onBackToCart }) {
  const [deliveryData, setDeliveryData] = useState({
    name: "",
    address: "",
    city: "",
    zip: "",
    number: "",
    complement: ""
  });
  const [showPayment, setShowPayment] = useState(false);

  const handleContinueToPayment = () => {
    if (
      deliveryData.name &&
      deliveryData.address &&
      deliveryData.city &&
      deliveryData.zip &&
      deliveryData.number
    ) {
      setShowPayment(true);
    } else {
      alert("Por favor, preencha todos os campos obrigatórios.");
    }
  };

  return (
    <>
      {!showPayment && (
        <MenuLateral>
          <ListaMenu>
            <p>Entrega</p>
            <label htmlFor="name">Quem irá receber</label>
            <input
              type="text"
              value={deliveryData.name}
              onChange={(e) =>
                setDeliveryData({ ...deliveryData, name: e.target.value })
              }
              required
            />
            <label htmlFor="address">Endereço</label>
            <input
              type="text"
              value={deliveryData.address}
              onChange={(e) =>
                setDeliveryData({ ...deliveryData, address: e.target.value })
              }
              required
            />
            <label htmlFor="city">Cidade</label>
            <input
              type="text"
              value={deliveryData.city}
              onChange={(e) =>
                setDeliveryData({ ...deliveryData, city: e.target.value })
              }
              required
            />
            <Cep>
              <div>
                <label htmlFor="zip">CEP</label>
                <input
                  type="text"
                  value={deliveryData.zip}
                  onChange={(e) =>
                    setDeliveryData({ ...deliveryData, zip: e.target.value })
                  }
                  required
                />
              </div>
              <div>
                <label htmlFor="number">Número</label>
                <input
                  type="number"
                  value={deliveryData.number}
                  onChange={(e) =>
                    setDeliveryData({ ...deliveryData, number: e.target.value })
                  }
                  required
                />
              </div>
            </Cep>
            <label htmlFor="complement">Complemento (opcional)</label>
            <input
              type="text"
              value={deliveryData.complement}
              onChange={(e) =>
                setDeliveryData({ ...deliveryData, complement: e.target.value })
              }
            />
            <ContainerButton>
              <Button onClick={handleContinueToPayment}>
                Continuar com a entrega
              </Button>
              <Button onClick={onBackToCart}>Voltar para o carrinho</Button>
            </ContainerButton>
          </ListaMenu>
        </MenuLateral>
      )}
      {showPayment && (
        <Payment
          totalCartValue={totalCartValue}
          deliveryData={deliveryData}
          onBackToCheckout={() => setShowPayment(false)}
        />
      )}
    </>
  );
}

export default Checkout;
