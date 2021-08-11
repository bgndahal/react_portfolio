import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hello There<br />
        I AM BIGYAN DAHAL
      </SectionTitle>
      <SectionText>
        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.
      </SectionText>
      <Button onClick={() => window.location = 'mailto:bgndahal@gmail.com'}>Email Me</Button>
    </LeftSection>
  </Section>
);

export default Hero;