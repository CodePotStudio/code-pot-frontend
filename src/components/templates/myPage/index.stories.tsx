import { dummyChallanges } from "fixture/data";
import MyPageTemplate from ".";

export default {
	title: "Templates/My Page Template",
	component: [MyPageTemplate],
};

export const Default = () => (
	<MyPageTemplate
		name="김한울"
		email="admin@codepot.co"
		refundAccountNo="110-217-985246"
		refundAccountBankName="신한은행"
		inProgressCards={dummyChallanges}
		waitingDepositCards={dummyChallanges}
	/>
);
