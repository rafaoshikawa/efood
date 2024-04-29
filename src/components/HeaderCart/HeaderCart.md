# Componente HeaderCart

 Componente responsavel  pela exibição do cabeçalho e do carrinho de compras, incluindo o nome do restaurante, o logo e o número de produtos no carrinho.

## Funcionalidades

- Utiliza uma imagem de fundo para o cabeçalho do carrinho.
- O componente exibe o nome do restaurante como um link para a página inicial.
- O logo do restaurante é exibido como um link para a página inicial.
- Exibe o número de produtos no carrinho como um link para o carrinho de compras.

## Exemplo de Uso

```jsx
import React from "react";
import HeaderCart from "./HeaderCart";

function App() {
  return (
    <div>
      <HeaderCart />
    </div>
  );
}

export default App;
