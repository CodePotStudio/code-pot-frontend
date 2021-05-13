import React from "react";
import Logo from ".";

export default {
	title: "Atoms/Logo",
	component: [Logo],
};

export const DefaultLogo = () => <Logo></Logo>;
export const LogoWithSize = () => <Logo height={200}></Logo>;
export const WhiteLogo = () => (
	<div style={{ backgroundColor: "black" }}>
		<Logo color="white"></Logo>
	</div>
);
