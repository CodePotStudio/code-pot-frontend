import { BANK_LIST } from "../../../common/constants";
import FormItem from ".";
import CheckBox from "../../atoms/checkBox";
import Input from "../../atoms/input";
import Select from "../../atoms/select";
import { Radio } from "components";

export default {
	title: "Mocules/Form Item",
	component: [FormItem],
};

export const Default = () => (
	<>
		<FormItem label="ID">
			<Input name="ID" placeholder="ID를 입력해 주세요"></Input>
		</FormItem>
		<FormItem label="환불 계좌">
			<Select
				options={BANK_LIST}
				defaultValue="신한은행"
				name="bank_list"
				handleChange={(e) => console.log(e.target.value)}
			></Select>
		</FormItem>
		<FormItem>
			<CheckBox onClick={() => console.log("clicked")}>약관 동의</CheckBox>
		</FormItem>
		<FormItem>
			<Radio checked>계좌 이체</Radio>
		</FormItem>
	</>
);

export const AlignRowForm = () => (
	<>
		<FormItem label="ID" direction="row">
			<Input name="ID" placeholder="ID를 입력해 주세요"></Input>
		</FormItem>
		<FormItem direction="row" label="환불 계좌">
			<Select
				options={BANK_LIST}
				defaultValue="신한은행"
				name="bank_list"
				handleChange={(e) => console.log(e.target.value)}
			></Select>
		</FormItem>
		<FormItem direction="row">
			<CheckBox onClick={() => console.log("clicked")}>약관 동의</CheckBox>
		</FormItem>
		<FormItem direction="row">
			<Radio checked>계좌 이체</Radio>
		</FormItem>
	</>
);

export const InvalidFormItem = () => (
	<>
		<FormItem label="ID" invalid={true} caption="잘못된 ID입니다.">
			<Input name="ID" placeholder="ID를 입력해 주세요"></Input>
		</FormItem>
	</>
);

export const InvalidRowFormItem = () => (
	<>
		<FormItem
			label="ID"
			invalid={true}
			direction="row"
			caption="잘못된 ID입니다."
		>
			<Input name="ID" placeholder="ID를 입력해 주세요"></Input>
		</FormItem>
	</>
);
