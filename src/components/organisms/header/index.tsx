import { Link, Logo, NavigationBar } from "components";
import * as S from "./style";

interface Props {
	isLoggedIn: boolean;
	navless?: boolean;
}

const Header = ({ isLoggedIn, navless }: Props) => (
	<S.Wrapper>
		<Link to="/">
			<Logo height={24} />
		</Link>
		{!navless && <NavigationBar isLoggedIn={isLoggedIn}></NavigationBar>}
	</S.Wrapper>
);

Header.defaultProps = {
	isLoggedIn: false,
	navless: false,
};

export default Header;
