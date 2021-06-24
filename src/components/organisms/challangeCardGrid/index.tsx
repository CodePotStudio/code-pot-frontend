import { ChallangeCard, Loading } from "components";
import { Challange } from "types/graphql/generated-types";
import * as S from "./style";

interface Props {
	CHCards: Challange[];
	loading: boolean;
}

const ChallangeCardGrid = ({ CHCards, loading, ...props }: Props) => (
	<>
		{loading ? (
			<S.LoadingWrapper>
				<Loading />
			</S.LoadingWrapper>
		) : (
			<S.Wrapper {...props}>
				{Array.isArray(CHCards) && !!CHCards.length ? (
					CHCards.map((CHCard) => <ChallangeCard {...CHCard}></ChallangeCard>)
				) : (
					// TODO: 디자인 추가 필요함
					<>카드가 없습니다.</>
				)}
			</S.Wrapper>
		)}
	</>
);
export default ChallangeCardGrid;
