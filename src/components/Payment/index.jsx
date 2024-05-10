// Payment.js
import React, { useState } from "react";
import { MenuLateral, Button, ListaMenu, Cep, ContainerButton } from "./style";
import Sucessfull from "../Sucessfull";
import InputMask from "react-input-mask";

function Payment({ onBackToCheckout, totalCartValue, deliveryData }) {
  const [paymentCompleted, setPaymentCompleted] = useState(false);
  const [cardName, setCardName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [cardCVV, setCardCVV] = useState("");
  const [cardExpMonth, setCardExpMonth] = useState("");
  const [cardExpYear, setCardExpYear] = useState("");
  const [orderId, setOrderId] = useState("");

  const handleFinishPayment = () => {
    const paymentData = {
      products: [
        {
          id: 1,
          price: totalCartValue,
        },
      ],
      delivery: deliveryData,
      payment: {
        card: {
          name: cardName.trim(),
          number: cardNumber.trim(),
          code: parseInt(cardCVV.trim()),
          expires: {
            month: parseInt(cardExpMonth.trim()),
            year: parseInt(cardExpYear.trim()),
          },
        },
      },
    };

    fetch("https://fake-api-tau.vercel.app/api/efood/checkout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(paymentData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Resposta da API:", data);
        if (data.orderId) {
          setOrderId(data.orderId);
          setPaymentCompleted(true);
        } else {
          alert(
            "O pagamento não pôde ser concluído. Por favor, tente novamente.",
          );
        }
      })
      .catch((error) => {
        console.error("Erro ao enviar requisição:", error);
        alert(
          "Ocorreu um erro ao processar o pagamento. Por favor, tente novamente.",
        );
      });
  };

  return (
    <MenuLateral>
      <ListaMenu>
        <p>Pagamento - Valor a pagar R$ {totalCartValue.toFixed(2)}</p>
        <label htmlFor="name">Nome no cartão</label>
        <input
          type="text"
          value={cardName}
          onChange={(e) => setCardName(e.target.value)}
          required
        />
        <Cep>
          <div>
            <label htmlFor="numberCard">Número do cartão</label>
            <InputMask
              mask="9999 9999 9999 9999"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="CVV">CVV</label>
            <InputMask
              mask="999"
              value={cardCVV}
              onChange={(e) => setCardCVV(e.target.value)}
              required
            />
          </div>
        </Cep>
        <Cep>
          <div>
            <label htmlFor="vencimento">Mês de vencimento</label>
            <InputMask
              mask="99"
              value={cardExpMonth}
              onChange={(e) => setCardExpMonth(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="year">Ano de vencimento</label>
            <InputMask
              mask="9999"
              value={cardExpYear}
              onChange={(e) => setCardExpYear(e.target.value)}
              required
            />
          </div>
        </Cep>
        <ContainerButton>
          <Button onClick={handleFinishPayment}>Finalizar pagamento</Button>
          <Button onClick={onBackToCheckout}>
            Voltar para a edição de endereço
          </Button>
        </ContainerButton>
      </ListaMenu>
      {paymentCompleted && <Sucessfull orderId={orderId} />}
    </MenuLateral>
  );
}

export default Payment;
