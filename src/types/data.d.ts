export type status = "inProgress" | "close";
export type language =
	| "typescript"
	| "react"
	| "javascript"
	| "python"
	| "graphql";

type statusObj = {
	text: string;
	variant: variant;
};

type languageObj = {
	src: string;
	title: string;
	desc: string;
};

export type variant = "primary" | "secondary" | "warning" | "alert";

export interface ChallangeCard {
	key: number;
	language: language;
	status: status;
	to: string;
	start_at: Date;
}
