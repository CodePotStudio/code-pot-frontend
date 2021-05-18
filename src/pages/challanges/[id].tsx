import { CHBanner, RegisterBanner, ChallangeDetailTemplate } from "components";
import { DESCRIPTION } from "components/templates/challangeDetail/constants";
import { ChallangeCardType } from "types/data";

interface Props {
	data: ChallangeCardType;
}

export async function getServerSideProps() {
	// Fetch data from external API
	const data = {
		id: "1",
		language: "typescript",
		status: "inProgress",
		to: "/home",
		start_at: new Date(),
	};

	// Pass data to the page via props
	return { props: { data } };
}

const ChallangeDetail = ({ data }: Props) => {
	return (
		<>
			(
			<ChallangeDetailTemplate
				descriptions={DESCRIPTION}
				challangeBanner={<CHBanner {...data} />}
				registerBannder={<RegisterBanner challangeId={data.id} />}
			></ChallangeDetailTemplate>
			)
		</>
	);
};
export default ChallangeDetail;
