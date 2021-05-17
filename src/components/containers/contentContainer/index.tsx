import * as S from "./sytle";

interface Props extends S.ContainerStyleProps {
	children: React.ReactNode;
}

const contentContainer = ({ children, backgroundColor, ...props }: Props) => (
	<S.ContentWrapper backgroundColor={backgroundColor} {...props}>
		<S.ContentInnerWrapper>{children}</S.ContentInnerWrapper>
	</S.ContentWrapper>
);
export default contentContainer;
