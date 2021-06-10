import { CHCardGrid, DrawerGrid, EPCardGrid, Hero } from "components";
import { ChallangeCardType } from "types/data";
import MainPageTemplate from ".";

export default {
	title: "Templates/Main Template",
	component: [MainPageTemplate],
};

const sampleCards: ChallangeCardType[] = [
	{
		id: "1",
		language: "typescript",
		status: "close",
		start_at: new Date(),
		to: "/",
	},
	{
		id: "2",
		language: "python",
		status: "inProgress",
		start_at: new Date(),
		to: "/",
	},
	{
		id: "3",
		language: "graphql",
		status: "close",
		start_at: new Date(),
		to: "/",
	},
	{
		id: "4",
		language: "react",
		status: "inProgress",
		start_at: new Date(),
		to: "/",
	},
	{
		id: "5",
		language: "typescript",
		status: "inProgress",
		start_at: new Date(),
		to: "/",
	},
];

const SampleData = [
	{
		key: 1,
		avartarSRC: "https://avatars1.githubusercontent.com/u/3426196?v=4",
		byline: "김한울 | 개발자",
		content:
			"뉴스 아티클과 다른 배움이에요. 프로덕트와 관련된 뉴스를 구독해서 읽었어요. 많이 배웠지만 동향이나, 거시적인 인사이트 위주라 저에게는 맞지 않았어요. 읽는 위주라 소비만 해서 기억에 잘 안남더라구요. 지금 까지 챌린지를 8주 정도 해봤는데, 이제는 서비스를 이용할 때 디테일한 요소들이 보여요. 바로 적용 해보고 싶게 공감이 되다보니, 제 프로젝트에도 바로 적용해보고 있어요.",
	},
	{
		key: 2,
		avartarSRC: "https://avatars1.githubusercontent.com/u/3426196?v=4",
		byline: "김한울 | 개발자",
		content:
			"뉴스 아티클과 다른 배움이에요. 프로덕트와 관련된 뉴스를 구독해서 읽었어요. 많이 배웠지만 동향이나, 거시적인 인사이트 위주라 저에게는 맞지 않았어요. 읽는 위주라 소비만 해서 기억에 잘 안남더라구요. 지금 까지 챌린지를 8주 정도 해봤는데, 이제는 서비스를 이용할 때 디테일한 요소들이 보여요. 바로 적용 해보고 싶게 공감이 되다보니, 제 프로젝트에도 바로 적용해보고 있어요.",
	},
	{
		key: 3,
		avartarSRC: "https://avatars1.githubusercontent.com/u/3426196?v=4",
		byline: "김한울 | 개발자",
		content:
			"뉴스 아티클과 다른 배움이에요. 프로덕트와 관련된 뉴스를 구독해서 읽었어요. 많이 배웠지만 동향이나, 거시적인 인사이트 위주라 저에게는 맞지 않았어요. 읽는 위주라 소비만 해서 기억에 잘 안남더라구요. 지금 까지 챌린지를 8주 정도 해봤는데, 이제는 서비스를 이용할 때 디테일한 요소들이 보여요. 바로 적용 해보고 싶게 공감이 되다보니, 제 프로젝트에도 바로 적용해보고 있어요.",
	},
	{
		key: 4,
		avartarSRC: "https://avatars1.githubusercontent.com/u/3426196?v=4",
		byline: "김한울 | 개발자",
		content:
			"뉴스 아티클과 다른 배움이에요. 프로덕트와 관련된 뉴스를 구독해서 읽었어요. 많이 배웠지만 동향이나, 거시적인 인사이트 위주라 저에게는 맞지 않았어요. 읽는 위주라 소비만 해서 기억에 잘 안남더라구요. 지금 까지 챌린지를 8주 정도 해봤는데, 이제는 서비스를 이용할 때 디테일한 요소들이 보여요. 바로 적용 해보고 싶게 공감이 되다보니, 제 프로젝트에도 바로 적용해보고 있어요.",
	},
];

const exampleDrawers = [
	{
		key: 1,
		title: "예치금 환급은 어떻게 이루어 지나요?",
		content:
			"스터디 리더가 제출한 리뷰를 확인하고 스터디 비용 정산을 합니다. 당일 정산을 목표로 하며, 1회당 2.5만원씩 정산됩니다. 또한 리뷰에 불참하신 분들의 1회 비용을 참여하신 분들에게 1/n하여 정산 해드립니다. 예를 들어, 10명 중 8명이 참석을 하고 2명이 참석을 못하셨을 시 2명의 분의 비용 50,000원에서 8으로 나눈 6,250원씩 추가로 정산하여 드립니다.",
	},
	{
		key: 2,
		title: "신청 후에 과정이 어떻게 되나요?",
		content:
			"참여가 확정된 분들에게 문자 메시지로 리뷰 작성 메뉴얼을 보내드리고 있습니다. 메뉴얼에는 github repository 셋팅 방법, code pot 슬랙 채널 가입, 리뷰 작성 가이드, 주의사항들을 안내해 드리고 있습니다.",
	},
	{
		key: 3,
		title: "리뷰 인증 기준이 있나요?",
		content:
			"리뷰 내용은 최소 200자가 넘어야 합니다. 코드는 인정되지 않으며, 한 주간의 공부한 내용을 정리하여 작성하는 것을 원칙으로 합니다.",
	},
	{
		key: 4,
		title: "환불 규정은 어떻게 되나요?",
		content:
			"남은 횟수 만큼의 예치금을 돌려 드립니다. 환불은 반드시 1주 전에 말씀해주셔야 해당 주차부터 환불이 적용됩니다. 리뷰를 작성하지 않아 참여하지 못한 챌린지는 환불 되지 않습니다.",
	},
];

export const Default = () => (
	<MainPageTemplate
		hero={<Hero></Hero>}
		challangeGrid={<CHCardGrid CHCards={sampleCards}></CHCardGrid>}
		epilogueGrid={<EPCardGrid epCards={SampleData}></EPCardGrid>}
		faqGrid={<DrawerGrid drawers={exampleDrawers}></DrawerGrid>}
	></MainPageTemplate>
);
