import Seo from "components/molecules/Seo";
import { ComponentWithAuth } from "pages/_app";
import { GetServerSideProps } from "next";
import getChallangeQuery from "graphql/queries/getChallange.query";
import {
	Challange,
	GetChallangeQuery,
	useEnrollChallangeMutation,
} from "types/graphql/generated-types";
import client from "apollo/client";
import Error from "next/error";
import ChallangeCheckoutTemplate from "components/templates/challangeCheckout";
import { CheckoutForm, LoadingTemplate } from "components";
import { useRouter } from "next/router";

interface Props {
	challange?: Challange | null | undefined;
	error?: {
		message?: string | null;
	};
}

const ChallangeCheckout: ComponentWithAuth = ({ challange, error }: Props) => {
	const router = useRouter();
	const [
		enrollChallange,
		{ error: EnrollError, loading },
	] = useEnrollChallangeMutation({
		onCompleted: () => router.push("/transfer_guide"),
	});

	const onCheckout = async () => {
		await enrollChallange({
			variables: {
				challangeId: challange!.id,
			},
		});
	};
	if ((error && error.message) || EnrollError) {
		return <Error title={"에러가 발생하였습니다"} statusCode={400}></Error>;
	}
	if (!challange) {
		return <Error statusCode={404} title="존재하지 않는 페이지입니다"></Error>;
	}
	if (loading) {
		return <LoadingTemplate></LoadingTemplate>;
	}
	return (
		<>
			<Seo></Seo>
			<ChallangeCheckoutTemplate
				checkoutForm={
					<CheckoutForm
						challange={challange}
						onSubmit={onCheckout}
						balance={100000}
						platformCommission={5000}
					/>
				}
			></ChallangeCheckoutTemplate>
		</>
	);
};

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

ChallangeCheckout.auth = true;
export default ChallangeCheckout;
