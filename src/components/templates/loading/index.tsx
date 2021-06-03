import { BaseTemplate } from "components";
import * as S from "./style";

const LoadingTemplate = () => {
	return (
		<S.Wrapper>
			<S.StyledImage src="/spinner.gif"></S.StyledImage>
		</S.Wrapper>
	);
};
export default LoadingTemplate;
