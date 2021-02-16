const inquirer = require('inquirer')
const fs = require('fs')
const generateREADME = require ('./generateMarkdown')

async function main(){
    console.log(`executing`)

    const data = await inquirer.prompt(
        [
        {type: "input", message: "What is the name of the project:", name:"project"},
        {type: "input", message: "Enter a description:", name:"description"},
        {type:"list", message:"What kind of license should your project have:", name: "license", choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3']},
        {type: "input", message: "What are the installation instructions:", name:"installation"},
        {type: "input", message: "What is the usage information:", name:"usage"},
        {type: "input", message: "What are contribution guidelines:", name:"contribution"},
        {type: "input", message: "What are the test instructions:", name:"test"},
        {type: "input", message: "What is your GitHub Username:", name:"github"},
        {type: "input", message: "What is your Email:", name:"email"},
        ]
    )
    console.log(`...received user input`, data)

    const output = generateREADME(data)

    fs.writeFileSync(`READMEexample.md`, output)

    console.log(`finished! your files is at: README.md`)
}

main()

