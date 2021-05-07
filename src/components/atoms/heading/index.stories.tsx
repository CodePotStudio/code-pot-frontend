import Heading from ".";

export default {
	title: "Atoms/Heading",
	component: [Heading],
};

export const Default = () => (
	<>
		<Heading variant="PageTitle">Page Title</Heading>
		<Heading variant="SectionTitle">Section Title</Heading>
		<Heading variant="SubTitle">SubTitle</Heading>
	</>
);

export const WithDivider = () => (
	<Heading variant="SectionTitle" hasBorder={true}>
		Section Title
	</Heading>
);
