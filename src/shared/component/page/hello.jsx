// @flow

import React from 'react';
import Helmet from 'react-helmet';

import HelloButton from '../../container/hello-button';
import Message from '../../container/message';

const title = 'Hello';
const HelloPage = () =>
  <div>
    <Helmet
      title={title}
      meta={[
        { name: 'description', content: 'A page to say hello' },
        { property: 'og:title', content: title },
      ]}
    />
    <Message />
    <HelloButton />
  </div>;

export default HelloPage;
