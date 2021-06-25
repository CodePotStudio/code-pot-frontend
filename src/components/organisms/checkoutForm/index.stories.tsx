import CheckoutForm from ".";

export default {
	title: "Organisms/Checkout Form",
	component: [CheckoutForm],
};

export const Default = () => (
	<CheckoutForm onSubmit={(data) => console.log(data)} />
);
