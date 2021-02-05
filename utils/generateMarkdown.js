// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ![Badge](https://img.shields.io/badge/license-${data.license}-blue)
  ![Github Profile](${data.photo})
  
  
  ## ✨ DESCRIPTION OF PROJECT
  ${data.description}

  <p></p>
  ## ✨ LIVE DEMO OF APPLICATION
  [![](${data.screenshot})](${data.demo})
  ==================================================================
  ## ✨ Table of Contents (Optional) 
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributors](#contributors)
  * [Tests](#tests)
  * [Questions](#questions)
  ==================================================================
  
  ## ✨ INSTALLATION GUIDE
  ${data.installation}
  
  ## ✨ USAGE
  ${data.usage}
  
  ## ✨ License
  ${data.license}
  
  ## ✨ CONTRIBUTORS
  ${data.contributors}
  
  ## ✨ Tests
  ${data.tests}

  ## ✨ Questions
  
  ## ✨ Github
  ${data.userName}`;
  }
  
module.exports = generateMarkdown;
