import { Logo, AuthContainer } from "components";
import * as S from "./style";

interface Props {
	children: React.ReactNode;
}

const AuthTemplate = ({ children }: Props) => (
	<>
		<AuthContainer>
			<S.HeaderWrapper>
				<Logo height={24} />
			</S.HeaderWrapper>
			<S.ChildrenWrapper>{children}</S.ChildrenWrapper>
		</AuthContainer>
	</>
);
export default AuthTemplate;
