import ContentContainer from ".";

export default {
	title: "Container/Content Container",
	component: [ContentContainer],
};

export const Default = () => <ContentContainer>Hello</ContentContainer>;
export const ContainerWithBackgroundColor = () => (
	<ContentContainer backgroundColor="gray">Hello</ContentContainer>
);
