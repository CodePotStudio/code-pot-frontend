import ChallangeCard from ".";
import { Story } from "@storybook/react";

export default {
	title: "Mocules/Challange Card",
	component: [ChallangeCard],
};

const Template: Story = (args) => (
	<div style={{ display: "inline-flex" }}>
		<ChallangeCard
			key={1}
			language="typescript"
			status="inProgress"
			to="/home"
			start_at={new Date()}
			{...args}
		></ChallangeCard>
	</div>
);
export const Basic = Template.bind({});

// default Props 넣기
Basic.args = {
	language: "typescript",
	status: "inProgress",
	to: "/home",
};
