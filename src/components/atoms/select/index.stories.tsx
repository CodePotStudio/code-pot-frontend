import { BANK_LIST } from "common/constants";
import Select from ".";

export default {
	title: "Atoms/Select",
	component: [Select],
};

export const Default = () => (
	<Select
		options={BANK_LIST}
		defaultValue="신한은행"
		name="bank_list"
		handleChange={(e) => console.log(e.target.value)}
	></Select>
);
