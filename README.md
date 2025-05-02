
# WETO Stack

This repository contains the source files for the documentation of the WETO Software Stack,
which includes an entry guide for new users,
multiple listings and categorization of the software models,
software quality characterization,
and notes from the developer and user engagement that created the WETOStack content.
See [nrel.github.io/WETOStack/](https://nrel.github.io/WETOStack/) for more information.

Copyright 2024 Alliance for Sustainable Energy, LLC.

## Repository Contents

This repository contains a variety of tools for analyzing the WETO Software Stack as well as
reports from community engagement meetings and the source code for the documentation site.
The repository is organized as follows:

- `.github/`: Configuration files for GitHub Actions jobs and GitHub Pages builds
- `best_practices_report/`: LaTeX source files for the WETO Software Best Practices technical report
- `docs/`: Source files for most of the content on the WETO Software Stack website
- `entry_guide/`: Source files for the WETO Stack Entry Guide project
- `software_attributes/`: Database files (YAMLs) and analysis scripts for portfolio analysis

## Dependencies

The Python-based analysis scripts and Jupyter Book project dependencies are listed in
`requirements.txt`. These can be installed with `pip`:

```bash
pip install -r requirements.txt`
```

The entry guide project is built with Node Package Manager (`npm`), and the dependencies are
listed in `entry_guide/package.json`. After installing `npm`, the dependencies are
installed by running the install command within the entry guide directory:

```bash
cd wetostack/entry_guide/
npm install
```

## Building the Website

The WETO Software Stack website consists of two distinct components:
- Jupyter Book project that creates the primary structure and the majority of the content
- WETO Stack Entry Guide implemented with VueJS

The Entry Guide should be built first, copied into the Jupyter Book project directory,
and then the Jupyter Book project can be compiled. Refer to the
[deploy_pages](https://github.com/NREL/WETOStack/blob/main/.github/workflows/deploy-pages.yaml)
GitHub Actions workflow for more information.

**Note:** The Jupyter Book table of contents links to the Entry Guide via a web URL. When
building the documentation locally, you should change the web URL for the Entry Guide in the
table of contents to point to the Entry Guide `index.html` file locally.

### Building the Entry Guide VueJS Project

The Entry Guide uses [VueJS](https://vuejs.org), [VueFlow](https://vueflow.dev),
[DagreJS](https://github.com/dagrejs/dagre), and a few other libraries in the TypeScript and
Vue ecosystems.
[npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) is required to
compile the Entry Guide project and install the dependencies.

The Entry Guide can be compiled as production quality or development quality.
During active development, the development build is highly recommended as it provides a
hot reload capability where changes made to the project contents are automatically recompiled
and an open browser window will automatically render the changes.
Modifications to the project configuration will not be automatically compiled.

To compile the Entry Guide in development mode, move into the `entry_guide/` directory
and run the dev-build command:

```bash
cd wetostack/entry_guide/
npm run dev

# Terminal output:
#  VITE v6.2.2  ready in 200 ms
#
#  ➜  Local:   http://localhost:5173/
#  ➜  Network: use --host to expose
#  ➜  press h + enter to show help
```
This build process creates a local server accessible through the local URL shown
(`localhost` + port).
As changes are made to the source, the running build process automatically rebuilds.
If there are errors in the code, the terminal window will show them.
When they're fixed, the terminal will automatically rebuild and show the local URL again.

To do a production build, run the following command:

```bash
npm run build

# Terminal output:
# > entry_guide@0.0.0 build
# > vue-tsc -b && vite build
# 
# vite v6.2.2 building for production...
# ✓ 120 modules transformed.
# dist/index.html                   0.48 kB │ gzip:  0.32 kB
# dist/assets/index-C8-A469-.css    3.47 kB │ gzip:  1.19 kB
# dist/assets/index-DjNIX96g.js   298.55 kB │ gzip: 99.24 kB
# ✓ built in 616ms
```
The compiled files are put into the `entry_guide/dist/` directory. From there, the app can be
opened into a browser by opening `entry_guide/dist/index.html`.

Finally, the Entry Guide is included in the WETO Software Stack website by copying the
contents of the `dist` directory into `weto_stack/docs/_static/entry_guide`. Note that
the Jupyter Book project table of contents must be modified to point to the local path
to the Entry Guide's `index.html` file rather than the web URL that is set for the
deployed project.

### Building the Jupyter Book Project

The site is built using [Jupyter Book](https://jupyterbook.org/intro.html).
To build the site, run the following command:

```bash
pip install -r requirements.txt

cd docs/

jupyter-book build .
```

After a bit of output, the final lines will point to the location of the main HTML file
that can be opened in a browser:

```
The HTML pages are in _build/html.

===============================================================================

Finished generating HTML for book.
Your book's HTML pages are here:
    _build/html/
You can look at your book by opening this file in a browser:
    _build/html/index.html
Or paste this line directly into your browser bar:
    file://<removed>/wetostack/docs/_build/html/index.html
```

Note that the `docs/_build` folder must be removed and a rebuild completed if there are changes to
the `software_attributes/database/` YAML files.

## License

WETO Software Stack is licensed under Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International
