import React, { useState, useRef } from "react";
import styled from "styled-components";

const ModalContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  padding: 20px;
  border: 1px solid #ddd;
  z-index: 999;
`;

const ReactionModal = ({ onClose, onAddReaction }) => {
  const [selectedEmoji, setSelectedEmoji] = useState("");
  const [comment, setComment] = useState("");
  const modalRef = useRef(null);

  const emojis = ["😊", "👍", "❤️", "😄", "🎉"]; // Adicione mais emojis conforme necessário

  const handleEmojiSelect = (emoji) => {
    setSelectedEmoji(emoji);
  };

  const handleAddComment = () => {
    onAddReaction(selectedEmoji, comment);
  };

  return (
    <ModalContainer ref={modalRef}>
      <div>
        {emojis.map((emoji) => (
          <button key={emoji} onClick={() => handleEmojiSelect(emoji)}>
            {emoji}
          </button>
        ))}
      </div>
      <textarea
        placeholder="Add a commento (optional)"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <button onClick={handleAddComment}>Add Reaction</button>
      <button onClick={onClose}>Close</button>
    </ModalContainer>
  );
};

export default ReactionModal;
