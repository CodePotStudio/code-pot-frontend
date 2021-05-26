import { MyPageTemplate } from "components";
import Seo from "components/molecules/Seo";
import { getSession } from "next-auth/client";
import { GetServerSideProps } from "next";
import { ChallangeCardType } from "types/data";
import { Session } from "next-auth";
import { ComponentWithAuth } from "pages/_app";

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

const myPage: ComponentWithAuth<Props> = ({ session }) => {
	const user = session!.user;
	return (
		<div>
			<Seo></Seo>
			<MyPageTemplate
				name={user.name}
				email={user.email}
				image={user.image}
				refundAccountNo="110-217-985246"
				refundAccountBankName="신한은행"
				inProgressCards={inProgressExampleCard}
				waitingDepositCards={inProgressExampleCard}
			></MyPageTemplate>
		</div>
	);
};

myPage.auth = true;

export const getServerSideProps: GetServerSideProps<Props> = async (ctx) => {
	const session = await getSession(ctx);
	return { props: { session } };
};

export default myPage;
