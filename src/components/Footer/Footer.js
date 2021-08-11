import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>

        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel:+977-9849799012">+977-9849799012</LinkItem>
        </LinkColumn>

        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:bgndahal@gmail.com">bgndahal@gmail.com</LinkItem>
        </LinkColumn>

      </LinkList>

      <SocialIconsContainer>

        <CompanyContainer>
          <Slogan>This is the slogan man</Slogan>
        </CompanyContainer>

        <SocialContainer>
          <SocialIcons target="_blank" href="https://github.com/bgndahal">
            <AiFillGithub size="3rem" />
          </SocialIcons>
          <SocialIcons target="_blank" href="https://linkedin.com/in/bgndahal">
            <AiFillLinkedin size="3rem" />
          </SocialIcons>
          <SocialIcons target="_blank" href="https://instagram.com/bgndahal">
            <AiFillInstagram size="3rem" />
          </SocialIcons>
        </SocialContainer>
        
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
