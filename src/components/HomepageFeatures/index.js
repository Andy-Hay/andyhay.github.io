import React from 'react'
import clsx from 'clsx'
import styles from './styles.module.css'
import Link from '@docusaurus/Link'

const FeatureList = [
  {
    title: 'Work',
    Svg: require('@site/static/img/linkedin-icon-2.svg').default,
    description: <>Connect with me via LinkedIn</>,
    link: 'http://uk.linkedin.com/pub/andrew-hay/11/b28/609/',
    button: 'Work opportunities 💻',
  },
  {
    title: 'Pictures',
    Svg: require('@site/static/img/flickr.svg').default,
    description: <>View my pictures</>,
    link: 'http://www.flickr.com/photos/andyhay/',
    button: 'See my pictures 📸',
  },
  {
    title: 'Coding',
    Svg: require('@site/static/img/github-icon-1.svg').default,
    description: <>View my GitHub</>,
    link: 'https://github.com/Andy-Hay',
    button: 'See my repos 🗄️',
  },
]

function Feature({ Svg, title, description, link, button }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
        <Link to={link} className="button button--secondary button--lg">
          {button}
        </Link>
      </div>
    </div>
  )
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
  )
}
