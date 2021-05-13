import Avatar from "../../atoms/avatar";
import { Heading, Text } from "../../atoms/typography";
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
		<Text variant="body1">{content}</Text>
	</S.Wrapper>
);
export default EpilogueCard;
