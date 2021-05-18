import EpilogueCardGrid from ".";
import { EpilogueCardData } from "./constants";

export default {
	title: "Organisms/Epilogue Card Grid",
	component: [EpilogueCardGrid],
};

export const Default = () => <EpilogueCardGrid epCards={EpilogueCardData} />;
