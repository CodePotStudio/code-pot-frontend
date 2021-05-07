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

//FIXME: Hover 시에 색이 안바뀌는데 왜 안바뀌는지 모르겠음.
const Link = ({ children, to, href, onClick }: Props) => {
	if (href) {
		return <S.Anchor href={href}>{children}</S.Anchor>;
	} else if (to) {
		return <S.Link href={to}>{children}</S.Link>;
	} else {
		return <S.Anchor onClick={onClick}>{children}</S.Anchor>;
	}
};

export default Link;
