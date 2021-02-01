import Head from "next/head";
import styles from "../styles/Home.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faTwitter, faGithub, faLinkedin, faTelegramPlane } from "@fortawesome/free-brands-svg-icons";

const Home = () => {
	const today = new Date();

	return (
		<div className={`${styles.container}`}>
			<Head>
				<title>Hi, i'm Alan</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className={styles.main}>
				<section className={styles.principal}>
					<div className={styles.title}>
						<h4> Olá, meu nome é </h4>
						<h1> Alan </h1>
					</div>

					<div className={styles.interest}>
						<span className={styles.chip}> Python </span>
						<span className={styles.chip}> Java </span>
						<span className={styles.chip}> JavaScript </span>
						<span className={styles.chip}> React </span>
						<span className={styles.chip}> Data Sience </span>
						<span className={styles.chip}> Nlp </span>
					</div>

					<div className={styles.text}>
						Sou desenvolvedor de software, formado em engenharia de software pela{" "}
						<a href="https://www.ucsal.br/"> Ucsal</a>. Atualmente desenvolvo na{" "}
						<a href="https://solutis.com.br/">Solutis</a>, tenho {parseInt(today.getFullYear()) - 1998} anos
						e sou de Salvador, Bahia, Brasil. Amo gatos e acho o ceu noturno muito bonito.
					</div>

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
				</section>

				<div className={styles.sky}>
					{[...Array(200).keys()].map(i => (
						<span key={i} className={`${styles.particle} ${styles.glow}`}>
							✦
						</span>
					))}
				</div>
			</main>

			<footer className={styles.footer}></footer>
		</div>
	);
};

export default Home;
