import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux"; // Importe o useDispatch para enviar a ação para o Redux
import logo from "../../assets/images/logo.png";
import trash from "../../assets/images/trash.svg";
import fundo from "../../assets/images/fundo.png";
import {
  Imagem,
  FontTitle,
  MenuLateral,
  FecharMenuBtn,
  Button,
  ContainerPrice,
  ListaMenu,
  ItemMenu,
  ItemInfo,
  ItemImage,
  Delete,
} from "./style";
import { removeFromCart } from "../Actions/cartActions"; // Importe a ação para remover do carrinho

function HeaderCart() {
  const [menuAberto, setMenuAberto] = useState(false);
  const carrinho = useSelector((state) => state.cart.items); // Acessa o estado global do carrinho
  const dispatch = useDispatch(); // Obtenha a função dispatch do Redux

  const toggleMenu = () => {
    setMenuAberto(!menuAberto);
  };

  // Função para deletar um item do carrinho
  const handleDeleteItem = (index) => {
    dispatch(removeFromCart(index)); // Dispara a ação para remover o item do carrinho
  };

  return (
    <>
      <Imagem style={{ backgroundImage: `url(${fundo})` }}>
        <div className="container">
          <FontTitle href="/">Restaurantes</FontTitle>
          <a href="/">
            <img src={logo} alt="logo" />
          </a>
          <p onClick={toggleMenu}>
            <FontTitle>{carrinho.length} produto(s) no carrinho</FontTitle>
          </p>
        </div>
      </Imagem>
      {menuAberto && (
        <MenuLateral>
          <FecharMenuBtn onClick={toggleMenu}>X</FecharMenuBtn>
          <ListaMenu>
            {carrinho.map((item, index) => (
              <ItemMenu key={index}>
                <ItemImage src={item.foto} alt="Imagem do Produto" />
                <ItemInfo>
                  <p>{item.nome}</p>
                  <span>R$ {item.preco}</span>
                </ItemInfo>
                {/* Adicione o evento onClick para deletar o item */}
                <Delete
                  src={trash}
                  alt="Delete"
                  onClick={() => handleDeleteItem(index)}
                />
              </ItemMenu>
            ))}
          </ListaMenu>
          <ContainerPrice>
            <p>Valor Total</p>
            <p>
              R${" "}
              {carrinho
                .reduce((total, item) => total + item.preco, 0)
                .toFixed(2)}
            </p>
          </ContainerPrice>
          <Button>Continuar com a entrega</Button>
        </MenuLateral>
      )}
    </>
  );
}

export default HeaderCart;
