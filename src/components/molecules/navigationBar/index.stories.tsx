import NavigationBar from ".";

export default {
	title: "Mocules/Navigation Bar",
	component: [NavigationBar],
};

export const Default = () => (
	<div style={{ display: "flex", justifyContent: "flex-end" }}>
		<NavigationBar></NavigationBar>
	</div>
);

export const LoginStatus = () => (
	<div style={{ display: "flex", justifyContent: "flex-end" }}>
		<NavigationBar
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
		></NavigationBar>
	</div>
);
