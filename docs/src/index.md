```@raw html
---
layout: home

hero:
  name: "BioJulia"
  text: "Doing Biology with Julia"
  tagline: Unified Docs
  image:
    src: '/assets/logo.png'
  actions:
    - theme: alt
      text: View on Github
      link: https://github.com/BioJulia/BioJuliaDocs
---
```

```@raw html
<div class="container custom-sections">

<h2 class="section-header">Tutorials</h2>

<div class="VPFeatures">
  <div class="VPFeature">
    <a href="https://biojulia.dev/BioTutorials" class="feature-link">
      <article class="box">
        <h3 class="title">BioTutorials</h3>
        <p class="details">These are still a work in progress</p>
      </article>
    </a>
  </div>
</div>

<h2 class="section-header">BioJulia Packages</h2>

<div class="filter-buttons">
  <button class="filter-btn active" onclick="filterPackages('all', this)">All</button>
  <button class="filter-btn" onclick="filterPackages('bioinformatics', this)">Bioinformatics</button>
  <button class="filter-btn" onclick="filterPackages('visualization', this)">Visualization</button>
  <button class="filter-btn" onclick="filterPackages('io', this)">I/O</button>
</div>

<div class="VPFeatures" id="packages-grid">
  <div class="VPFeature" data-category="bioinformatics">
    <a href="https://biojulia.dev/BioSequences.jl" class="feature-link">
      <article class="box">
        <h3 class="title">BioSequences.jl <span class="feature-badge badge-bioinformatics">Bioinformatics</span></h3>
        <p class="details">Optimized types for working with biological sequences (eg DNA, RNA, proteins)</p>
      </article>
    </a>
  </div>
  <div class="VPFeature" data-category="io">
    <a href="https://biojulia.dev/Automa.jl" class="feature-link">
      <article class="box">
        <h3 class="title">Automa.jl <span class="feature-badge badge-io">I/O</span></h3>
        <p class="details">Efficient state-machine generation to quickly and correctly parse bespoke file formats</p>
      </article>
    </a>
  </div>
  <div class="VPFeature" data-category="visualization">
    <a href="https://biojulia.dev/BioMakie.jl" class="feature-link">
      <article class="box">
        <h3 class="title">BioMakie.jl <span class="feature-badge badge-visualization">Visualization</span></h3>
        <p class="details">Visualize sequences and 3D proteins with ease</p>
      </article>
    </a>
  </div>
  <div class="VPFeature" data-category="bioinformatics">
    <a href="https://biojulia.dev/SingleCellProjections.jl" class="feature-link">
      <article class="box">
        <h3 class="title">SingleCellProjections.jl <span class="feature-badge badge-bioinformatics">Bioinformatics</span></h3>
        <p class="details">More cells? No Problem! Get UMAPs and other projections of your single cell data using the power of Sparse Matrices</p>
      </article>
    </a>
  </div>
</div>

</div>
```
