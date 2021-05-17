import * as S from "./sytle";

interface Props extends S.ContainerStyleProps {
	children: React.ReactNode;
}

const contentContainer = ({ children, backgroundColor }: Props) => (
	<S.ContentWrapper backgroundColor={backgroundColor}>
		<S.ContentInnerWrapper>{children}</S.ContentInnerWrapper>
	</S.ContentWrapper>
);
export default contentContainer;
