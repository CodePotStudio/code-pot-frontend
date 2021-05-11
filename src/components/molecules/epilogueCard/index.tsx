import { Avatar, Subtitle1 } from "components";
import { Body1 } from "components/atoms/typography/style";
import * as S from "./style";

interface Props {
	byline: string;
	content: string;
}

const EpilogueCard = ({ byline, content }: Props) => (
	<S.Wrapper>
		<S.EpilogueTitle>
			<Avatar src="/defaultAvatar.svg" alt="epilogue avatar" />
			<Subtitle1>{byline}</Subtitle1>
		</S.EpilogueTitle>
		<Body1>{content}</Body1>
	</S.Wrapper>
);
export default EpilogueCard;