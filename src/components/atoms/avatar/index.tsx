import * as S from "./style";

export interface Props {
	/** alternation img */
	alt: string;
	/** avatar src */
	src: string;
	/** avatar size */
	size?: string;
}

const Avatar = ({ alt, src, size }: Props) => (
	<S.Avatar alt={alt} src={src} size={size} />
);
Avatar.defaultProps = {
	size: "40px",
};

export default Avatar;
