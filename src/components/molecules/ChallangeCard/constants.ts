import { status, language, statusObj, languageObj } from "types/data";

export const StatusSet: Record<status, statusObj> = {
	inProgress: { text: "모집중", variant: "primary" },
	close: { text: "모집완료", variant: "secondary" },
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
