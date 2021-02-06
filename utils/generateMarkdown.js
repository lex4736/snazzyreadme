// function to generate markdown for README
function generateMarkdown(data) {
  return `
  
  # ***${data.title}***

  
## 🍀 Description of Project
  #### ${data.description}

  ----
## 🍀 Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributors](#contributors)
  * [Tests](#tests)
  * [Live Demo](#demo)
  * [Questions](#email)
  ----
## 🍀 <a id="installation"></a> How to install 
  ${data.installation}

  ----
## 🍀 <a id="usage"></a> What does it do 
  ${data.usage}
 
  ----
## 🍀 <a id="license"></a> License
![Badge](https://img.shields.io/badge/license-${data.license}-blue)

----
## 🍀 <a id="contributors"></a>Contributors 
${data.contributors}

---- 
## 🍀 <a id="test"></a> How to test 
${data.tests}
 
----
## 🍀 <a id="demo"></a> Demo of Application
![](${data.screenshot})
<br>
(${data.demo})

  ----
 ## 🍀 <a id="email"></a> Contact me for Questions 
 **${data.email}** 
<br><br>
## 🍀 Github Account
**${data.userName}**
<br>
![Github Profile](${data.photo}) 


`}
module.exports = generateMarkdown;
