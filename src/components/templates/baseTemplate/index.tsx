import { Footer, Header } from "components";
import * as S from "./style";

interface Props {
	children: React.ReactNode;
}

const BaseTemplate = ({ children }: Props) => (
	<>
		<S.HeaderWrapper>
			<S.HeaderInnerWrapper>
				<Header />
			</S.HeaderInnerWrapper>
		</S.HeaderWrapper>
		<S.ChildrenWrapper>{children}</S.ChildrenWrapper>
		<S.FooterWrapper>
			<S.FooterInnerWraper>
				<Footer />
			</S.FooterInnerWraper>
		</S.FooterWrapper>
	</>
);
export default BaseTemplate;
