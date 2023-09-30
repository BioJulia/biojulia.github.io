# [Case Scenarios](@id casescenarios)

!!! note 
    These scenarios are based on experiences and case studies from fellow
    members of the BioJulia/Julia community!

## Industry 

!!! tip 
    Visit [JuliaHub](https://juliahub.com/case-studies/) for real-world case
    studies of Julia in multiple areas of industry!

A biotechnology-oriented collaborative research organization has ordered their
IT department to organize the first in-house software development division.
Researchers and other essential personnel are divided into teams that each serve
one client at a time, though they all share the same laboratory and equipment.
The need for an in-house programming division has arisen based on feedback from
these teams facing many similar problems with the current workplace setup:
 
* The researchers may not be digitally literate, thus they require more
  accessible user experiences
* Lessening the number of tools they are required to learn would ideally reduce
  complexity and onboarding time
* Some workflows can be repetitive and could take advantage of some automation
  to reduce overall time

It is thus decided that an employee-facing platform should be created that will
host a suite of simple, web-based software tools. These can include tools usable
by any employee or by only one or several teams depending on their needs. The
new division is given the following objectives:

* Collaborate with the researchers and understand their software requirements 
* Use modern languages/frameworks to avoid technical headaches and allow for
  faster onboarding
* Ensure access to both general and scientific libraries when needed for a
  specific tool

Upon reviewing these objectives, the division begins discussing which tech
stacks they should use. With a mix of veteran and junior talent, as well as a
desire to allow for fast time-to-deployment and performance, it is agreed that a
modern, higher-level programming language would be ideal. One of the
collaborating researchers suggests they look into Julia, which has been the
scripting language of choice amongst some of the teams for automating several
workflows, and the division gives it a go following some research and planning.

The platform and first two tools for the collaborating researcher's team are
prototyped. The stack is built upon the [Genie](https://genieframework.com/) web
framework, which, crucially, enables authorization/authentication support on a
team-by-team basis and HTML/CSS/JS interoperability. The entire platform is
designed as a reactive app that can be deployed anywhere and is almost entirely
written in Julia for both the frontend and backend. Further Genie ecosystem
packages and plugins spur potential ideas like taking advantage of the included
no-code [UI builder](https://learn.genieframework.com/guides/genie-builder) for
producing analytics dashboards built by each team without advanced programming
expertise. 

The first tool conceived allows teams to upload, download, and manage files or
datasets within the company's shared drive from the web. It is designed to
handle data management on its own without the employees needing to remember
specific drive locations or other details, their only responsibility being
categorization (data pulled from which instrument, for which project,
etc.). The tool is able to manage the data by working with the company's S3 and
S3 Glacier storage instances via the
[AWS](https://juliacloud.github.io/AWS.jl/stable/) package. A user-facing
feature is also included that generates an `Artifacts.toml` file, allowing
researchers to use Julia's [Artifact
system](https://pkgdocs.julialang.org/v1/artifacts/) to declaratively point to
select data and download them when required for their local needs. For the more
tech savvy user, an input feature is set up to allow for
[DuckDB](https://duckdb.org/) database queries for large datasets. An [official
Julia package](https://duckdb.org/docs/api/julia.html) is provided for this
DBMS, however, one incredible feature of the language is the ability to bundle
external programs written in other languages and treat them as first-class Julia
packages, known as
[JLLs](https://docs.binarybuilder.org/stable/jll/#JLL-packages). The official
package wraps the `DuckDB_jll` bundle, which the developers can manage as a
separate dependency for more direct interaction with the DBMS. This feature, to
their delight, also means that porting over common, open scientific software for
more specific tools can be as simple as generating their JLLs and managing them
directly via Julia. Seamless interoperability also extends to the ability to
interact with codes from other languages such as Python with
[PythonCall](https://juliapy.github.io/PythonCall.jl/stable/)/[CondaPkg](https://github.com/JuliaPy/CondaPkg.jl)
and R with [RCall](https://juliainterop.github.io/RCall.jl/stable/).

The second tool conceived is designed specifically for the collaborating
researcher who needs to determine total cell count following each cell passage.
The user uploads a photo of a stained cell culture sample, along with inputs
such as total medium volume and dilution factor. The developers make use of the
[ImageSegmentation](https://juliaimages.org/stable/pkgs/segmentation/#ImageSegmentation.jl)
package for differentiating live and dead cells through the use of the watershed
algorithm. A side-by-side view is generated with the original and segmented
image, as well as the total number of markers indicating the amount of live
cells, being differentiable due to their staining. Although only a prototype,
the developers believe it would be more than possible, thanks to the number of
large Julia packages already available, to employ basic machine learning to
simplify the process and increase accuracy. Aside from other imaging packages
like [ImageAxes](https://juliaimages.org/stable/pkgs/axes/#ImageAxes.jl), OpenCV
has already been ported over [as a
JLL](https://juliahub.com/ui/Packages/General/OpenCV_jll) for direct
development, and a host of packages are available within the
[SciML](https://sciml.ai/) ecosystem for building the machine learning model.    

The trial period with the collaborating researcher's team proves to be a
success, and the company decides to fully commit to this platform, almost fully
written in Julia, with additional resources and manpower. Novel ideas are
excitedly tossed about internally over which tools can further improve
workflows, such as replacing their electronic lab notebook systems with
[Pluto](https://plutojl.org/) and embedding a quick statistics calculator for
linear regression modelling with packages including
[GLM](https://juliastats.org/GLM.jl/stable/) and [Makie](https://makie.org/). It
is even discussed how Julia may allow the company to eventually commercialize
these tools for other contract research organizations that face the same
challenges.
 
## Research

!!! tip 
    Visit [The Journal of Open Source Software](https://joss.theoj.org/) and
    [JuliaCon Proceedings](https://proceedings.juliacon.org/) to explore several
    research packages written in Julia!

A freshly minted researcher begins the morning with a new directive from the
principal investigator. Their lab specializes in translational cancer
immunotherapy, and as of late have been exploring a potential avenue for T-cell
activation in patients with with a rare type of lymphoma. It is hoped that
strengthening the expression of specific peptides involved in cellular adaptive
immune response can lead to more effective treatment of this specific cancer.
One patient's blood has been sampled and delivered to the lab, with the goal of
extacting and combing through the resulting expression data from various
antigen-presenting cells (APCs) to identify abnormal peptide expression levels.

The researcher understands that the exploratory nature of this project will
require an interactive environment from which results can be rapidly generated
and saved/discarded when need be. Previously, a number of challenges would get
in the way of this workflow:

* Working with interactive languages had proven to be a hassle due to issues
  like competing build systems and environments
* The REPL experience was often lacking due to missing features or lack of
  integrations with other tools like a package manager
* Notebooks, while good for experimenting, can come with their own problems such
  as slow speeds and difficulties with deployment and versioning
* Writing high-performance software would require lower-level languages like C
  or Fortran, which would prove difficult for scientists without a computer
  science background

They remember previously experimenting with Julia before it was considered
stable, and decide to give it a second go. Installation proved to be very simple
with the [juliaup](https://github.com/JuliaLang/juliaup#installation) tool, and
they proceed to read up on the basics from the [Julia
manual](https://docs.julialang.org/en/v1/). The first step, upon loading the
Julia REPL, is to add the
[DrWatson](https://juliadynamics.github.io/DrWatson.jl/stable/) package to
better track the project. With DrWatson and the built-in package manager, the
researcher can geneate reproducible code for simulations, plotting, and data
preparation.

At the same time, the researcher isolates the APCs via a microfluidic
cell-sorting device. The patient's cells are encapsulated into individual
droplets from which single-cell profiling can occur via Droplet-Sequencing
(Drop-seq). The resulting data is stored in [.h5
files](https://www.wikiwand.com/en/Hierarchical_Data_Format) on the lab's shared
drive. The researcher generates an `Artifacts.toml` file that utilizes Julia's
built-in [Artifact system](https://pkgdocs.julialang.org/v1/artifacts/) to point
to these files in a persistent and reproducible manner every time the project
needs to be shared with others on their own machines. The researcher makes quick
work of loading the data into Julia with the
[HDF5](https://juliaio.github.io/HDF5.jl/stable/) package, and applies a number
of steps with [DataFrames](https://dataframes.juliadata.org/stable/),
[TidierData](https://tidierorg.github.io/TidierData.jl/latest/), and
[Chain](https://github.com/jkrumbiegel/Chain.jl) to transform, normalize, and
filter the data. Finally, principle component analysis (PCA) with
[SingleCellProjections](https://biojulia.dev/SingleCellProjections.jl/stable/)
is conducted, visualized with the help of the [Makie](https://makie.org/)
plotting package.

The whole project is saved by DrWatson and shared with the P. I. for further
discussion. PCA analysis leads them to focus on a narrow subset of APCs with
elevated peptide expression levels which will be followed up in subsequent
studies. The researcher prepares a more digestible format of the results as a
[Pluto notebook](https://plutojl.org/) to share with colleagues the more
pertinent observations, and finally a more formal research report with Julia
code included is written with [Weave](https://weavejl.mpastell.com/stable/). The
lab is impressed with what was achieved with Julia, with many remarking how
effortless it seemed to achieve excellent performance with such a high-level
language.

## Education

A new teacher was recently hired to teach a biostatistics course for first-year
students at the University of Concordia. This will be a new offering at the
university, thus they have been given free reign to design their own course
plan. They are most interested in engaging students with a fun, practical
component, including assignments that are trivial to set up, easy for students
to learn, and that draw from real-world examples. They look for inspiration from
similar courses, and finds that many are aiming to develop a strong foundation
in statistical programming for handling data analysis, hypothesis testing, and
other tasks.

A number of these courses teach R or Python3, which have been entrenched in
statistics for a number of years. They also appear to be popular with new
programmers due to being high-level and easy to learn. However, the new teacher
encounters a number of issues that raise concern:

* Performance would become an issue with larger datasets or visual plots, with
  the interpreter taking too long to generate output and thus wasting valuable
  class time
* Both languages have been around for a long time, with a number of quirks and
  design decisions that have not aged well such as implicit mutation or lack of
  type annotations
* Setting up reproducible environments with all the necessary bits (packages,
  data, ...) in either language is challenging, with a number of limitations and
  choices presented including package manager, language implementation, etc.
* R is designed specifically for statistical computing, with concepts not found
  in other, more general languages (S3/S4 class system, factors, ...) which
  could confuse students with previous programming knowledge or those wishing to
  learn more common computer science concepts
* There is a desire to avoid the "two-language problem" wherein parts of either
  language are written in another and thus introduce unneeded complexity 

A fellow professor recommends that they look into Julia, which has already found
success within certain departments. Beyond addressing many of the issues
encountered with R and Python3, it is especially enjoyable how fast the
performance is, how the default package manager allows for reproducibility and
ease of use, and how close to mathematical writing Julia can get whilst
remaining readable. 

The first objective is to create a presentation format with good aesthetics that
can also show off and run code. They discover how to set up interactive
notebooks with [Pluto](https://plutojl.org/) that will be hosted in a [central
repository](https://github.com/) or online via a website or with solutions like
[Binder](https://pluto-on-binder.glitch.me/). This has a number of advantages
compared to PowerPoint or Markdown presentations:  

* Easily run and experiment with code cells within a reproducible environment
* Dependency management automatically handled via the built-in package manager 
* Share the code and lessons with students either as notebooks or as exported
  PDF/HTML pages

To bundle the datasets with the notebooks, they take advantage of Julia's
[Artifact system](https://pkgdocs.julialang.org/v1/artifacts/) for handling and
retrieving data from almost anywhere on the Internet. 

With the course infrastructure set, attention is now put towards creating the
actual course material. They can cover a number of biostatistics topics using
powerful, well-established Julia packages: 

* [Plots](https://docs.juliaplots.org/stable/) or
  [Makie](https://docs.makie.org/stable/) for  data visualization
* [DataFrames](https://dataframes.juliadata.org/stable/),
  [CSV](https://csv.juliadata.org/stable/), and
  [Tidier](https://tidierorg.github.io/Tidier.jl/dev/) for data handling 
* [Statistics] and [StatsBase] for general statistical functionality (scalar
  statistics, estimation, ...)
* [Distributions](https://juliastats.org/Distributions.jl/stable/) for
  probability and sampling
* [HypothesisTests](https://juliastats.org/HypothesisTests.jl/stable/) for
  parametric (ANOVA, chi-squared, ...) and non-parametric testing
* [GLM](https://juliastats.org/GLM.jl/stable/) for generalized linear modelling
* [Flux](https://fluxml.ai/) or
  [MLJ](https://alan-turing-institute.github.io/MLJ.jl/stable/) for basic
  machine learning

The course agenda is now almost complete. However, just before the start of the
semester, a new lesson on Tukey's honest significance test is added.
Unfortunately, there is no package written in Julia for this test, and there is
little time left to develop the code on their own. Luckily, Julia posseses
amazing interoperability with both Python3 and R, and they discover how to both
call and bundle Scipy's `stats.tukey_hsd` function via
[PythonCall](https://cjdoris.github.io/PythonCall.jl/stable/) and
[CondaPkg](https://github.com/cjdoris/CondaPkg.jl).

The teacher goes on to deliver one of the best courses that semester, empowered
by Julia to deliver an engaging, interactive experience that teaches students
both the fundamentals of biostatistics and of quality programming.

