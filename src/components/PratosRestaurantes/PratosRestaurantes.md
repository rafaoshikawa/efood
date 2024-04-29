# Componente DetalhesRestaurante

Eu criei este componente para exibir os detalhes de um restaurante, incluindo seu cardápio e a opção de adicionar pratos ao carrinho.

## Funcionalidades

- Utiliza o hook `useParams` do React Router para obter o ID do restaurante da URL.
- Utiliza o hook `useState` para gerenciar o estado do restaurante, do prato selecionado e da exibição do modal.
- Utiliza o hook `useEffect` para buscar os detalhes do restaurante com base no ID fornecido.
- Exibe a capa, o título e o tipo de comida do restaurante utilizando o componente `HeaderRestaurante`.
- Exibe o cardápio do restaurante, permitindo que o usuário adicione pratos ao carrinho.
- Ao clicar no botão "Adicionar ao Carrinho" de um prato, abre um modal com os detalhes do prato selecionado.
- No modal, o usuário pode ver a foto, nome, descrição, porção e preço do prato, e tem a opção de adicioná-lo ao carrinho.

## Exemplo de Uso

```jsx
import React from "react";
import PratosRestaurantes from "./PratosRestaurantes";

function App() {
  return (
    <div>
      <PratosRestaurantes />
    </div>
  );
}

export default App;
