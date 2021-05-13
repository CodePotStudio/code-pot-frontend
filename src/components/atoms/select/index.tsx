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
	// click handler
	handleChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const Select = ({ options, defaultValue, name, handleChange }: Props) => (
	<S.SelectWrapper>
		<S.Select name={name} onChange={handleChange} value={defaultValue}>
			{options.map(({ key, value }) => (
				<option key={key} value={value}>
					{value}
				</option>
			))}
		</S.Select>
		<S.StyledIcon name={ICONS.arrowDown} />
	</S.SelectWrapper>
);

export default Select;
