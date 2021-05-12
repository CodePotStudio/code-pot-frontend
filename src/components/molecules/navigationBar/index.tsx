import { Avatar, NavigationMenu } from "components";
import { useState } from "react";
import * as S from "./style";

interface Props {
	isLoggedIn: boolean;
	// 노출할 avatar URL
	avatarURL?: string | undefined | null;
}

const NavigationBar = ({ isLoggedIn, avatarURL }: Props) => {
	const [showNav, setShowNav] = useState<boolean>(false);
	return (
		<S.NavigationBarWrapper>
			{isLoggedIn ? (
				<>
					<S.NavigationBarItem>
						<Avatar
							src={avatarURL}
							alt="navigation avatar"
							onClick={() => setShowNav((showNav) => !showNav)}
						></Avatar>
					</S.NavigationBarItem>
					{showNav && <NavigationMenu />}
				</>
			) : (
				<>
					<S.NavigationBarItem>
						<S.LoginButton variant="primary" to="/login">
							로그인
						</S.LoginButton>
					</S.NavigationBarItem>
					<S.NavigationBarItem>
						<S.SignUpButton variant="secondary" to="/sign-up">
							회원가입
						</S.SignUpButton>
					</S.NavigationBarItem>
				</>
			)}
		</S.NavigationBarWrapper>
	);
};
export default NavigationBar;
