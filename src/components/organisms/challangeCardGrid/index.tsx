import { ChallangeCard, Loading } from "components";
import { CHCardProps } from "components/molecules/ChallangeCard";
import * as S from "./style";

interface Props {
	CHCards?: CHCardProps[];
	loading?: boolean;
}

const ChallangeCardGrid = ({ CHCards, loading, ...props }: Props) => (
	<>
		{loading ? (
			<S.LoadingWrapper>
				<Loading />
			</S.LoadingWrapper>
		) : (
			CHCards && (
				<S.Wrapper {...props}>
					{CHCards.map((CHCard) => (
						<ChallangeCard {...CHCard}></ChallangeCard>
					))}
				</S.Wrapper>
			)
		)}
	</>
);
export default ChallangeCardGrid;
