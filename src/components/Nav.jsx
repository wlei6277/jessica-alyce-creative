import React from 'react';
import { Image, Link } from 'components';
import './Nav.scss';

export const Nav = ({ name, role, anchors }) => (
  <section className="nav">
    <h2>{name}</h2>
    <span className="nav__name">{role}</span>
    <div className="nav__link-container">
      {anchors.map(({ primary: { anchor: { text: sectionName }, icon } }) => (
        <SectionLink icon={icon} sectionName={sectionName} key={sectionName} />
      ))}
    </div>
  </section>
);

const SectionLink = ({ icon, sectionName }) => (
  <Link className="nav__link" to="/">
    {icon && <Image image={icon} />}
    {sectionName && <span>{sectionName}</span>}
  </Link>
);
