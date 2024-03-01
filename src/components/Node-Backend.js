// BuildReactApp.js
import React from 'react';

const NodeJSbackend = () => {
  return (
    <div>
      <h3>Build React Application</h3>
      <pre>
        <code>
          {`name: Node.js Backend
repoFullName: Vanshiljain-Vanshiljain/python
'on':
  push:
    branches:
      - master
jobs:
  build:
    runs-on: ubuntu-latest
    defaults:
      run:
        working-directory: 
    steps:
      - name: Checkout code
        uses: actions/checkout@v3
      - name: Set up Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '14'
      - name: Install dependencies
        run: npm install
      - name: Run tests
        run: npm test`}
        </code>
      </pre>
    </div>
  );
}

export default NodeJSbackend;
