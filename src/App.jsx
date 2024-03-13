import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ReactionButton from "./components/ReactionBox";

const AppContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 10px;
  padding: 20px;
`;

const mockElements = [
  { id: 1, content: "First Comment 1" },
  { id: 2, content: "Second Comment 2" },
  { id: 3, content: "Third Comment 3" },
  { id: 4, content: "Fourth Comment 4" },
  // Adicione mais elementos conforme necessário
];

function App() {
  const [reactions, setReactions] = useState([]);

  // Carregar reações salvas ao montar o componente
  useEffect(() => {
    const storedReactions = JSON.parse(localStorage.getItem("reactions")) || [];
    setReactions(storedReactions);
  }, []);

  // Adicionar reação e atualizar localStorage
  const addReaction = (elementId, emoji, comment) => {
    const newReaction = { elementId, emoji, comment };
    const updatedReactions = [...reactions, newReaction];
    setReactions(updatedReactions);
    localStorage.setItem("reactions", JSON.stringify(updatedReactions));
  };

  return (
    <AppContainer>
      {mockElements.map((element) => (
        <ReactionButton
          key={element.id}
          element={element}
          reactions={reactions.filter((r) => r.elementId === element.id)}
          onAddReaction={addReaction}
        />
      ))}
    </AppContainer>
  );
}

export default App;
