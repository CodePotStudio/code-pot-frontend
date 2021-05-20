import { AuthContainer, Header } from "components";
import * as S from "./style";

interface Props {
	children: React.ReactNode;
}

const AuthTemplate = ({ children }: Props) => (
	<>
		<AuthContainer>
			<S.HeaderWrapper>
				<Header navless={true} />
			</S.HeaderWrapper>
			<S.ChildrenWrapper>{children}</S.ChildrenWrapper>
		</AuthContainer>
	</>
);
export default AuthTemplate;
