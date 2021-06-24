import { CHBanner, RegisterBanner } from "components";
import { dummyChallanges } from "fixture/data";
import CHDetailTemplate from ".";
import { DESCRIPTION } from "./constants";

export default {
	title: "Templates/Challange Detail Template",
	component: [CHDetailTemplate],
};

export const Default = () => (
	<CHDetailTemplate
		descriptions={DESCRIPTION}
		challangeBanner={<CHBanner {...dummyChallanges[0]} />}
		registerBannder={<RegisterBanner challangeId={1} />}
	></CHDetailTemplate>
);
