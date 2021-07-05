import { LoadingTemplate, MyPageTemplate } from "components";
import Seo from "components/molecules/Seo";
import { useSession } from "next-auth/client";
import { ComponentWithAuth } from "pages/_app";
import {
	EnrollStatus,
	useGetMyEnrollsQuery,
} from "types/graphql/generated-types";

const myPage: ComponentWithAuth = () => {
	const [session, sessionLoading] = useSession();
	const user = session?.user;
	const {
		data: { myEnrolls: processingEnroll = [] } = {},
	} = useGetMyEnrollsQuery({
		variables: {
			filter: {
				statuses: [EnrollStatus.Processing],
			},
		},
	});
	const { data: { myEnrolls: watingEnroll = [] } = {} } = useGetMyEnrollsQuery({
		variables: {
			filter: {
				statuses: [EnrollStatus.Completed],
			},
		},
	});

	return (
		<div>
			<Seo></Seo>
			{sessionLoading ? (
				<LoadingTemplate></LoadingTemplate>
			) : (
				<MyPageTemplate
					name={user?.name!}
					email={user?.email!}
					image={user?.image!}
					refundAccountNo="110-217-985246"
					refundAccountBankName="신한은행"
					inProgressCards={processingEnroll.map((enroll) => enroll!.challange!)}
					waitingDepositCards={watingEnroll.map((enroll) => enroll!.challange!)}
				></MyPageTemplate>
			)}
		</div>
	);
};

myPage.auth = true;

export default myPage;
