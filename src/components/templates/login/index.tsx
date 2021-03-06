import routes from "common/constants/routes";
import { AuthTemplate } from "components";
import { ICONS } from "components/atoms/icon/constants";
import { signIn } from "next-auth/client";
import * as S from "./style";

const LoginTemplate = () => {
	return (
		<AuthTemplate>
			<S.StyledHeading variant="h4">
				꾸준히 코딩하는
				<br />
				<S.StrongText>습관</S.StrongText> 만들기
				<br />
				프로젝트
			</S.StyledHeading>
			<S.StyledButton
				variant="github"
				icon={ICONS.github}
				onClick={() =>
					signIn("github", {
						callbackUrl: window.location.origin + routes.ACTIVATE,
					})
				}
			>
				github으로 로그인하기
			</S.StyledButton>
		</AuthTemplate>
	);
};
export default LoginTemplate;
