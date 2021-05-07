import { ICONS } from "../icon/constants";
import * as S from "./style";

type option = {
	key: string;
	value: string;
};

interface Props {
	// options name
	options: option[];
	// default option name
	defaultValue: string;
	// select tag name
	name: string;
}

const Select = ({ options, defaultValue, name }: Props) => (
	<S.SelectWrapper>
		<S.Select name={name}>
			{options.map(({ value, key }) => (
				<option key={key} selected={defaultValue === value}>
					{value}
				</option>
			))}
		</S.Select>
		<S.StyledIcon name={ICONS.arrowDown} />
	</S.SelectWrapper>
);

export default Select;
