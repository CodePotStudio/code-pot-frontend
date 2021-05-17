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
		<S.ChallangeGridWrapper>{challangeGrid}</S.ChallangeGridWrapper>
		<S.EpilogueGridWrapper>{epilogueGrid}</S.EpilogueGridWrapper>
		<S.FAQGridWrapper>{faqGrid}</S.FAQGridWrapper>
	</BaseTemplate>
);
export default MainPageTemplate;
