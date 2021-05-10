import React from "react";
import CheckBox from ".";

export default {
	title: "Atoms/CheckBox",
	component: [CheckBox],
};

export const Default = () => (
	<CheckBox
		checked={false}
		onClick={() => console.log("Button Clicked")}
	>약관에 동의</CheckBox>
);
