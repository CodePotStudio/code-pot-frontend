import * as S from "./style";

interface Props extends S.ImageStyleProps {
	src: string;
}

const Image = ({ src, ...props }: Props) => <S.Image src={src} {...props} />;
export default Image;
