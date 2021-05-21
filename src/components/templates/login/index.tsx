import routes from "commons/constants/routes";
import { AuthTemplate } from "components";
import { ICONS } from "components/atoms/icon/constants";
import * as S from "./style";

const LoginTemplate = () => (
	<AuthTemplate>
		<S.StyledHeading variant="h4">
			꾸준히 코딩하는
			<br />
			<S.StrongText>습관</S.StrongText> 만들기
			<br />
			프로젝트
		</S.StyledHeading>
		<S.StyledButton
			href={routes.GITHUB_LOGIN}
			variant="github"
			icon={ICONS.github}
		>
			github으로 로그인하기
		</S.StyledButton>
	</AuthTemplate>
);
export default LoginTemplate;
