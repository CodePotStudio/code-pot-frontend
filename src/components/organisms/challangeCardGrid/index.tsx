import { ChallangeCard, Loading } from "components";
import { CHCardProps } from "components/molecules/ChallangeCard";
import * as S from "./style";

interface Props {
	CHCards: CHCardProps[];
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
