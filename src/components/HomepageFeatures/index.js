import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Documentações',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Use nossas documentações traduzidas para instalar o seu proximo painel
        e permitir um melhor entendimento a todos os Brasileiros.
      </>
    ),
  },
  {
    title: 'Um Pterodactyl Brasileiro',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Gosta do Original e quer dar uma melhor visão aos seus clientes?, 
        Instale ja o painel do pterodactyl de forma rapida e facil com nossas Documentações.
      </>
    ),
  },
  {
    title: 'Jexactyl? Claro',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Quer algo mais elegante e com mais funções? Porém não quer ter dificuldade 
        em entender oque cada uma faz? Instale agora o Jexactyl Traduzido.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
