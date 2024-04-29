# Componente Restaurantes

O componente `Restaurantes` é responsável por renderizar todos os restaurantes disponíveis na API.

## Funcionalidades

- Utiliza um loop `restaurantes.map` para percorrer todos os restaurantes retornados pela API.
- Utiliza os hooks `useState` e `useEffect` para gerenciar o estado dos restaurantes e lidar com efeitos colaterais, como a busca e atualização dos dados dos restaurantes.
- Na função `fetchRestaurantes`, realiza uma requisição assíncrona utilizando `fetch` para obter os dados da API de restaurantes. Se a resposta da API não estiver OK, lança um erro. Caso contrário, os dados são convertidos para JSON e o estado dos restaurantes é atualizado.
- Os dados dos restaurantes são então renderizados dentro do elemento `Grid` usando o método `map`. Para cada restaurante, é criado um componente `Card` que exibe as informações do restaurante, como título, avaliação, tipo e descrição. O `id` de cada restaurante é utilizado como chave única para cada `Card`.
- Se houver um erro durante a busca dos dados dos restaurantes, é exibida uma mensagem de erro para o usuário.

## Exemplo de Uso

```jsx
import React from "react";
import Restaurantes from "./Restaurantes";

function App() {
  return (
    <div>
      <h1>Lista de Restaurantes</h1>
      <Restaurantes />
    </div>
  );
}

export default App;
```

## Props
- Este componente não aceita props.


