import { Avatar, Button } from "components";
import * as S from "./style";

interface Props {
	isLoggedIn: boolean;
	// 노출할 avatar URL
	avatarURL?: string | undefined | null;
}

const NavigationBar = ({ isLoggedIn, avatarURL }: Props) => (
	<S.NavigationWrapper>
		{isLoggedIn ? (
			<S.NavigationItem>
				<Avatar src={avatarURL} alt="navigation avatar"></Avatar>
			</S.NavigationItem>
		) : (
			<>
				<S.NavigationItem>
					<Button variant="primary">로그인</Button>
				</S.NavigationItem>
				<S.NavigationItem>
					<Button variant="secondary">회원가입</Button>
				</S.NavigationItem>
			</>
		)}
	</S.NavigationWrapper>
);
export default NavigationBar;
