import React from 'react';
import OnVisible from 'react-on-visible';
import './Tagline.scss';

export const Tagline = ({ data }) => (
  <OnVisible
    wrappingElement="section"
    percent={20}
    className="tagline"
    dangerouslySetInnerHTML={{ __html: data?.primary?.tagline?.html }}
  />
);
