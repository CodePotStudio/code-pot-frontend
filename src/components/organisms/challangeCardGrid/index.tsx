import { ChallangeCard } from "components";
import { CHCardProps } from "components/molecules/ChallangeCard";
import * as S from "./style";

interface Props {
	CHCards: CHCardProps[];
}

const ChallangeCardGrid = ({ CHCards, ...props }: Props) => (
	<S.Wrapper {...props}>
		{CHCards.map((CHCard) => (
			<ChallangeCard {...CHCard}></ChallangeCard>
		))}
	</S.Wrapper>
);
export default ChallangeCardGrid;
