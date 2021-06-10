import { RefundAccountForm, RegisterRefundAccountTemplate } from "components";
import Seo from "components/molecules/Seo";

export default () => (
	<>
		<Seo></Seo>
		<RegisterRefundAccountTemplate
			title="환급 계좌 등록하기"
			refundAccountForm={
				<RefundAccountForm
					onSubmit={() => console.log("hello")}
				></RefundAccountForm>
			}
		></RegisterRefundAccountTemplate>
	</>
);
