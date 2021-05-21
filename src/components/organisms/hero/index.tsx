import { Heading, Text, Button } from "components";
import * as S from "./style";

const Hero = () => (
	<S.Wrapper>
		<Heading variant="h1">
			<S.StrongText>습관</S.StrongText>처럼
			<br />
			꾸준히 코딩하자.
		</Heading>
		<Text variant="body1">
			코딩은 매일 매일 해야 실력이 늘어난다고 하는데, 혼자서 많이 힘드셨죠?
			<br />
			매주 공부한 내용을 github에 기록하고, 다른 개발자들과 의견을 나누며,
			<br />
			모두 함께 꾸준히 코딩하는 습관을 만들어 봐요!
		</Text>
		<Button variant="primary" to="/challanges">
			4주 코딩 챌린지 도전하기
		</Button>
	</S.Wrapper>
);
export default Hero;
