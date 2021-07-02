// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## Description

${data.description}

## Installation

${data.installation}

## Usage

${u=data.usage}

## License

${data.license}

## Contribute

${data.contributing}

## Tests

${data.tests}

`;
}

module.exports = generateMarkdown;
