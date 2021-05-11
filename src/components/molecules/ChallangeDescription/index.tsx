import { H4, Body1 } from "components";
import * as S from "./style";

interface Props {
	title: string;
	content: string;
}

const ChallangeDescription = ({ title, content }: Props) => (
	<S.Wrapper>
		<H4 hasBorder={true}>{title}</H4>
		<Body1>{content}</Body1>
	</S.Wrapper>
);
export default ChallangeDescription;
