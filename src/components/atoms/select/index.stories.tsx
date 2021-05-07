// FIXME: typescript Root 못찾음
import { BANK_LIST } from "../../../commons/constants";
import Select from ".";

export default {
	title: "Atoms/Select",
	component: [Select],
};

export const Default = () => (
	<Select options={BANK_LIST} defaultValue="신한은행" name="bank_list"></Select>
);
