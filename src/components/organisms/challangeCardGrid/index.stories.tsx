import ChallangeCardGrid from ".";
import { CHCardProps } from "components/molecules/ChallangeCard";
import { ChallangeStatus } from "types/graphql/generated-types";

export default {
	title: "Organisms/Challange Card Grid",
	component: [ChallangeCardGrid],
};

const sampleCards: CHCardProps[] = [
	{
		id: 1,
		status: ChallangeStatus.Preparing,
		remarks: "단단한 javascript를 만들고 싶다면",
		name: "typescript",
		thumbnail: "/languages/typescript.svg",
		startDateTime: new Date(),
		endDateTime: new Date(),
	},
	{
		id: 2,
		status: ChallangeStatus.Inprogress,
		remarks: "단단한 javascript를 만들고 싶다면",
		name: "python",
		thumbnail: "/languages/python.svg",
		startDateTime: new Date(),
		endDateTime: new Date(),
	},
	{
		id: 3,
		status: ChallangeStatus.RecruitmentClosed,
		remarks: "단단한 javascript를 만들고 싶다면",
		name: "graphql",
		thumbnail: "/languages/graphql.svg",
		startDateTime: new Date(),
		endDateTime: new Date(),
	},
	{
		id: 4,
		status: ChallangeStatus.Recruiting,
		remarks: "단단한 javascript를 만들고 싶다면",
		name: "react",
		thumbnail: "/languages/react.svg",
		startDateTime: new Date(),
		endDateTime: new Date(),
	},
	{
		id: 5,
		status: ChallangeStatus.Closed,
		remarks: "단단한 javascript를 만들고 싶다면",
		name: "react",
		thumbnail: "/languages/react.svg",
		startDateTime: new Date(),
		endDateTime: new Date(),
	},
];

export const Default = () => <ChallangeCardGrid CHCards={sampleCards} />;
export const LoadingData = () => <ChallangeCardGrid loading={true} />;
