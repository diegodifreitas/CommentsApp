import React from 'react';
import ReactDOM from 'react-dom';

import App from './main/App';
import registerServiceWorker from './registerServiceWorker';
import base, { auth, providers } from './main/base'

ReactDOM.render(<App base={base} auth={auth} providers={providers} />, document.getElementById('root'));
registerServiceWorker();
