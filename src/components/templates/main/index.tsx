import { BaseTemplate } from "components";
import * as S from "./style";
import React from "react";

interface Props {
	hero: React.ReactNode;
	challangeGrid: React.ReactNode;
	epilogueGrid: React.ReactNode;
	faqGrid: React.ReactNode;
}

const MainPageTemplate = ({
	hero,
	challangeGrid,
	epilogueGrid,
	faqGrid,
}: Props) => (
	<BaseTemplate>
		<S.HeroWrapper>{hero}</S.HeroWrapper>
		<S.ChallangeGridWrapper id="challanges">
			<S.HeadingWrapper variant="h2">모집중인 챌린지</S.HeadingWrapper>
			{challangeGrid}
		</S.ChallangeGridWrapper>
		<S.EpilogueGridWrapper id="challange-epilogue">
			<S.HeadingWrapper variant="h2">챌린지 후기</S.HeadingWrapper>
			{epilogueGrid}
		</S.EpilogueGridWrapper>
		<S.FAQGridWrapper id="challange-faq">
			<S.HeadingWrapper variant="h2">자주 묻는 질문</S.HeadingWrapper>
			{faqGrid}
		</S.FAQGridWrapper>
	</BaseTemplate>
);
export default MainPageTemplate;
