import {
	Avatar,
	BaseTemplate,
	ContentContainer,
	Heading,
	Text,
} from "components";
import { Challange } from "types/graphql/generated-types";
import * as S from "./style";

interface Props {
	name: string;
	email: string;
	refundAccountNo: string;
	image?: string;
	refundAccountBankName: string;
	inProgressCards: Challange[];
	waitingDepositCards: Challange[];
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

const MyPageTemplate = ({
	name,
	email,
	image,
	refundAccountNo,
	refundAccountBankName,
	inProgressCards,
	waitingDepositCards,
}: Props) => (
	<BaseTemplate>
		<ContentContainer>
			<S.Wrapper>
				<S.HeaderSectionWrapper>
					<S.AvatarWrapper>
						<Avatar alt="mypage avatar" size={64} src={image}></Avatar>
					</S.AvatarWrapper>
					<S.BylineWrapper>
						<Heading variant="h4">{name}님</Heading>
						<Heading variant="subtitle1">{email}</Heading>
					</S.BylineWrapper>
				</S.HeaderSectionWrapper>
				<SectionContainer title="나의 정보">
					<Heading variant="h7">예치금 환급 계좌</Heading>
					<Text variant="body1">
						{refundAccountNo} {refundAccountBankName}
					</Text>
				</SectionContainer>
				<SectionContainer title="참여중인 챌린지">
					<S.StyledCHCardGrid
						CHCards={inProgressCards}
						loading={false}
					></S.StyledCHCardGrid>
				</SectionContainer>
				<SectionContainer title="입금 대기중인 챌린지">
					<S.StyledCHCardGrid
						CHCards={waitingDepositCards}
						loading={false}
					></S.StyledCHCardGrid>
				</SectionContainer>
			</S.Wrapper>
		</ContentContainer>
	</BaseTemplate>
);
export default MyPageTemplate;
