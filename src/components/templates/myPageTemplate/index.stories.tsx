import MyPageTemplate from ".";
import { ChallangeCardType } from "types/data";

export default {
	title: "Templates/My Page Template",
	component: [MyPageTemplate],
};

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

export const Default = () => (
	<MyPageTemplate
		name="김한울"
		email="admin@codepot.co"
		refundAccountNo="110-217-985246"
		refundAccountBankName="신한은행"
		inProgressCards={inProgressExampleCard}
		waitingDepositCards={inProgressExampleCard}
	/>
);
