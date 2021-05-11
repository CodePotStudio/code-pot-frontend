import * as S from "./style";

interface Props extends S.BadgeStyleProps {
	children: React.ReactNode;
}

const badge = ({ children, variant, ...props }: Props) => (
	<S.Badge variant={variant} {...props}>
		{children}
	</S.Badge>
);
export default badge;

badge.defaultProps = {
	variant: "primary",
};
