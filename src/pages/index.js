import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <img src="../../img/logo.svg" height="125" width="125" />
        <img src="../../img/nextpanel-txt.png" height="50" width="200" />
        <h1 className="hero__title">{siteConfig.title}</h1>
        <div className={styles.contianer}>
        <div className={styles.buttons}>
          <div>
            <Link
              className="button button--secondary button--lg"
              to="https://jexactylbrasil.ml/docs/category/pterodactyl">
              Documentação Pterodactyl
            </Link>
          </div>
          <div>
            <Link
                className="button button--secondary button--lg"
                to="https://jexactylbrasil.ml/docs/category/jexactyl">
              Documentação Jexactyl
            </Link>
          </div>
        </div>
        </div>
      </div>
    </header>
  );
}


export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}, Seu Proximo Painel Está Aqui!`}
      description="Venha ver o Seu painel de uma forma diferente, ja não está cansando do tradutor? NextPanel está aqui para ajuda-lo a escolher seu proximo Painel De jogos.">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
