import ChallangeBanner from ".";

export default {
	title: "Organisms/Challange Banner",
	component: [ChallangeBanner],
};

export const Default = () => (
	<ChallangeBanner
		id="1"
		language="typescript"
		status="inProgress"
		to="/home"
		start_at={new Date()}
	></ChallangeBanner>
);
