// function to generate markdown for README
function generateMarkdown(data) {
  let licenseBadge = '';
  let licenseURL = '';
  let licenseNotice = `This application is covered under the **[${data.license}](${licenseURL})** license.`; //make the link bold

  if (data.license === "MIT") {
      licenseBadge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)\n\n";
      licenseURL = "https://opensource.org/licenses/MIT";
  }  else if (data.license === "GNU") {
      licenseBadge = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)\n\n";
      licenseURL = "https://www.gnu.org/licenses/gpl-3.0";
  } else if (data.license === "BSD") {
      licenseBadge = "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)\n\n";
      licenseURL = "https://opensource.org/licenses/BSD-3-Clause";
  } else if (data.license === "Apache 2.0") {
      licenseBadge = "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)\n\n";
      licenseURL = "https://opensource.org/licenses/Apache-2.0";
  };

  return `# ${data.title}\n\n` +
         `${licenseBadge} ${licenseURL} \n\n` +
         `## Table of Contents\n` +
         `- [Description](#description)\n` +
         `- [Installation](#installation)\n` +
         `- [Usage](#usage)\n` +
         `- [License](#license)\n` + 
         `- [Contributing](#contributing)\n\n` +
         `- [Tests](#tests)\n\n` +
         `- [Questions](#questions)\n\n` +
         `## Description\n\n${data.description}\n\n` +
         `## Installation\n\n${data.installation}\n\n` +
         `## Usage\n\n${data.usage}\n\n` +
         `## License\n\n${data.license}\n\n` + 
         `${licenseNotice}\n\n` +
         `## Contributing\n\n${data.contributing}\n\n` +
         `## Tests\n\n${data.tests}\n\n` +
         `## Questions\n\n Github account: **[${data.gitHub}](https://github.com/${data.gitHub})**\n\n` +
         `For additional questions, please feel free to reach out via email.\n` +
         `**${data.email}**`

}

module.exports = generateMarkdown;
