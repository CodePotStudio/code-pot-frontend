import NavigationMenu from ".";

export default {
	title: "Mocules/Navigation Menu",
	component: [NavigationMenu],
};

export const Default = () => (
	<div style={{ display: "flex", justifyContent: "flex-end" }}>
		<NavigationMenu></NavigationMenu>
	</div>
);
