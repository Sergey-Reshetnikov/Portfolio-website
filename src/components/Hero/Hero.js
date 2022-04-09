import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome to  <br />
        my personal page
      </SectionTitle>
      <SectionText>
      May the JavaScript force be with you
      </SectionText>
      <Button onClick={() => window.location = "https://google.com"}>
        Learn More 
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;