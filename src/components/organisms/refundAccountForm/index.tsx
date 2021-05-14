import { Button, FormItem, Input, Select } from "components";
import * as S from "./style";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { bankNameValidator, bankAccountValidator } from "commons/validator";
import { BANK_LIST } from "commons/constants";

interface RefundAccountFormValues {
	bankName: string;
	bankAccount: string;
}

const refundAccountFormSchema = yup.object().shape({
	bankName: bankNameValidator,
	bankAccount: bankAccountValidator,
});

interface ActivationFormProps {
	onSubmit: (props: any) => void;
}

const RefundAccountForm = ({ onSubmit }: ActivationFormProps) => {
	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm<RefundAccountFormValues>({
		resolver: yupResolver(refundAccountFormSchema),
		mode: "onBlur",
	});
	return (
		<S.FormWrapper onSubmit={handleSubmit(onSubmit)}>
			<S.InputWrapper>
				<FormItem
					label="은행 이름"
					invalid={!!errors.bankName}
					caption={errors.bankName?.message}
				>
					<Select
						options={BANK_LIST}
						defaultValue="신한은행"
						{...register("bankName")}
					></Select>
				</FormItem>
				<FormItem
					label="계좌번호"
					invalid={!!errors.bankAccount}
					caption={errors.bankAccount?.message}
				>
					<Input {...register("bankAccount")}></Input>
				</FormItem>
			</S.InputWrapper>
			<Button variant="primary" type="submit">
				예치금 환급 계좌 등록하기
			</Button>
		</S.FormWrapper>
	);
};
export default RefundAccountForm;
