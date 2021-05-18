import {
	BaseTemplate,
	ContentContainer,
	Heading,
	Icon,
	Text,
} from "components";
import { ICONS } from "components/atoms/icon/constants";
import React from "react";
import * as S from "./style";

interface Props {
	challangeBanner: React.ReactNode;
}

const TransferGuideTemplate = ({ challangeBanner }: Props) => (
	<BaseTemplate>
		<ContentContainer>
			<S.DescriptionWrapper>
				<Heading variant="h4" hasBorder={true}>
					신청 완료(입금 대기)
				</Heading>
				{challangeBanner}
				<S.ContentWrapper>
					<Heading variant="subtitle1">입금 계좌</Heading>
					<Heading variant="h6">
						카카오뱅크 3333-09-1840091 김한울 <Icon name={ICONS.copy} />
					</Heading>
				</S.ContentWrapper>
				<S.ContentWrapper>
					<Heading variant="subtitle1">입금하실 금액</Heading>
					<Heading variant="h6">105,000원</Heading>
				</S.ContentWrapper>
				<S.ContentWrapper>
					<Heading variant="subtitle1">입금 가능 기한</Heading>
					<Heading variant="h6">2021.03.10 24:00</Heading>
				</S.ContentWrapper>
				<S.ContentWrapper>
					<Text variant="body1" color="alert">
						입금 확인은 최대 1일이 소요될 수 있습니다. <br />
						입금이 마감되는 순서대로 챌린지 신청이 마감되오니, 입금이 늦어
						챌린지 신청이 철회 되지 않게 주의해주세요!
					</Text>
				</S.ContentWrapper>
				<S.ButtonWrapper>
					<S.StyledButton variant="primary" to="/transfer_guilde">
            입금 완료
					</S.StyledButton>
				</S.ButtonWrapper>
			</S.DescriptionWrapper>
		</ContentContainer>
	</BaseTemplate>
);
export default TransferGuideTemplate;
