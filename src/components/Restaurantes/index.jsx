import React, { useState, useEffect } from "react";
import nota from "../../assets/images/nota.svg";
import {
  Card,
  CardTitle,
  Description,
  Border,
  Button,
  ContainerTag,
  Prato,
  Grid,
  Avaliacao,
} from "./style";
import { Link } from "react-router-dom";

const Restaurantes = () => {
  const [restaurantes, setRestaurantes] = useState([]);
  const [erro, setErro] = useState(null);

  useEffect(() => {
    const fetchRestaurantes = async () => {
      try {
        const response = await fetch(
          "https://fake-api-tau.vercel.app/api/efood/restaurantes",
        );
        if (!response.ok) {
          throw new Error("Erro ao buscar restaurantes");
        }
        const data = await response.json();
        setRestaurantes(data);
      } catch (error) {
        console.error("Erro ao buscar restaurantes:", error.message);
        setErro(
          "Não foi possível carregar os restaurantes. Por favor, tente novamente mais tarde.",
        );
      }
    };

    fetchRestaurantes();
  }, []);

  return (
    <>
      {erro && <p>{erro}</p>}
      <Grid className="container">
        {restaurantes.map((restaurante, index) => (
          <Card key={restaurante.id}>
            <Prato src={restaurante.capa} alt={restaurante.titulo} />
            <Border>
              <CardTitle>
                <h3>{restaurante.titulo}</h3>
                <Avaliacao>
                  <span>{restaurante.avaliacao}</span>
                  <img src={nota} alt="avaliação" />
                </Avaliacao>
                <ContainerTag>
                  {index === 0 && <span>Em Destaque</span>}
                  <span>{restaurante.tipo}</span>
                </ContainerTag>
              </CardTitle>
              <Description>{restaurante.descricao}</Description>
              <Link to={`/restaurantes/${restaurante.id}`}>
                <Button>Saiba Mais</Button>
              </Link>
            </Border>
          </Card>
        ))}
      </Grid>
    </>
  );
};

export default Restaurantes;
