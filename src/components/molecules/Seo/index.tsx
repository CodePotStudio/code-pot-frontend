import { SEO_CONFIG } from "common/constants";
import Head from "next/head";

interface Props {
	title?: string;
	mainImage?: string;
	description?: string;
	pageURL?: string;
}

const Seo = ({ title, mainImage, pageURL, description }: Props) => {
	const metaName: Record<string, string> = {
		author: SEO_CONFIG.author,
		robots: "index,follow",
		viewport: "width=device-width, initial-scale=1, shrink-to-fit=no",
		description: description || SEO_CONFIG.description,
	};

	const metaProperty: Record<string, string> = {
		"article:author": SEO_CONFIG.author,
		"og:url": pageURL || SEO_CONFIG.siteURL,
		"og:type": "website",
		"og:title": title || SEO_CONFIG.title,
		"og:image": mainImage || SEO_CONFIG.mainImage,
		"og:locale": "ko_KR",
		"og:site_name": title || SEO_CONFIG.title,
		"og:description": description || SEO_CONFIG.description || "",
	};

	return (
		<Head>
			<title>{title || SEO_CONFIG.title}</title>
			<meta charSet="utf-8" />
			<meta httpEquiv="x-ua-compatible" content="ie=edge" />
			<meta name="viewport" content="width=device-width, initial-scale=1" />
			<base href={process.env.WEBAPP_URL} />

			<link rel="icon" href="/favicon.ico" />

			<link href={pageURL || SEO_CONFIG.siteURL} rel="canonical" />
			<link href="manifest.json" rel="manifest" />

			{Object.keys(metaName).map((name) => (
				<meta name={name} content={metaName[name]} key={name} />
			))}
			{Object.keys(metaProperty).map((property) => (
				<meta
					property={property}
					content={metaProperty[property]}
					key={property}
				/>
			))}
		</Head>
	);
};

export default Seo;
