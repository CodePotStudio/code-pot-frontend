import { useState } from "react";
import * as S from "./style";
import { Avatar, NavigationMenu } from "components";
import routes from "common/constants/routes";
import { Session } from "next-auth";
interface Props {
	session?: Session | null;
}

const NavigationBar = ({ session }: Props) => {
	const [showNav, setShowNav] = useState<boolean>(false);
	return (
		<S.NavigationBarWrapper>
			{session && session.user.isActive ? (
				<>
					<S.NavigationBarItem>
						<Avatar
							src={session?.user?.image || undefined}
							alt="navigation avatar"
							size={48}
							onClick={() => setShowNav((showNav) => !showNav)}
						></Avatar>
					</S.NavigationBarItem>
					{showNav && <NavigationMenu />}
				</>
			) : (
				<>
					<S.NavigationBarItem>
						<S.LoginButton variant="primary" to={routes.LOGIN}>
							로그인
						</S.LoginButton>
					</S.NavigationBarItem>
					<S.NavigationBarItem>
						<S.SignUpButton variant="secondary" to={routes.SIGNUP}>
							회원가입
						</S.SignUpButton>
					</S.NavigationBarItem>
				</>
			)}
		</S.NavigationBarWrapper>
	);
};
export default NavigationBar;
