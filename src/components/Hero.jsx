import styles from "../style";
import { discount, robot } from "../assets";
import GetStarted from "./GetStarted";
import TopText from "./TopText";

const Hero = () => {
  return (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <TopText />

    </section>
  );
};

export default Hero;
