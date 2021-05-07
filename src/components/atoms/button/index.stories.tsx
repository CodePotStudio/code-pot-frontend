import React from "react";
import Button from ".";

export default {
	title: "Atoms/Button",
	component: [Button],
};

export const PrimaryButton = () => <Button>Primary Button</Button>;
export const SecondaryButton = () => (
	<Button variant="secondary">Secondary Button</Button>
);
export const ButtonWithExternalLink = () => (
	<Button href="http://www.github.com">go to Github</Button>
);
export const ButtonWithInternalLink = () => <Button to="/">go to Main</Button>;
