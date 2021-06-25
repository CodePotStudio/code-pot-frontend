import React from "react";
import CheckBox from ".";

export default {
	title: "Atoms/CheckBox",
	component: [CheckBox],
};

export const Default = () => (
	<CheckBox
		label="약관 동의하기"
		name="agreement"
		onChange={() => console.log("hello")}
	></CheckBox>
);
export const DefaultCheckedBox = () => (
	<CheckBox
		label="약관 동의"
		defaultChecked={true}
		name="agreement"
		onChange={() => console.log("hello")}
	></CheckBox>
);
