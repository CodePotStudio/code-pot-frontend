import { Header } from ".";

export default {
	title: "Organisms/Header",
	component: [Header],
};

export const LoginStatusHeader = () => (
	<Header
		session={{
			user: {
				email: "abc",
				id: 123,
				name: "kim",
				image: "temp",
				isActive: true,
			},
			accessToken: "abcd",
		}}
	/>
);
export const LogoutStatusHeader = () => <Header />;
