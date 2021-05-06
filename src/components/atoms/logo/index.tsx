import * as S from "./style";

export interface Props {
	// logo size
	height?: number;
	// logo color options
	color: "black" | "white";
}

const Logo = ({ height, color }: Props) => (
	<S.Logo
		src={color == "white" ? "codepotWhiteLogo.svg" : "./codepotBlackLogo.svg"}
		height={height}
	/>
);

Logo.defaultProps = {
	color: "black",
};

export default Logo;
