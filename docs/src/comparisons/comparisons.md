## BioPython (Python3)

- BioPython represents an ecosystem of related biology tools written in the Python3 programming language
- Unlike in BioJulia, BioPython tools are installed together as modules into a single `biopython` package 
- Is more mature (begun over two decades ago with major releases covering the Python2/3 transition)
- Capabilities cover a number of molecular biology applications including sequence alignment, population genetics, and machine learning

| Function            | BioJulia Package                                                                                                                              | BioPython object/module    |
| :------------------ | :-------------------------------------------------------------------------------------------------------------------------------------------- | :------------------------- |
| Sequence annotation | [BioSymbols](https://biojulia.dev/BioSymbols.jl/stable/), [BioSequences](https://biojulia.dev/BioSequences.jl/stable/)                        | `Seq`, `SeqRecord`         |
| Input/Output        | [FASTX](https://biojulia.dev/FASTX.jl/stable/), [XAM](https://biojulia.dev/XAM.jl/stable/), [BigWig](https://biojulia.dev/BigWig.jl/dev/),... | `Bio.SeqIO`, `Bio.AlignIO` |
| Sequence alignment  | [BioAlignments](https://biojulia.dev/BioAlignments.jl/stable/)                                                                                | `Bio.Align`                |
| Population genetics | [PopGen](https://biojulia.dev/PopGen.jl/) | `Bio.PopGen` |

**Some notable differences between Julia and Python3:**

| Julia                                                                  | Python3                                                                  |
| :--------------------------------------------------------------------- | :----------------------------------------------------------------------- |
| High-level, general-purpose compiled language                          | High-level, general purpose interpreted language                         |
| Expression-based (statements evaluate to a value)                      | Statement-based (assignment as a statement)                              |
| Dynamically typed with multiple dispatch and optional type annotations | Dynamically typed with optional type annotations                         |
| Built-in parallelism via threads, coroutines (Tasks)                   | Limited (GIL) parallelism via threads, async/await                       |
| Extensive metaprogramming (Lisp-like macros, homoiconicity,...)        | Less extensive metaprogramming (decorators, metaclasses,...)             |
| Included default package manager                                       | No default package manager (poetry, conda, other alternatives available) |
| Arrays are column-major (columns are contiguous in memory)             | (Numpy) arrays are row-major by default (rows are contiguous in memory)  |

**To transition from Python3 to Julia:**
- See [Noteworthy differences from Python](https://docs.julialang.org/en/v1/manual/noteworthy-differences/#Noteworthy-differences-from-Python) in the Julia manual 
- Use [PythonCall.jl](https://github.com/cjdoris/PythonCall.jl.git)/[CondaPkg.jl](CondaPkg.jl) to seamlessly integrate Python3 code into your Julia project

## BioConductor (R)

## BioPerl (Perl)