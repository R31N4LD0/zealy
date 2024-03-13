import React, { useState, useRef } from "react";
import styled from "styled-components";

const ModalContainer = styled.div`
  background: #3339;
  border: 1px solid #ddd;
  left: 50%;
  height: 100%;
  padding: 20px;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  z-index: 999;
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  flex-direction: column;
`;

const ReactionModal = ({ onClose, onAddReaction }) => {
  const [selectedEmoji, setSelectedEmoji] = useState("");
  const [clickedEmoji, setClickedEmoji] = useState(false);
  const [comment, setComment] = useState("");
  const modalRef = useRef(null);

  const emojis = ["❤️", "🎉", "👍", "😊", "😄"]; // Adicione mais emojis conforme necessário

  const handleEmojiSelect = (emoji) => {
    setSelectedEmoji(emoji);
    setClickedEmoji(emoji);
  };

  const handleAddComment = () => {
    onAddReaction(selectedEmoji, comment);
  };

  return (
    <ModalContainer ref={modalRef}>
      <div className="comment-emojis">
        {emojis.map((emoji) => (
          <button
            key={emoji}
            onClick={() => handleEmojiSelect(emoji)}
            className={clickedEmoji === emoji ? "selected" : ""}
          >
            {emoji}
          </button>
        ))}
      </div>
      <textarea
        placeholder="Add a comment (optional)"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        className="comment-text"
      />
      <div className="comment-actions">
        <button onClick={handleAddComment}>Add Reaction</button>
        <button onClick={onClose}>Close</button>
      </div>
    </ModalContainer>
  );
};

export default ReactionModal;
