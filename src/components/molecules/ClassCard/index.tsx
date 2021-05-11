import { H5, Subtitle1, Body2, Link } from "components";
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
					<H5>{title}</H5>
					<Subtitle1>{desc}</Subtitle1>
					<Body2> 첫 시작일 | {moment(start_at).format("MM/DD(dd)")}</Body2>
				</S.ContentWrapper>
			</S.Wrapper>
		</S.CardLink>
	);
};
export default ClassCard;
