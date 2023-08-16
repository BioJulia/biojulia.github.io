# [Case Scenarios](@id casescenarios)

!!! note
    These scenarios are based on practical workflows from fellow members of the BioJulia/Julia community!

## Industry 

## App/Web Development

## Research

## Education

A new teacher was recently hired to teach a biostatistics course for first-year students at the University of Concordia. This will be 
a new offering at the university, thus they have been given free reign to design their own course plan. They are most interested in 
engaging students with a fun practical component, including assignments that are trivial to set up, easy for students to learn, 
and that draw from real-world examples. They look for inspiration from similar courses, and finds that many are aiming to
develop a strong foundation in statistical programming for handling data analysis, hypothesis testing, and other tasks.

A number of these courses teach R or Python3, which have been entrenched in statistics for a number of years. They also appear 
to be popular with new programmers due to being high-level and easy to learn. However, the new teacher encounters 
a number of issues that raise concern:

- Performance would become an issue with larger datasets or visual plots, with the interpreter taking too long to generate output
  and thus wasting valuable class time
- Both languages have been around for a long time, with a number of quirks and design decisions that have not aged well such as 
  implicit mutation or lack of type annotations
- Setting up reproducible environments with all the necessary bits (packages, data,...) in either language is challenging, with a
  number of limitations and choices presented such as package manager, language implementation, etc.
- R is designed specifically for statistical computing, with concepts not found in other, more general languages (S3/S4 class system, 
  factors,...) which could confuse students with previous programming knowledge or those wishing to learn more common computer science
  concepts
- There is a desire to avoid the "two-language problem" wherein parts of either language are written in another and thus introduce unneeded 
  complexity 

A fellow professor recommends that they look into Julia, which has found success within the department. Beyond addressing many 
of the issues encountered with R and Python3, it is especially enjoyable how fast the performance is, how the default package manager 
allows for reproducibility and ease of use, and how close to mathematical writing Julia can get whilst remaining readable. 

The first objective is to create a presentation format with good aesthetics that can also show off and run code. They discover how
to set up interactive notebooks with [Pluto](https://plutojl.org/) that will be hosted in a [central repository](https://github.com/) 
or online via a website or with solutions like [Binder](https://mybinder.org/). This has a number of advantages compared to PowerPoint or 
Markdown presentations:  

- Easily run and experiment with code cells within a reproducible environment
- Dependency management automatically handled via the built-in package manager 
- Share the code and lessons with students either as notebooks or as exported PDF/HTML pages

To bundle the datasets with the notebooks, they take advantage of Julia's [Artifact system](https://pkgdocs.julialang.org/v1/artifacts/) for
handling and retrieving data from almost anywhere on the Internet. 

With the course infrastructure set, attention is now put towards creating the actual course material. They can cover a number of biostatistics 
topics using powerful, well-established Julia packages: 

- [Plots](https://docs.juliaplots.org/stable/) or [Makie](https://docs.makie.org/stable/) for  data visualization
- [DataFrames](https://dataframes.juliadata.org/stable/), [CSV](https://csv.juliadata.org/stable/), and [Tidier](https://tidierorg.github.io/Tidier.jl/dev/) 
  for data handling 
- [Statistics] and [StatsBase] for general statistical functionality (scalar statistics, estimation,...)
- [Distributions](https://juliastats.org/Distributions.jl/stable/) for probability and sampling
- [HypothesisTests](https://juliastats.org/HypothesisTests.jl/stable/) for parametric (ANOVA, chi-squared,...) and non-parametric testing
- [GLM](https://juliastats.org/GLM.jl/stable/) for generalized linear modelling
- [Flux](https://fluxml.ai/) or [MLJ](https://alan-turing-institute.github.io/MLJ.jl/stable/) for basic machine learning

The course agenda is now almost complete. However, just before the start of the semester, a new lesson on Tukey's honest significance test is
added. Unfortunately, there is no package written in Julia for this test, and there is little time left to develop the code on their own. Luckily, 
Julia posseses amazing interoperability with both Python3 and R, and they discover how to both call and bundle Scipy's `stats.tukey_hsd` function via 
[PythonCall](https://cjdoris.github.io/PythonCall.jl/stable/) and [CondaPkg](https://github.com/cjdoris/CondaPkg.jl). Not only will the Python3 code 
seamlessly integrate into the Julia notebook, but it will also handle conda packaging automatically!

The teacher goes on to deliver one of the best courses that semester, empowered by Julia to deliver an engaging, interactive experience that teaches 
students both the fundamentals of biostatistics and of quality programming.
