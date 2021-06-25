export type language =
	| "typescript"
	| "react"
	| "javascript"
	| "python"
	| "graphql";

type languageObj = {
	src: string;
	title: string;
	desc: string;
};

export type variant = "primary" | "secondary" | "warning" | "alert";
