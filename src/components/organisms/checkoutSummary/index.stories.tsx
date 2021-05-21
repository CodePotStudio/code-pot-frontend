import CheckoutSummary from ".";

export default {
	title: "Organisms/Checkout Summary",
	component: [CheckoutSummary],
};

export const Default = () => (
	<CheckoutSummary balance={100000} platformCommission={5000}></CheckoutSummary>
);
