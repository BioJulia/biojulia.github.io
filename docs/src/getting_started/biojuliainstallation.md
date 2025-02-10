# [Installing BioJulia Packages](@id biojuliainstallation)

## Standard installation

As with any Julia package, you can easily install any BioJulia package with the
help of the [official package manager](https://pkgdocs.julialang.org/v1/)
included by default with every Julia installation. All you need to know is the
name of the package of interest!

There are two standard methods to install a package:

!!! note 
    The Julia package manager, similarly to conda and others, organizes
    dependencies according to the "environment" they are in, meaning in which
    directory the packages are installed to. The default Julia session adds
    packages to a "global" environment, usually the .julia/environments/v1.x
    directory. When you are developing a package, you must activate its
    project-specific environment by calling `activate MyProjectName` (see
    [Package development](@ref pkg-devel) below) so that you can isolate your
    dependencies from the global environment and manage them independently. See
    [Working with Environment](https://pkgdocs.julialang.org/v1/environments/)
    for more details.

* **The package manager (Pkg) module**

```julia
julia> using Pkg
# Install the package
julia> Pkg.add("<name of package here>")
# Use the installed package
julia> using <name of package here>
```

!!! note 
    One excellent trick is that any Julia code with the `julia>` prompt
    included at the beginning of the line can be copy/pasted as is into the
    REPL! See the [Julia REPL](@ref julia-repl) section for more.

* **Pkg mode**

```julia
# Enter ]
]
# @v1.x will show your current Julia version
(@v1.9) pkg> add <name of package here>
# Exit Pkg REPL mode via the Backspace key
julia> using <name of package here>
```

!!! note J
    Just like with the previous method, you can copy/paste code with the
    `(@v1.x) pkg>` prompt included and Julia will work correctly! You can even
    skip having to enter Pkg mode by just entering directly `(@v1.x) pkg>
    add...`. You do not need to manually change the version number indicated in
    the prompt if you have a different Julia version than that which is listed,
    it is all handled for you.

## [Package development](@id pkg-devel)

If you are interested in developing a new or existing BioJulia/Julia package,
the package manager can also help you by first cloning the package repository to
your development machine. Pkg will then load the required dependencies in a new
dependency environment based on the package's `Project.toml` file. Thereafter,
both the direct and indirect dependencies can be locked using a generated
`Manifest.toml` if needed and a pull request can be submitted. 

There are two standard methods to set up Julia for developing a package:

* **The package manager (Pkg) module**   
   
```julia
julia> using Pkg
julia> Pkg.develop("<name of package here>")
julia> using <name of package here>
```

* **Pkg mode**

```julia
# Enter ]
]
# If the package is within a remote Git repository, write instead
# `dev https://github.com/<name of account>/<package name>`
(@v1.9) pkg> dev <name of package here>
# Make sure you are within the same directory as the package folder
(@v1.9) pkg> activate /path/to/package/folder/PackageName
# The previous command activates the environment as directed by the
# package's Project.toml file. This next command will then download
# all of the dependencies specified in that file into your Julia environment.
(@v1.9) pkg> instantiate
# Exit REPL via the Backspace key
julia> using <name of package here>
```

!!! note 
    You can skip straight to `(@v1.9) pkg> activate ...` if you have
    already installed the package locally, simply make sure to point Pkg to the
    right path as shown above.

You can now change your source code and load them into the Julia session with
`using <name of package here>`. To test your code, run `(@v1.9) pkg> test` to
run the package's test suite to ensure that everything works correctly. When you
are done developing the package, enter `(@v1.9) pkg> free` to stop tracking the
package. 

