import * as S from "./style";

export interface Props {
	/** alternation img */
	alt: string;
	/** avatar src */
	src: string;
	/** avatar size */
	size?: number;
	/** avatar click event handler */
	onClick?: () => void;
}

const Avatar = ({ alt, src, size, onClick, ...props }: Props) => (
	<S.Avatar
		src={src}
		width={size}
		height={size}
		onClick={onClick}
		alt={alt}
		{...props}
	></S.Avatar>
);
Avatar.defaultProps = {
	size: 40,
	src: "/defaultAvatar.svg",
};

export default Avatar;
