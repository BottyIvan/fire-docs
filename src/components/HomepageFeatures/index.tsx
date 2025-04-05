import type { ReactNode } from "react";
import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Flexible Router",
    Svg: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
    description: (
      <>Supports dynamic routes with parameters and custom controllers.</>
    ),
  },
  {
    title: "Base Controller",
    Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
    description: (
      <>Includes methods for view rendering, JSON responses, and redirects.</>
    ),
  },
  {
    title: "Console Commands",
    Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    description: (
      <>Manage CLI commands like start to launch a development server.</>
    ),
  },
  {
    title: "PSR-4 Autoloading",
    Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    description: <>Configured via Composer for automatic class loading.</>,
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
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

export default function HomepageFeatures(): ReactNode {
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
