import { Badge, Heading, Text } from "components";
import { CHCardProps } from "components/molecules/ChallangeCard";
import * as S from "./style";
import "moment/locale/ko";
import moment from "moment";

interface Props extends CHCardProps {}

const ChallangeBanner = ({
	thumbnail,
	remarks,
	name,
	startDateTime,
}: Props) => {
	return (
		<S.Wrapper>
			<S.ImageWrapper>
				<S.CardImage src={thumbnail} />
				<S.ImageBackground />
			</S.ImageWrapper>
			<S.ContentWrapper>
				<Badge>4주</Badge>
				<Badge variant="secondary" ml={4}>
					매주 일요일까지
				</Badge>
				<Heading variant="h3">{name}</Heading>
				<Heading variant="subtitle1">{remarks}</Heading>
				<Text variant="body2">
					첫 시작일 | {moment(startDateTime).format("MM/DD(dd)")}
				</Text>
			</S.ContentWrapper>
		</S.Wrapper>
	);
};
export default ChallangeBanner;
