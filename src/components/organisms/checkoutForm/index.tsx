import * as S from "./style";
import { useForm } from "react-hook-form";
import { CheckBox, FormItem } from "components";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

export interface CheckoutFormValues {
	agreement: boolean;
}

const checkoutFormSchema = yup.object().shape({
	agreement: yup.bool().oneOf([true], "약관 동의는 필수 입니다."),
});

interface CheckoutFormProps {
	onSubmit: (props: CheckoutFormValues) => void;
}

const CheckoutForm = ({ onSubmit }: CheckoutFormProps) => {
	const {
		register,
		formState: { isDirty, isValid },
		handleSubmit,
	} = useForm<CheckoutFormValues>({
		mode: "onChange",
		resolver: yupResolver(checkoutFormSchema),
	});
	return (
		<S.FormWrapper onSubmit={handleSubmit(onSubmit)}>
			<FormItem>
				<CheckBox
					{...register("agreement")}
					label="구매조건 및 개인정보취급방침 동의 (필수)"
				></CheckBox>
			</FormItem>
			<S.ButtonWrapper>
				<S.StyledButton
					variant="primary"
					type="submit"
					disabled={!isDirty || !isValid}
				>
					결제하기
				</S.StyledButton>
			</S.ButtonWrapper>
		</S.FormWrapper>
	);
};
export default CheckoutForm;
