import React, { useState } from 'react';
import logo from '../assets/lipetsk-logo.png'; // Убедитесь, что логотип доступен
import './CityHeader.css'; // Убедитесь, что файл стилей доступен

const CityHeader = () => {
  const [subtitle, setSubtitle] = useState('Исследуйте достопримечательности и историю');
  const [title, setTitle] = useState('Липецк: Интерактивный город');

  const toggleSubtitle = () => {
    setSubtitle(
      subtitle === 'Исследуйте достопримечательности и историю'
        ? 'Добро пожаловать в Липецк!'
        : 'Исследуйте достопримечательности и историю'
    );
  };

  const toggleTitle = () => {
    setTitle(
      title === 'Липецк: Интерактивный город'
        ? 'Lipetsk Interactive'
        : 'Липецк: Интерактивный город'
    );
  };

  return (
    <header>
      <div className="header-container">
        <img src={logo} alt="Липецк Логотип" className="logo" />
        <div className="header-content">
          <h1>{title}</h1>
          <p>{subtitle}</p>
          <div className="button-group">
            <button onClick={toggleTitle}>from Lipetsk with love</button>
            <button onClick={toggleSubtitle}>Давай начнем!</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default CityHeader;