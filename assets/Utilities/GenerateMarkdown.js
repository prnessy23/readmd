function renderLicenseBadge(license) {
    if (license == 'MIT') {
        return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
    };
    if (license == 'Apache 2.0') {
        return '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
    };
    if (license == 'BSD 3-Clause') {
        return '[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)'

    };

    if (license = 'none') {
        return ''
    }
}

function renderLicenseLink(license) {
    if (license == 'MIT') {
        return '--- \n \n ## License \n \n https:opensource.org/licenses/MIT'
    };

    if (license == 'Apache 2.0') {
        return '--- \n \n ## License \n \n https:opensource.org/licenses/Apache-2.0'
    };
    if (license == 'BSD 3-Clause') {
        return '--- \n \n ## License \n \n https:opensource.org/licenses/BSD-3-Clause'
    }
}
function generateMarkdown(data) {

    var licenseBadge = renderLicenseBadge(data.license);
    var licenseLink = renderLicenseLink(data.license);
    if (data.promptImage === "Yes") {
        var image1 ="\n \n ![image1](" + data.image1 + ")\n \n";
    } else {
        var image1 ="";
    }
    if (data.promptImage === "Yes") {
        var image2 ="\n \n ![image2]("+ data.image2 + ")\n \n";

    } else {
        var image2 ="";
    }
    if (data.promptImage === "Yes") {
        var image3 ="\n \n ![image3]("+ data.image3 + ")\n \n";
    } else {
        var image3 ="";
    }


}
// return ${data.title}


return {licenseBadge};



___
## Author

 ${data.name}

#Email 

${data.email}

____

## Table of Contents

[Description](##Description)

[Installation](##Installation)

[Usage](##Usage)

[Tests](##Tests)

[License](##License)

___

##Description

${data.description}

___

##Installation

${data.installation}

___

##Usage

${data.usage}

___

##Tests

${data.tests}

___

##License
${data.license}

[licenseLink]

___
##Questions

Any questions or concerns can be addressed to me at ${data.email}

___

[Contributing]

${dataContribute}

If you would like to contribute, please feel free to contact me.

${licenseLink}

module.exports =generateMarkdown;




export default renderLicenseBadge
node index.js
