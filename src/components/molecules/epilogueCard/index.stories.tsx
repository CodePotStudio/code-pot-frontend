import EpilogueCard from ".";

export default {
	title: "Mocules/Epilogue Card",
	component: [EpilogueCard],
};

export const Default = () => (
	<>
		<EpilogueCard
			byline="김한울 | 개발자"
			content="뉴스 아티클과 다른 배움이에요. 프로덕트와 관련된 뉴스를 구독해서 읽었어요. 많이 배웠지만 동향이나, 거시적인 인사이트 위주라 저에게는 맞지 않았어요. 읽는 위주라 소비만 해서 기억에 잘 안남더라구요. 지금 까지 챌린지를 8주 정도 해봤는데, 이제는 서비스를 이용할 때 디테일한 요소들이 보여요. 바로 적용 해보고 싶게 공감이 되다보니, 제 프로젝트에도 바로 적용해보고 있어요."
			avartarSRC="https://avatars1.githubusercontent.com/u/3426196?v=4"
			key={1}
		></EpilogueCard>
	</>
);
