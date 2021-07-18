const github = require('@actions/github');
const core = require('@actions/core');
const stats = require('webpack-stats-duplicates');
var tbl = require('./helpers/tableGenerator.js');

const myToken = core.getInput('myToken');
const octokit = github.getOctokit(myToken);
const context = github.context;

myAsyncMethod();

async function myAsyncMethod () {
    try {
        const dups = await statsLoad();
        var htmlTable = tbl.makeTable(dups);
        await octokit.rest.issues.createComment({
            ...context.repo,
            body: htmlTable,
          });
    } catch(ex) {
        console.log( 'Error', ex );
    }
};

const statsLoad = async () => {
  return new Promise((resolve, reject) => {
      let duplicates; 
      stats.loadConfig('./stats.json', (error, json) => {
      if (error) {
        console.log('Error');
        return;
      }
      duplicates = stats.findDuplicates(json, {
        whitelist: [ ]
      });
    });
      resolve(duplicates);
  });

};



