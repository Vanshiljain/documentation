// BuildReactApp.js
import React from 'react';

const StarterPipeline = () => {
  return (
    <div>
      <h3>Build React Application</h3>
      <pre>
        <code>
          {`name: Starter Pipeline
repoFullName: Vanshiljain-Vanshiljain/python
'on':
  push:
    branches:
      - master
jobs:
  run-stater:
    runs-on: ubuntu-latest
    steps:
      - name: Build and Test
        run: echo "Your build and test goes here..."
      - name: Lint
        run: echo "Your linting goes here..."
      - name: Security scan
        run: echo "Your security scan goes here..."
      - name: Deployment to Staging
        run: echo "Your deployment to staging script goes here..."
      - name: Deployment to Production
        run: echo "Your deployment to production script goes here..."`}
        </code>
      </pre>
    </div>
  );
}

export default StarterPipeline;
