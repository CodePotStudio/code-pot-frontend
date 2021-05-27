import { Link, Logo, NavigationBar } from "components";
import { Session } from "next-auth";
import { useSession } from "next-auth/client";
import * as S from "./style";

interface HeaderProps {
	session?: Session | null;
	loading?: boolean;
}

export const Header = ({ session, loading }: HeaderProps) => (
	<S.Wrapper>
		<Link to="/">
			<Logo height={24} />
		</Link>
		{loading ? <></> : <NavigationBar session={session}></NavigationBar>}
	</S.Wrapper>
);

const HeaderContainer = () => {
	const [session, loading] = useSession();
	return <Header session={session} loading={loading}></Header>;
};

export default HeaderContainer;
