import { CHBanner } from "components";
import TransferGuideTemplate from ".";

export default {
	title: "Templates/Transfer Guide Template",
	component: [TransferGuideTemplate],
};

export const Default = () => (
	<TransferGuideTemplate
		challangeBanner={
			<CHBanner
				id="1"
				language="typescript"
				status="inProgress"
				to="/home"
				backgroundColor="white"
				color="black"
				start_at={new Date()}
			/>
		}
	/>
);
