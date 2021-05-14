import * as S from "./style";
import { Input, Label } from "components";
import { UseFormRegister } from "react-hook-form";
interface Props {
	label: string;
	inputName: string;
	placeholder?: string;
	// 잘못된 값이 입력되었을 경우, 나타내는 메시지
	caption?: string;
	// 잘못된 값이 입력되었는지 여부
	invalid?: boolean;
	// ref에서 사용하는 함수
	register?: UseFormRegister<any>;
	// 필수 여부
	required?: boolean;
}

const FormInput = ({
	inputName,
	label,
	placeholder,
	caption,
	invalid,
	register,
	required,
}: Props) => (
	<S.FormWrapper>
		<Label>{label}</Label>
		<Input
			inputName={inputName}
			placeholder={placeholder}
			invalid={invalid}
			{...register!(inputName, { required })}
		></Input>
		{invalid && <S.FormText variant="caption">{caption}</S.FormText>}
	</S.FormWrapper>
);
export default FormInput;
