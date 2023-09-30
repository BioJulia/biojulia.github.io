# [BioRuby (Ruby)](@id bioruby)

* [BioRuby](http://bioruby.org/) represents an ecosystem of related biology
  tools written in the Ruby programming language
* Unlike with BioJulia, BioRuby tools are installed together as classes/modules
  into a single `bio` gem
* Launched in 2000 with two major releases covering the Ruby1/2/3 transitions
* Primarily composed of wrapper classes/modules for common bioinformatics,
  molecular biology applications 

**A few equivalent application tools between BioJulia and BioRuby:**

| Application        | BioJulia packages                                                                                                                             | BioRuby classes/modules           |
|:-------------------|:----------------------------------------------------------------------------------------------------------------------------------------------|:----------------------------------|
| Sequence alignment | [BioSequences](https://biojulia.dev/BioSequences.jl/stable/), [BioAlignments](https://biojulia.dev/BioAlignments.jl/stable/)                  | `Bio::Sequence`, `Bio::Alignment` |
| Input/Output       | [FASTX](https://biojulia.dev/FASTX.jl/stable/), [XAM](https://biojulia.dev/XAM.jl/stable/), [BigWig](https://biojulia.dev/BigWig.jl/dev/),... | `Bio::Fasta`, `Bio::Fastq`,...    |

**A few package/ecosystem equivalents between Julia and Ruby:**

| Application                | Julia                                                                                                                                                                                                                                                 | Ruby                                     |
|:---------------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-----------------------------------------|
| Data manipulation/analysis | [DataFrames](https://dataframes.juliadata.org/stable/), [CSV](https://csv.juliadata.org/stable/), [Query](https://www.queryverse.org/Query.jl/stable/)                                                                                                | `daru`, `CSV`                            |
| Plotting/visualization     | [Plots](https://docs.juliaplots.org/stable/), [Makie](https://docs.makie.org/stable/), [TidierPlots](https://github.com/TidierOrg/TidierPlots.jl)                                                                                                     | `Chartkick`, `gruff`                     |
| Statistical analysis       | [Statistics](https://docs.julialang.org/en/v1/stdlib/Statistics/), [HypothesisTests](https://github.com/JuliaStats/HypothesisTests.jl), [GLM](https://github.com/JuliaStats/GLM.jl), [Distributions](https://juliastats.org/Distributions.jl/latest/) | `Statsample`, `distribution`             |
| Machine learning           | [Flux](https://fluxml.ai/Flux.jl/stable/), [SciML](https://sciml.ai/)                                                                                                                                                                                 | `Rumale`, `TensorStream`                 |
| Numerical mathematics      | [LinearAlgebra](https://docs.julialang.org/en/v1/stdlib/LinearAlgebra/)                                                                                                                                                                               | `NMatrix`, `minimization`, `integration` |
| Notebook/report generator  | [IJulia](https://julialang.github.io/IJulia.jl/stable/), [Pluto](https://plutojl.org/)                                                                                                                                                                | `IRuby`                                  |
| Web applications           | [Genie](https://genieframework.com/), [Franklin](https://franklinjl.org/)                                                                                                                                                                             | `Hanami`, `Jekyll`                       |

**A few notable differences between Julia and Ruby:**

| Julia                                                                  | Ruby                                                                           |
|:-----------------------------------------------------------------------|:-------------------------------------------------------------------------------|
| High-level, general-purpose compiled language                          | High-level, general-purpose interpreted language                               |
| Dynamically typed with multiple dispatch and optional type annotations | Dynamically typed with optional type annotations (Sorbet, RBS)                 |
| Built-in parallelism via threads, coroutines (Tasks)                   | Built-in parallelism via threads, fibers                                       |
| Lisp-inspired metaprogramming (S-expressions, homoiconicity,...)       | Macro-less metaprogramming capabilities (dynamic reflection, eval methods,...) |
| Single implementation available (JuliaLang)                            | Multiple implementations available (TruffleRuby, mruby,...)                    |

**To transition from Ruby to Julia:**
* Read the [Julia manual](https://docs.julialang.org/) for an in-depth look at
  its internals and features
* See [Running External
  Programs](https://docs.julialang.org/en/v1/manual/running-external-programs/)
  in the manual for running Ruby scripts or other programs from Julia

