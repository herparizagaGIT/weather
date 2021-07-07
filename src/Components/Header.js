import React  from 'react';
import WEATHER_LOGO from './img/WEATHER_LOGO.png';

const Header = () => (
    <header>
        <h1>LA APP DEL CLIMA</h1>
        <img src={WEATHER_LOGO} alt='WEATHER_LOGO' width="100"/>
    </header>
);

export default Header;