import * as S from "./style";

export interface Props extends S.DividerStyleProps {}
const Divider = ({
	borderWidth,
	borderStyle,
	grayScaleLevel,
}: S.DividerStyleProps) => (
	<S.Divider
		borderWidth={borderWidth}
		borderStyle={borderStyle}
		grayScaleLevel={grayScaleLevel}
	/>
);

Divider.defaultProps = {
	borderWidth: "1px",
	borderStyle: "solid",
	grayScaleLevel: 4,
};

export default Divider;
