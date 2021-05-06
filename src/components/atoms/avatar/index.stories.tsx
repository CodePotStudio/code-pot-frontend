import React from "react";
import Avatar from ".";

export default {
	title: "Atoms/Avatar",
	component: [Avatar],
};

export const AvatarWithImage = () => (
	<Avatar
		src="https://avatars1.githubusercontent.com/u/3426196?v=4"
		alt="avatar"
	></Avatar>
);

export const AvatarWithSize = () => (
	<Avatar
		src="https://avatars1.githubusercontent.com/u/3426196?v=4"
		alt="avatar"
		size="100px"
	></Avatar>
);
