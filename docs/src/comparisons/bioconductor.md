# [Bioconductor (R)](@id bioconductor)

* [Bioconductor](https://www.bioconductor.org/) represents an ecosystem of
  related genomics tools written in the R programming language
* Tools written in other languages, such as C and Python, are also included with
  R wrappers available 
* Launched over two decades ago, it now hosts over 2000 packages for
  bioinformatics and related fields
* Packages cover a broard range of methods for the analysis and manipulation of
  genomic data

**A few equivalent applications between BioJulia and Bioconductor:**

| Application         | BioJulia packages                                                                                                                                                                                            | Bioconductor packages                   |
|:--------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:----------------------------------------|
| Data structures     | [BioSymbols](https://biojulia.dev/BioSymbols.jl/stable/), [KmerAnalysis](https://github.com/BioJulia/KmerAnalysis.jl), [IntervalTrees](https://biojulia.dev/IntervalTrees.jl/stable/)                        | `Biobase`                               |
| Sequence annotation | [GenomicFeatures](https://biojulia.dev/GenomicFeatures.jl/stable/), [GenomicAnnotations](https://biojulia.dev/GenomicAnnotations.jl/dev/), [FormatSpecimens](https://github.com/BioJulia/FormatSpecimens.jl) | `AnnotationHub`                         |
| Input/Output        | [FASTX](https://biojulia.dev/FASTX.jl/stable/), [XAM](https://biojulia.dev/XAM.jl/stable/), [BigWig](https://biojulia.dev/BigWig.jl/dev/),...                                                                | `BiocIO`, `Biostrings`, `ShortRead`,... |
| Sequence alignment  | [BioSequences](https://biojulia.dev/BioSequences.jl/stable/), [BioAlignments](https://biojulia.dev/BioAlignments.jl/stable/)                                                                                 | `Biostrings`                            |
| Expression analysis | [SingleCellProjections](https://biojulia.dev/SingleCellProjections.jl/dev/)                                                                                                                                  | `DESeq2`                                |

**A few package/ecosystem equivalents between Julia and R:**

| Application                | Julia                                                                                                                                                                                                        | R                                      |
|:---------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:---------------------------------------|
| Data manipulation/analysis | [DataFrames](https://dataframes.juliadata.org/stable/), [CSV](https://csv.juliadata.org/stable/), [Query](https://www.queryverse.org/Query.jl/stable/), [Tidier](https://tidierorg.github.io/Tidier.jl/dev/) | `tibble`, `dplyr`, `tidyverse`         |
| Plotting/visualization     | [Gadfly](http://gadflyjl.org/stable/), [VegaLite](https://www.queryverse.org/VegaLite.jl/stable/), [Makie](https://docs.makie.org/stable/), [TidierPlots](https://github.com/TidierOrg/TidierPlots.jl)       | `ggplot2`, `vegalite`, `plotly`        |
| Statistical analysis       | [Statistics](https://docs.julialang.org/en/v1/stdlib/Statistics/), [HypothesisTests](https://github.com/JuliaStats/HypothesisTests.jl), [GLM](https://github.com/JuliaStats/GLM.jl)                          | `stats`                                |
| Machine learning           | [Flux](https://fluxml.ai/Flux.jl/stable/), [SciML](https://sciml.ai/), [MLJ](https://alan-turing-institute.github.io/MLJ.jl/stable/), [Zygote](https://fluxml.ai/Zygote.jl/stable/)                          | `mlr3`, `caret`, `tidymodels`, `Deriv` |
| Numerical mathematics      | [LinearAlgebra](https://docs.julialang.org/en/v1/stdlib/LinearAlgebra/), [IterativeSolvers](https://iterativesolvers.julialinearalgebra.org/dev/)                                                            | `Matrix`, `pracma`, `deSolve`          |
| Web applications           | [Genie](https://genieframework.com/), [Franklin](https://franklinjl.org/)                                                                                                                                    | `shiny`                                |

**A few notable differences between Julia and R:**

| Julia                                                                  | R                                                                                |
|:-----------------------------------------------------------------------|:---------------------------------------------------------------------------------|
| High-level, general-purpose compiled language                          | High-level, interpreted language for statistical computing                       |
| Dynamically typed with multiple dispatch and optional type annotations | Dynamically typed without type annotations support                               |
| Built-in parallelism via threads, coroutines (Tasks)                   | Parallelism via external libraries (BLAS, `parallel`,...)                        |
| Extensive metaprogramming (Lisp-like macros, generated functions,...)  | Less extensive metaprogramming (function factories, expression manipulation,...) |
| Single implementation available (JuliaLang)                            | Multiple implementations available (pqR, Renjin,...)                             |

**To transition from R to Julia:**
* See [Noteworthy differences from
  R](https://docs.julialang.org/en/v1/manual/noteworthy-differences/#Noteworthy-differences-from-R)
  in the Julia manual for a more in-depth comparison
* Use [RCall.jl](https://github.com/JuliaInterop/RCall.jl.git) to seamlessly
  integrate R code into your Julia project
* Use
  [JuliaCall](https://cran.r-project.org/web/packages/JuliaCall/readme/README.html)
  to seamlessly integrate Julia code into your R project
* Check out the [Tidier.jl
  ecosystem](https://tidierorg.github.io/Tidier.jl/dev/) for packages similar to
  those commonly found in `tidyverse`

