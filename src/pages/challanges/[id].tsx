import { CHBanner, ChallangeDetailTemplate, RegisterBanner } from "components";
import Seo from "components/molecules/Seo";
import { DESCRIPTION } from "components/templates/challangeDetail/constants";
import { ComponentWithAuth } from "pages/_app";
import { GetServerSideProps } from "next";
import getChallangeQuery from "graphql/queries/getChallange.query";
import { Challange, GetChallangeQuery } from "types/graphql/generated-types";
import client from "apollo/client";
import Error from "next/error";

interface Props {
	challange?: Challange | null | undefined;
	error?: {
		message?: string | null;
	};
}

export const getServerSideProps: GetServerSideProps<Props> = async ({
	params,
}) => {
	if (!params || typeof params.id !== "string") {
		return {
			props: {
				error: { message: "잘못된 접근입니다." },
			},
		};
	}

	const { data, error } = await client.query<GetChallangeQuery>({
		query: getChallangeQuery,
		variables: { id: parseInt(params.id) },
	});
	return {
		props: {
			challange: data.getChallange,
			error: { message: error?.message || null },
		},
	};
};

const ChallangeDetail: ComponentWithAuth = ({ challange, error }: Props) => {
	if (error && error.message) {
		return (
			<Error
				title={error.message || "에러가 발생하였습니다"}
				statusCode={400}
			></Error>
		);
	} else if (!challange) {
		return <Error statusCode={404} title="존재하지 않는 페이지입니다"></Error>;
	}
	return (
		<>
			<Seo></Seo>
			<ChallangeDetailTemplate
				descriptions={DESCRIPTION}
				challangeBanner={<CHBanner {...challange} />}
				registerBannder={<RegisterBanner challangeId={challange.id} />}
			></ChallangeDetailTemplate>
		</>
	);
};

ChallangeDetail.auth = true;

export default ChallangeDetail;
