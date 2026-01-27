
# Installing Development Tools {#toolsinstallation}

## Julia REPL {#julia-repl}

A REPL, or read-eval-print loop, represents a language &quot;shell&quot; or program that allows the user to communicate with the programming language interactively. This allows for rapid prototyping and exploring the language more deeply with immediate feedback.

The Julia REPL is included by default in every Julia installation and boasts a number of features found in many integrated development environments (IDEs). It should appear the moment you enter `julia` into your terminal:

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


Here is a quick rundown of features most Julia users should know to make the most of the REPL:
- There are 5 Julia REPL modes that serve separate purposes:
  1. The Julian (default) mode wherein one can write, load, and test out code
    
  2. Help mode for printing documentation for functions, keywords, etc.
    
  3. Pkg mode for working with the included package manager and manipulating dependencies/packages
    
  4. Shell mode to execute system commands (run a terminal from Julia which itself is running from a terminal!)
    
  5. Search modes (forward, reverse) to look through your history of inputs
    
  

|        Prompt         |         Key binding         |
|:---------------------:|:---------------------------:|
|       `julia>`        |     None (default mode)     |
|       `help?>`        | `?` or `??` (extended help) |
|    `(@v1.x) pkg>`     |             `]`             |
|       `shell>`        |             `;`             |
| `(reverse-i-search):` |            `^R`             |
| `(forward-i-search):` |            `^S`             |

- If you have a code editor installed on your machine, you can go back and forth between the Julia session and the editor by entering `julia> edit("<name of file>")`. You can jump right back into the Julia session once you&#39;re finished.
  
- You can get a list of matches to a partially written word by entering the TAB key, which also serves to render a Unicode character in the REPL (full list available in the [Unicode Input](https://docs.julialang.org/en/v1/manual/unicode-input/) section of the Julia manual):
  
  ```julia
  julia> pri[TAB]
  primitive type  print           println         printstyled
  julia> \pi[TAB] # renders π
  ```
  
  
- You can run a standalone script by entering `include("<name of script>")` in Julian mode. For greater control, the equivalent of Python3&#39;s `if __name__ == __main__` condition would be `if abspath(<name of program file>) == @__FILE__`
  

::: warning Warning

One common gotcha with the Julia REPL is that certain code changes cannot be performed without restarting your session, such as redefining structs (see the example below). You can mitigate this by adding the [Revise](https://timholy.github.io/Revise.jl/stable/) package, although restarting the session is the simplest option. 

:::

```julia      julia&gt; struct Point             x::Int             y::Int             end

```
julia> struct Point
        x::Int
        z::Int
      end
ERROR: invalid redefinition of constant Point
Stacktrace:
[1] top-level scope
@ REPL[2]:1
```


```

Consult the [The Julia REPL](https://docs.julialang.org/en/v1/stdlib/REPL/) section in the Julia manual for more details.

## Visual Studio Code extension {#Visual-Studio-Code-extension}

The Julia organization officially supports the [julia-vscode extension](https://www.julia-vscode.org/) which, together with VS Code, provides a complete solution for developing in Julia similar to an IDE. This boasts a number of advantages compared to a pure REPL-driven solution:
- Built-in syntax highlighting and code completion
  
- GUI interaction for managing options and commands
  
- Advanced profiling/debugging features
  
- Additional extensions support
  

Follow the installation instructions from the [official website](https://code.visualstudio.com/). After opening VS Code, click on the Extension icon in the side Activity Bar and search for &quot;Julia&quot;. The official Julia extension should be the first extension available. You can also install Julia within the Quick Open input panel by pressing `Ctrl + P` and entering `ext install julialang.language-julia`.


![](../assets/JuliaVSCodeExtension.png)


Install the extension and restart VS Code. We also recommend installing some additional extensions that will further improve the development experience:
- [Even Better TOML](https://marketplace.visualstudio.com/items?itemName=tamasfe.even-better-toml) (`ext install tamasfe.even-better-toml`) for working with the package TOML files (Project.toml, Manifest.toml, Artifacts.toml,...)
  
- [GitLens](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens) (`ext install eamodio.gitlens`) for enhancing Git workflows
  

You can experiment with Julia extension features in the Quick Open panel by writing Julia and consulting the available options. To learn more, visit the [Julia in Visual Studio Code](https://code.visualstudio.com/docs/languages/julia) page or the [Julia extension&#39;s](https://www.julia-vscode.org/) official website.

## Alternative Editor/IDE extensions {#Alternative-Editor/IDE-extensions}

Although [julia-vscode](https://www.julia-vscode.org/) is the only officially supported extension, community extensions are available for a range of code editors/IDEs:
- [julia-emacs](https://github.com/JuliaEditorSupport/julia-emacs.git) that integrates a new major mode for developing in Julia
  
- [julia-vim](https://github.com/JuliaEditorSupport/julia-vim.git) to enable Julia support for Vim/Neovim
  
- [julia-sublime](https://github.com/JuliaEditorSupport/Julia-sublime.git) to enable Julia support for Sublime
  

Certain editors/IDEs, such as [GodBolt](https://godbolt.org/) and [Replit](https://replit.com/lm/julia), already support Julia without extensions. Finally, many editors, like [micro](https://micro-editor.github.io/), natively include support for basic features such as code highlighting or simple autocomplete.

## Notebooks {#Notebooks}

A reactive notebook is an interactive environment that combines elements of a code editor and a REPL into one solution. One writes code in executable blocks of &quot;cells&quot; that can be mixed with text and other assets to create a reproducible document that is shareable and easily manipulable. Notebooks are especially useful for scientific exploration since code can be rapidly prototyped in an isolated environment that can be both visualized and documented in the same file.

There are two standard methods for working with Julia in notebooks:

### IJulia (Julia kernel for Jupyter) {#IJulia-Julia-kernel-for-Jupyter}

The Julia organization officially supports the [IJulia](https://julialang.github.io/IJulia.jl/stable/) kernel, or backend, for Jupyter notebooks, which is the most popular web-based notebook solution.

To install IJulia/Jupyter and run the notebook server:

::: tip Note

Instead of loading Pkg, one can simply activate pkg mode with the `]` key and enter `(@v1.9) pkg> add <package name here>`

:::
1. Install Julia via any method mentioned in the [Installing Julia](/getting_started/juliainstallation#juliainstallation) section
  
2. Open the Julia REPL by entering `julia` into your terminal
  
3. Add the IJulia package via the built-in package manager: `julia> using Pkg;Pkg.add("IJulia")`
  
4. Load IJulia and launch the notebook server: `julia> using IJulia; notebook()` (run `notebook(detached=true)` if you wish that the notebook, and `notebook(dir="/some/path")` if you wish to open a notebook in a ) server sruns in the background even if the Julia session is closed)
  
5. Enter `y` to install Jupyter via Conda if you have not done so already on your machine
  

The notebook dashboard should open within your web browser. If you already have jupyter installed ([Installing Jupyter](https://jupyter.org/install)), you can enter `n` when prompted by the Julia REPL and instead run `jupyter notebook` from the terminal. Visit the [Running IJulia](https://julialang.github.io/IJulia.jl/stable/manual/running/#Running-IJulia) section in the official IJulia docs for more information.

### Pluto notebooks {#Pluto-notebooks}

[Pluto.jl](https://plutojl.org/) is an alternative notebook solution built with Julia in mind. It integrates well with the language and boasts a number of features that are not available or are difficult to achieve with Jupyter:
- Works with Julia&#39;s built-in package manager for native reproducibility
  
- Live docs feature (essentially Julia&#39;s help mode available within the notebook)
  
- Works with normal Julia (.jl) files as opposed to .ipynb files
  
- Extendable via packages like [PlutoUI](https://featured.plutojl.org/basic/plutoui.jl) and [PlutoPDF](https://github.com/JuliaPluto/PlutoPDF.jl.git)
  

To install and run the Pluto server:
1. Install Julia via any method mentioned in the [Installing Julia](/getting_started/juliainstallation#juliainstallation) section
  
2. Open the Julia REPL by entering `julia` into your terminal
  
3. Add the Pluto package via the built-in package manager: `julia> using Pkg;Pkg.add("Pluto")`
  
4. Load Pluto and launch the notebook server: `julia> using Pluto; Pluto.run()`
  
5. Copy/paste the given URL (http://localhost:...) into your web browser
  

A number of featured notebooks are [available online](https://featured.plutojl.org/) that include basic tutorials and powerful demonstrations achieved with Pluto.
