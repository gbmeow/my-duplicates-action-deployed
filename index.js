const github = require('@actions/github');
const core = require('@actions/core');
const exec = require('@actions/exec');
const stats = require('webpack-stats-duplicates');

const octokit = github.getOctokit(`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`);

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


//show the duplicates to remove   


async function myAsyncMethod () {
    try {
        const dups = await statsLoad();
        var result = generateTable();
        await octokit.rest.issues.createComment({
            owner: 'georgebatalinski',
            repo: 'questions',
            issue_number: 2,
            body: result,
          });
    } catch(ex) {
        console.log( 'Error', ex );
    }
}

function generateTable() {
    let str = "<table>";
    str += "<thead><tr>"
    str += "<th>Name</th><th>Duplicate Location</th><th>Existing Location</th>";
    str += "</tr></thead>";
    str += "<tbody>"
    
    str += "</tbody>"
    str += "</table>";
    return str;
}

function getDataCell(data) {
    return "<td>" + data + "</td>";
}


