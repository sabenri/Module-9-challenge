
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

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
