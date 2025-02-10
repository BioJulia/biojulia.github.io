---
# https://vitepress.dev/reference/default-theme-home-page
# Cribbed from DimensionalData.jl
layout: home

hero:
  name: "BioJulia"
  text: "Unified Docs for BioJulia"
  tagline: Doing biology with julia
  image:
    src: '/assets/biojulia-logo-dark-svgomg.png'
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
  - title: BioSequences.jl
    details: Optimized types for working with biological sequences (eg DNA, RNA, proteins)
    link: https://biojulia.dev/BioSequences.jl
  - title: Automa.jl
    details: Efficient state-machine generation to quickly and correctly parse bespoke file formats
    link: https://biojulia.dev/Automa.jl
  - title: BioMakie.jl
    details: Visualize sequences and 3D proteins with ease
    link: https://biojulia.dev/BioMakie.jl
---


