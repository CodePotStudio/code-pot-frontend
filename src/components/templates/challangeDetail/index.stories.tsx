import { CHBanner, RegisterBanner } from "components";
import { ChallangeStatus } from "types/graphql/generated-types";
import CHDetailTemplate from ".";
import { DESCRIPTION } from "./constants";

export default {
	title: "Templates/Challange Detail Template",
	component: [CHDetailTemplate],
};

export const Default = () => (
	<CHDetailTemplate
		descriptions={DESCRIPTION}
		challangeBanner={
			<CHBanner
				id={1}
				status={ChallangeStatus.Inprogress}
				remarks="단단한 javascript를 만들고 싶다면"
				name="typescript"
				thumbnail="/languages/typescript.svg"
				startDateTime={new Date()}
				endDateTime={new Date()}
			/>
		}
		registerBannder={<RegisterBanner challangeId={1} />}
	></CHDetailTemplate>
);
