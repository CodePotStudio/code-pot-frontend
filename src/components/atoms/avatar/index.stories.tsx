import React from "react";
import Avatar from ".";

export default {
	title: "Atoms/Avatar",
	component: [Avatar],
};

export const AvatarWithImage = () => (
	<Avatar
		src="https://avatars1.githubusercontent.com/u/3426196?v=4"
		alt="avatar Image"
		onClick={() => console.log("hello")}
	></Avatar>
);
export const AvatarWithDefaultImage = () => (
	<Avatar alt="avatar with default Image"></Avatar>
);
export const AvatarWithSize = () => (
	<Avatar alt="avatar Image" size={200}></Avatar>
);
