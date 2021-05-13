import { Heading, Text } from "components";
import { LanguageSet, StatusSet } from "./constants";
import * as S from "./style";
import "moment/locale/ko";
import moment from "moment";
import { ChallangeCardType } from "types/data";

export interface CHCardProps extends ChallangeCardType {}

const ChallangeCard = ({
	key,
	language,
	status,
	to,
	start_at,
}: CHCardProps) => {
	const { src, desc, title } = LanguageSet[language];
	const { variant, text: badgeText } = StatusSet[status];
	return (
		<S.CardLink to={to} key={key}>
			<S.Wrapper>
				<S.ImageWrapper>
					<S.CardBadge variant={variant}>{badgeText}</S.CardBadge>
					<S.CardImage src={src}/>
					<S.ImageBackground status={status}/>
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
export default ChallangeCard;
