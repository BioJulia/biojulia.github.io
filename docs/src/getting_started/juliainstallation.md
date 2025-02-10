# [Installing Julia](@id juliainstallation)

There are a number of methods available to install Julia that each have their
own advantages:

!!! note 
    It is NOT recommended to install Julia from your distribution's package
    manager, as no such installation is officially endorsed by the Julia project
    and thus may be out-of-date and broken/unmaintained!

## juliaup (recommended)

[juliaup](https://github.com/JuliaLang/juliaup.git) is a Julia manager/version
multiplexer tool designed to handle your Julia installation from the
command-line. It is the easiest and most convenient installation option, and is
available on almost all platforms that support Julia.

* If you are running **Linux or Mac**, enter the following command in your
  terminal:
```
curl -fsSL https://install.julialang.org | sh
```  

* If you are running **Windows**, enter the following:
```
winget install julia -s msstore
```

* If you have the **Rust** programming language installed on your machine, you
  can install `juliaup` via the Cargo package manager:

!!! warning 
    This is not a recommended option as this will involve compiling the
    actual `juliaup` executable on your machine

```
cargo install juliaup
``` 

You can use the first and last commands listed to install Julia via `juliaup` in
a container (see [Docker/Podman](#Docker/Podman) below)

## Docker/Podman

An [official Docker image](https://hub.docker.com/_/julia) is available,
allowing you to build containers with Julia already installed. This can be a
preferred method of installation if you wish to test out Julia in a sandboxed,
ephemeral (temporary) instance or are looking to  include Julia in a
containerized application.

You must first download the image via the Docker or Podman command-line tool:

!!! note 
    If you are using Podman, you can replace the keyword `docker` with
    `podman` in any of the following commands!

```
docker pull julia:latest
```

You can specify which version of the image you wish to install via tags, such as
`latest`, `rc`, `1.6`, etc.

To create a container instance, run the following command:

!!! note 
    You may skip the previous step if you have not already downloaded the
    image, Docker/Podman will automatically begin installing it for you here!

```
docker run -it --rm --network host julia:latest
```

The above command creates an interactive container that will be deleted the
moment you exit via the `--rm` option and that will also share the same network
namespace as your machine via the `--network host` option (allow for automatic
port bindings). You may remove either option to disable their respective
behaviours.

The image itself can serve as a base for your custom container built from a
Dockerfile/Containerfile:

```
FROM julia:latest
# ...
```

If you wish to use a different image as the basis of your container, yet still
require Julia, you can use any of the other installation methods listed in this
section in your Dockerfile/Containerfile. A few examples with `juliaup`:

```
# First option: Install juliaup via curl
FROM ubuntu:latest

RUN apt update && \
    apt install -y curl && \
    curl -fsSL https://install.julialang.org | sh -s -- -y # install juliaup non-interactively

RUN juliaup add release

# Second option: install juliaup in a Rust image (not recommended)
FROM rust:latest

RUN cargo install juliaup
```

## Direct download

You can also install Julia as a downloadable executable from the Julia website's
[Download section](https://julialang.org/downloads/). You must make sure to
install the correct Julia build for your machine based on:
* native instruction set (x86_64, i686, ARM, Apple Silicon, PowerPC)
* operating system type (Windows, MacOS, Linux (Glibc), Linux (Musl), FreeBSD)
* bit compute type (32-bit, 64-bit)
* desired level of support (Tier 1 (guaranteed to build and pass all tests)
  through Tier 4)

Make sure to follow the exact installation steps for your machine in order to
ensure the best experience.

## Build from source

For building/testing purposes, you may build Julia from the source code that is
fully available in the [Julia GitHub
repository](https://github.com/JuliaLang/julia.git). Simply enter `git clone
https://github.com/JuliaLang/julia.git` to copy the entire source on your
machine, create a new git branch via `git checkout -b name-of-branch`, add your
modifications, and run `make` to start the Makefile build.

