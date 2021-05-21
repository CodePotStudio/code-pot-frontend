import { RefundAccountForm } from "components";
import RegisterRefundAccountTemplate from ".";

export default {
	title: "Templates/Register Refund Account Template",
	component: [RegisterRefundAccountTemplate],
};

export const Default = () => (
	<RegisterRefundAccountTemplate
		title="환급 계좌 등록하기"
		refundAccountForm={
			<RefundAccountForm onSubmit={() => console.log("hello")} />
		}
	/>
);
