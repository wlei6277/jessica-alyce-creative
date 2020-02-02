import React from 'react';

export const Anchor = ({
  data: {
    primary: {
      name: { text: anchor },
    },
  },
}) => <div id={anchor} style={{ display: 'hidden' }}></div>;
