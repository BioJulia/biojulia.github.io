# [scikit-bio (Python3)](@id scikitbio)

* [scikit-bio](http://scikit-bio.org/) represents a Python3 library providing
  data structures, algorithms, and additional bioinformatics resources
* Unlike with BioJulia, scikit-bio tools are installed together as modules into
  a single `skbio` package 
* Launched in 2014 based on a BSD-relicensing of PyCogent and QIIME code and is
  currently in beta/maintenance mode

**A few equivalent application tools between BioJulia and scikit-bio:**

| Application        | BioJulia packages                                                                                                                             | scikit-bio modules                  |
|:-------------------|:----------------------------------------------------------------------------------------------------------------------------------------------|:------------------------------------|
| Sequence alignment | [BioSequences](https://biojulia.dev/BioSequences.jl/stable/), [BioAlignments](https://biojulia.dev/BioAlignments.jl/stable/)                  | `skbio.sequence`, `skbio.alignment` |
| Input/Output       | [FASTX](https://biojulia.dev/FASTX.jl/stable/), [XAM](https://biojulia.dev/XAM.jl/stable/), [BigWig](https://biojulia.dev/BigWig.jl/dev/),... | `skbio.io`                          |
| Data structures    | [IntervalTrees](https://biojulia.dev/IntervalTrees.jl/stable/)                                                                                | `skbio.tree`                        |

**A few package/ecosystem equivalents between Julia and Python3:**

| Application                | Julia                                                                                                                                                                                    | Python3                                               |
|:---------------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:------------------------------------------------------|
| Data manipulation/analysis | [DataFrames](https://dataframes.juliadata.org/stable/), [CSV](https://csv.juliadata.org/stable/), [Query](https://www.queryverse.org/Query.jl/stable/)                                   | `pandas`, `Blaze`                                     |
| Plotting/visualization     | [Plots](https://docs.juliaplots.org/stable/), [Gadfly](http://gadflyjl.org/stable/), [Makie](https://docs.makie.org/stable/), [TidierPlots](https://github.com/TidierOrg/TidierPlots.jl) | `matplotlib`, `seaborn`, `bokeh`, `plotnine`, `VisPy` |
| Statistical analysis       | [Statistics](https://docs.julialang.org/en/v1/stdlib/Statistics/), [HypothesisTests](https://github.com/JuliaStats/HypothesisTests.jl), [GLM](https://github.com/JuliaStats/GLM.jl)      | `SciPy`, `statsmodels`                                |
| Machine learning           | [Flux](https://fluxml.ai/Flux.jl/stable/), [SciML](https://sciml.ai/),  [MLJ](https://alan-turing-institute.github.io/MLJ.jl/stable/), [Zygote](https://fluxml.ai/Zygote.jl/stable/)     | `PyTorch`, `TensorFlow`, `scikit-learn`, `JAX`        |
| Numerical mathematics      | [LinearAlgebra](https://docs.julialang.org/en/v1/stdlib/LinearAlgebra/), [Symbolics](https://symbolics.juliasymbolics.org/stable/)                                                       | `NumPy`, `SciPy`, `SymPy`                             |
| Notebook/report generator  | [IJulia](https://julialang.github.io/IJulia.jl/stable/), [Pluto](https://plutojl.org/), [Weave](https://weavejl.mpastell.com/stable/)                                                    | `IPython`, `Jupyter Book`                             |
| Web applications           | [Genie](https://genieframework.com/), [Franklin](https://franklinjl.org/)                                                                                                                | `Django`, `Flask`, `Pelican`, `Dash`                  |

**A few notable differences between Julia and Python3:**

| Julia                                                                  | Python3                                                                      |
|:-----------------------------------------------------------------------|:-----------------------------------------------------------------------------|
| High-level, general-purpose compiled language                          | High-level, general-purpose interpreted language                             |
| Expression-based (statements yield a value)                            | Statement-based (assignment as a statement)                                  |
| Dynamically typed with multiple dispatch and optional type annotations | Dynamically typed with optional type annotations                             |
| Built-in parallelism via threads, coroutines (Tasks)                   | Limited (GIL) built-in parallelism via threads, async/await                  |
| Extensive metaprogramming (Lisp-like macros, homoiconicity,...)        | Less extensive metaprogramming (decorators, metaclasses,...)                 |
| Included default package manager                                       | No default package manager (poetry, conda, and other alternatives available) |
| Single implementation available (JuliaLang)                            | Multiple implementations available (PyPy, Numba,...)                         |
| Arrays are column-major (columns are contiguous in memory)             | (Numpy) arrays are row-major by default (rows are contiguous in memory)      |

**To transition from Python3 to Julia:**
* See [Noteworthy differences from
  Python](https://docs.julialang.org/en/v1/manual/noteworthy-differences/#Noteworthy-differences-from-Python)
  in the Julia manual for a more in-depth comparison
* Use
  [PythonCall.jl](https://github.com/cjdoris/PythonCall.jl.git)/[CondaPkg.jl](https://github.com/JuliaPy/CondaPkg.jl.git)
  to seamlessly integrate Python3 code into your Julia project
* Use [juliacall](https://pypi.org/project/juliacall/) to seamlessly integrate
  Julia code into your Python3 project

