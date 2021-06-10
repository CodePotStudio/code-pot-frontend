import { language, languageObj, variant } from "types/data";
import { ChallangeStatus } from "types/graphql/generated-types";

type statusObj = {
	text: string;
	variant: variant;
};

export const StatusSet: Record<ChallangeStatus, statusObj> = {
	INPROGRESS: { text: "진행중", variant: "primary" },
	CLOSED: { text: "진행완료", variant: "secondary" },
	RECRUITING: { text: "모집중", variant: "alert" },
	PREPARING: { text: "모집준비중", variant: "primary" },
	RECRUITMENT_CLOSED: { text: "모집완료", variant: "secondary" },
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
