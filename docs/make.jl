using Documenter
using DocumenterVitepress

makedocs(
    sitename = "BioJulia",
    authors = "Michael Persico, Kevin Bonham, Danielle Pinto",
    modules = Module[],
    clean = false,
    doctest = false,
    draft = false,
    # TODO expand (https://github.com/SciML/SciMLDocs/blob/0fa5c9c43cf768588124861e76c7854e671ad9d7/docs/make.jl#L29C1-L29C63)
    format = DocumenterVitepress.MarkdownVitepress(
        repo = "https://github.com/BioJulia/biojulia.github.io",
        devbranch = "main",
        devurl = "dev",
        deploy_url = "biojulia.dev",
    ),
    pages = [
        "Getting Started" => [
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
        # Showcase of Cool Examples
        "What is BioJulia?" => [
            "overview.md",
        ]
    ]
)

DocumenterVitepress.deploydocs(
    repo = "github.com/BioJulia/biojulia.github.io.git",
    target = "build",
    devbranch = "main",
    branch = "gh-pages",
    push_preview = true,
)
