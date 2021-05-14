import ActivationForm from ".";

export default {
	title: "Organisms/Activation Form",
	component: [ActivationForm],
};

export const Default = () => (
	<ActivationForm onSubmit={(data) => console.log(data)} />
);
