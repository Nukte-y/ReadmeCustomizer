// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}\n\n` + 
         `## Description\n\n${data.description}\n\n` +
         `## Installation\n\n${data.installation}\n\n` +
         `## Usage\n\n${data.usage}\n\n` +
         `## Contributing\n\n${data.contributing}\n\n` +
         `## Tests\n\n${data.test}\n\n` 
}

module.exports = generateMarkdown;
