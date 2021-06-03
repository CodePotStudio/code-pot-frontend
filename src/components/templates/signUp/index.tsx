import routes from "common/constants/routes";
import { AuthTemplate } from "components";
import { signIn } from "next-auth/client";
import * as S from "./style";
import { ICONS } from "components/atoms/icon/constants";

const SignUpTemplate = () => {
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
				onClick={() =>
					signIn("github", {
						callbackUrl: window.location.origin + routes.ACTIVATE,
					})
				}
				variant="github"
				icon={ICONS.github}
			>
				github으로 회원가입하기
			</S.StyledButton>
		</AuthTemplate>
	);
};
export default SignUpTemplate;
