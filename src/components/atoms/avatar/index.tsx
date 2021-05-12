import * as S from "./style";

export interface Props {
	/** alternation img */
	alt: string;
	/** avatar src */
	src?: string;
	/** avatar size */
	size?: number;
}

const Avatar = ({ alt, src, size }: Props) => (
	<S.Avatar src={src} width={size} height={size} alt={alt}></S.Avatar>
);
Avatar.defaultProps = {
	size: 40,
	src: "/defaultAvatar.svg",
};

export default Avatar;
