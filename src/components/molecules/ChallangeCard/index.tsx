import { Heading, Text } from "components";
import { StatusSet } from "./constants";
import * as S from "./style";
import "moment/locale/ko";
import moment from "moment";
import routes from "common/constants/routes";
import { Challange } from "types/graphql/generated-types";

export interface CHCardProps extends Challange {}

const ChallangeCard = ({
	id,
	thumbnail,
	name,
	remarks,
	status,
	startDateTime,
}: CHCardProps) => {
	const { variant, text: badgeText } = StatusSet[status];
	return (
		<S.CardLink to={routes.CHALLANGE_DETAIL(id)} key={id}>
			<S.Wrapper>
				<S.ImageWrapper>
					<S.CardBadge variant={variant}>{badgeText}</S.CardBadge>
					<S.CardImage src={thumbnail} />
					<S.ImageBackground status={status} />
				</S.ImageWrapper>
				<S.ContentWrapper>
					<S.ContentTitleWrapper>
						<Heading variant="h5">{name}</Heading>
						<Heading variant="subtitle1">{remarks}</Heading>
					</S.ContentTitleWrapper>
					<S.ContentTextWrapper>
						<Text variant="body2">
							첫 시작일 | {moment(startDateTime).format("MM/DD(dd)")}
						</Text>
					</S.ContentTextWrapper>
				</S.ContentWrapper>
			</S.Wrapper>
		</S.CardLink>
	);
};
export default ChallangeCard;
