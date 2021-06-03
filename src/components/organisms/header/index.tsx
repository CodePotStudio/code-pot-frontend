import { Link, Logo, NavigationBar } from "components";
import { Session } from "next-auth";
import { useSession } from "next-auth/client";
import * as S from "./style";

interface HeaderProps {
	session?: Session | null;
}

export const Header = ({ session }: HeaderProps) => (
	<S.Wrapper>
		<Link to="/">
			<Logo height={24} />
		</Link>
		{<NavigationBar session={session}></NavigationBar>}
	</S.Wrapper>
);

const HeaderContainer = () => {
	const [session] = useSession();
	return <Header session={session}></Header>;
};

export default HeaderContainer;
