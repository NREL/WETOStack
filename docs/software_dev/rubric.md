(rubric)=
# Rubric

## Background

This rubric has been developed to provide a common mechanism and process for evaluating the
following aspects of software development efforts funded by WETO.  The goals of the rubric are to:

- Establish the current state of each software project
- Give WETO and Lab leaders a sense for the portfolio strengths and weaknesses
- Provide model owners an ability to identify their software needs
- Empower projects to set software improvement milestones as part of their annual operating plans
- Establish data for the trajectory of a software project over time

## Rubric benefits

A common software rubric for the WETO Stack provides:

- A common method to evaluate project maturity and quality
- For a given line item, or even a rubric report for an individual model is most directly meaningful to model owners
- Across all models, the rubric captures the maturity and quality of the WETO Software Stack
- A common language to talk about the state and needs of software projects between model owners and WETO managers
- A development roadmap for planning
- An understanding of software maturity and management of expectations for model users

## Rubric structure

The software grading rubric is structured as a set of criteria categorized into software quality topics.
Each specific criteria is assigned a rating or "not applicable."
The dark to light color gradient rating system corresponds to Low, Medium, and High levels of
satisfaction for that particular criteria. Since the needs of a particular software change as
a function of the maturity level, current funding, target audience, size of the user base,
and level of impact, a "priority level" is associated to each criteria to function as a
subjective weighting of importance.
In this system, most software projects will have a range of scores, and low or high are not
necessarily good or bad.
Instead, they are a holistic measure of software maturity and quality across the portfolio.

The topic areas currently included are:

- **Accessibility**: How easy is it to obtain and install?
- **Usability**: How easy is it to use?
- **Documentation**: Is it well described?
- **Extendability**: How easy is it for new developers to contribute?
- **Verification**: How accurate are the results?
- **Community Health**: How engaged are users?

The criteria for each topic area and the characteristics that warrant a Low, Medium, of High
rating are described below.
Software rubric scores for specific models within the WETO Stack are not provided here, as they
are in flux for actively developed projects.
However, the individual model owners may choose to share their scoring within their
respective documentation sites if desired.

### Accessibility: How easy is it to obtain and install?

| ACCESSIBILITY                                                                                                              | PRIORITY | LOW                                           | MEDIUM         | HIGH                     | NA |
| -------------------------------------------------------------------------------------------------------------------------- | -------- | --------------------------------------------- | -------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ----------------------------------------- |
| **Statement of Objectives:** Clear statement of objectives for the project including target audience                       | MED      |                                               |                                                                            |                                                                              |                                           |
| **Statement of Use Cases:** Description of target use cases, work flows, problems that will be solved by this software     | MED      |                                               |                                                                            |                                                                              |                                           |
| **Scope Bounds:** Clearly state what the software does not do                                                              | MED      |                                               |                                                                            |                                                                              |                                           |
| **Ease of Distribution and Installation:**                                                                                 | HIGH     | Have to "git clone" and compile from source   | Available via package manager or Spack, but some command line use required | Self-extracting installer (exe/pkg/etc)                                      |                                           |
| **Platforms:** Support of common user platforms                                                                            | HIGH     | Support one only, with no plans to change     |                                                                            | Support of Mac, Linux, Windows                                               | HPC codes will most likely be NA here     |
| **Licensing:** License type clearly documented                                                                             | HIGH     | No license file in repo                       |                                                                            | Use of standard OSI license file and repo "license" field properly completed |                                           |
| **Third Party Libraries:** Clearly identify and track third party software products and note applicable license agreements | LOW      | Third party libraries used but not identified | Some libraries identified but not all or licenses not identified           | All libraries and licenses identified                                        | No third party libraries used             |


### Usability: How easy is it to use?

| USABILITY                                                                                                        | PRIORITY  | LOW                                 | MEDIUM         | HIGH                                 |
| ---------------------------------------------------------------------------------------------------------------- | --- | ------------------------------------------------------------------------------ | ------------------------------------- | ------------------------------------------------------------------------------------ |
| **User interface:** Is well-defined and documented                                                               | MED | No documentation                                                               | Auto-generated function signatures    | Full documentation of all APIs and use cases.  Equal parts explanation and reference |
| **Input files:** Standard file types are used for input/output                                                   | LOW | Custom file types that are poorly documented                                   |                                       | Common file type that is ubiquitous and human / machine readable                     |
| **Interface stability**                                                                                          | MED | Interface can change at any time without accommodating users of prior versions |                                       | Consistent, well documented, and user-visible process to change interfaces           |
| **Error messages:** Are present, informative, and well handled                                                   | MED | No custom error handling                                                       |                                       | Intentional error handling that explains common errors to users                      |
| **Logging and metadata:** Are present and informative                                                            | MED | No logging                                                                     |                                       | Full log of inputs and model states over course of execution                         |
| **Terminal display:** Terminal output is helpful, well-formatted and can be redirected or turned off by the user | LOW | Terminal output is nonexistent or cluttered                                    |                                       | Terminal output conforms to objectives                                               |
| **GUI:** Graphical user interface (GUI) available for novice users                                               | LOW | No GUI available                                                               | GUI available but limited in features | Fully functional GUI that covers full workflow                                       |
| **Startup time:** Time required to get started (onboarding time, etc)                                            | MED | O(weeks)                                                                       | O(days)                               | O(hours)                                                                             |
| **Version upgrades:** Suport for upgrading to newer versions by adopting new API's including input and outputs   | MED | No support for version upgrades and API changes                                |                                       | Easy upgrade and version migration tools provided                                    |
| **Version tracking:** Command line call that returns version number and other helpful information                | LOW | Command is unavailable                                                         |                                       | Command is available                                                                 |

### Documentation: Is it well described?

| DOCUMENTATION                                                                                                       | PRIORITY  | LOW                                 | MEDIUM         | HIGH                                 |
| ------------------------------------------------------------------------------------------------------------------- | ---- | ---------------------------------------- | -------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| **Pre-requisites:** Document pre-requisite knowledge                                                                | MED  | No mention in README                     |                                                                | Complete list of assumed knowledge                                                              |
| **Getting started:** Including hands-on examples and tutorials                                                      | HIGH | No examples or documentation             |                                                                | Full ramp-up examples paired with documentation explaining use cases with step-by-step guidance |
| **Installation documentation** This includes installation, configuration, compile instructions, how to upgrade      | MED  | Light mention of general process         | More detail or a list of commands to copy/paste                | Full description including troubleshooting                                                      |
| **Theory:** Theory documentation is available including background, context, and references.                        | MED  | No                                       | Some theory documentation is available but not fully developed | Includes background, context, discussion, reference, and theory                                 |
| **Input files and/or parameters:** All input files and input parameters are fully documented and explained.         | HIGH | No input file or parameter documentation | Some documentation                                             | All input files and parameters fully documented                                                 |
| **Best practices:** Common use cases are explained with detailed workflows and modeling guidance                    | LOW  | No best practice documentation           | Some use cases defined with some modeling guidance             | Numerous use case workflows explained with modeling guidance                                    |
| **Common mistakes and fixes:** Provide guidance and solutions to common issues that are raised by users             | LOW  | No common mistakes documentation         | Some documentation                                             | Extensive list of user issues that is easy to navigate and their resolutions                    |
| **Roadmap** for current and upcoming development plans                                                              | LOW  | No roadmap provided                      | Outdated or modest roadmap provided                            | Roadmap is current and informative to users                                                     |
| **Validation report:** Document and demonstrate correctness of the included models                                  |      | Not mentioned                            | References to publications                                     |                                                                                                 |
| **Funding sources:** Historical and/or recent funding sources for model development are listed in the documentation | LOW  | Not mentioned                            | Outdated or limited information provided                       | Funding sources are actively maintained in the documentation                                    |

### Extendability: How easy is it for new developers to contribute?

| EXTENDABILITY                                                                                                                                                | PRIORITY  | LOW                                 | MEDIUM         | HIGH                                 |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---- | ------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Style guide:** Code style guide developed, documented, and adhered to (or enforced)                                                                        | MED  | No style guide                                                           | Some style guide or only moderately adhered to                                                                              | Yes, especially with an automatic linter / formatter included in the infrastructure                                                                                  |
| **Architecture documentation:** Code design document that is readily available                                                                               | MED  | No                                                                       | Some diagrams in place, more useful as a reference considering that the audience already knows something about the software | Automated architecture diagram generation, curated conceptual diagrams, contextual information; tailored to teaching someone without prior knowledge of the software |
| **Contributor requirements:** Maintainer expectations of code contributors are stated clearly and enforced                                                   | MED  | None communicated                                                        |                                                                                                                             | Includes requirements for design documents, implementation plans, architecture diagrams                                                                              |
| **Connection to theory:** Clear mapping from theory guide to code implementation via code comments and easy to follow calculations                           | HIGH | Connection to theory is abstruse or code and theory docs are out-of-date |                                                                                                                             | Easy for curious users to connect code flow and implementation to theory docs                                                                                        |
| **Version control:** Use of version control software (recommend git + Github) and established version control workflow (fork/branch with pull requests, etc) | HIGH | No version control in place                                              |                                                                                                                             | Github version control in place and sound git workflow demonstrated by development team                                                                              |
| **Versioning:** Software versioning is in place with an established approach (e.g. semantic versioning or regular releases, etc)                             | HIGH | No versioning used                                                       |                                                                                                                             | Versioning in place with consistent and rigorous release criteria                                                                                                    |
| **Code review:** Mechanism / procedure for code review either through regularly scheduled meetings or within the development workflow (i.e. pull requests)   | HIGH | No code review in place                                                  |                                                                                                                             | Consistent and thorough code review demonstrated by development team                                                                                                 |


### Verification: How accurate are the results?

| VERIFICATION                                                                                                                      | PRIORITY  | LOW                                 | MEDIUM         | HIGH                                 |
| --------------------------------------------------------------------------------------------------------------------------------- | ---- | ------------------------ | ---------------------------------------------------------- | -------------------------------------------------------------------------------- |
| **Installation test:** Ability to test for valid installation, if not covered by examples                                         | MED  | No quick test available |                                                           | Quick installation test available                                                |
| **Continuous integration:** CI is in place and activates test framework                                                           | HIGH | No                      | Partial implementation, or frequent bypassing of CI tests | Test framework fully tied into code repository and activated on each code change |
| **Testing framework:** Test framework exists, including unit tests and regression tests                                           | HIGH | No test framework       | Some form of test framework, but lacks automation         | Fully automated test framework                                                   |
| **Testing Docs:** Documentation for the tests exists for developers                                                               | MED  | None                    |                                                           | Documentation for testing framework exists and current                           |
| **Unit coverage:** Line count coverage (percentage) in unit tests                                                                 | HIGH | 0-30                    | 30-80                                                     | 80-100                                                                           |
| **Regression coverage:** Use-case-coverage or feature-coverage (percentage) in test suite. (likely estimated by development team) | MED  | 0-30                    | 30-80                                                     | 80-100                                                                           |


### Community Health: How engaged are users?

| COMMUNITY HEALTH                                                                                                  | PRIORITY | LOW           | MEDIUM                                           | HIGH                              |
| ----------------------------------------------------------------------------------------------------------------- | ---- | ----------------- | ------------------------------------------------ | --------------------------------- |
| **User forum:** Platform for users to raise issues, requests, and bugs                                            | HIGH | No                | Custom                                           | GitHub, GitLab, other common tool |
| **Response time:** Time to respond to user issues                                                                 | HIGH | O(Month)          | O(Week)                                          | O(Day)                            |
| **PR lifetime:** Time to review and merge pull request                                                            | MED  | O(Month)          | O(Week)                                          | O(Day)                            |
| **Activity recency:** Time since most recent repository activity                                                  | MED  | O(Month)          | O(Week)                                          | O(Day)                            |
| **Release recency:** Time since most recent version release                                                       | MED  | O(Year)           | O(Quarter)                                       | O(Month)                          |
| **User engagement recency:** Number of recent (last 6 months) external (not core development team) engagements    | MED  | 0                 |                                                  | 100                               |
| **Documentation traffic:** Google Analytics "monthly active users" or "daily active users" for documentation page | LOW  | 0                 |                                                  | 100                               |
| **Repository traffic:** GitHub repo page traffic (CHOOSE A METRIC)                                                | LOW  | 0                 |                                                  | 100                               |
| **Community engagement:** Opportunities are available for community engagement (online or conferences)            | LOW  | No                | One-off webinars with Q&A                        | Regular workshops                 |
| **Funding diversity:** Diversity of funding sources aside from WETO                                               | MED  | No active funding | Limited funding sources and/or limited resources | Diverse and active funding stream |

## Related work

- [xSDK](https://xsdk.info) [guidelines](https://github.com/xsdk-project/xsdk-community-policies)
- [E4s Community Policies](https://e4s.io/policies.html)
- [Sandia simulation software quality plan](https://www.osti.gov/biblio/1762331)
- [Web software engineering resource](https://www.tutorialspoint.com/software_quality_management/software_quality_management_metrics.htm)
