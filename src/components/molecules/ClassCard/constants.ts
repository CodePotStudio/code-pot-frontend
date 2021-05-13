import { badgeVariant } from "../../atoms/badge/style";

export type status = "inProgress" | "close";
export type language =
	| "typescript"
	| "react"
	| "javascript"
	| "python"
	| "graphql";

type statusObj = {
	text: string;
	variant: badgeVariant;
};

export const StatusSet: Record<status, statusObj> = {
	inProgress: { text: "모집중", variant: "primary" },
	close: { text: "모집완료", variant: "secondary" },
};

type languageObj = {
	src: string;
	title: string;
	desc: string;
};

export const LanguageSet: Record<language, languageObj> = {
	typescript: {
		src: "/languages/typescript.svg",
		title: "typescript 챌린지",
		desc: "단단한 javascript 코드가 만들고 싶다면?",
	},
	react: {
		src: "/languages/react.svg",
		title: "React 챌린지",
		desc: "단단한 javascript 코드가 만들고 싶다면?",
	},
	javascript: {
		src: "/languages/javascript.svg",
		title: "javascript 챌린지",
		desc: "단단한 javascript 코드가 만들고 싶다면?",
	},
	python: {
		src: "/languages/python.svg",
		title: "python 챌린지",
		desc: "단단한 javascript 코드가 만들고 싶다면?",
	},
	graphql: {
		src: "/languages/graphql.svg",
		title: "graphql 챌린지",
		desc: "단단한 javascript 코드가 만들고 싶다면?",
	},
};
