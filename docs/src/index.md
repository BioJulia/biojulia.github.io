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
    <a href="https://biojulia.dev/BioTutorials/dev/" class="feature-link">
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
  <button class="filter-btn" onclick="filterPackages('files', this)">Files</button>
  <button class="filter-btn" onclick="filterPackages('io', this)">I/O</button>
  <button class="filter-btn" onclick="filterPackages('other', this)">Other</button>
  <button class="filter-btn" onclick="filterPackages('outside', this)">Outside Org</button>
</div>

<div class="VPFeatures" id="packages-grid">
  <div class="VPFeature" data-category="files">
    <a href="https://biojulia.dev/TwoBit.jl/stable/" class="feature-link">
      <article class="box">
        <h3 class="title">TwoBit.jl <span class="feature-badge badge-files">Files</span></h3>
        <p class="details">Read and write 2bit sequence files</p>
      </article>
    </a>
  </div>
  <div class="VPFeature" data-category="files">
    <a href="https://biojulia.dev/Automa.jl/stable/" class="feature-link">
      <article class="box">
        <h3 class="title">Automa.jl <span class="feature-badge badge-files">Files</span></h3>
        <p class="details">Efficient state-machine generation to quickly and correctly parse bespoke file formats</p>
      </article>
    </a>
  </div>
  <div class="VPFeature" data-category="files">
    <a href="https://biojulia.dev/BED.jl/stable/" class="feature-link">
      <article class="box">
        <h3 class="title">BED.jl <span class="feature-badge badge-files">Files</span></h3>
        <p class="details">Read and write BED format files</p>
      </article>
    </a>
  </div>
  <div class="VPFeature" data-category="files">
    <a href="https://biojulia.dev/BGZFLib.jl/stable/" class="feature-link">
      <article class="box">
        <h3 class="title">BGZFLib.jl <span class="feature-badge badge-files">Files</span></h3>
        <p class="details">Low-level BGZF compression library</p>
      </article>
    </a>
  </div>
  <div class="VPFeature" data-category="files">
    <a href="https://github.com/BioJulia/BGZFStreams.jl" class="feature-link">
      <article class="box">
        <h3 class="title">BGZFStreams.jl <span class="feature-badge badge-files">Files</span></h3>
        <p class="details">Read and write BGZF compressed files</p>
      </article>
    </a>
  </div>
  <div class="VPFeature" data-category="files">
    <a href="https://biojulia.dev/BigWig.jl/dev/" class="feature-link">
      <article class="box">
        <h3 class="title">BigWig.jl <span class="feature-badge badge-files">Files</span></h3>
        <p class="details">Read and write BigWig format files</p>
      </article>
    </a>
  </div>
  <div class="VPFeature" data-category="bioinformatics">
    <a href="https://biojulia.dev/BioAlignments.jl/stable/" class="feature-link">
      <article class="box">
        <h3 class="title">BioAlignments.jl <span class="feature-badge badge-bioinformatics">Bioinformatics</span></h3>
        <p class="details">Sequence alignment algorithms and data structures</p>
      </article>
    </a>
  </div>
  <div class="VPFeature" data-category="other">
    <a href="https://biojulia.dev/BioGenerics.jl/stable/" class="feature-link">
      <article class="box">
        <h3 class="title">BioGenerics.jl <span class="feature-badge badge-other">Other</span></h3>
        <p class="details">Generic interface definitions for BioJulia packages</p>
      </article>
    </a>
  </div>
  <div class="VPFeature" data-category="bioinformatics">
    <a href="https://biojulia.dev/BioMakie.jl/dev/" class="feature-link">
      <article class="box">
        <h3 class="title">BioMakie.jl <span class="feature-badge badge-bioinformatics">Bioinformatics</span></h3>
        <p class="details">Visualize sequences and 3D proteins with ease</p>
      </article>
    </a>
  </div>
  <div class="VPFeature" data-category="bioinformatics">
    <a href="https://biojulia.dev/BioMarkovChains.jl/stable/" class="feature-link">
      <article class="box">
        <h3 class="title">BioMarkovChains.jl <span class="feature-badge badge-bioinformatics">Bioinformatics</span></h3>
        <p class="details">Markov chain models for biological sequences</p>
      </article>
    </a>
  </div>
  <div class="VPFeature" data-category="bioinformatics">
    <a href="https://biojulia.dev/BioSequences.jl/stable/" class="feature-link">
      <article class="box">
        <h3 class="title">BioSequences.jl <span class="feature-badge badge-bioinformatics">Bioinformatics</span></h3>
        <p class="details">Optimized types for working with biological sequences (eg DNA, RNA, proteins)</p>
      </article>
    </a>
  </div>
  <div class="VPFeature" data-category="other">
    <a href="https://biojulia.dev/BioServices.jl/stable/" class="feature-link">
      <article class="box">
        <h3 class="title">BioServices.jl <span class="feature-badge badge-other">Other</span></h3>
        <p class="details">Interface to biological web services and databases</p>
      </article>
    </a>
  </div>
  <div class="VPFeature" data-category="bioinformatics">
    <a href="https://biojulia.dev/BioStructures.jl/stable/" class="feature-link">
      <article class="box">
        <h3 class="title">BioStructures.jl <span class="feature-badge badge-bioinformatics">Bioinformatics</span></h3>
        <p class="details">Read, write, and manipulate macromolecular structures (PDB, mmCIF)</p>
      </article>
    </a>
  </div>
  <div class="VPFeature" data-category="bioinformatics">
    <a href="https://biojulia.dev/BioSymbols.jl/stable/" class="feature-link">
      <article class="box">
        <h3 class="title">BioSymbols.jl <span class="feature-badge badge-bioinformatics">Bioinformatics</span></h3>
        <p class="details">Primitive types for nucleotides and amino acids</p>
      </article>
    </a>
  </div>
  <div class="VPFeature" data-category="io">
    <a href="https://biojulia.dev/BufferIO.jl/stable/" class="feature-link">
      <article class="box">
        <h3 class="title">BufferIO.jl <span class="feature-badge badge-io">I/O</span></h3>
        <p class="details">IO interface for buffer operations</p>
      </article>
    </a>
  </div>
  <div class="VPFeature" data-category="bioinformatics">
    <a href="https://biojulia.dev/CIGARStrings.jl/stable/" class="feature-link">
      <article class="box">
        <h3 class="title">CIGARStrings.jl <span class="feature-badge badge-bioinformatics">Bioinformatics</span></h3>
        <p class="details">Parse and manipulate CIGAR strings for sequence alignments</p>
      </article>
    </a>
  </div>
  <div class="VPFeature" data-category="outside">
    <a href="https://ecojulia.org" class="feature-link">
      <article class="box">
        <h3 class="title">EcoJulia <span class="feature-badge badge-outside">Outside Org</span></h3>
        <p class="details">Ecological modeling and analysis ecosystem</p>
      </article>
    </a>
  </div>
  <div class="VPFeature" data-category="files">
    <a href="https://biojulia.dev/FASTX.jl/stable/" class="feature-link">
      <article class="box">
        <h3 class="title">FASTX.jl <span class="feature-badge badge-files">Files</span></h3>
        <p class="details">Read and write FASTA and FASTQ files</p>
      </article>
    </a>
  </div>
  <div class="VPFeature" data-category="other">
    <a href="https://github.com/BioJulia/FormatSpecimens.jl" class="feature-link">
      <article class="box">
        <h3 class="title">FormatSpecimens.jl <span class="feature-badge badge-other">Other</span></h3>
        <p class="details">Test specimens for biological file formats</p>
      </article>
    </a>
  </div>
  <div class="VPFeature" data-category="bioinformatics">
    <a href="https://biojulia.dev/GeneticVariation.jl/stable/" class="feature-link">
      <article class="box">
        <h3 class="title">GeneticVariation.jl <span class="feature-badge badge-bioinformatics">Bioinformatics</span></h3>
        <p class="details">Types and methods for working with genetic variation data</p>
      </article>
    </a>
  </div>
  <div class="VPFeature" data-category="bioinformatics">
    <a href="https://biojulia.dev/GenomicAnnotations.jl/stable/" class="feature-link">
      <article class="box">
        <h3 class="title">GenomicAnnotations.jl <span class="feature-badge badge-bioinformatics">Bioinformatics</span></h3>
        <p class="details">Read and write genomic annotations (GFF3, GenBank, EMBL)</p>
      </article>
    </a>
  </div>
  <div class="VPFeature" data-category="bioinformatics">
    <a href="https://biojulia.dev/GenomicFeatures.jl/stable/" class="feature-link">
      <article class="box">
        <h3 class="title">GenomicFeatures.jl <span class="feature-badge badge-bioinformatics">Bioinformatics</span></h3>
        <p class="details">Genomic interval operations and data structures</p>
      </article>
    </a>
  </div>
  <div class="VPFeature" data-category="files">
    <a href="https://biojulia.dev/GFF3.jl/stable/" class="feature-link">
      <article class="box">
        <h3 class="title">GFF3.jl <span class="feature-badge badge-files">Files</span></h3>
        <p class="details">Read and write GFF3 format files</p>
      </article>
    </a>
  </div>
  <div class="VPFeature" data-category="files">
    <a href="https://github.com/BioJulia/GraphicalFragmentAssembly.jl" class="feature-link">
      <article class="box">
        <h3 class="title">GraphicalFragmentAssembly.jl <span class="feature-badge badge-files">Files</span></h3>
        <p class="details">Read and write GFA format for sequence graphs</p>
      </article>
    </a>
  </div>
  <div class="VPFeature" data-category="other">
    <a href="https://biojulia.dev/IntervalTrees.jl/stable/" class="feature-link">
      <article class="box">
        <h3 class="title">IntervalTrees.jl <span class="feature-badge badge-other">Other</span></h3>
        <p class="details">Efficient interval tree data structures</p>
      </article>
    </a>
  </div>
  <div class="VPFeature" data-category="outside">
    <a href="https://juliahealth.org" class="feature-link">
      <article class="box">
        <h3 class="title">JuliaHealth <span class="feature-badge badge-outside">Outside Org</span></h3>
        <p class="details">Health and medical informatics packages</p>
      </article>
    </a>
  </div>
  <div class="VPFeature" data-category="bioinformatics">
    <a href="https://biojulia.dev/KmerAnalysis.jl/dev/" class="feature-link">
      <article class="box">
        <h3 class="title">KmerAnalysis.jl <span class="feature-badge badge-bioinformatics">Bioinformatics</span></h3>
        <p class="details">K-mer counting and analysis tools</p>
      </article>
    </a>
  </div>
  <div class="VPFeature" data-category="bioinformatics">
    <a href="https://biojulia.dev/Kmers.jl/stable/" class="feature-link">
      <article class="box">
        <h3 class="title">Kmers.jl <span class="feature-badge badge-bioinformatics">Bioinformatics</span></h3>
        <p class="details">Efficient k-mer representation and operations</p>
      </article>
    </a>
  </div>
  <div class="VPFeature" data-category="other">
    <a href="https://github.com/BioJulia/KWayMerges.jl" class="feature-link">
      <article class="box">
        <h3 class="title">KWayMerges.jl <span class="feature-badge badge-other">Other</span></h3>
        <p class="details">K-way merge algorithms for sorted iterators</p>
      </article>
    </a>
  </div>
  <div class="VPFeature" data-category="io">
    <a href="https://biojulia.dev/MemoryViews.jl/stable/" class="feature-link">
      <article class="box">
        <h3 class="title">MemoryViews.jl <span class="feature-badge badge-io">I/O</span></h3>
        <p class="details">Efficient memory views for IO operations</p>
      </article>
    </a>
  </div>
  <div class="VPFeature" data-category="files">
    <a href="https://github.com/BioJulia/MMTF.jl" class="feature-link">
      <article class="box">
        <h3 class="title">MMTF.jl <span class="feature-badge badge-files">Files</span></h3>
        <p class="details">Read and write MMTF macromolecular structure files</p>
      </article>
    </a>
  </div>
  <div class="VPFeature" data-category="bioinformatics">
    <a href="https://github.com/BioJulia/NCBIBlast.jl" class="feature-link">
      <article class="box">
        <h3 class="title">NCBIBlast.jl <span class="feature-badge badge-bioinformatics">Bioinformatics</span></h3>
        <p class="details">Interface to NCBI BLAST+ for sequence similarity searches</p>
      </article>
    </a>
  </div>
  <div class="VPFeature" data-category="outside">
    <a href="https://openmendel.github.io" class="feature-link">
      <article class="box">
        <h3 class="title">OpenMendel <span class="feature-badge badge-outside">Outside Org</span></h3>
        <p class="details">Statistical genetics and genomic analysis tools</p>
      </article>
    </a>
  </div>
  <div class="VPFeature" data-category="files">
    <a href="https://biojulia.dev/PairwiseMappingFormat.jl/stable/" class="feature-link">
      <article class="box">
        <h3 class="title">PairwiseMappingFormat.jl <span class="feature-badge badge-files">Files</span></h3>
        <p class="details">Read and write PAF alignment format</p>
      </article>
    </a>
  </div>
  <div class="VPFeature" data-category="bioinformatics">
    <a href="https://biojulia.dev/PopGen.jl" class="feature-link">
      <article class="box">
        <h3 class="title">PopGen.jl <span class="feature-badge badge-bioinformatics">Bioinformatics</span></h3>
        <p class="details">Population genetics analysis and simulation</p>
      </article>
    </a>
  </div>
  <div class="VPFeature" data-category="bioinformatics">
    <a href="https://github.com/BioJulia/PopGenCore.jl" class="feature-link">
      <article class="box">
        <h3 class="title">PopGenCore.jl <span class="feature-badge badge-bioinformatics">Bioinformatics</span></h3>
        <p class="details">Core types and functions for population genetics</p>
      </article>
    </a>
  </div>
  <div class="VPFeature" data-category="bioinformatics">
    <a href="https://biojulia.dev/ProteinSecondaryStructures.jl/stable/" class="feature-link">
      <article class="box">
        <h3 class="title">ProteinSecondaryStructures.jl <span class="feature-badge badge-bioinformatics">Bioinformatics</span></h3>
        <p class="details">Analyze and predict protein secondary structures</p>
      </article>
    </a>
  </div>
  <div class="VPFeature" data-category="bioinformatics">
    <a href="https://biojulia.dev/ReadDatastores.jl/stable/" class="feature-link">
      <article class="box">
        <h3 class="title">ReadDatastores.jl <span class="feature-badge badge-bioinformatics">Bioinformatics</span></h3>
        <p class="details">Efficient storage and access for sequencing read data</p>
      </article>
    </a>
  </div>
  <div class="VPFeature" data-category="bioinformatics">
    <a href="https://biojulia.dev/SequenceVariation.jl/stable/" class="feature-link">
      <article class="box">
        <h3 class="title">SequenceVariation.jl <span class="feature-badge badge-bioinformatics">Bioinformatics</span></h3>
        <p class="details">Represent and manipulate sequence variations (mutations, variants)</p>
      </article>
    </a>
  </div>
  <div class="VPFeature" data-category="bioinformatics">
    <a href="https://biojulia.dev/SingleCellProjections.jl/stable/" class="feature-link">
      <article class="box">
        <h3 class="title">SingleCellProjections.jl <span class="feature-badge badge-bioinformatics">Bioinformatics</span></h3>
        <p class="details">More cells? No Problem! Get UMAPs and other projections of your single cell data using the power of Sparse Matrices</p>
      </article>
    </a>
  </div>
  <div class="VPFeature" data-category="bioinformatics">
    <a href="https://biojulia.dev/SubstitutionModels.jl/stable/" class="feature-link">
      <article class="box">
        <h3 class="title">SubstitutionModels.jl <span class="feature-badge badge-bioinformatics">Bioinformatics</span></h3>
        <p class="details">Nucleotide and amino acid substitution models for phylogenetics</p>
      </article>
    </a>
  </div>
  <div class="VPFeature" data-category="other">
    <a href="https://github.com/BioJulia/WaveletMatrices.jl" class="feature-link">
      <article class="box">
        <h3 class="title">WaveletMatrices.jl <span class="feature-badge badge-other">Other</span></h3>
        <p class="details">Wavelet matrix data structure for fast queries</p>
      </article>
    </a>
  </div>
  <div class="VPFeature" data-category="files">
    <a href="https://biojulia.dev/XAM.jl/stable/" class="feature-link">
      <article class="box">
        <h3 class="title">XAM.jl <span class="feature-badge badge-files">Files</span></h3>
        <p class="details">Read and write SAM and BAM files</p>
      </article>
    </a>
  </div>
  <div class="VPFeature" data-category="files">
    <a href="https://biojulia.dev/XAMAuxData.jl/stable/" class="feature-link">
      <article class="box">
        <h3 class="title">XAMAuxData.jl <span class="feature-badge badge-files">Files</span></h3>
        <p class="details">Auxiliary data handling for SAM/BAM files</p>
      </article>
    </a>
  </div>
</div>

<h2 class="section-header">Join the Community</h2>

<div class="VPFeatures">
  <div class="VPFeature">
    <a href="https://biojulia.dev/posts/" class="feature-link">
      <article class="box">
        <h3 class="title">BioJulia Blog</h3>
        <p class="details">Stay up to date with the latest news, tutorials, and community updates</p>
      </article>
    </a>
  </div>
  <div class="VPFeature">
    <a href="https://julialang.org/slack/" class="feature-link">
      <article class="box">
        <h3 class="title">Julia Slack</h3>
        <p class="details">Chat with the Julia community on Slack</p>
      </article>
    </a>
  </div>
  <div class="VPFeature">
    <a href="https://discourse.julialang.org/" class="feature-link">
      <article class="box">
        <h3 class="title">Julia Discourse</h3>
        <p class="details">Ask questions and discuss with the Julia community</p>
      </article>
    </a>
  </div>
  <div class="VPFeature">
    <a href="contributing" class="feature-link">
      <article class="box">
        <h3 class="title">Contributing to BioJulia</h3>
        <p class="details">Learn how to contribute to BioJulia packages</p>
      </article>
    </a>
  </div>
</div>

</div>
```
