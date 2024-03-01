import React from 'react';

const StarterPipeline = () => {
  return (
    <div>
      <h3>Starter Pipeline</h3>
      <pre className="code-block">
        <code>
          {`name: Starter Pipeline
repoFullName: Default Repository
on:
  push:
    branches:
      - Default Branch
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
      <h2>Explanation:</h2>
      <p>
        <code>name: Starter Pipeline</code>
        <br />
        This line sets the name of the GitHub Actions workflow. In this case, it's named "Starter Pipeline".
        <br /><br />
        <code>repoFullName: Default Repository</code>
        <br />
        This line specifies the full name of the repository where the workflow will be applied. It's set to "Default Repository".
        <br /><br />
        <code>on:</code>
        <br />
        <code>  push:</code>
        <br />
        <code>    branches:</code>
        <br />
        <code>      - Default Branch</code>
        <br />
        This section defines when the workflow should be triggered. In this case, it triggers the workflow when there is a push event to the "Default Branch".
        <br /><br />
        <code>jobs:</code>
        <br />
        <code>  run-stater:</code>
        <br />
        Defines a job named "run-stater". A job is a set of steps that execute on the same runner.
        <br /><br />
        <code>  runs-on: ubuntu-latest</code>
        <br />
        Specifies that the job will run on a virtual machine with the latest version of Ubuntu.
        <br /><br />
        <code>  steps:</code>
        <br />
        Specifies the individual steps of the job. Each step performs a specific task in the pipeline.
        <br /><br />
        <code>    - name: Build and Test</code>
        <br />
        <code>      run: echo "Your build and test goes here..."</code>
        <br />
        This step is named "Build and Test" and contains a placeholder command to represent the build and test process.
        <br /><br />
        <code>    - name: Lint</code>
        <br />
        <code>      run: echo "Your linting goes here..."</code>
        <br />
        This step is named "Lint" and contains a placeholder command to represent the linting process.
        <br /><br />
        <code>    - name: Security scan</code>
        <br />
        <code>      run: echo "Your security scan goes here..."</code>
        <br />
        This step is named "Security scan" and contains a placeholder command to represent the security scanning process.
        <br /><br />
        <code>    - name: Deployment to Staging</code>
        <br />
        <code>      run: echo "Your deployment to staging script goes here..."</code>
        <br />
        This step is named "Deployment to Staging" and contains a placeholder command to represent the deployment to staging process.
        <br /><br />
        <code>    - name: Deployment to Production</code>
        <br />
        <code>      run: echo "Your deployment to production script goes here..."</code>
        <br />
        This step is named "Deployment to Production" and contains a placeholder command to represent the deployment to production process.
        <br /><br />
      </p>
    </div>
  );
}

export default StarterPipeline;
