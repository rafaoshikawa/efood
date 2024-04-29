# Componente HeaderRestaurante

Eu criei este componente para exibir o cabeçalho de um restaurante, incluindo sua capa, título e tipo de comida.

## Funcionalidades

- O componente recebe as seguintes propriedades:
  - `capa`: A URL da imagem de capa do restaurante.
  - `titulo`: O título do restaurante.
  - `tipoComida`: O tipo de comida oferecido pelo restaurante.

- Utiliza uma div com a classe `.container` para centralizar o conteúdo dentro da capa.
- O título do restaurante é exibido usando o componente `FontTitle`.
- O tipo de comida oferecido pelo restaurante é exibido usando o componente `FontSubTittle`.

## Exemplo de Uso

```jsx
import React from "react";
import HeaderRestaurante from "./HeaderRestaurante";

function App() {
  return (
    <div>
      <HeaderRestaurante
        capa="url_da_imagem.jpg"
        titulo="Nome do Restaurante"
        tipoComida="Tipo de Comida"
      />
    </div>
  );
}

export default App;
