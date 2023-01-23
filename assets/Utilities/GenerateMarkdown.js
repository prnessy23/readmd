function renderLicenseBadge(license) {
  if (license === "MIT") {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
  }
  if (license === "Apache 2.0") {
    return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
  }
  if (license === "BSD 3-Clause") {
    return "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
  }
  if (license === "Boost Software License 1.0") {
    return "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)";
  }

  if (license === "none") {
    return "";
  }
}

function renderLicenseLink(license) {
  if (license === "MIT") {
    return "--- \n \n ## License \n \n https:opensource.org/licenses/MIT";
  }

  if (license === "Apache 2.0") {
    return "--- \n \n ## License \n \n https:opensource.org/licenses/Apache-2.0";
  }
  if (license === "BSD 3-Clause") {
    return "--- \n \n ## License \n \n https:opensource.org/licenses/BSD-3-Clause";
  }
  if (license === "Boost Software License 1.0") {
    return "--- \n \n ## License \n \n https:boost.org/License_1_0.txt";
  }
}

function generateMarkdown(data) {
  return `# ${data.title}
___
## Author

${data.Username}

## Email 

${data.email}

____

## Table of Contents

[Description](#Description)

[Installation](##Installation)

[Usage](Usage)

[Tests](##Tests)

[License](##License)

___

## Description

${data.description}

___

## Installation
${data.install}

___

## Usage

${data.usage}

___

## Tests

${data.tests}

___

## License

${renderLicenseBadge(data.license)} ${renderLicenseLink(data.license)}


___

## Questions

* Any questions or concerns can be addressed to me at ${data.email}

___


* If you would like to contribute, please feel free to contact me.

`
}

module.exports = generateMarkdown;
