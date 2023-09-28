# [Case Scenarios](@id casescenarios)

!!! note
    These scenarios are based on practical workflows and real stories from fellow members of the BioJulia/Julia community!

## Industry 

!!! tip 
    Visit [JuliaHub](https://juliahub.com/case-studies/) for real-world case studies of Julia in multiple areas of industry!

## App/Web Development

An analytics firm is interested in developing a new framework for creating interactive dashboards, the idea being that each
client can receive a real-time, custom view of their customer or product data.

## Research

!!! tip
    Visit [The Journal of Open Source Software](https://joss.theoj.org/) and [JuliaCon Proceedings](https://proceedings.juliacon.org/) to explore several research packages written in Julia!

A freshly minted researcher begins the morning with a new directive from the principal investigator. Their lab specializes in 
translational cancer immunotherapy, and as of late have been exploring a potential avenue for T-cell activation in patients with
with a rare type of lymphoma. It is hoped that strengthening the expression of specific peptides involved in cellular adaptive immune 
response can lead to more effective treatment of this specific cancer. One patient's blood has been sampled and delivered to the lab, 
with the goal of extacting and combing through the resulting expression data from various antigen-presenting cells (APCs) to identify abnormal 
peptide expression levels.

The researcher understands that the exploratory nature of this project will require an interactive environment from which results can be 
rapidly generated and saved/discarded when need be. Previously, a number of challenges would get in the way of this workflow:

- Working with interactive languages had proven to be a hassle due to issues like competing build systems and environments
- The REPL experience was often lacking due to missing features or lack of integrations with other tools like a package manager
- Notebooks, while good for experimenting, can come with their own problems such as slow speeds and difficulties with deployment and versioning
- Writing high-performing software would require lower-level languages like C or Fortran, which would prove difficult for scientists without a computer science background

They remember previously experimenting with Julia while before it was stable, and decide to give it a second go. Installation proved to be very simple with the 
[juliaup](https://github.com/JuliaLang/juliaup#installation) tool, and they proceed to read up on the basics from the [Julia manual](https://docs.julialang.org/en/v1/).
The first step, upon loading the Julia REPL, is to add the [DrWatson](https://juliadynamics.github.io/DrWatson.jl/stable/) package to better track 
the project. With DrWatson and the built-in package manager, the researcher can geneate reproducible code for simulations, plotting, and 
data preparation.

At the same time, the researcher isolates the APCs via a microfluidic cell-sorting device. The patient's cells are encapsulated into individual 
droplets from which single-cell profiling can occur via Droplet-Sequencing (Drop-seq). The resulting data is stored in [.h5 files](https://www.wikiwand.com/en/Hierarchical_Data_Format) on the lab's shared drive. The researcher generates an `Artifacts.toml` file that utilizes Julia's built-in package manager to point 
to these files in a persistent and reproducible manner every time when the project needs to be shared with others on their own machines. The researcher makes 
quick work of loading the data into Julia with the [HDF5](https://juliaio.github.io/HDF5.jl/stable/) package, and applies a number of steps with 
[DataFrames](https://dataframes.juliadata.org/stable/), [TidierData](https://tidierorg.github.io/TidierData.jl/latest/), and [Chain](https://github.com/jkrumbiegel/Chain.jl) 
to transform, normalize, and filter the data. Finally, principle component analysis (PCA) with [SingleCellProjections](https://biojulia.dev/SingleCellProjections.jl/stable/) 
is conducted, visualized with a plotting package such as [Makie](https://makie.org/) or [PlotlyJS](http://juliaplots.org/PlotlyJS.jl/stable/).

The whole project is saved by DrWatson and shared with the P.I. for further discussion. PCA analysis leads them to focus on a narrow subset of 
APCs with elevated peptide expression levels which will be followed up in subsequent studies. The researcher prepares a more digestible format of the results 
as a [Pluto notebook](https://plutojl.org/) to share with colleagues the more pertinent observations, and finally a more formal research report is written with 
[Weave](https://weavejl.mpastell.com/stable/). The lab is impressed with what was achieved with Julia, with many remarking how effortless it seemed to achieve 
excellent performance with such a high-level language.

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
