import { LoadingTemplate, MyPageTemplate } from "components";
import Seo from "components/molecules/Seo";
import { useSession } from "next-auth/client";
import { ComponentWithAuth } from "pages/_app";
import { ChallangeStatus } from "types/graphql/generated-types";
import { CHCardProps } from "components/molecules/ChallangeCard";

const inProgressExampleCard: CHCardProps[] = [
	{
		id: 4,
		name: "react",
		status: ChallangeStatus.Inprogress,
		remarks: "테스트",
		startDateTime: new Date(),
		endDateTime: new Date(),
		thumbnail: "/languages/react.svg",
	},
	{
		id: 5,
		name: "typescript",
		status: ChallangeStatus.Inprogress,
		remarks: "테스트",
		startDateTime: new Date(),
		endDateTime: new Date(),
		thumbnail: "/languages/typescript.svg",
	},
];

const myPage: ComponentWithAuth = () => {
	const [session, loading] = useSession();
	const user = session?.user;
	return (
		<div>
			<Seo></Seo>
			{loading ? (
				<LoadingTemplate></LoadingTemplate>
			) : (
				<MyPageTemplate
					name={user?.name!}
					email={user?.email!}
					image={user?.image!}
					refundAccountNo="110-217-985246"
					refundAccountBankName="신한은행"
					inProgressCards={inProgressExampleCard}
					waitingDepositCards={inProgressExampleCard}
				></MyPageTemplate>
			)}
		</div>
	);
};

myPage.auth = true;

export default myPage;
