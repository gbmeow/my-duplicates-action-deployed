

var generateRow = function(dups) {
    return dups.map(
        x =>
          `<tr><td>${x.name}</td><td>${x.existing.location}</td><td>${
            x.duplicate.location
          }</td></tr>`
      );
}

module.exports = {generateRow: generateRow};