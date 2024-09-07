import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hi, <br />I am Shubham Srivastava
        </SectionTitle>
        <SectionText>
          I am a skilled React Native developer with 2.5 years of experience in
          mobile app development. Over my career, I have successfully built and
          deployed mobile applications that are live and performing well. My
          work spans various projects, including collaborations with
          international clients, showcasing my ability to understand and adapt
          to diverse requirements. I am passionate about creating intuitive,
          high-performing, and user-friendly mobile applications.
        </SectionText>
        <Button onClick={props.handleClick}>Learn More</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
