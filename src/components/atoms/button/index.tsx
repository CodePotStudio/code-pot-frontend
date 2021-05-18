import Link from "next/link";
import * as S from "./style";

interface Props extends S.ButtonStyleProps {
	children: React.ReactNode;
	// internal routing
	to?: string;
	// external routing
	href?: string;
	// click handler
	onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
	// button type
	type: "button" | "submit" | "reset" | undefined;
}

const Button = ({ children, variant, to, href, onClick, ...props }: Props) => {
	if (to) {
		return (
			<Link href={to}>
				<S.Anchor variant={variant} {...props}>
					{children}
				</S.Anchor>
			</Link>
		);
	} else if (href) {
		return (
			<S.Anchor href={href} variant={variant} {...props}>
				{children}
			</S.Anchor>
		);
	}
	return (
		<S.Button variant={variant} onClick={onClick} {...props}>
			{children}
		</S.Button>
	);
};

Button.defaultProps = {
	variant: "primary",
	type: "button",
};
export default Button;
