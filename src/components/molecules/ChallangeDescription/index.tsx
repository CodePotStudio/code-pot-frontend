import { Heading, Text } from "../../atoms/typography";
import * as S from "./style";
interface Props {
	title: string;
	content: string;
}

const ChallangeDescription = ({ title, content }: Props) => (
	<S.Wrapper>
		<Heading variant="h4" hasBorder={true}>
			{title}
		</Heading>
		<Text variant="body1">{content}</Text>
	</S.Wrapper>
);
export default ChallangeDescription;
