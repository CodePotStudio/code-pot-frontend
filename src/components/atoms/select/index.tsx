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
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="currentcolor"
			style={{ marginLeft: "-28px", alignSelf: "center" }}
		>
			<path d="M7 10l5 5 5-5z"></path>
		</svg>
	</S.SelectWrapper>
);

export default Select;
