# 2024 User Workshops

The Holistic Modeling Portfolio Coordination Project is hosting a series of workshops in June 2024
to discuss the current state and future direction of the WETO Software Stack.
Individual workshops will be held for different topic areas covering a subset of software
within the WETO Software Stack.
The workshops will be conducted via Microsoft Teams at the dates and times listed below,
and registration is required.
Anyone interested is encouraged to attend, and the target audience is current and prospective
users of WETO software.

| Date | Time | Topic Area | Relevant Software |
| ---- | ---- | ---------- | ----------------- |
| June 10 | 7-9 am MDT | Systems Engineering | WISDEM, WEIS, WindSE, pyNuMAD, SONATA |
| June 12 | 8-10 am MDT | TEA, cost modeling | ORBIT, LandBOSSE, WOMBAT, NRWAL, CORAL |
| June 18 | 7-9 am MDT | Controls | FLORIS, FLASC, Hercules, OpenOA |
| June 20 | 7-9 am MDT | OpenFAST+ | OpenFAST, FAST.Farm, ROSCO, and associated tools |

`````{admonition} Contact
:class: tip
Please contact Rafael Mudafort (rafael.mudafort@nrel.gov) with any questions.
`````

`````{admonition} Schedule Changes
:class: warning

- The **HFM workshop** (AMR Wind, Nalu Wind, ERF, OpenTurbine) originally scheduled for June 13 has been postponed, and the rescheduled date will be announced soon.
- **WindSE** was initially included in the HFM workshop, but it has been moved to the Systems Engineering workshop on June 10.
- **OpenOA** was initially included in the TEA / Cost Modeling workshop, but it has been moved to the Controls workshop on June 18.
`````

## Registration

**To register, complete this form: [WETO Software Stack workshop registration](https://docs.google.com/forms/d/1Pbk34YmhjRBEsnPteqY8OLgjxsq82TkWULCVhABwuHY/edit).**

Prior to the workshop, registered participants will receive an email with a link
to the Microsoft Teams meeting.

## Workshop Format

Each workshop will start with an overview of the WETO Software Stack followed by
a high-level description of the specific software and capabilities for the relevant
topic area.
A 30-minute portion will be reserved for community feedback and discussion with model owners.
A sample agenda is provided below, but specific agendas will vary.

| Time Slot | Duration | Topic |
| --------- | -------- | ----- |
| 0:00 - 0:05 |  5 min | Welcome and intro |
| 0:05 - 0:15 | 10 min | Intro to Portfolio Coordination Project, WETO Software Stack overview |
| 0:15 - 0:30 | 15 min | WETO Software Stack Q&A |
| 0:30 - 1:20 | 50 min | Model introductions, capabilities and workflow demo, future roadmap |
| 1:20        |  2 min | Poll on usability issues, voting for roadmap priorities |
| 1:20 - 1:50 | 30 min | Community discussion, Q&A |
| 1:50 -  end | 10 min | Outro and Methods for community engagement |

The software included in the workshops are organized slightly differently than the [](software_listing).
Rather than organizing the workshops by the thing that each software does, the workshops are
organized by the technical area in which each software is used.
This allows the workshop attendees to have a more common interest in the software being discussed.

```{mermaid}
%%{init: { 'logLevel': 'debug', 'theme': 'default' , 'themeVariables': {'git0': '#CF784B', 'cScale1': '#B5B867', 'cScale2': '#FFEA59', 'cScale3': '#B7DBDB', 'cScale4': '#335B8E', 'cScale5': '#6CA18F'} }  }%%

mindmap
    root("WETO Software Portfolio")
        ps(Systems Engineering)
            WEIS
            WISDEM
            WindSE
            pyNuMAD

        hfm(High Fidelity Modeling)
            AMR Wind
            Nalu Wind
            OpenTurbine
            ERF

        ctrl(Wind Farm Controls and Analysis)
            FLORIS
            FLASC
            hercules
            OpenOA

        cost(TEA & Cost Models)
            LandBOSSE
            HybridBOSSE
            ORBIT
            CORAL
            NRWAL
            WOMBAT

        do(OpenFAST+)
            OpenFAST
            FAST.Farm
            ROSCO
            openfast_toolbox
```

## Systems Engineering Workshop - June 10

Rafael Mudafort, Pietro Bortolotti, Garrett Barter, Dan Zalkind, Ernesto Camarena, Jeff Allen,
and Ethan Young co-hosted this workshop.

{download}`Click here to download the slides.<../_static/UserWorkshops2024_SystemsEngineering.pdf>`

```{youtube} urab_dN12Ws
```