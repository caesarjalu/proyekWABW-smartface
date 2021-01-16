import React from 'react';
import Tilt from 'react-tilt';
import './Logo.css';
import logo from './logo.png';

const Logo = () => {
	return (
		<div className='f6 f5-l dib'>
            <Tilt className="Tilt br2 shadow-2" options={{ max : 30 }} style={{ height: 50, width: 50 }} >
                <div className="Tilt-inner pa2">
                    <img style={{paddingTop: '1px'}} alt='logo' src={logo}/>
                </div>
            </Tilt>
        </div>
	);
}

export default Logo;