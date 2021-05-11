import { Heading, Body1 } from "components";
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
		<Body1>{content}</Body1>
	</S.Wrapper>
);
export default ChallangeDescription;
