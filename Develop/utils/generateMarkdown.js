
function renderLicenseBadge(license) {
  if (license === 'Apache License 2.0') {
    return "https://img.shields.io/badge/Apache%20License%202.0-blue";
  }
  else if (license === 'MIT License') {
    return "https://img.shields.io/badge/MIT%20License-yellow"
  }
  else if (license === 'Eclipse Public License') {
    return "https://img.shields.io/badge/Eclipse%20Public%20License%202.0-lightblue";
  }
  else {
    return ""
  }
}

function renderLicenseLink(license) {
  if (license === 'Apache License 2.0') {
    return "https://apache.org/licenses/LICENSE-2.0";
  }
  else if (license === 'MIT License') {
    return "https://mit-license.org/"
  }
  else if (license === 'Eclipse Public License') {
    return "https://www.eclipse.org/legal/epl-2.0/";
  }
  else {
    return ""
  }
}

function renderLicenseSection(license) {
  if (!license){
    return'';}
    else {

    return 'this project is licensed with ${license}';}
  
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.Title}

  ## Description 
  ${data.Description}

  ## Table of Contents
  - [Installation](#Installation)
  - [Usage](#Usage)
  - [Contributor]](#Contributor)
  - [license]](#license)
  - [questions]](#questions)

  ## Installation
  ${data.Installation}

  ##Usage
  ${data.Usage}

  ##Contributor
  ${data.Contributor}

  ##license
  this project is licensed with ${data.license}.

  ## Questions 
  If you have any questions, Please contact me at ${data.email}.
  you can find my work at [GitHub](http://github.com/${data.User}).


`;
}

module.exports = generateMarkdown;
