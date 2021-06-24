import React from "react";
import Button from ".";
import { ICONS } from "../icon/constants";

export default {
	title: "Atoms/Button",
	component: [Button],
};
export const Default = () => (
	<>
		<Button variant="primary">로그인</Button>
		<Button variant="secondary">회원가입</Button>
	</>
);
export const PrimaryButton = () => <Button>Primary Button</Button>;
export const SecondaryButton = () => (
	<Button variant="secondary">Secondary Button</Button>
);
export const ButtonWithExternalLink = () => (
	<Button href="http://www.github.com">go to Github</Button>
);
export const ButtonWithInternalLink = () => <Button to="/">go to Main</Button>;
export const ButtonWithIcon = () => (
	<Button variant="primary" icon={ICONS.menu}>
		button with icon
	</Button>
);

export const DisableButton = () => (
	<Button disabled={true}>Disabled Button</Button>
);

export const GithubButton = () => (
	<Button variant="github" icon={ICONS.github}>
		github 버튼
	</Button>
);
