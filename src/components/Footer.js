import React from 'react';

const Footer = ({ language }) => {
  const footerText = {
    en: '&copy; 2024 Uzhavu. All rights reserved.',
    ta: '&copy; 2024 உழவு. அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டுள்ளன.',
  };

  return (
    <div className="bg-black text-gray-400 py-4 text-center">
      <p>{footerText[language]}</p>
    </div>
  );
};

export default Footer;
