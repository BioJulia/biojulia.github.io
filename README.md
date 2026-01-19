# <img src="./sticker.svg" width="30%" align="right" /> BioJuliaDocs

> Note: This landing site is under extensive development and will receive frequent updates.
> It is not in a ready state, and is published under GitHub Pages only for testing purposes.

[![GitHub Pages status](https://github.com/BioJulia/BioJuliaDocs/actions/workflows/pages/pages-build-deployment/badge.svg?branch=gh-pages)](https://github.com/BioJulia/BioJuliaDocs/actions/workflows/pages/pages-build-deployment)
[![Static Badge](https://img.shields.io/badge/Docs-stable-blue)](https://biojulia.dev/BioJuliaDocs)

## Description

The BioJuliaDocs initiative is an in-development project to produce a landing site for BioJulia
similar to [SciMLDocs](https://github.com/SciML/SciMLDocs) (see the production page [here](https://docs.sciml.ai/Overview/stable/)).

## Testing

The rendered BioJuliaDocs site, for testing purposes, is published online using GitHub Pages at [biojulia.dev/](https://biojulia.dev/). A GitHub action rebuilds the site on every successful pull request.

To deploy the site locally, open two separate julia processes,
and activate the "docs/" project.
Then, in the first, run:

```julia
# Make sure you are within or are pointing to the the docs/ folder
using LiveServer
servedocs(; foldername=pwd())
```

And in the other, run:

```julia
using DocumenterVitepress

DocumenterVitepress.dev_docs("build")
```

Open the LocalHost Url spawned by the vitepress process

## Contributing

We appreciate contributions from users/members of the BioJulia commmunity
including reporting bugs/typos, fixing issues, and adding new sections.
This is a fantastic opportunity to polish one's technical writing skills as well as show off one's skill with BioJulia packages ;)

Take a look at the [contributing files](https://github.com/BioJulia/Contributing)
detailed contributor and maintainer guidelines, and code of conduct.

## Questions?

Feel free to open a new discussion under the [BioJuliaDocs Discussions](https://github.com/BioJulia/discussions) section.
Alternatively, one can chat with the community either via the [Slack](https://julialang.org/slack/) #biology workspace
or in the [forums](https://discourse.julialang.org/).

This project was initially lead by [Michael Persico](mailto:michael.a.persico@gmail.com?subject=[GitHub]) (him/il)
as part of a Julia Summer of Code project.
