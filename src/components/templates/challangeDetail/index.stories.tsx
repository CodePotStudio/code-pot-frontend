import { CHBanner, RegisterBanner } from "components";
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
				id="1"
				language="typescript"
				status="inProgress"
				to="/home"
				start_at={new Date()}
			/>
		}
		registerBannder={<RegisterBanner challangeId="1" />}
	></CHDetailTemplate>
);
