import { LoadingTemplate, MyPageTemplate } from "components";
import Seo from "components/molecules/Seo";
import { getSession, useSession } from "next-auth/client";
import { GetServerSideProps } from "next";
import { ChallangeCardType } from "types/data";
import { Session } from "next-auth";
import { ComponentWithAuth } from "pages/_app";
import { yupResolver } from "@hookform/resolvers/yup";

const inProgressExampleCard: ChallangeCardType[] = [
	{
		id: "4",
		language: "react",
		status: "inProgress",
		start_at: new Date(),
		to: "/",
	},
	{
		id: "5",
		language: "typescript",
		status: "inProgress",
		start_at: new Date(),
		to: "/",
	},
];

interface Props {
	session: Session | null;
}

const myPage = () => {
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
