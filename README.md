
# WETOStack

This repository contains the source for NREL's Holistic Modeling - WETO Software Portfolio
Coordination project. See [nrel.github.io/WETOStack/](https://nrel.github.io/WETOStack/) for
more information.

## Building the site

The site is built using [Jupyter Book](https://jupyterbook.org/intro.html).
To build the site, run the following command:

```bash
pip install -r docs/requirements.txt

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
Note that the docs/_build folder must be removed and a rebuild done if changes to the software_attributes/database/ yamls are made.

## Dependencies

The Python packages required to build this project are listed in `requirements.txt`.
Additional dependencies for the documentation are in `docs/requirements.txt`.
