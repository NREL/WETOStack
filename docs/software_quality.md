
# Software Quality

```{contents}
```


## Motivation
Why we care about software quality
- Collaboration
- Workflows
- Accessibility

Consider two kinds of "users"
- Developers
- Practitioners


## Accessibility

Accessibility is concerned with how people obtain the software and integrate it into their processes
and work.

### Barrier to entry
What is the barrier to entry for practitioners and developers? Are practitioners expected to have
programming knowledge and domain-specific knowledge?
Ideally, practitioners are expected or assumed to have a reasonable amount of domain knowledge,
but in most cases very little computer programming knowledge is expected. The exception is in HPC
software where the ability to configure a HPC system and understand consequences of the
configuration is assumed.

How will developers get the required tools like dependencies or other development tools?
Are all tools available for all supported operating systems? Does the software run on both
personal computers and super computers?


## Usability

Usability is concerned with how people run the software.

The user interface should be well defined and predictable.
It should follow typical patterns for the environment in which it is used.
For example, unix system have command line interface conventions such as including version
flags `--version` and `-v` to get the version number.
Flags typically have a long form with two dashes and short form with one dash.
One argument per flag.
Obvious path arguments typically are not preceded by a flag.
For example, the path where an operation should be performed need not be preceded by
`--path` or `-p` unless it is not clear what the path is for.

User interface
- Input files
- API's
Documentation


## Extensibility

Extensibility is concerned with how the software is extended to add make improvements such as
new features and bug fixes.

The style of the code should avoid complexity where possible and favor readability over writability.
In other words, don't be clever.

### Collaborative workflows

The process for collaborating with other developers is essential to define and optimize.
Version control must be in place, and it is best to use `git` since it is ubiquitous.
While git is decentralized so repositories can be stored on any system, GitHub is the most
common store for open source software.
GitHub contains some key features for coordinating software development:
- Issue tracking
- Forum-style discussions
- Pull request and code review
- Project boards

### Version control

Version control, typically with `git`, is a tool for tracking the evolution of a project change
by change.
The git history is meaningful for our future selves.
It should provide a snapshot of thought processes and progression through work.
Commits are often considered a way to "save" work similar to hitting the save button in a word
processor.
While that is one outcome, the most value is in the information implied in the connectivity of
commits.
That is, each commit has a parent and each parent can have multiple children.
The exception is the first commit as it has no parent.
This provides a mechanism for easily and accurately rolling back to the state of the project at any
time in history.

It is reasonable to spend time crafting each commit and a sequence of commits.
Consider practicing editing a series of commits to ensure that the progress of work is captured
accurately.
Most importantly, consider whether the commit history is concise and readable to people who are
not the authors.
Become familiar with the following actions:
- Interactive rebase
- Cherry-picking
- Squashing
- Editing a commit message

The commit messages should be short, and it is a standard convention to limit them less than
50 characters.
Another line of comment can be included as a longer description of the commit.
This is less typically limited to 70 characters, but it is considered reasonable to use many
more characters here when needed.
GitHub even displays these longer descriptions separately within the commit view.
<SHOW GITHUB COMMIT VIEW>

All version control messages (commits and pull requests) should communicate what the change
accomplishes.
Vague messages such as "updated solver" are distracting and lack meaning.
Consider the following two pull request messages:
- "Update turbine ontology"
- "NatSpec: Fix diplicated display of the data type in NatSpec `/// @return` commens"

The first message vaguely indicates an "update" while the second clearly states what is changed.
The first message provides no detail around what is updated or why it matters while the second
indicates there was a problem that is now fixed.
The additional description in the first provides more info that could have been incorporated into
the title.
Even though domain specific context is required to understand both of these pull requests, the
second implicitly communicates much more information in just a few words.
The outcome is that readers of the commit history in the second repository can quickly scan the
commit history and understand the evolution of changes simply from the commit messages.
The first repository requires opening individual changes to understand their scope and context.
 
<img src=":/6fd0d03c4b974219b384a3e811a09c2f" width="500"/>

Futhermore, GitHub automatically contructs release notes from all of the pull requests merged
since the previous release.
It automatically takes the titles of each pull request to construct the release notes.
"Update XYZ" again provides no context and more work is required to communicate what has changed
to users and downstream dependencies.

### Pull Requests

A pull request is a request to merge a particular set of code changes into another copy of the
software, typically an agreed upon "main" version.

Pull requests should include contextual information regarding the code change. The intention is
to convince reviewers and maintainers that the new code is in a good state and that it's
inclusion would be a benefit to the project. This typically involves a contextual description of
the change and a description of why the change is valid and well tested.


## Long term sustainability

The long term sustainability of software is directly related to the level of infrastructure and
tooling around the code to characterise its design, behavior and performance. This infrastructure
is typically automated through services like GitHub, and it is targetted at developers in two
different categories:
- **Maintainers** who will keep the infrastructure running, update dependency versions and API's,
    and address bugs
- **Extenders** who will periodically return to the software to add new features

The maintenance component of sustainability deals with ensuring that, even with no changes
internally, the software can continue to function with changes that happen externally.
This can involve updates to the software to support new operating systems, virtual machines,
runtime environments, and hardware components. A recent example is the introduction of Apple
computers with Arm-based CPU's rather than the canonical x86 architecture. This change prompted
a slew of upgrades to the entire ecosystem of software from compilers and interpretters to
debuggers and profilers.

The extension component ensures that developers who work to add new features and improvements are
able to determine whether their change had the intended effect and no side effects.


## Accuracy


## Communicating intent and verifying implementation


## Ideas

**An idea only exists if it has been written down.**

**Optimize for readability not writability.**
Don't assume your code makes sense to everybody else. Use natural language to express ideas in
the documentation and code comments. As much as possible, write your code so that it reads close
to natural language. Language semantics and performance considerations can be in contrast to
this, so it is up to the developer to find the right balance of expression of intent and
achievement of the requirements of the code.

Consider how users and developers will be able to come up to speed.
- Are algorithms documented in words and graphics?

How are design intents communicated?
- These things should not live in someone's head. In that case, they're as good as gone.
It only exists if it has been written down.

Documentation and tests are not just a box to check so that the process can move forward.
It is an integral part of software. Software with poor quality documentation and tests is worse
than software without documentation and tests, but both of these elements are a necessary
consideration for collaboration. As in, if you're writing code for yourself and you don't value
tests and documentation, no problem because its your own problem. However, if you're writing
code so that other people can use it, it is detrimental to submit code with no or poor quality
tests and documentation. This detracts from the project, adds noise to the code, and overall
increases the barrier to entry and understanding for the entire software.

## Technical Report

https://quarto.org/docs/gallery/
- See the article section