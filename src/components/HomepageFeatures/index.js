import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Easy to Use',
    Svg: require('@site/static/img/target-svgrepo-com.svg').default,
    description: (
      <>
        Zerrow was designed from the ground up to be easily used and
        used to get your money up and running quickly.
      </>
    ),
  },
  {
    title: 'Focus on financial security',
    Svg: require('@site/static/img/honor-svgrepo-com.svg').default,
    description: (
      <>
        Strict risk control measures and continuous code auditing 
        make Zerrow the most secure on chain lending protocol.
      </>
    ),
  },
  {
    title: 'Powered by 0G Chain',
    Svg: require('@site/static/img/Cover.svg').default,
    description: (
      <>
        As the core financial protocol of 0g Chain, 
        zerrow has received strong support from the 0g Foundation.
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
        <Heading as="h3">{title}</Heading>
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
