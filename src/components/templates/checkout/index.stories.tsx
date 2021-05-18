import CheckoutTemplate from ".";
import {
	CHBanner,
	CheckBox,
	CheckoutSummary,
	PaymentMethod,
	FormItem,
} from "components";

export default {
	title: "Templates/Checkout Template",
	component: [CheckoutTemplate],
};

export const Default = () => (
	<CheckoutTemplate
		challangeBanner={
			<CHBanner
				id="1"
				language="typescript"
				status="inProgress"
				to="/home"
				backgroundColor="white"
				color="black"
				start_at={new Date()}
			/>
		}
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
