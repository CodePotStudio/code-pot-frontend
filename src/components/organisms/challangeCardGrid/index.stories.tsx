import ChallangeCardGrid from ".";
import { CHCardProps } from "components/molecules/ChallangeCard";

export default {
	title: "Organisms/Challange Card Grid",
	component: [ChallangeCardGrid],
};

const sampleCards: CHCardProps[] = [
	{
		key: 1,
		language: "typescript",
		status: "close",
		start_at: new Date(),
		to: "/",
	},
	{
		key: 2,
		language: "python",
		status: "inProgress",
		start_at: new Date(),
		to: "/",
	},
	{
		key: 3,
		language: "graphql",
		status: "close",
		start_at: new Date(),
		to: "/",
	},
	{
		key: 4,
		language: "react",
		status: "inProgress",
		start_at: new Date(),
		to: "/",
	},
	{
		key: 5,
		language: "typescript",
		status: "inProgress",
		start_at: new Date(),
		to: "/",
	},
];

export const Default = () => <ChallangeCardGrid CHCards={sampleCards} />;
