import { dummyChallanges } from "fixture/data";
import RegisterBanner from ".";

export default {
	title: "Organisms/Register Banner",
	component: [RegisterBanner],
};

export const Default = () => <RegisterBanner challange={dummyChallanges[0]} />;
