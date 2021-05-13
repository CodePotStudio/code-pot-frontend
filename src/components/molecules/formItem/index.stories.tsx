import { BANK_LIST } from "../../../commons/constants";
import FormItem from ".";
import CheckBox from "../../atoms/checkBox";
import Input from "../../atoms/input";
import Select from "../../atoms/select";

export default {
	title: "Mocules/Form Item",
	component: [FormItem],
};

export const Default = () => (
	<>
		<FormItem label="ID">
			<Input inputName="ID" placeholder="ID를 입력해 주세요"></Input>
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
			<CheckBox checked={false} onClick={() => console.log("clicked")}>
				약관 동의
			</CheckBox>
		</FormItem>
	</>
);

export const AlignRowForm = () => (
	<>
		<FormItem label="ID" direction="row">
			<Input inputName="ID" placeholder="ID를 입력해 주세요"></Input>
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
			<CheckBox checked={false} onClick={() => console.log("clicked")}>
				약관 동의
			</CheckBox>
		</FormItem>
	</>
);

export const InvalidFormItem = () => (
	<>
		<FormItem label="ID" invalid={true} caption="잘못된 ID입니다.">
			<Input inputName="ID" placeholder="ID를 입력해 주세요"></Input>
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
			<Input inputName="ID" placeholder="ID를 입력해 주세요"></Input>
		</FormItem>
	</>
);
