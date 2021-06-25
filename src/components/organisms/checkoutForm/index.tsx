import * as S from "./style";
import { useForm } from "react-hook-form";
import {
	CHBanner,
	CheckBox,
	CheckoutSummary,
	FormItem,
	Heading,
	PaymentMethod,
} from "components";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Challange } from "types/graphql/generated-types";

export interface CheckoutFormValues {
	agreement: boolean;
}

const checkoutFormSchema = yup.object().shape({
	agreement: yup.bool().oneOf([true], "약관 동의는 필수 입니다."),
});

interface CheckoutFormProps {
	onSubmit: (props: CheckoutFormValues) => void;
	challange: Challange;
	balance: number;
	platformCommission: number;
}
interface SectionContainerProps {
	title: string;
	children: React.ReactNode;
}

const SectionContainer = ({ title, children }: SectionContainerProps) => (
	<S.SectionWrapper>
		<Heading variant="h4" hasBorder={true}>
			{title}
		</Heading>
		<S.ContentWrapper>{children}</S.ContentWrapper>
	</S.SectionWrapper>
);

const CheckoutForm = ({
	onSubmit,
	challange,
	balance,
	platformCommission,
}: CheckoutFormProps) => {
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
			<S.DescriptionWrapper>
				<SectionContainer title="주문 세부 정보">
					<S.SectionContentWrapper>
						<CHBanner {...challange} />
					</S.SectionContentWrapper>
				</SectionContainer>
				<SectionContainer title="결제 금액">
					<S.SectionContentWrapper>
						<CheckoutSummary
							balance={balance}
							platformCommission={platformCommission}
						></CheckoutSummary>
					</S.SectionContentWrapper>
				</SectionContainer>
				<SectionContainer title="결제 방법">
					<S.SectionContentWrapper>
						<PaymentMethod />
					</S.SectionContentWrapper>
				</SectionContainer>
			</S.DescriptionWrapper>
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
