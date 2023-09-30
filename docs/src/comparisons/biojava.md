# [BioJava (Java)](@id biojava)

* [BioJava](https://biojava.org/index.html) is a biological data processing
  library written in the Java programming language
* BioJava tooling is distributed via multiple classes within the same
  `org.biojava` package
* Launched in 2002 with six major releases covering more than 11 Java releases

**A few equivalent applications between BioJulia and BioJava:**

| Application               | BioJulia packages                                                                                                                             | BioJava modules                                 |
|:--------------------------|:----------------------------------------------------------------------------------------------------------------------------------------------|:------------------------------------------------|
| Input/Output              | [FASTX](https://biojulia.dev/FASTX.jl/stable/), [XAM](https://biojulia.dev/XAM.jl/stable/), [BigWig](https://biojulia.dev/BigWig.jl/dev/),... | `nbio.genome.io.fastq`, `nbio.ontology.obo`,... |
| Sequence alignment        | [BioSequences](https://biojulia.dev/BioSequences.jl/stable/), [BioAlignments](https://biojulia.dev/BioAlignments.jl/stable/)                  | `nbio.sequence`, `nbio.alignment`               |
| Macromolecular structures | [BioStructures](https://biojulia.dev/BioStructures.jl/stable/)                                                                                | `nbio.structure`                                |

**A few package/ecosystem equivalents between Julia and Java:**

| Application                | Julia                                                                                                                                                  | Java                                    |
|:---------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------|:----------------------------------------|
| Data manipulation/analysis | [DataFrames](https://dataframes.juliadata.org/stable/), [CSV](https://csv.juliadata.org/stable/), [Query](https://www.queryverse.org/Query.jl/stable/) | `Tablesaw`                              |
| Plotting/visualization     | [Plots](https://docs.juliaplots.org/stable/), [Makie](https://docs.makie.org/stable/), [TidierPlots](https://github.com/TidierOrg/TidierPlots.jl)      | `JFreeChart`, `Jzy3d`                   |
| Statistical analysis       | [Statistics](https://docs.julialang.org/en/v1/stdlib/Statistics/), [HypothesisTests](https://github.com/JuliaStats/HypothesisTests.jl)                 | `Statistics (Apache Commons)`, `NM Dev` |
| Machine learning           | [Flux](https://fluxml.ai/Flux.jl/stable/), [SciML](https://sciml.ai/),  [MLJ](https://alan-turing-institute.github.io/MLJ.jl/stable/)                  | `Java-ML`, `Neuroph`                    |
| Numerical mathematics      | [LinearAlgebra](https://docs.julialang.org/en/v1/stdlib/LinearAlgebra/)                                                                                | `NM Dev`                                |
| Notebook/report generator  | [IJulia](https://julialang.github.io/IJulia.jl/stable/), [Pluto](https://plutojl.org/)                                                                 | `IJava`                                 |
| Web applications           | [Genie](https://genieframework.com/), [Franklin](https://franklinjl.org/)                                                                              | `Grails`, `Javalin`                     |

**A few notable differences between Julia and Java:**

| Julia                                                                  | Java                                                                                     |
|:-----------------------------------------------------------------------|:-----------------------------------------------------------------------------------------|
| High-level, general-purpose compiled language                          | High-level, object-oriented, two-step (compiled and interpreted) language                |
| Expression-based (statements yield a value)                            | Statement-based (assignment as a statement)                                              |
| Dynamically typed with multiple dispatch and optional type annotations | Statically typed with required type declarations                                         |
| Built-in parallelism via threads, coroutines (Tasks)                   | Built-in parallelism via threads, streams, fibers (Project Loom)                         |
| Extensive metaprogramming (Lisp-like macros, homoiconicity,...)        | Less extensive metaprogramming (reflection, annotations,...)                             |
| Included default package manager                                       | No default package manager (dependency/build management tools include Maven, Gradle,...) |
| Single implementation available (JuliaLang)                            | Multiple implementations available (OpenJDK, GraalVM,...)                                |

**To transition from Java to Julia:**
* Use [JavaCall.jl](https://juliainterop.github.io/JavaCall.jl/) to seamlessly
  integrate Java code into your Julia project
* See [Running External
  Programs](https://docs.julialang.org/en/v1/manual/running-external-programs/)
  in the Julia manual for running Java scripts or other programs from Julia

