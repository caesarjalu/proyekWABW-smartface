import React from 'react';
import Logo from '../Logo/Logo';

const Navigation = ({onRouteChange, isSignedIn}) => {
	if( isSignedIn){
		return (
			<nav class="dt w-100 border-box pa3 ph4-l" style={{position: 'sticky', top: 0}}>
				<div class="db dtc-m v-mid w-10 tc tl-l">
					<Logo />
				</div>
				<div class="dtc v-mid w-80 tc tl-l">
					<b class="link dim dark-gray f3 dib ml3 mr4-l">SMART FACE</b>
				</div>
				<div class="dtc v-mid w-25 tc tr-l">
					<p onClick={() => onRouteChange('signout')} className="link dim dark-gray f6 f5-l dib pointer">Sign Out</p>
				</div>
			</nav>
		);
	} else {
		return (
			<nav class="dt w-100 border-box pa3 ph4-l" style={{position: 'sticky', top: 0}}>
			<div class="db dtc-m v-mid w-10 tc tl-l">
				<Logo />
			</div>
			<div class="dtc v-mid w-80 tc tl-l">
				<b class="link dim dark-gray f3 dib ml3 mr4-l">SMART FACE</b>
			</div>
			<div class="dtc v-mid w-10 tc tr-l">
				<p onClick={() => onRouteChange('signin')} className="link dim dark-gray f6 f5-l dib pointer">Sign In</p>
			</div>
			<div class="dtc v-mid w-10 tc tc-l">
				<p onClick={() => onRouteChange('register')} className="link dim dark-gray f6 f5-l dib pointer pr-3">Register</p>
			</div>
		</nav>
		);
	}
}

export default Navigation;