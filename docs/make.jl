using Documenter

makedocs(
    sitename = "Overview of BioJulia",
    authors = "Michael Persico",
    modules = Module[],
    clean = true,
    doctest = false,
    draft = false,
    # TODO expand (https://github.com/SciML/SciMLDocs/blob/0fa5c9c43cf768588124861e76c7854e671ad9d7/docs/make.jl#L29C1-L29C63)
    format = Documenter.HTML(assets=["assets/favicon.ico"]),
    pages = [
        "BioJulia: Fast, open, easy software for biology" => "index.md",
        "Getting Started" => [
            "New User Tutorials" => [
                "getting_started/juliainstallation.md",
                "getting_started/toolsinstallation.md",
                "getting_started/biojuliainstallation.md",
                "getting_started/casescenarios.md",
            ],
            "Comparison With Other Packages/Ecosystems" => [
                "comparisons/biopython.md",
                "comparisons/scikitbio.md",
                "comparisons/bioconductor.md",
                "comparisons/biojava.md",
                "comparisons/bioperl.md",
                "comparisons/bioruby.md",
            ],
        ],
        # Showcase of Cool Examples
        "What is BioJulia?" => ["overview.md",
        ]
    ]
)

deploydocs(
    repo = "https://github.com/BioJulia/BioJuliaDocs.git",
    push_preview = true,
)
