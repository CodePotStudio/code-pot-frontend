import NavigationBar from ".";

export default {
	title: "Mocules/Navigation Bar",
	component: [NavigationBar],
};

export const Default = () => (
	<div style={{ display: "flex", justifyContent: "flex-end" }}>
		<NavigationBar isLoggedIn={false}></NavigationBar>
	</div>
);

export const LoginStatus = () => (
	<div style={{ display: "flex", justifyContent: "flex-end" }}>
		<NavigationBar isLoggedIn={true}></NavigationBar>
	</div>
);
