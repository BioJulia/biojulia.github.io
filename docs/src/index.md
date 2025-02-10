```@raw html
---
# https://vitepress.dev/reference/default-theme-home-page
# Cribbed from DimensionalData.jl
layout: home

hero:
  name: "BioJulia"
  text: "Unified Docs"
  tagline: Doing biology with julia
  image:
    src: '/assets/biojulia-logo1.png'
  actions:
    - theme: brand
      text: Getting Started
      link: /getting_started/juliainstallation
    - theme: alt
      text: Overview
      link: /overview
    - theme: alt
      text: View on Github
      link: https://github.com/BioJulia/BioJuliaDocs
features:
  - title: BioTutorials
    details: These are still a work in progress
    link: https://biojulia.dev/BioTutorials
  - title: BioSequences.jl
    details: Optimized types for working with biological sequences (eg DNA, RNA, proteins)
    link: https://biojulia.dev/BioSequences.jl
  - title: Automa.jl
    details: Efficient state-machine generation to quickly and correctly parse bespoke file formats
    link: https://biojulia.dev/Automa.jl
  - title: BioMakie.jl
    details: Visualize sequences and 3D proteins with ease
    link: https://biojulia.dev/BioMakie.jl
  - title: SingleCellProjections.jl
    details: More cells? No Problem! Get UMAPs and other projections of your singlg cell data using the power of Sparse Matrices
    link: https://biojulia.dev/SingleCellProjections.jl
---
```
