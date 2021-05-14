import { Button, FormInput } from "components";
import * as S from "./style";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { mobileValidator, nameValidator } from "commons/validator";

interface ActivationFormValues {
	name: string;
	mobile: string;
}

const activationFormSchema = yup.object().shape({
	name: nameValidator,
	mobile: mobileValidator,
});

interface ActivationFormProps {
	onSubmit: (props: any) => void;
}

const ActivationForm = ({ onSubmit }: ActivationFormProps) => {
	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm<ActivationFormValues>({
		resolver: yupResolver(activationFormSchema),
		mode: "onBlur",
	});
	return (
		<S.FormWrapper onSubmit={handleSubmit(onSubmit)}>
			<S.InputWrapper>
				<FormInput
					label="이름"
					name="name"
					register={register}
					invalid={!!errors.name}
					caption={errors.name?.message}
					required
				/>
				<FormInput
					label="휴대폰 번호"
					name="mobile"
					register={register}
					invalid={!!errors.mobile}
					caption={errors.mobile?.message}
					required
				/>
			</S.InputWrapper>
			<Button variant="primary" type="submit">
				회원 가입하기
			</Button>
		</S.FormWrapper>
	);
};
export default ActivationForm;
