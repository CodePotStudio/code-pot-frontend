import { Heading, Body1, Body2, Caption } from ".";

export default {
	title: "Atoms/Typography",
	component: [Heading],
};

export const Default = () => (
	<>
		<Heading variant="h1">Heading1</Heading>
		<Heading variant="h2">Heading2</Heading>
		<Heading variant="h3">Heading3</Heading>
		<Heading variant="h4">Heading4</Heading>
		<Heading variant="h5">Heading5</Heading>
		<Heading variant="h6">Heading6</Heading>
		<Heading variant="subtitle1">subTitle1</Heading>
		<Heading variant="subtitle2">subTitle2</Heading>
		<Body1>body1</Body1>
		<Body2>body2</Body2>
		<Caption>caption</Caption>
	</>
);

export const WithDivider = () => (
	<Heading variant="h1" hasBorder={true}>
		Section Title
	</Heading>
);
