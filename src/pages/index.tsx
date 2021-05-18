import {
	MainPageTemplate,
	Hero,
	CHCardGrid,
	DrawerGrid,
	EPCardGrid,
} from "components";
import { ChallangeCardType } from "types/data";
import Head from "next/head";
import { EpilogueCardData } from "components/organisms/epilogueCardGrid/constants";
import { MainPageFAQ } from "components/organisms/drawerGrid/constants";

// TODO: 임시 데이터
const sampleCards: ChallangeCardType[] = [
	{
		id: "1",
		language: "typescript",
		status: "close",
		start_at: new Date(),
		to: "/",
	},
	{
		id: "2",
		language: "python",
		status: "inProgress",
		start_at: new Date(),
		to: "/",
	},
	{
		id: "3",
		language: "graphql",
		status: "close",
		start_at: new Date(),
		to: "/",
	},
	{
		id: "4",
		language: "react",
		status: "inProgress",
		start_at: new Date(),
		to: "/",
	},
	{
		id: "5",
		language: "typescript",
		status: "inProgress",
		start_at: new Date(),
		to: "/",
	},
];

export default function Home() {
	return (
		<>
			<Head>
				<title>습관처럼 꾸준히 코딩하자.</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<MainPageTemplate
				hero={<Hero />}
				challangeGrid={<CHCardGrid CHCards={sampleCards} />}
				epilogueGrid={<EPCardGrid epCards={EpilogueCardData} />}
				faqGrid={<DrawerGrid drawers={MainPageFAQ} />}
			></MainPageTemplate>
		</>
	);
}
