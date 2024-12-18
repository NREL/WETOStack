(openfast_conda)=
# OpenFAST on conda-forge

Published on: May 28, 2024\
Authors: Derek Slaughter, Andy Platt, Rafael Mudafort

Historically, using OpenFAST has meant obtaining (downloading or getting access to) the Fortran
source code, installing compilers and math libraries on your computer, and figuring out how to
compile the project for your specific system.
This can be a major barrier to entry for many users who just want to start modeling
wind turbines.
Since 2020, OpenFAST has been available on conda-forge for Linux and macOS systems.
However, distributing the software for Windows has been a challenge due to the
complexity of the build process and the lack of a modern, free Fortran compiler on Windows.
We are happy to announce that OpenFAST is now available on conda-forge for all three major
operating systems!

## How to install OpenFAST on conda-forge

[Conda](https://docs.conda.io/en/latest/) is an open-source, cross-platform,
language-agnostic package manager and environment management system.
It is a software that allows users to install other software and their dependencies, and
it configures the environment to find and run the installed software.
Conda-forge is a community-driven collection of packages distributed via `conda`.
To install OpenFAST with `conda` from conda-forge, you need to have conda installed on your system.
See the [conda installation instructions](https://docs.conda.io/projects/conda/en/latest/user-guide/install/index.html)
for more information.
We recommend to install Miniconda as that comes with a minimal set of packages by default.

After installing `conda`, add the conda-forge channel to your configuration with the following command:

```bash
conda config --add channels conda-forge
```

Now, you can install OpenFAST with the following command:

```bash
conda install openfast
```

At this point, the OpenFAST executable should be installed and available with the following
command corresponding to your system:

```bash
# Linux / macOS
which openfast

# Windows
where openfast
```

See the [OpenFAST Installation docs](https://openfast.readthedocs.io/en/main/source/install/index.html#conda-installation)
for more information.
