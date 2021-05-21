import Header from ".";

export default {
	title: "Organisms/Header",
	component: [Header],
};

export const LoginStatusHeader = () => <Header isLoggedIn={true} />;
export const LogoutStatusHeader = () => <Header isLoggedIn={false} />;
export const HeaderWithNavless = () => <Header navless={true} />;
