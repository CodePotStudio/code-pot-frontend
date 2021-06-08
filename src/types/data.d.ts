export type status = "INPROGRESS" | "CLOSED";
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

export interface ChallangeCardType {
	id: string;
	language: language;
	status: status;
	to: string;
	start_at: Date;
}

export interface Challange {
	id: number;
	thumbnail: string;
	name: string;
	remarks: string;
	status: status;
	startDateTime: Date;
	endDateTime: Date;
}
