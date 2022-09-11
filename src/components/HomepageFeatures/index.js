import React from 'react'
import clsx from 'clsx'
import styles from './styles.module.css'
import Link from '@docusaurus/Link'

const FeatureList = [
  {
    title: 'Pictures',
    Svg: require('@site/static/img/flickr.svg').default,
    description: (
      <>
        View my pictures on{' '}
        <a href="http://www.flickr.com/photos/andyhay/">Flickr</a> (uploaded
        under{' '}
        <a href="https://creativecommons.org/licenses/by/2.0/">
          Creative Commons Attribution 2.0 Generic licensing
        </a>
        ).
      </>
    ),
    link: 'http://www.flickr.com/photos/andyhay/',
    button: 'See my pictures 📸',
  },
  {
    title: 'Work',
    Svg: require('@site/static/img/linkedin-icon-2.svg').default,
    description: (
      <>Contact me via LinkedIn to discuss work related opportunities.</>
    ),
    link: 'http://uk.linkedin.com/pub/andrew-hay/11/b28/609/',
    button: 'Work opportunities 💻',
  },
]

function Feature({ Svg, title, description, link, button }) {
  return (
    <div className={clsx('col col--6')}>
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
