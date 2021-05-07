import * as S from "./style";

interface Props extends S.ButtonStyleProps {
	children: React.ReactNode;
}

const Button = ({ children, variant }: Props) => (
	<S.Button variant={variant}>{children}</S.Button>
);

Button.defaultProps = {
	variant: "primary",
};
export default Button;
