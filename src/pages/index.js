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
        <img src="../../img/nextpanel-img-txt.png" height="200" width="350" />
      <p className={styles.nextpanel-sub}>Venha ver o Seu painel de uma forma diferente, 
        ja não está cansando do tradutor? 
        NextPanel está aqui para ajuda-lo a escolher seu proximo Painel De jogos.</p>
        <div className={styles.contianer}>
          <div className={styles.buttons}>
            <div>
              <Link
                className="button button--secondary button--lg"
                to="/docs/Pterodactyl/intro">
                Documentação do Pterodactyl
              </Link>
            </div>
            <div>
              <Link
                className="button button--secondary button--lg"
                to="/docs/Jexactyl/intro">
                Documentação do Jexactyl
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}


export default function Home() {
  const { siteConfig } = useDocusaurusContext();
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
