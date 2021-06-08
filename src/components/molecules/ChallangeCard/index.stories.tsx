import ChallangeCard from ".";
import { Story } from "@storybook/react";

export default {
	title: "Mocules/Challange Card",
	component: [ChallangeCard],
};

const Template: Story = (args) => (
	<div style={{ display: "inline-flex" }}>
		<ChallangeCard
			id={1}
			status="INPROGRESS"
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
