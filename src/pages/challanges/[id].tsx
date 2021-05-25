import { CHBanner, RegisterBanner, ChallangeDetailTemplate } from "components";
import Seo from "components/molecules/Seo";
import { DESCRIPTION } from "components/templates/challangeDetail/constants";
import moment from "moment";
import { ComponentWithAuth } from "pages/_app";
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
		start_at: moment(new Date()).format("MM/DD(dd)"),
	};

	// Pass data to the page via props
	return { props: { data } };
}

const ChallangeDetail: ComponentWithAuth = ({ data }: Props) => {
	return (
		<>
			<Seo></Seo>
			<ChallangeDetailTemplate
				descriptions={DESCRIPTION}
				challangeBanner={<CHBanner {...data} />}
				registerBannder={<RegisterBanner challangeId={data.id} />}
			></ChallangeDetailTemplate>
		</>
	);
};

ChallangeDetail.auth = true;

export default ChallangeDetail;
