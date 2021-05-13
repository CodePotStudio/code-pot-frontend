import { ICONS } from "../icon/constants";
import * as S from "./style";

interface Props {
	children: React.ReactNode;
	checked: boolean;
}

const Radio = ({ children, checked }: Props) => (
	<S.Label>
		<S.Wrapper>
			<S.Radio type="radio" checked={checked} />
			<S.EmptyRadio name={ICONS.emptyRadio} size={16}></S.EmptyRadio>
			<S.CheckedRadio name={ICONS.checkedRadio} size={16}></S.CheckedRadio>
		</S.Wrapper>
		{children}
	</S.Label>
);

Radio.defaultProps = {
	checked: false,
};

export default Radio;
