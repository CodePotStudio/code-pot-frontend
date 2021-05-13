import * as S from "./style";
import { Heading, Text } from "components";
interface Props {
	title: string;
	content: string;
}

const ChallangeContent = ({ title, content }: Props) => (
	<S.Wrapper>
		<Heading variant="h4" hasBorder={true}>
			{title}
		</Heading>
		<Text variant="body1">{content}</Text>
	</S.Wrapper>
);
export default ChallangeContent;
