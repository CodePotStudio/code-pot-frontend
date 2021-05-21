import RefundAccountForm from ".";

export default {
	title: "Organisms/Refund Account Form",
	component: [RefundAccountForm],
};

export const Default = () => (
	<RefundAccountForm onSubmit={(data) => console.log(data)} />
);
