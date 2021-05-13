import { Heading, Text } from "../../atoms/typography";
import { language, LanguageSet, status, StatusSet } from "./constants";
import * as S from "./style";
import "moment/locale/ko";
import moment from "moment";

interface Props {
	language: language;
	status: status;
	to: string;
	start_at: Date;
}

const ClassCard = ({ language, status, to, start_at }: Props) => {
	const { src, desc, title } = LanguageSet[language];
	const { variant, text: badgeText } = StatusSet[status];
	return (
		<S.CardLink to={to}>
			<S.Wrapper>
				<S.ImageWrapper>
					<S.CardBadge variant={variant}>{badgeText}</S.CardBadge>
					<S.CardImage src={src} />
				</S.ImageWrapper>
				<S.ContentWrapper>
					<Heading variant="h5">{title}</Heading>
					<Heading variant="subtitle1">{desc}</Heading>
					<Text variant="body2">
						첫 시작일 | {moment(start_at).format("MM/DD(dd)")}
					</Text>
				</S.ContentWrapper>
			</S.Wrapper>
		</S.CardLink>
	);
};
export default ClassCard;
