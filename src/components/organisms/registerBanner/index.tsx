import * as S from "./style";

interface Props {
	challangeId: number;
}

const RegisterBanner = ({ challangeId }: Props) => (
	<S.Wrapper>
		<S.StyledHeading variant="h7">
			꾸준히 코딩하는 습관 만들기 프로젝트!
		</S.StyledHeading>
		<S.StyledButton to={`/checkout/challanges/${challangeId}`}>
			지금 바로 시작하기
		</S.StyledButton>
	</S.Wrapper>
);
export default RegisterBanner;
