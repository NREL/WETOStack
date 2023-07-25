
# Best Practices and Expectations

Wind energy researchers typically share one key characteristic: a passion for increasing
wind energy in the global energy mix. The U.S. Department of Energy (DOE) supports this mission
in a number of ways including allocating funding directly to various aspects of wind energy
research through the
[Office of Energy Efficiency and Renewable Energy (EERE)](https://www.energy.gov/eere/office-energy-efficiency-renewable-energy)
via the
[Wind Energy Technologies Office (WETO)](https://www.energy.gov/eere/wind/wind-energy-technologies-office). 
While the traditional output of research is academic publication, software development efforts
are increasingly a major focus. Software tools in the research environment allow researchers to
describe an idea and quickly increase the scope and scale. As a product of research, these tools
represent a direct pipeline from researcher to industry practitioners since they implementation
of ideas described in academic publications. Given this vital role in wind energy research and
commercial development, the broad research software portfolio supported by WETO must maintain a
minimum level of quality to support the wind energy field in the growing transition to
renewable energy. **This report outlines a series of best practices to be adopted by all
WETO-supported software projects, as well as expectations that the communities interacting with
these projects should have of the developers and tools themselves.**

<!-- EERE Mission:
EERE’s mission is to accelerate the research, development, demonstration, and deployment of
technologies and solutions to equitably transition America to net-zero greenhouse gas emissions
economy-wide by no later than 2050, and ensure the clean energy economy benefits all Americans,
creating good paying jobs for the American people—especially workers and communities impacted
by the energy transition and those historically underserved by the energy system and
overburdened by pollution. -->

<!-- General idea to community here: -->
<!-- WETO Software is critical. -->
<!-- It is **the** mechanism to put the ideas behind WETO research into the hands of practitioners. -->
<!-- It should be accessible to students, researchers, practitioners within wind energy as well as engineers and scientists from adjacent fields. -->
<!-- While each tool or project has a finite life span, the WETO Software Portfolio will exist as long as WETO itself exists. -->
<!-- This collection of software truly is the foundation of innovation in wind energy research. -->

Wind energy research software has a unique standing in the field of scientific software. The
stakeholders are varied with a subset being:
<!-- Venn diagram funders / programmatic interests, developers, users -->
- DOE EERE leadership
- DOE WETO leadership and program managers
- National lab leadership
- Associated project principle investigators
- Research software engineers
- Wind energy researchers in academia
    (including graduate students, post docs, and national lab staff)
- Industry researchers and practitioners
- Commercial software developers
- The general public interested in wind energy

These software are typically the end-user of other generic software libraries, so
the funding cycles are often tied to applied research rather than the development of the
software itself. Since the developers are also wind energy researchers, these tools are
typically designed in a way that closely resembles the application in which they're used.
Additionally, the expertise and incentives for the developers have a high variability, and
often neither are aligned with software engineering or computer science.

Given the unique environment in which wind energy research software is produced and consumed,
it is critical for model owners to understand the context of their software. A framework
for developing this understanding is to answer the following questions of a given software project:
- What is it's purpose?
- What is it's role in the field of wind energy?
- What is the profile of the expected users?
- For how long will it be relevant?
- What is the expected impact?

These questions allow model owners to identify the appropriate methods for the design, development,
and long term maintenance of their software. Additionally, the answer provide context for future
planners to understand why particular decisions were made and discern the consequences of
changing course.

The best practices outlined in this report are concerned with software quality and are organized
into the following sections:
```{contents}
```

The information is aggregated from experience within WETO-supprted software development
groups as well as external organizations and efforts to define the craft of research software
engineering. These best practices aim to make the collaborative development process efficient
and effective while improving the model understanding across stakeholders. Additionally,
the general adoption of a common framework for software quality ensures that the end users
of WETO software can trust these tools and accurately understand the risks to workflow integration.

<!-- These are aspects of research software that are critical to robustness, adoption, and ultimate impact.
Consider these best practices as general guidelines for planning research activities that include the development of software. -->

**Point out that one overarching theme is to DOCUMENT! Write, draw, model - whatever you need - to
communicate the ideas in your head. If you aren't able to make someone else understand your idea,
it might as well not exist.
**An idea only exists if it has been written down.**


## Contexts

consider two kinds of "users":
- Developers
- Practitioners

Why we care about software quality
- Collaboration
- Workflows
- Accessibility


(accessibility)=
## Accessibility

Accessibility is concerned with how users who will execute the software either directly or as
part of another system are expected to obtain and integrate it into their processes. The product
that is to be obtained is the executable version of the software. In the case of compiled
programming languages, this is a binary executable or library file, while interpreted languages
typically require distributing the source code directly.

For guidance on developer accessibility, see [](extensibility).


How will developers get the required tools like dependencies or other development tools?
Are all tools available for all supported operating systems? Does the software run on both
personal computers and super computers?

Nuances of research software:
- The code itself is often the "front end" so complicated interfaces can't hide behind an app
- The infrastructure for distribution (i.e. installation) is much. more hands-on than say an app store or browser
- Users expect the balance between stability and control to lean toward control whereas users expect commercial software to lean toward stability.

### Barrier to entry
What is the barrier to entry for practitioners and developers? Are practitioners expected to have
programming knowledge and domain-specific knowledge?
Ideally, practitioners are expected or assumed to have a reasonable amount of domain knowledge,
but in most cases very little computer programming knowledge is expected. The exception is in HPC
software where the ability to configure a HPC system and understand consequences of the
configuration is assumed.

How will developers get the required tools like dependencies or other development tools?
Are all tools available for all supported operating systems?
Does the software run on both personal computers and super computers?

(usability)=
## Usability

Usability is concerned with how people run the software.

Nuances of research software:
- "Design" is typically not a consideration at all
- It is typical to adopt "patterns", so there is very little evolution of software interface design and therefore usability
- Research software is expected to be predictable and similar to what users already know. The challenge is to understand the existing paradigms and adopt them well.

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

(extensibility)=
## Extensibility

Extensibility is concerned with how the software is extended to add make improvements such as
new features and bug fixes.

Is the code open source?
Are binaries available?
If not, is there a build system with modern dependencies?
i.e. Makefiles are outdated, use CMake


Nuances of research software:
- **The life and relevance of research software critically depends on new developers coming into the project**

The style of the code should avoid complexity where possible and favor readability over writability.
In other words, don't be clever.

This is closely tied to **(6) methodologies for communicating intent and verifying implementation**

### Approachable style

An extensible software is approachable. Convoluted code is difficult to understand quickly. Understand what it means to "grok" and strive to construct software that can be easily grokked (https://en.wikipedia.org/wiki/Grok).

> *Grok* means "to understand", of course, but Dr. Mahmoud, who might be termed the leading Terran expert on Martians, explains that it also means, "to drink" and "a hundred other English words, words which we think of as antithetical concepts. 'Grok' means *all* of these. It means 'fear', it means 'love', it means 'hate' – proper hate, for by the Martian 'map' you cannot hate anything unless you grok it, understand it so thoroughly that you merge with it and it merges with you – then you can hate it. By hating yourself. But this implies that you love it, too, and cherish it and would not have it otherwise. Then you can *hate* – and (I think) Martian hate is an emotion so black that the nearest human equivalent could only be called mild distaste.

```
>> import this

The Zen of Python, by Tim Peters

Beautiful is better than ugly.
Explicit is better than implicit.
Simple is better than complex.
Complex is better than complicated.
Flat is better than nested.
Sparse is better than dense.
Readability counts.
Special cases aren't special enough to break the rules.
Although practicality beats purity.
Errors should never pass silently.
Unless explicitly silenced.
In the face of ambiguity, refuse the temptation to guess.
There should be one-- and preferably only one --obvious way to do it.
Although that way may not be obvious at first unless you're Dutch.
Now is better than never.
Although never is often better than \*right\* now.
If the implementation is hard to explain, it's a bad idea.
If the implementation is easy to explain, it may be a good idea.
Namespaces are one honking great idea -- let's do more of those!
```

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
- Cherry-pick
- Squash
- Edit a commit message

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
The first message provides n detail around what is updated or why it matters while the second
indicates there was a problem that is now fixed.
The additional description in the first provides more info that could have been incorporated into
the title.
Even though domain specific context is required to understand both of these pull requests, the
second implicitly communicates much more information in just a few words.
The outcome is that readers of the commit history in the second repository can quickly scan the
commit history and understand the evolution of changes simply from the commit messages.
The first repository requires opening individual changes to understand their scope and context.
 
```{image} ./images/commits_compared.png
:alt: capabilities
:align: center
```

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

(sustainability)=
## Long term sustainability

The long term sustainability of software is directly related to the level of infrastructure and
tooling around the code to characterise its design, behavior and performance. This infrastructure
is typically automated through services like GitHub, and it is targetted at developers in two
different categories:
- **Maintainers** who will keep the infrastructure running, update dependency versions and API's,
    and address bugs
- **Extenders** who will periodically return to the software to add new features

Nuances of research software:
- The landscape is broad and the associated ecosystem changes very quickly but adoption is very slow
- iOS for example runs on a small set of well-known hardware
- Research funding cycles do not include maintenance

The maintenance component of sustainability deals with ensuring that, even with no changes
internally, the software can continue to function with changes that happen externally.
This can involve updates to the software to support new operating systems, virtual machines,
runtime environments, and hardware components. A recent example is the introduction of Apple
computers with Arm-based CPU's rather than the canonical x86 architecture. This change prompted
a slew of upgrades to the entire ecosystem of software from compilers and interpretters to
debuggers and profilers.

The extension component ensures that developers who work to add new features and improvements are
able to determine whether their change had the intended effect and no side effects.

(accuracy)=
## Accuracy

Validation - Are you building the right thing?
Verification - Are you building the thing right?

- Barry Boehm, Software Engineering Economics, 1981

Test driven development - formalize the ideas that drive development.
A portion of code should not be added without a formal proof of correctness and robustness.
Consider testing like writing a report - prove to the reader that it is correct and should be accepted.

Phenomenon identifcation and ranking table
- David Maniaci

(communicating_design)=
## Methodologies for communicating intent and verifying implementation

To understand how a change fits into the big picture, it is required to have a sense for the picture from the start.
Develop diagrams for code architecture and regularly check and update them as the architecture changes.

Types of diagrams:

- State / flow diagrams
- Class hierarchy
- Data construction and operation - Show a representative problem describing how operations happen on data in various contexts (serial vs parallel, cpu vs gpu)

Identify and communicate the *parti*.

(rse)=
## Appendix - The "engineer" behind the code

Consider the human impacts - Developers should know the context in which their code exists.
They should be experts in the implementation and very good in the usage.
A typical path may look something like this:

- Year 1: Implementing models and developing tests and documentation
- Year 2: Second author on analyses, improved modeling, informing AOP, and writing developer-specific documentation
- Year 3: Lead author on analysis work, guiding the direction for future development projects, writing AOP, writing user-specific documentation
- Year 4: Proposing new work and seeking funding to expand the software project

In general, the amount of code written by a developer should peak around year 2 or 3 and then start to drop.
It should not go to 0, but the majority of involvement in software development should be code review, design, and project planning.

## Ideas


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

Consider how a change fits into the big picture. The typical process is to figure out a
way to "add code" to enable a feature. Instead, consider how to "incorporate code" to
enable a feature. Adding-to without considering the whole continuously expands the scope and size
of the code while increasing complexity, and this is unsustainable for future development and
maintenance efforts. Consider how to incorporate a feature into the
existing design or redesign the software to support both the current context and the
new feature.

Write a pull request so that it is easy to review. Make it plain what your changes are and
why they were necessary and better than before.

The general idea in software design is to create low level tools that you can use and reuse
again and again at the high level. You know you're doing things right when adding new
features involves writing very little new code and is mostly using existing code in new
ways. Thats not to say its easy, but at least you've given yourself the tools with
which to do your future work.

Whats the purpose of our software?
Who is the target audience?
How long do we expect it to be relevant?
- This should be part of the design process
- Periodically reconsider whether the recent work and planned work is in line with these expectations

**Require each project to develop a software engineering roadmap as well as a capabilities roadmap**

Establish a grading scheme for software projects in future years
- Tie the grading scheme to the technical report so that any areas of the grades can reference back to the best practices


**Reproducibility**

### Style
Consider who we write our software for and the primary use cases
- Other researchers
- Model accessibility is important - we have to be able to extend the software

Don't be clever, keep it super simple


For example, consider the following code to create a 3x3 grid:
```python
# Update the layout to be a staggered 3x3 turbine grid
layout_x = np.arange(3) * np.ones((3, 3)) * 700
layout_x[1] += 250
layout_x[2] += 500
layout_x = layout_x.flatten()

layout_y = (np.arange(0, 601, 300).reshape(-1, 1) * np.ones((3, 3))).flatten()
```
It is probably computationally efficient, but its also difficult to read.

It could be equivalently written like this
```python
# Update the layout to be a staggered 3x3 turbine grid
x_array = np.array([0, 700, 1400])
layout_x = np.array([ x_array for i in range(3) ])
layout_x[1] += 250
layout_x[2] += 500
layout_x = layout_x.flatten()

layout_y = (np.arange(0, 601, 300).reshape(-1, 1) * np.ones((3, 3)))

... I dont know how to really simplify it but the reshape, arange, flatten, all these things are
convoluted and make this code look overly complex. It's too much to track in your mind just to
create a simple 3x3 layout.
```

Talk about code reviews and what to consider when reviewing and proposing code.
- Reviews should be verbose and to the point
- Consider the big pictures: what do these changes add to the project? how is it better than before?
- Run the code! Try to break it. Really exercise the new code. It's not enough to simply read it.
- 

# Notes

https://quarto.org/docs/gallery/
- See the article section

UWashington eSciences Institute paper on the 3R development practices:
- Readability
- Resilience
- Reuse
This nicely highlights writing code for particular audiences.
https://hdsr.mitpress.mit.edu/pub/f0f7h5cu/release/2

GitHub README blog post: how open should your open source be?
It also addresses the various audiences and how to serve the developer community vs user community
https://github.com/readme/featured/how-open-is-open-source?mc_cid=50779693b9&mc_eid=2d4b086884

Documentation as a way to build community
https://labs.quansight.org/blog/2020/03/documentation-as-a-way-to-build-community
