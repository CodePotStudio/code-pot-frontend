import AuthContainer from ".";

export default {
	title: "Container/Auth Container",
	component: [AuthContainer],
};

export const Default = () => <AuthContainer>Hello</AuthContainer>;
export const ContainerWithBackgroundColor = () => (
	<AuthContainer backgroundColor="gray">Hello</AuthContainer>
);
