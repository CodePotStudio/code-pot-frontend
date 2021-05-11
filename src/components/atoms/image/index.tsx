import * as S from "./style";

interface Props {
	src: string;
}

const Image = ({ src }: Props) => <S.Image src={src} />;
export default Image;
