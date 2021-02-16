function generateREADME(user){
    return `
# ${user.project}

![Badge](https://img.shields.io/badge/license-${user.license}-blue)

## Description
${user.description}

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Contribution](#contribution)
* [License](#license)

## Installation
${user.installation}

## Usage
${user.usage}

## Contribution 
${user.contribution}

## Test
${user.test}

## License
${user.license}

## Questions
For any questions, please contact me with the information below:
\n
GitHub: https://github.com/${user.github}
\n
Email: ${user.email}
`

}
  module.exports = generateREADME;
  