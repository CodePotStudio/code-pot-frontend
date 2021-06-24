import ChallangeBanner from ".";
import { dummyChallanges } from "fixture/data";

export default {
	title: "Organisms/Challange Banner",
	component: [ChallangeBanner],
};

export const Default = () => (
	<ChallangeBanner {...dummyChallanges[0]}></ChallangeBanner>
);
