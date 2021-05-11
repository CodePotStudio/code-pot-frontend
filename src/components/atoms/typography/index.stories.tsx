import { H1, H2, H3, H4, H5, H6, Subtitle1, Subtitle2, Body1, Body2 } from ".";

export default {
	title: "Atoms/Typography",
	component: [H1, H2, H3, H4, H5, H6],
};

export const Default = () => (
	<>
		<H1>Heading1</H1>
		<H2>Heading2</H2>
		<H3>Heading3</H3>
		<H4>Heading4</H4>
		<H5>Heading5</H5>
		<H6>Heading6</H6>
		<Subtitle1>subtitle1</Subtitle1>
		<Subtitle2>subtitle2</Subtitle2>
		<Body1>body1</Body1>
		<Body2>body2</Body2>
	</>
);

export const WithDivider = () => <H1 hasBorder={true}>Section Title</H1>;
