import {
	CHCardGrid,
	DrawerGrid,
	EPCardGrid,
	Hero,
	MainPageTemplate,
} from "components";
import { EpilogueCardData } from "components/organisms/epilogueCardGrid/constants";
import { MainPageFAQ } from "components/organisms/drawerGrid/constants";
import Seo from "components/molecules/Seo";
import { useFindChallangesQuery } from "types/graphql/generated-types";
import { NextPage } from "next";

const Home: NextPage = () => {
	const {
		data: { findChallanges = [] } = {},
		loading,
	} = useFindChallangesQuery();

	return (
		<>
			<Seo></Seo>
			<MainPageTemplate
				hero={<Hero />}
				challangeGrid={
					<CHCardGrid CHCards={findChallanges} loading={loading} />
				}
				epilogueGrid={<EPCardGrid epCards={EpilogueCardData} />}
				faqGrid={<DrawerGrid drawers={MainPageFAQ} />}
			></MainPageTemplate>
		</>
	);
};

export default Home;
