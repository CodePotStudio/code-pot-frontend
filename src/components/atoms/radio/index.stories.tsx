import Radio from ".";

export default {
	title: "Atoms/Radio",
	component: [Radio],
};

export const Default = () => (
	<>
		<Radio checked={true}>Hello</Radio>
		<Radio>What</Radio>
	</>
);
