import { Link, Logo, NavigationBar } from "components";
import { Session } from "next-auth";
import { useSession } from "next-auth/client";
import * as S from "./style";

interface Props {
	navless?: boolean;
}
interface HeaderProps extends Props {
	session?: Session | null;
	loading?: boolean;
}

export const Header = ({ session, navless, loading }: HeaderProps) => (
	<S.Wrapper>
		<Link to="/">
			<Logo height={24} />
		</Link>
		{loading ? (
			<></>
		) : (
			!navless && <NavigationBar session={session}></NavigationBar>
		)}
	</S.Wrapper>
);

const HeaderContainer = ({ navless }: Props) => {
	const [session, loading] = useSession();
	return (
		<Header session={session} loading={loading} navless={navless}></Header>
	);
};

export default HeaderContainer;
