import ChallangeCard from ".";
import { Story } from "@storybook/react";
import { ChallangeStatus } from "types/graphql/generated-types";

export default {
	title: "Mocules/Challange Card",
	component: [ChallangeCard],
};

const Template: Story = (args) => (
	<div style={{ display: "inline-flex" }}>
		<ChallangeCard
			id={1}
			status={ChallangeStatus.Inprogress}
			remarks="단단한 javascript를 만들고 싶다면"
			name="typescript"
			thumbnail="/languages/typescript.svg"
			startDateTime={new Date()}
			endDateTime={new Date()}
			{...args}
		></ChallangeCard>
	</div>
);
export const Basic = Template.bind({});

// default Props 넣기
Basic.args = {
	language: "typescript",
	status: "INPROGRESS",
	to: "/home",
};
