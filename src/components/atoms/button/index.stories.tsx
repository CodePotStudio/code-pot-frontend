import React from "react";
import Button from ".";

export default {
	title: "Atoms/Button",
	component: [Button],
};
export const Default = () => (
	<>
		<Button variant="primary">로그인</Button>
		<Button variant="secondary">회원가입</Button>
	</>
)
export const PrimaryButton = () => <Button>Primary Button</Button>;
export const SecondaryButton = () => (
	<Button variant="secondary">Secondary Button</Button>
);
export const ButtonWithExternalLink = () => (
	<Button href="http://www.github.com">go to Github</Button>
);
export const ButtonWithInternalLink = () => <Button to="/">go to Main</Button>;
