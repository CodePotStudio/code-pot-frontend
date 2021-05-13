import React from "react";
import Image from ".";

export default {
	title: "Atoms/Image",
	component: [Image],
};

export const Default = () => (
	<div style={{ display: "flex" }}>
		<Image src="/languages/typescript.svg"></Image>
		<Image src="/languages/javascript.svg"></Image>
		<Image src="/languages/graphql.svg"></Image>
		<Image src="/languages/react.svg"></Image>
		<Image src="/languages/python.svg"></Image>
	</div>
);
