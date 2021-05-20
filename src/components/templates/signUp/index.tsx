import { AuthTemplate, Button } from "components";
import * as S from "./style";

const SignUpTemplate = () => (
	<AuthTemplate>
		<S.StyledHeading variant="h4">
			꾸준히 코딩하는
			<br />
			<S.StrongText>습관</S.StrongText> 만들기
			<br />
			프로젝트
		</S.StyledHeading>
		<S.StyledButton to="/">github으로 회원가입하기</S.StyledButton>
	</AuthTemplate>
);
export default SignUpTemplate;
