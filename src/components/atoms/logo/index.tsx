import * as S from "./style";

export interface Props {
	// logo size
	height?: number;
	// logo color options
	color: "black" | "white";
}

const Logo = ({ height = 16, color }: Props) => (
	<S.Logo
		src={color == "white" ? "/codepotWhiteLogo.svg" : "/codepotBlackLogo.svg"}
		height={height}
		width={height * 5}
	/>
);

Logo.defaultProps = {
	color: "black",
	height: 16,
};

export default Logo;
