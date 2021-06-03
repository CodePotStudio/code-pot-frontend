import * as S from "./style";

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
		// TODO: Hover 시에 색깔 안변함
		return (
			<S.Link href={to} passHref>
				<S.Anchor {...props}>{children}</S.Anchor>
			</S.Link>
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
