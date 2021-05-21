import Drawers from ".";
import { MainPageFAQ } from "./constants";

export default {
	title: "Organisms/Drawer Grid",
	component: [Drawers],
};

export const Default = () => <Drawers drawers={MainPageFAQ} />;
