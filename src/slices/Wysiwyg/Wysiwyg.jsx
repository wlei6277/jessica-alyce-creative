import React from 'react';
import OnVisible from 'react-on-visible';
import shortid from 'shortid';
import { Image } from 'components';

export const Wysiwyg = ({
  data: {
    primary: { title, custom_class: customClass },
    items,
  },
}) => (
  <OnVisible className={`${customClass?.text || ''}`} percent={20}>
    {title?.html && <div dangerouslySetInnerHTML={{ __html: title?.html }} />}
    {items.map(item => {
      const { image, content } = item;
      const showImage = image && (image.localFile || image.url);
      return (
        <div key={shortid.generate()}>
          {showImage && <Image image={image} key={shortid.generate()} alt={image.alt} />}
          {content && <div dangerouslySetInnerHTML={{ __html: content.html }} key={content.html} />}
        </div>
      );
    })}
  </OnVisible>
);
