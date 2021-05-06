import React from "react";
import Icon from ".";
import { ICONS } from "./constants";

export default {
	title: "Atoms/Icon",
	component: [Icon],
};

export const Icons = () => (
	<div>
		<Icon name={ICONS.github}></Icon>
		<Icon name={ICONS.chevronDown}></Icon>
		<Icon name={ICONS.chevronRight}></Icon>
		<Icon name={ICONS.copy}></Icon>
		<Icon name={ICONS.menu}></Icon>
		<Icon name={ICONS.warning}></Icon>
	</div>
);

export const IconWithSize = () => <Icon name={ICONS.menu} size={24}></Icon>;
