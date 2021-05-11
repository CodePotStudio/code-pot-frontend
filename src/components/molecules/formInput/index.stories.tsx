import FormInput from ".";

export default {
	title: "Mocules/Input Form",
	component: [FormInput],
};

export const Default = () => (
	<>
		<FormInput
			label="이름"
			inputName="name"
			placeholder="이름을 입력해 주세요."
		></FormInput>
	</>
);

export const InvalidInput = () => (
	<FormInput
		label="ID"
		inputName="id"
		invalid={true}
		placeholder="id를 입력해주세요."
		caption="잘못된 문자가 포함되어 있습니다."
	></FormInput>
);
