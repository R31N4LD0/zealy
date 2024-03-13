import React, { useState } from "react";
import styled from "styled-components";
import ReactionModal from "./ReactionModal";

const Button = styled.button`
  position: relative;
  background-color: #3498db;
  color: #fff;
  border: none;
  padding: 10px;
  cursor: pointer;
`;

const ReactionsContainer = styled.div`
  margin-top: 10px;
`;

const Emoji = styled.span`
  margin-right: 5px;
`;

const Comment = styled.div`
  font-style: italic;
  margin-top: 5px;
`;

const ReactionBox = ({ element, reactions, onAddReaction }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleAddReaction = (emoji, comment) => {
    onAddReaction(element.id, emoji, comment);
    closeModal();
  };

  return (
    <>
      <div>
        <div>{element.content}</div>
        <Button onClick={openModal}>Add Comment</Button>
      </div>
      {reactions.length > 0 && (
        <ReactionsContainer>
          {reactions.map((reaction, index) => (
            <div key={index}>
              <Emoji>{reaction.emoji}</Emoji>
              {reaction.comment && <Comment>{reaction.comment}</Comment>}
            </div>
          ))}
        </ReactionsContainer>
      )}
      {modalOpen && (
        <ReactionModal onClose={closeModal} onAddReaction={handleAddReaction} />
      )}
    </>
  );
};

export default ReactionBox;
