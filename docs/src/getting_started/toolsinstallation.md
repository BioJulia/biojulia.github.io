# [Installing Development Tools](@id toolsinstallation)

## [Julia REPL](@id julia-repl)

A REPL, or read-eval-print loop, represents a language "shell" or program that allows the user to communicate with the
programming language interactively with immediate feedback. This allows for exploring the language more deeply than via
a script, with rapid prototyping being much quicker and easier to perform.

The Julia REPL is included by default in every Julia installation and boasts a number of features to the point that it
alone can almost be considered a proper IDE. It should appear the moment you enter `julia` into your terminal:

```
   _       _ _(_)_     |  Documentation: https://docs.julialang.org
  (_)     | (_) (_)    |
   _ _   _| |_  __ _   |  Type "?" for help, "]?" for Pkg help.
  | | | | | | |/ _` |  |
  | | |_| | | | (_| |  |  Version 1.9.2 (2023-07-05)
 _/ |\__'_|_|_|\__'_|  |  Official https://julialang.org/ release
|__/                   |

julia> 
```

We won't go into every feature that the REPL provides, however here is a quick list that most Julia users should
know to make the most of this shell:

- There are 5 Julia REPL modes that serve separate purposes: 
  1. The Julian (default) mode wherein one can write, load, and test out code
  2. Help mode for printing documentation for functions, keywords, etc.
  3. Pkg mode for working with the included package manager and manipulating dependencies/packages
  4. Shell mode to execute system commands (run a terminal from Julia which itself is running from a terminal!) 
  5. Search modes (forward, reverse) to look through your history of inputs

|        Prompt         |         Key binding         |
|:---------------------:|:---------------------------:|
|       `julia> `       |     None (default mode)     |
|       `help?> `       | `?` or `??` (extended help) |
|    `(@v1.x) pkg> `    |             `]`             |
|       `shell> `       |             `;`             |
| `(reverse-i-search):` |            `^R`             |
| `(forward-i-search):` |            `^S`             |

- If you have a code editor installed on your development machine, you can go back and forth between the Julia session
  and the editor by entering `julia> edit("<name of file>")`. You can jump right back into the Julia session once you're 
  finished!
- You can get a list of matches to a partially written word by entering the TAB key, which also serves to render an
  Unicode symbol in the REPL (full list available in the [Unicode Input](https://docs.julialang.org/en/v1/manual/unicode-input/) section of the Julia manual): 
  ```julia
  julia> pri[TAB]
  primitive type  print           println         printstyled
  julia> \pi[TAB] # renders π
  ```
- You can run a standalone script by entering `include("<name of script>")` in Julian mode. For greater control, the 
  equivalent of Python3's `if __name__ == __main__` condition would be `if abspath(<name of program file>) == @__FILE__`

!!! warning
    One common footgun with the Julia REPL is that there are currently certain code changes that cannot be performed without 
    restarting your session, such as redefining structs (see the example below). You can mitigate this by adding the 
    [Revise](https://timholy.github.io/Revise.jl/stable/) package, although restarting the session is the simplest option.
    ```julia
    julia> struct Point
            x::Int
            y::Int
        end

    julia> struct Point
            x::Int
            z::Int
        end
    ERROR: invalid redefinition of constant Point
    Stacktrace:
    [1] top-level scope
    @ REPL[2]:1
    ```

To learn more, see the [The Julia REPL](https://docs.julialang.org/en/v1/stdlib/REPL/) section in the Julia manual.

## Visual Studio Code extension

The Julia organization officially maintains the [Julia vscode extension](https://www.julia-vscode.org/), which provides
a complete IDE solution for developing in Julia. This boasts a number of advantages compared to a REPL solution:
- Built-in syntax highlighting and code completion
- GUI interaction for managing options and commands
- Advanced profiling/debugging features 
- Additional extensions support 

To install vscode, follow the instructions on how to install the official binary for your development machine from the 
[official website](https://code.visualstudio.com/). Next, click on the Extension icon in the side Activity Bar and search
for "Julia". The official Julia extension should be the first extension available. You can also install Julia within the
Quick Open input panel by pressing `Ctrl + P` and entering `ext install julialang.language-julia`.

<!-- TODO: Move image to assets directory -->
![Julia VSCode Extension](JuliaVSCodeExtension.png)


Install the extension and restart vscode. We also recommend installing some additional extensions that will further improve
the development experience:
- [Even Better TOML](https://marketplace.visualstudio.com/items?itemName=tamasfe.even-better-toml) 
  (`ext install tamasfe.even-better-toml`) for working with the package TOML 
  files (Project.toml, Manifest.toml, Artifacts.toml,...)
- [GitLens](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens) (`ext install eamodio.gitlens`) for 
  enhancing Git workflows

<!-- TODO: some examples of julia-vscode commands-->

You can experiment with Julia extension features in the Quick Open panel by writing Julia and consulting the available
options. To learn more, visit the [Julia in Visual Studio Code](https://code.visualstudio.com/docs/languages/julia) page 
in the official vscode docs. You can also visit the [Julia extension](https://www.julia-vscode.org/) website to learn more about
what features are available.

