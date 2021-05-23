import {
	MainPageTemplate,
	Hero,
	CHCardGrid,
	DrawerGrid,
	EPCardGrid,
} from "components";
import { ChallangeCardType } from "types/data";
import { EpilogueCardData } from "components/organisms/epilogueCardGrid/constants";
import { MainPageFAQ } from "components/organisms/drawerGrid/constants";
import Seo from "components/molecules/Seo";
import { useQuery, gql } from "@apollo/client";

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

const GET_ME = gql`
	query GET_ME {
		me {
			user {
				name
			}
		}
	}
`;

export default function Home() {
	const { loading, error, data } = useQuery(GET_ME);
	console.log(loading, error, data);
	return (
		<>
			<Seo></Seo>
			<MainPageTemplate
				hero={<Hero />}
				challangeGrid={<CHCardGrid CHCards={sampleCards} />}
				epilogueGrid={<EPCardGrid epCards={EpilogueCardData} />}
				faqGrid={<DrawerGrid drawers={MainPageFAQ} />}
			></MainPageTemplate>
		</>
	);
}
