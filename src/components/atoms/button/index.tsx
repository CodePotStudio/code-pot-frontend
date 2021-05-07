import * as S from "./style";

interface Props extends S.ButtonStyleProps {
	children: React.ReactNode;
	// internal routing
	to?: string;
	// external routing
	href?: string;
	// click handler
	onClick?: () => void;
}

const Button = ({ children, variant, to, href, onClick }: Props) => {
	if (to) {
		return (
			<S.Link href={to} variant={variant}>
				{children}
			</S.Link>
		);
	} else if (href) {
		return (
			<S.Anchor href={href} variant={variant}>
				{children}
			</S.Anchor>
		);
	}
	return (
		<S.Button variant={variant} onClick={onClick}>
			{children}
		</S.Button>
	);
};

Button.defaultProps = {
	variant: "primary",
};
export default Button;
