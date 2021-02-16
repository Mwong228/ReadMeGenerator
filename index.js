const inquirer = require('inquirer')
const fs = require('fs')

async function main(){
    console.log(`executing`)

    const data = await inquirer.prompt(
        [
        {message: "What is the name of the project:", name:"project"},
        {message: "Enter a description:", name:"description"},
        {message:"What kind of license should your project have", name: "license", choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3"]},
        {message: "What are the installation instructions:", name:"installation"},
        {message: "What is the usage information:", name:"usage"},
        {message: "What are contribution guidelines:", name:"contribution"},
        {message: "What are the test instructions:", name:"test"},
        {message: "What is your GitHub Username:", name:"github"},
        {message: "What is your Email:", name:"email"},
        ]
    )
    console.log(`...received user input`, data)

    const output = generateREADME(data)

    fs.writeFileSync(`README.md`, output)

    console.log(`finished! your files is at: README.md`)
}

function generateREADME(user){
    return `
![Badge](https://img.shields.io/badge/license-${user.license.choices}-blue)

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
${user.license.choices}

## Questions
For any questions, please contact me with the information below:
\n
GitHub: https://github.com/${user.github}
\n
Email: ${user.email}
`

}

main()
