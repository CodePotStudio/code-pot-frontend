import ChallangeCardGrid from ".";
import { dummyChallanges } from "fixture/data";

export default {
	title: "Organisms/Challange Card Grid",
	component: [ChallangeCardGrid],
};

export const Default = () => (
	<ChallangeCardGrid CHCards={dummyChallanges} loading={false} />
);
export const LoadingData = () => (
	<ChallangeCardGrid loading={true} CHCards={[]} />
);
export const EmptyData = () => (
	<ChallangeCardGrid CHCards={[]} loading={false} />
);
