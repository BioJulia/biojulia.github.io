using Documenter

makedocs(
    sitename = "Overview of BioJulia",
    authors = "Michael Persico",
    modules = Module[],
    clean = true,
    doctest = false,
    # TODO set false when in production
    draft = false,
    strict = true,
    # TODO expand (https://github.com/SciML/SciMLDocs/blob/0fa5c9c43cf768588124861e76c7854e671ad9d7/docs/make.jl#L29C1-L29C63)
    format = Documenter.HTML(assets=["assets/favicon.ico"]),
    pages = [
        "BioJulia: Fast, open, easy, software for biology" => "index.md",
    ]
)

# Documenter can also automatically deploy documentation to gh-pages.
# See "Hosting Documentation" and deploydocs() in the Documenter manual
# for more information.


deploydocs(
    repo = "https://github.com/M-PERSIC/BioJuliaDocs.git"
)
