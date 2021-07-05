import ChallangeCard from ".";
import { Story } from "@storybook/react";
import { dummyChallanges } from "fixture/data";

export default {
	title: "Mocules/Challange Card",
	component: [ChallangeCard],
};

const Template: Story = (args) => (
	<div style={{ display: "inline-flex" }}>
		<ChallangeCard {...dummyChallanges[0]} {...args}></ChallangeCard>
	</div>
);
export const Basic = Template.bind({});

// default Props 넣기
Basic.args = {
	language: "typescript",
	status: "INPROGRESS",
	to: "/home",
};
