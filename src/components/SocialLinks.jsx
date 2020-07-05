import React from 'react';
import facebookIcon from '../images/social/facebook.svg';
import instagramIcon from '../images/social/instagram.svg';
import twitterIcon from '../images/social/twitter.svg';
import linkedInIcon from '../images/social/linkedin.svg';
import googleIcon from '../images/social/google.svg';
import pinterestIcon from '../images/social/pinterest.svg';
import emailIcon from '../images/social/email.svg';
import './SocialLinks.scss';

const socialIcons = {
  Facebook: facebookIcon,
  Instagram: instagramIcon,
  Twitter: twitterIcon,
  LinkedIn: linkedInIcon,
  Google: googleIcon,
  Pinterest: pinterestIcon,
  Email: emailIcon,
};

export const SocialLinks = ({ socialLinks }) => (
  <div className="social-links">
    <nav className="social-links-nav">
      {socialLinks.map(socialLink => (
        <a
          key={socialLink?.link?.text}
          href={socialLink?.link?.text}
          target="_blank"
          rel="noreferrer noopener"
          aria-label={socialLink?.platform}
        >
          <img src={socialIcons[socialLink?.platform]} alt="Instagram" />
        </a>
      ))}
    </nav>
  </div>
);
