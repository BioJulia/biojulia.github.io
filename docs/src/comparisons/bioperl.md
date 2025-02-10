# [BioPerl (Perl5)](@id bioperl)

* [BioPerl](https://bioperl.org/) represents an ecosystem of related molecular
  biology modules written in the Perl5 programming language
* Supported by the Open Bioinformatics Foundation and includes additional
  utilities and interfaces for common bioinformatics applications
* Launched in 2002 and has contributed to major scientific achievements
  including the Human Genome Project

**A few equivalent application tools between BioJulia and BioPerl:**

| Application         | BioJulia packages                                                                                                                             | BioPerl modules/objects  |
|:--------------------|:----------------------------------------------------------------------------------------------------------------------------------------------|:-------------------------|
| Input/Output        | [FASTX](https://biojulia.dev/FASTX.jl/stable/), [XAM](https://biojulia.dev/XAM.jl/stable/), [BigWig](https://biojulia.dev/BigWig.jl/dev/),... | `SeqIO`                  |
| Sequence alignment  | [BioSequences](https://biojulia.dev/BioSequences.jl/stable/), [BioAlignments](https://biojulia.dev/BioAlignments.jl/stable/)                  | `AlignIO`, `SimpleAlign` |
| Data structures     | [Kmers](https://biojulia.dev/Kmers.jl/stable/), [IntervalTrees](https://biojulia.dev/IntervalTrees.jl/stable/)                                | `Bio::Kmer`, `Bio::Tree` |
| Population Genetics | [PopGen](https://biojulia.dev/PopGen.jl/)                                                                                                     | `PopGen`                 |

**A few package/ecosystem equivalents between Julia and Perl5:**

| Application                | Julia                                                                                                                                                                               | Perl5                                 |
|:---------------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:--------------------------------------|
| Data manipulation/analysis | [DataFrames](https://dataframes.juliadata.org/stable/), [CSV](https://csv.juliadata.org/stable/), [Query](https://www.queryverse.org/Query.jl/stable/)                              | `PDL`, `Text-CSV`                     |
| Plotting/visualization     | [Plots](https://docs.juliaplots.org/stable/), [Gadfly](http://gadflyjl.org/stable/), [Makie](https://docs.makie.org/stable/), [TidierPlots](https://github.com/TidierOrg/TidierPlots.jl)                                                        | `GDGraph`, `Chart-GGPlot`             |
| Statistical analysis       | [Statistics](https://docs.julialang.org/en/v1/stdlib/Statistics/), [HypothesisTests](https://github.com/JuliaStats/HypothesisTests.jl), [GLM](https://github.com/JuliaStats/GLM.jl) | `Statistics-Descriptive`, `PDL-Stats` |
| Numerical mathematics      | [LinearAlgebra](https://docs.julialang.org/en/v1/stdlib/LinearAlgebra/), [Symbolics](https://symbolics.juliasymbolics.org/stable/)                                                  | `PDL-LinearAlgebra`, `Math-Symbolic`  |
| Notebook/report generator  | [IJulia](https://julialang.github.io/IJulia.jl/stable/), [Pluto](https://plutojl.org/)                                                                                              | `Devel-IPerl`                         |
| Web applications           | [Genie](https://genieframework.com/), [Franklin](https://franklinjl.org/)                                                                                                           | `Catalyst`, `Mojolicious`             |

**A few notable differences between Julia and Perl5:**

| Julia                                                                  | Perl5                                                                           |
|:-----------------------------------------------------------------------|:--------------------------------------------------------------------------------|
| High-level, general-purpose compiled language                          | High-level, general-purpose interpreted language                                |
| Dynamically typed with multiple dispatch and optional type annotations | Dynamically typed without type annotations support                              |
| Built-in parallelism via threads, coroutines (Tasks)                   | Parallelism via threads, external modules (`Coro`, `Parallel`,...)              |
| Lisp-inspired metaprogramming (S-expressions, homoiconicity,...)       | Macro-less metaprogramming capabilities (eval, symbol table manipulation,...)   |
| Single language implementation (JuliaLang)                             | Family of related languages/implementations (Perl5, Perl6/Raku, ActivePerl,...) |

**To transition from Perl5 to Julia:**
* Read the [Julia manual](https://docs.julialang.org/) for an in-depth look at
  its internals and features
* See [Running External
  Programs](https://docs.julialang.org/en/v1/manual/running-external-programs/)
  in the manual for running Perl scripts or other programs from Julia

