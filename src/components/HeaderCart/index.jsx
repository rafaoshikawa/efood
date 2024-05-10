import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
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
import { removeFromCart } from "../Actions/cartActions";
import Checkout from "../Checkout";

function HeaderCart() {
  const [menuAberto, setMenuAberto] = useState(false);
  const [showCheckout, setShowCheckout] = useState(false);
  const carrinho = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const totalCartValue = carrinho.reduce((total, item) => total + item.preco, 0);

  const toggleMenu = () => {
    setMenuAberto(!menuAberto);
  };

  const handleDeleteItem = (index) => {
    dispatch(removeFromCart(index));
  };

  const handleContinueToCheckout = () => {
    setShowCheckout(true);
  };

  const handleBackToCart = () => {
    setShowCheckout(false);
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
            <p>R${totalCartValue.toFixed(2)}</p>
          </ContainerPrice>
          <Button onClick={handleContinueToCheckout}>
            Continuar com a entrega
          </Button>{" "}
        </MenuLateral>
      )}
      {showCheckout && <Checkout totalCartValue={totalCartValue} onBackToCart={handleBackToCart} />}
    </>
  );
}

export default HeaderCart;
