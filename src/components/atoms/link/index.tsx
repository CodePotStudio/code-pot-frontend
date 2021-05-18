import * as S from "./style";
import Link from "next/link";

interface Props {
	children: React.ReactNode;
	// internal routing
	to?: string;
	// external routing
	href?: string;
	// click handler
	onClick?: () => void;
}

const CustomLink = ({ children, to, href, onClick, ...props }: Props) => {
	if (href) {
		return (
			<S.Anchor href={href} {...props}>
				{children}
			</S.Anchor>
		);
	} else if (to) {
		return (
			<Link href={to}>
				<S.Anchor {...props}>{children}</S.Anchor>
			</Link>
		);
	} else {
		return (
			<S.Anchor onClick={onClick} {...props}>
				{children}
			</S.Anchor>
		);
	}
};

export default CustomLink;
