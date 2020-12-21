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
				<title>Alan</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className={styles.main}>
				<div className={styles.profile}>
					<div className={`${styles.title}`}>
						<h1 className={styles.hey}>Olá </h1>
						<h1 className={styles.saudation}>Meu nome é Alan</h1>
						<span className={`${styles.icon} ${styles.glow}`}> ✦ </span>
					</div>
					<div className={styles.bio}>Desenvolvedor de software.</div>
					<div className={styles.chips}>
						<span className={styles.chip}> Python </span>
						<span className={styles.chip}> JavaScript </span>
						<span className={styles.chip}> React </span>
						<span className={styles.chip}> Data Sience </span>
						<span className={styles.chip}> Nlp </span>
					</div>
				</div>
				<div className={styles.info}>
					<p className={styles.jobs}>
						Formado em engenharia de software pela <a href="https://www.ucsal.br/"> Ucsal</a>. <br />
						Atualmente sou desenvolvedor na <a href="https://solutis.com.br/">Solutis</a>.
						<br />
						Tenho <strong>{parseInt(today.getFullYear()) - 1998}</strong> anos e sou de
						<strong> Salvador, Bahia, Brasil.</strong>
						<br />
					</p>

					<div className={styles.comunications}>
						<a href="https://github.com/alanfgn" target="_blank">
							<FontAwesomeIcon icon={faGithub} />
						</a>

						<a href="https://twitter.com/alanfgn" target="_blank">
							<FontAwesomeIcon icon={faTwitter} />
						</a>

						<a href="https://www.linkedin.com/in/alan-souza-fagundes/" target="_blank">
							<FontAwesomeIcon icon={faLinkedin} />
						</a>

						<a href="https://t.me/alanfgn">
							<FontAwesomeIcon icon={faTelegramPlane} target="_blank" />
						</a>

						<a href="mailto:alan.souza.fagundes@gmail.com" target="_blank">
							<FontAwesomeIcon icon={faEnvelope} />
						</a>
					</div>
				</div>
			</main>

			<footer className={styles.footer}></footer>
		</div>
	);
};

export default Home;
