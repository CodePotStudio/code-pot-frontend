import { Header } from ".";

export default {
	title: "Organisms/Header",
	component: [Header],
};

export const LoginStatusHeader = () => <Header session={{}} />;
export const LogoutStatusHeader = () => <Header />;
export const HeaderWithNavless = () => <Header navless={true} />;
