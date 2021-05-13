import React from "react";
import Badge from ".";

export default {
	title: "Atoms/Badge",
	component: [Badge],
};

export const PrimaryBadge = () => <Badge>Primary Badge</Badge>;
export const SecondaryBadge = () => (
	<Badge variant="secondary">Secondary Badge</Badge>
);
export const WarningBadge = () => (
	<Badge variant="warning">Warning Badge</Badge>
);
export const AlertBadge = () => <Badge variant="alert">Alert Badge</Badge>;
