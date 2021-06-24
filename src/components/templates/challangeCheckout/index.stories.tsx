import CheckoutTemplate from ".";
import {
	CHBanner,
	CheckBox,
	CheckoutSummary,
	FormItem,
	PaymentMethod,
} from "components";
import { dummyChallanges } from "fixture/data";

export default {
	title: "Templates/Checkout Template",
	component: [CheckoutTemplate],
};

export const Default = () => (
	<CheckoutTemplate
		challangeBanner={<CHBanner {...dummyChallanges[0]} />}
		checkoutSummary={
			<CheckoutSummary
				balance={100000}
				platformCommission={5000}
			></CheckoutSummary>
		}
		paymentMethod={<PaymentMethod />}
		agreement={
			<FormItem>
				<CheckBox checked={false} onClick={() => console.log("clicked")}>
					구매조건 및 개인정보취급방침 동의 (필수)
				</CheckBox>
			</FormItem>
		}
	/>
);
