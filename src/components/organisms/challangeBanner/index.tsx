import { Badge, Image, Heading, Text } from "components";
import { LanguageSet } from "components/molecules/ChallangeCard/constants";
import { ChallangeCardType } from "types/data";
import * as S from "./style";
import "moment/locale/ko";
import moment from "moment";

interface Props extends ChallangeCardType {}

const ChallangeBanner = ({ language, start_at }: Props) => {
	const { src, desc, title } = LanguageSet[language];
	return (
		<S.Wrapper>
			<Image src={src} width="100%"></Image>
			<S.ContentWrapper>
				<Badge>4주</Badge>
				<Badge variant="secondary" ml={4}>
					매주 일요일까지
				</Badge>
				<Heading variant="h4">{title}</Heading>
				<Heading variant="subtitle1">{desc}</Heading>
				<Text variant="body2">
					첫 시작일 | {moment(start_at).format("MM/DD(dd)")}
				</Text>
			</S.ContentWrapper>
		</S.Wrapper>
	);
};
export default ChallangeBanner;
