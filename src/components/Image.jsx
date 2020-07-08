import Img from 'gatsby-image';
import React from 'react';
import './Image.scss';

export const Image = props => {
  const { image, className = '', imgStyle } = props;
  if (!image) return <div className={`gatsby-image placeholder ${className}`} />;
  const { localFile } = image;
  // Gifs do not work with Gatsby image. If concerned the Prismic user may add a gif to a slice / field query for the extension
  if (localFile && localFile.extension && (localFile.extension === 'gif' || localFile.extension === 'svg')) {
    const src = localFile.url || image.url;
    return (
      <div className="gatsby-image">
        <img src={src} alt={image.alt || ''} />
      </div>
    );
  }
  if (localFile && localFile.childImageSharp && localFile.childImageSharp.fluid) {
    return (
      <Img
        className={`gatsby-image ${className}`}
        fluid={image.localFile.childImageSharp.fluid}
        alt={image.alt || ''}
        imgStyle={imgStyle}
      />
    );
  }
  if (image.url) {
    return (
      <div className={`gatsby-image ${className}`}>
        <img src={image.url} alt={image.alt || ''} />
      </div>
    );
  }
  return <div className={`gatsby-image placeholder ${className}`} />;
};
