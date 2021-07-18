const github = require('@actions/github');
const stats = require('webpack-stats-duplicates');
var tbl = require('./helpers/tableGenerator.js');

const octokit = github.getOctokit(``);

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

myAsyncMethod();

async function myAsyncMethod () {
    try {
        const dups = await statsLoad();
        var htmlTable = tbl.makeTable(dups);
        await octokit.rest.issues.createComment({
            owner: 'georgebatalinski',
            repo: 'questions',
            issue_number: 2,
            body: htmlTable,
          });
    } catch(ex) {
        console.log( 'Error', ex );
    }
}




