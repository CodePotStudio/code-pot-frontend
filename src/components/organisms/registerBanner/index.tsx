import { Challange, ChallangeStatus } from "types/graphql/generated-types";
import * as S from "./style";

interface Props {
	challange: Challange;
}

const RegisterBanner = ({ challange }: Props) => {
	return (
		<S.Wrapper>
			<S.StyledHeading variant="h7">
				꾸준히 코딩하는 습관 만들기 프로젝트!
			</S.StyledHeading>
			{challange.status === ChallangeStatus.RecruitmentClosed ? (
				<S.StyledButton disabled>모집마감</S.StyledButton>
			) : (
				<S.StyledButton to={`/checkout/challanges/${challange.id}`}>
					지금 바로 시작하기
				</S.StyledButton>
			)}
		</S.Wrapper>
	);
};
export default RegisterBanner;
