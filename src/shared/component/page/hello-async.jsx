// @flow

import React from 'react';
import Helmet from 'react-helmet';
import HelloAsyncButton from '../../container/hello-async-button';
import MessageAsync from '../../container/message-async';

const title = 'Hello Async';

const HelloAsyncPage = () =>
  <div>
    <Helmet
      title={title}
      meta={[
        { name: 'description', content: 'A page to say hello asynchronously' },
        { property: 'og:title', content: title },
      ]}
    />
    <MessageAsync />
    <HelloAsyncButton />
  </div>;

export default HelloAsyncPage;
