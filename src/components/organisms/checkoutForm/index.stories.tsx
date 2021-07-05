import { dummyChallanges } from "fixture/data";
import CheckoutForm from ".";

export default {
	title: "Organisms/Checkout Form",
	component: [CheckoutForm],
};

export const Default = () => (
	<CheckoutForm
		onSubmit={(data) => console.log(data)}
		challange={dummyChallanges[0]}
		balance={100000}
		platformCommission={5000}
	/>
);
