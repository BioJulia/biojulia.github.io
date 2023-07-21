using Documenter

makedocs(
    sitename = "Overview of BioJulia",
    authors = "Michael Persico",
    modules = Module[],
    clean = true,
    doctest = false,
    draft = false,
    strict = true,
    # TODO expand (https://github.com/SciML/SciMLDocs/blob/0fa5c9c43cf768588124861e76c7854e671ad9d7/docs/make.jl#L29C1-L29C63)
    format = Documenter.HTML(assets=["assets/favicon.ico"]),
    pages = [
        "BioJulia: Fast, open, easy, software for biology" => "index.md",
        "Getting Started" => [
            "getting_started/getting_started.md",
            "New User Tutorials" => [
                "getting_started/installation.md",
            ],
            "Comparison With Other Packages/Ecosystems" => [
                "comparisons/comparisons.md",
            ],
        ],
        # Showcase of Cool Examples
        "What is BioJulia" => ["overview.md",
        ]
    ]
)

deploydocs(
    repo = "https://github.com/M-PERSIC/BioJuliaDocs.git"
)
