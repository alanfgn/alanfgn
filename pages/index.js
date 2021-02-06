import Head from "next/head";
import styles from "../styles/Home.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faTwitter, faGithub, faLinkedin, faTelegramPlane } from "@fortawesome/free-brands-svg-icons";
import Particles from "react-particles-js";

const Home = () => {
	const today = new Date();

	return (
		<div className={`${styles.container}`}>
			<Head>
				<title>Hi, i'm Alan</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main className={styles.main}>
				<menu className={styles.menu}>
					<div>
						<a href="#description">Description</a>
					</div>
					<div>
						<a href="#portfolio">Portfolio</a>
					</div>
				</menu>

				<section className={styles.saudation}>
					<div className={styles.card}>
						<h1 className={styles.title}>Hi, i am Alan.</h1>
						<h4 className={styles.subtitle}> Software developer </h4>
						<div className={styles.contacts}>
							<a href="https://github.com/alanfgn" target="_blank" title="Github">
								<FontAwesomeIcon icon={faGithub} />
							</a>

							<a href="https://twitter.com/alanfgn" target="_blank" title="Twitter">
								<FontAwesomeIcon icon={faTwitter} />
							</a>

							<a href="https://www.linkedin.com/in/alan-souza-fagundes/" target="_blank" title="Linkedin">
								<FontAwesomeIcon icon={faLinkedin} />
							</a>

							<a href="https://t.me/alanfgn">
								<FontAwesomeIcon icon={faTelegramPlane} target="_blank" title="Telegram" />
							</a>

							<a href="mailto:alan.souza.fagundes@gmail.com" target="_blank" title="Email">
								<FontAwesomeIcon icon={faEnvelope} />
							</a>
						</div>

						<Particles
							className={styles.particles}
							params={{
								particles: {
									number: {
										value: 25,
										density: {
											enable: true,
											value_area: 900,
										},
									},
									color: {
										value: "#504b5e",
									},
									shape: {
										type: "polygon",
										polygon: {
											nb_sides: 1,
										},
										image: {
											src: "img/github.svg",
											width: 100,
											height: 100,
										},
									},
									opacity: {
										value: 0.2,
										random: true,
										anim: {
											enable: false,
											speed: 1,
											opacity_min: 0.1,
											sync: false,
										},
									},
									size: {
										value: 50,
										random: false,
										anim: {
											enable: true,
											speed: 8,
											size_min: 40,
											sync: false,
										},
									},
									line_linked: {
										enable: false,
									},
									move: {
										enable: true,
										speed: 3,
										direction: "none",
										random: false,
										straight: false,
										out_mode: "out",
										bounce: false,
										attract: {
											enable: true,
											rotateX: 500,
											rotateY: 1000,
										},
									},
								},
								retina_detect: true,
							}}
							style={{
								width: "100%",
								height: "100%",
							}}
						/>
					</div>
				</section>

				<section className={styles.description}>
					<div className={styles.text} id="description">
						<h4>Description.</h4>
						Hey, i'm a software developer, graduated in software engenering in{" "}
						<a href="https://www.ucsal.br/"> Ucsal</a>. Actually i work at{" "}
						<a href="https://solutis.com.br/">Solutis</a>, i am {parseInt(today.getFullYear()) - 1998} years
						old and i am from Salvador, Bahia, Brazil. Fullstack developer mainly with{" "}
						<span className={styles.imp}>Java</span> and <span className={styles.imp}>React</span>.
						Currently interested in data sience, more specificaly in <span className={styles.imp}>text mining</span>{" "}
						and <span className={styles.imp}>nlp</span> with <span className={styles.imp}>Python</span>.
					</div>
				</section>

				<section className={styles.description}>
					<div className={styles.list} id="portfolio">
						<h4>Portfolio.</h4>
						<div className={styles.cardlist}>
							<a href="https://github.com/alanfgn/mtnp" target="_blank">
								<div className={styles.item}>
									<h5 className={styles.title}>Text Analysis for Political News</h5>
									Research work on the application of text analysis techniques in brazilian political
									news.
									<div className={styles.chips}>
										<span className={styles.chip}> Pyhton </span>
										<span className={styles.chip}> Nlp </span>
										<span className={styles.chip}> Text mining </span>
									</div>
								</div>
							</a>

							{/* <a href="https://github.com/alanfgn/mtnp" target="_blank">
								<div className={styles.item}>
									<h5 className={styles.title}>Text Analysis for Political News</h5>
									Research work on the application of text analysis techniques in brazilian political
									news.
									<div className={styles.chips}>
										<span className={styles.chip}> React </span>
										<span className={styles.chip}> Google Maps </span>
									</div>
								</div>
							</a>

							<a href="https://github.com/alanfgn/mtnp" target="_blank">
								<div className={styles.item}>
									<h5 className={styles.title}>Text Analysis for Political News</h5>
									Research work on the application of text analysis techniques in brazilian political
									news.
									<div className={styles.chips}>
										<span className={styles.chip}> Java </span>
										<span className={styles.chip}> Sprint Boot </span>
									</div>
								</div>
							</a> */}
						</div>
					</div>
				</section>
			</main>

			<section className={styles.sky}>
				{[...Array(130).keys()].map(i => (
					<span key={i} className={`${styles.particle} ${styles.glow}`}>
						✦
					</span>
				))}
			</section>
		</div>
	);
};

export default Home;
