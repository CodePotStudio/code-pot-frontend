import Link from "../../atoms/link";
import * as S from "./style";

const NavigationMenu = () => (
	<S.NavigationWrapper>
		<S.Navigation>
			<S.NavigationItem>
				<Link to="/mypage">마이 페이지</Link>
			</S.NavigationItem>
			<S.NavigationItem>
				<Link onClick={() => console.log("logout")}>로그아웃</Link>
			</S.NavigationItem>
		</S.Navigation>
	</S.NavigationWrapper>
);
export default NavigationMenu;
