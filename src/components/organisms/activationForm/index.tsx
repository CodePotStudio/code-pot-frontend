import { Button, FormItem, Input } from "components";
import * as S from "./style";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { mobileValidator, nameValidator } from "common/validator";

export interface ActivationFormValues {
	name: string;
	mobile: string;
}

const activationFormSchema = yup.object().shape({
	name: nameValidator,
	mobile: mobileValidator,
});

interface ActivationFormProps {
	onSubmit: (props: ActivationFormValues) => void;
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
				<FormItem
					label="이름"
					invalid={!!errors.name}
					caption={errors.name?.message}
				>
					<Input {...register("name")} invalid={!!errors.name}></Input>
				</FormItem>
				<FormItem
					label="휴대폰 번호"
					invalid={!!errors.mobile}
					caption={errors.mobile?.message}
				>
					<Input {...register("mobile")} invalid={!!errors.mobile}></Input>
				</FormItem>
			</S.InputWrapper>
			<Button variant="primary" type="submit">
				회원 가입하기
			</Button>
		</S.FormWrapper>
	);
};
export default ActivationForm;
