import { ICONS } from "../icon/constants";
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
	icon?: ICONS;
}

const Button = ({ children, to, href, onClick, icon, ...props }: Props) => {
	if (to) {
		return (
			<Link href={to}>
				<S.Anchor {...props}>
					{icon && <S.StyledIcon name={icon} size={20}></S.StyledIcon>}
					{children}
				</S.Anchor>
			</Link>
		);
	} else if (href) {
		return (
			<S.Anchor href={href} {...props}>
				{icon && <S.StyledIcon name={icon} size={20}></S.StyledIcon>}
				{children}
			</S.Anchor>
		);
	}
	return (
		<S.Button onClick={onClick} {...props}>
			{icon && <S.StyledIcon name={icon} size={20}></S.StyledIcon>}
			{children}
		</S.Button>
	);
};

Button.defaultProps = {
	variant: "primary",
	type: "button",
};
export default Button;
