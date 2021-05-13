import { Footer, Heading, Button } from "components";
import Head from "next/head";

export default function Home() {
	return (
		<div className="container">
			<Head>
				<title>습관처럼 꾸준히 코딩하자.</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main>Main</main>
			<Heading variant="h6">H1 TEST</Heading>
			<Button variant="primary">Hello</Button>
			<Footer></Footer>
		</div>
	);
}
