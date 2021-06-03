import { Link, Logo, NavigationBar } from "components";
import { Session } from "next-auth";
import { useSession } from "next-auth/client";
import { useEffect, useState } from "react";
import * as S from "./style";

interface HeaderProps {
	session?: Session | null;
}

export const Header = ({ session }: HeaderProps) => {
	const [sticky, setSticky] = useState(false);

	// 화면에서 아래 방향으로 얼만큼 스크롤(px 단위)을 했는지에 따라서 Sticky 여부 셋팅
	const handleScroll = () => {
		if (window.scrollY > 90) {
			setSticky(true);
		} else if (window.scrollY < 90) {
			setSticky(false);
		}
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
	});

	return (
		<S.Wrapper sticky={sticky}>
			<S.NavBar>
				<Link to="/">
					<Logo height={24} />
				</Link>
				{<NavigationBar session={session}></NavigationBar>}
			</S.NavBar>
		</S.Wrapper>
	);
};

const HeaderContainer = () => {
	const [session] = useSession();
	return <Header session={session}></Header>;
};

export default HeaderContainer;
