import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../Actions/cartActions";
import HeaderRestaurante from "../HeaderRestaurante";
import {
  Card,
  CardTitle,
  Imagem,
  Description,
  Border,
  Button,
  Grid,
  Modal,
  ModalContent,
  ModalCloseButton,
  ModalTitle,
  ButtonModal,
} from "./style";
import close from "../../assets/images/close.svg";

const PratosRestaurantes = () => {
  const { id } = useParams();
  const [restaurante, setRestaurante] = useState(null);
  const [pratoSelecionado, setPratoSelecionado] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchRestauranteById = async () => {
      try {
        const response = await fetch(
          `https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`,
        );
        const data = await response.json();
        setRestaurante(data);
      } catch (error) {
        console.error("Erro ao buscar detalhes do restaurante:", error);
      }
    };

    fetchRestauranteById();
  }, [id]);

  const openModal = (prato) => {
    setPratoSelecionado(prato);
    setShowModal(true);
  };

  const handleAddToCart = () => {
    dispatch(addToCart(pratoSelecionado));
    setShowModal(false);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  if (!restaurante) {
    return <div className="container">Carregando...</div>;
  }

  return (
    <>
      <HeaderRestaurante
        capa={restaurante.capa}
        titulo={restaurante.titulo}
        tipoComida={restaurante.tipo}
      />
      <div className="container">
        <Grid>
          {restaurante.cardapio.map((prato) => (
            <Card key={prato.id}>
              <Imagem src={prato.foto} alt="Foto do Prato" />
              <Border>
                <CardTitle>{prato.nome}</CardTitle>
                <Description>{prato.descricao}</Description>
                <Button onClick={() => openModal(prato)}>Ver Detalhes</Button>
              </Border>
            </Card>
          ))}
        </Grid>
      </div>
      {showModal && (
        <Modal>
          <ModalContent className="container">
            <ModalCloseButton onClick={closeModal}>
              <img src={close} alt="Botão de Fechar" />
            </ModalCloseButton>
            <img src={pratoSelecionado.foto} alt="Foto do Prato" />
            <div>
              <ModalTitle>{pratoSelecionado.nome}</ModalTitle>
              <p>{pratoSelecionado.descricao}</p>
              <p>Serve de {pratoSelecionado.porcao}</p>
              <ButtonModal onClick={handleAddToCart}>
                Adicionar ao Carrinho - R$ {pratoSelecionado.preco}
              </ButtonModal>
            </div>
          </ModalContent>
        </Modal>
      )}
    </>
  );
};

export default PratosRestaurantes;
