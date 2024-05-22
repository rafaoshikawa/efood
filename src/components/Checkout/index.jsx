import React, { useState } from "react";
import { MenuLateral, Button, ListaMenu, Cep, ContainerButton } from "./style";
import Payment from "../Payment";
import InputMask from "react-input-mask";

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
  const [errors, setErrors] = useState({});

  const validateFields = () => {
    const newErrors = {};

    if (!deliveryData.name) newErrors.name = "Quem irá receber é obrigatório.";
    if (!deliveryData.address) newErrors.address = "Endereço é obrigatório.";
    if (!deliveryData.city) newErrors.city = "Cidade é obrigatória.";
    if (!deliveryData.zip || !/^\d{5}-\d{3}$/.test(deliveryData.zip)) newErrors.zip = "CEP inválido.";
    if (!deliveryData.number) newErrors.number = "Número é obrigatório.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleContinueToPayment = () => {
    if (validateFields()) {
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
              style={{ borderColor: errors.name ? "green" : "" }}
              required
            />
            {errors.name && <span style={{ color: "green" }}>{errors.name}</span>}
            <label htmlFor="address">Endereço</label>
            <input
              type="text"
              value={deliveryData.address}
              onChange={(e) =>
                setDeliveryData({ ...deliveryData, address: e.target.value })
              }
              style={{ borderColor: errors.address ? "green" : "" }}
              required
            />
            {errors.address && <span style={{ color: "green" }}>{errors.address}</span>}
            <label htmlFor="city">Cidade</label>
            <input
              type="text"
              value={deliveryData.city}
              onChange={(e) =>
                setDeliveryData({ ...deliveryData, city: e.target.value })
              }
              style={{ borderColor: errors.city ? "green" : "" }}
              required
            />
            {errors.city && <span style={{ color: "green" }}>{errors.city}</span>}
            <Cep>
              <div>
                <label htmlFor="zip">CEP</label>
                <InputMask
                  mask="99999-999"
                  value={deliveryData.zip}
                  onChange={(e) =>
                    setDeliveryData({ ...deliveryData, zip: e.target.value })
                  }
                  style={{ borderColor: errors.zip ? "green" : "" }}
                  required
                />
                {errors.zip && <span style={{ color: "green" }}>{errors.zip}</span>}
              </div>
              <div>
                <label htmlFor="number">Número</label>
                <input
                  type="number"
                  value={deliveryData.number}
                  onChange={(e) =>
                    setDeliveryData({ ...deliveryData, number: e.target.value })
                  }
                  style={{ borderColor: errors.number ? "green" : "" }}
                  required
                />
                {errors.number && <span style={{ color: "green" }}>{errors.number}</span>}
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
