import { ICONS, IconSet } from "./constants";

export interface Props {
	size?: number;
	name: ICONS;
}

const Icon = ({ size, name, ...props }: Props) => (
	<svg
		width={size}
		height={size}
		viewBox={IconSet[name].viewBox}
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	>
		<path
			d={IconSet[name].path}
			fill={IconSet[name].fill || "currentColor"}
			fillRule={IconSet[name].fillRule}
			clipRule={IconSet[name].clipRule}
		/>
	</svg>
);

Icon.defaultProps = {
	size: 16,
};
export default Icon;
