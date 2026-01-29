
# Installing Julia {#juliainstallation}

There are a number of official methods available to install Julia, each with their own purposes and advantages:

## juliaup (recommended) {#juliaup-recommended}

[juliaup](https://github.com/JuliaLang/juliaup.git) is a Julia manager/version multiplexer tool designed to handle your Julia installation from the command-line. It is the easiest and most convenient installation option, and is available on almost all platforms that support Julia.
- If you are running **Linux or Mac**, enter the following command in your terminal:
  

```
curl -fsSL https://install.julialang.org | sh
```

- If you are running **Windows**, enter the following:
  

```
winget install julia -s msstore
```

- If you have the **Rust** programming language installed on your machine, you can generate the `juliaup` executable via the Cargo package manager:
  

::: warning Warning

This is not recommended for the most users, and should be avoided unless you cannot download the official juliaup executable.

:::

```
cargo install juliaup
```


## Docker/Podman {#Docker/Podman}

An [official Docker image](https://hub.docker.com/_/julia) is available, allowing you to build containers with Julia already installed. This can be a preferred method of installation if you wish to run Ju lia in a sandboxed, ephemeral (temporary) instance or are looking to include Julia in a containerized application.

You must first download the image via the Docker or Podman command-line tool:

::: tip Note

If you are using Podman, you can replace the keyword `docker` with `podman` in any of the following commands!

:::

```
docker pull julia:latest
```


You can specify which version of the image you wish to install via tags, such as `latest`, `rc`, `1.6`, etc.

To create a container instance, run the following command:

::: tip Note

If you had skipped the previous test, then Docker/Podman will automatically begin installing the container image for you here!

:::

```
docker run -it --rm --network host julia:latest
```


The above command creates an interactive container that will be deleted the moment you exit via the `--rm` option and that will share your machine&#39;s network namespace via the `--network host` option (allow for automatic port bindings). You may remove either option to disable these behaviours.

The image itself can serve as a base for your custom container built from a Dockerfile/Containerfile:

```
FROM julia:latest
# ...
```


If you wish to use a different image as the basis of your container, yet still require Julia, you can use any of the other installation methods listed in this section in your Dockerfile/Containerfile. A few examples with `juliaup`:

```
# First option: Install juliaup via curl
FROM ubuntu:latest

RUN apt update && \
    apt install -y curl && \
    curl -fsSL https://install.julialang.org | sh -s -- -y # install juliaup non-interactively

RUN juliaup add release
```


## Manual download {#Manual-download}

You can also install the Julia executable directly from the Julia website&#39;s [Manual Download section](https://julialang.org/downloads/#manual_download). You must make sure to install the correct Julia executable based on your machine&#39;s:
- native instruction set (x86_64, i686, ARM, Apple Silicon, PowerPC)
  
- operating system type (Windows, MacOS, Linux (Glibc), Linux (Musl), FreeBSD)
  
- bit compute type (32-bit, 64-bit)
  

Make sure to follow the [platform specific instructions](https://julialang.org/downloads/platform/) for your machine in order to ensure the best experience.

## Build from source {#Build-from-source}

You may build Julia from the source code that is openly available in the [Julia GitHub repository](https://github.com/JuliaLang/julia.git). Please consult the [Building Julia (Detailed) section](https://docs.julialang.org/en/v1/devdocs/build/build/) of the Julia manual for more details.
