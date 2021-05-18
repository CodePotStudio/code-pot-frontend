import { BaseTemplate, Button, ContentContainer, Heading } from "components";
import * as S from "./style";

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

interface Props {
	challangeBanner: React.ReactNode;
	checkoutSummary: React.ReactNode;
	paymentMethod: React.ReactNode;
	agreement: React.ReactNode;
}

const CheckoutTemplate = ({
	challangeBanner,
	checkoutSummary,
	paymentMethod,
	agreement,
}: Props) => (
	<BaseTemplate>
		<ContentContainer>
			<S.DescriptionWrapper>
				<SectionContainer title="주문 세부 정보">
					<S.SectionContentWrapper>{challangeBanner}</S.SectionContentWrapper>
				</SectionContainer>
				<SectionContainer title="결제 금액">
					<S.SectionContentWrapper>{checkoutSummary}</S.SectionContentWrapper>
				</SectionContainer>
				<SectionContainer title="결제 방법">
					<S.SectionContentWrapper>{paymentMethod}</S.SectionContentWrapper>
				</SectionContainer>
			</S.DescriptionWrapper>
			<S.SectionContentWrapper>{agreement}</S.SectionContentWrapper>
			<S.ButtonWrapper>
				<S.StyledButton variant="primary" to="/transfer_guilde">
					결제하기
				</S.StyledButton>
			</S.ButtonWrapper>
		</ContentContainer>
	</BaseTemplate>
);
export default CheckoutTemplate;
