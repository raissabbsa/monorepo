import React from 'react';

function SubmitButton({ text }) {
  return <button type="submit" className="bg-blue-600 hover:bg-blue-700 transition-colors duration-200 text-white font-semibold py-3 px-6 rounded-lg w-full mt-6 shadow-sm">{text}</button>;
}

export default SubmitButton;
