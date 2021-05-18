import { BaseTemplate, Button } from "components";
import { ICONS } from "components/atoms/icon/constants";
import * as S from "./style";
import { useRouter } from "next/router";

const NotFoundTemplate = () => {
	const router = useRouter();
	return (
		<BaseTemplate>
			<S.Wrapper>
				<S.StyledHeading variant="h3">404 Not Found.</S.StyledHeading>
				<S.StyledIcon name={ICONS.warning} size={128}></S.StyledIcon>
				<S.StyledText variant="body1">
					요청하신 페이지를 찾을 수 없습니다. <br />
					입력하신 주소가 정확한지 다시 한 번 확인해 주세요.
				</S.StyledText>
				<Button variant="primary" onClick={() => router.back()}>
					이전 페이지로 돌아가기
				</Button>
			</S.Wrapper>
		</BaseTemplate>
	);
};
export default NotFoundTemplate;
