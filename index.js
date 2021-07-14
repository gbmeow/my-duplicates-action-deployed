const github = require('@actions/github');
const core = require('@actions/core');

const octokit = github.getOctokit(`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`)

myAsyncMethod();

async function myAsyncMethod () {
    try {
        const { data: pullRequest } = await octokit.rest.issues.createComment({
            owner: 'georgebatalinski',
            repo: 'questions',
            issue_number: 2,
            body: 'your coverrage is off a little',
          })
    
        console.log(pullRequest);
    } catch(ex) {
        console.log( ex );
    }
  
  
}
