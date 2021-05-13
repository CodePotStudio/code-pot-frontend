import { EpilogueCardProps } from "components/molecules/epilogueCard";
import { EpilogueCard } from "components";
import * as S from "./style";
interface Props {
	epCards: EpilogueCardProps[];
}

const EpilogueCardGrid = ({ epCards }: Props) => (
	<S.Wrapper>
		{epCards.map((props) => (
			<EpilogueCard {...props}></EpilogueCard>
		))}
	</S.Wrapper>
);
export default EpilogueCardGrid;
