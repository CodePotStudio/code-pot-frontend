import Input from ".";

export default {
	title: "Atoms/Input",
	component: [Input],
};

export const Default = () => (
	<>
		<Input name="ID" placeholder="id를 입력해 주세요" />
	</>
);

export const DisabledInput = () => (
	<>
		<Input name="ID" placeholder="id를 입력해 주세요" disabled={true} />
	</>
);

export const InvalidInput = () => (
	<>
		<Input name="ID" placeholder="id를 입력해 주세요" invalid={true} />
	</>
);
