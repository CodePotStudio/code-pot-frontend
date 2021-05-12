import { Avatar, Heading } from "components";
import { Body1 } from "components/atoms/typography/style";
import * as S from "./style";

export interface EpilogueCardProps {
	key: number;
	// 직업 및 이름
	byline: string;
	// 세부 내용
	content: string;
	// avatar 경로
	avartarSRC: string;
}

const EpilogueCard = ({ byline, content, avartarSRC }: EpilogueCardProps) => (
	<S.Wrapper>
		<S.EpilogueTitle>
			<Avatar src={avartarSRC} alt="epilogue avatar" />
			<Heading variant="subtitle1">{byline}</Heading>
		</S.EpilogueTitle>
		<Body1>{content}</Body1>
	</S.Wrapper>
);
export default EpilogueCard;
