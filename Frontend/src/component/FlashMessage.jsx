// FlashMessage.js
import React from 'react';

const FlashMessage = ({ message, onClose }) => {
  return (
    <div className="fixed top-4 right-4 bg-green-500 text-white p-4 rounded shadow-lg transition-all duration-300 ease-in-out">
      <div className="flex justify-between items-center">
        <span>{message}</span>
        <button onClick={onClose} className="ml-4 text-white">
          &times;
        </button>
      </div>
    </div>
  );
};

export default FlashMessage;
