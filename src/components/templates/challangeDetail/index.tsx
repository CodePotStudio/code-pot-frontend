import { BaseTemplate } from "components";
import { Text } from "components";
import * as S from "./style";

export type description = {
	title: string;
	contents: string | string[];
};

interface Props {
	challangeBanner: React.ReactNode;
	registerBannder: React.ReactNode;
	descriptions: description[];
}

const CHDetailTemplate = ({
	challangeBanner,
	descriptions,
	registerBannder,
}: Props) => (
	<BaseTemplate>
		<S.ChallangeBannerWrapper>{challangeBanner}</S.ChallangeBannerWrapper>
		<S.ChallangeContentWrapper>
			{descriptions.map(({ title, contents }) => (
				<S.ChallangeDescWrapper>
					<S.HeadingWrapper variant="h4" hasBorder={true}>
						{title}
					</S.HeadingWrapper>
					{Array.isArray(contents) ? (
						<ul>
							{contents.map((content) => (
								<li>
									<Text variant="body1">{content}</Text>
								</li>
							))}
						</ul>
					) : (
						<Text variant="body1">{contents}</Text>
					)}
				</S.ChallangeDescWrapper>
			))}
		</S.ChallangeContentWrapper>
		<S.RegisterBannerWrapper>{registerBannder}</S.RegisterBannerWrapper>
	</BaseTemplate>
);
export default CHDetailTemplate;
