import ChallangeBanner from ".";
import { ChallangeStatus } from "types/graphql/generated-types";

export default {
	title: "Organisms/Challange Banner",
	component: [ChallangeBanner],
};

export const Default = () => (
	<ChallangeBanner
		id={1}
		status={ChallangeStatus.Inprogress}
		remarks="단단한 javascript를 만들고 싶다면"
		name="typescript"
		thumbnail="/languages/typescript.svg"
		startDateTime={new Date()}
		endDateTime={new Date()}
	></ChallangeBanner>
);

export const BannerWithColor = () => (
	<ChallangeBanner
		id={1}
		status={ChallangeStatus.Inprogress}
		remarks="단단한 javascript를 만들고 싶다면"
		name="typescript"
		thumbnail="/languages/typescript.svg"
		startDateTime={new Date()}
		endDateTime={new Date()}
		color="black"
		backgroundColor="white"
	></ChallangeBanner>
);
