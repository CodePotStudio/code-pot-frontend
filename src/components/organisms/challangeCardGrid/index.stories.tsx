import ChallangeCardGrid from ".";
import { CHCardProps } from "components/molecules/ChallangeCard";

export default {
	title: "Organisms/Challange Card Grid",
	component: [ChallangeCardGrid],
};

const sampleCards: CHCardProps[] = [
	{
		id: 1,
		language: "typescript",
		status: "close",
		start_at: new Date(),
		to: "/",
	},
	{
		id: 2,
		language: "python",
		status: "inProgress",
		start_at: new Date(),
		to: "/",
	},
	{
		id: 3,
		language: "graphql",
		status: "close",
		start_at: new Date(),
		to: "/",
	},
	{
		id: 4,
		language: "react",
		status: "inProgress",
		start_at: new Date(),
		to: "/",
	},
	{
		id: 5,
		language: "typescript",
		status: "inProgress",
		start_at: new Date(),
		to: "/",
	},
];

export const Default = () => <ChallangeCardGrid CHCards={sampleCards} />;
