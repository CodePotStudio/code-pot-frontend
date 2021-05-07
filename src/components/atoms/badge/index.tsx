import * as S from "./style";

interface Props extends S.BadgeStyleProps {
	children: React.ReactNode;
}

const badge = ({ children, variant }: Props) => (
	<S.Badge variant={variant}>{children}</S.Badge>
);
export default badge;

badge.defaultProps = {
	variant: "primary",
};
