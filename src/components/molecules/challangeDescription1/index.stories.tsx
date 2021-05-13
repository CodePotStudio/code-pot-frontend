import ChallangeDescription from ".";

export default {
	title: "Mocules/Challange Description",
	component: [ChallangeDescription],
};

export const Default = () => (
	<>
		<ChallangeDescription
			title="프로그래밍 챌린지는 무엇인가요?"
			content="Code Pot, 개발 챌린지는 혼자서 꾸준히 공부가 하기 어려운 분들을 위해
						예치금으로 동기부여를 할 수 있도록하는 프로그램입니다."
		></ChallangeDescription>
	</>
);
