import ClassCard from ".";
import { Story } from "@storybook/react";

export default {
	title: "Mocules/Class Card",
	component: ClassCard,
};

const Template: Story = (args) => (
	<div style={{ display: "inline-flex" }}>
		<ClassCard
			language="typescript"
			status="inProgress"
			to="/home"
			start_at={new Date()}
			{...args}
		></ClassCard>
	</div>
);
export const Basic = Template.bind({});

// default Props 넣기
Basic.args = {
	language: "typescript",
	status: "inProgress",
	to: "/home",
};
