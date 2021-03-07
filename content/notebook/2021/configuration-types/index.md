---
title: "Configuration Types"
date: 2021-02-22T21:20:50+07:00
draft: true
# description
description: "This is meta description"
---

Hugo is extremely flexible in regards to it's configuration. You can configure a quickly cobbeled together site or create complicated structures for development and live sites in the same repository.

There are two main configuration styles:

- single file configuration in the root directory in config.(toml/yaml/json)
- configuration in multiple files inside of the `config/` folder

Let's talk about the configuration languages first though. As you saw, you can configure Hugo with a toml, yaml or json configuration file.

- Learn more about the ground principles of TOML
- Learn more about the ground principles of YAML
- Learn more about the ground principles of JSON

In this guide (for now) we will use TOML as language. I personally find it easiest to use and you can create complicated structures (arrays, tables) with it without much hassle. You can find the combination of TOML/YAML/JSON in more areas than only the configuration of Hugo, for instance in data files and frontmatter of your content files.

## Structure of a config file

## Move configuration structure into a config directory

A config directory can have multiple subfolders with their dedicated configurations. The following directories are automatically used by Hugo by default:

- config/_default
- config/development
- config/production

The `_default` directory can contain configurations that are used for all existing production environments, `development` is used if you add the flag development or if you run Hugo via `hugo server` with the internal development server. The folder `production` is used when running `hugo` or on production sites. If you work with the flag ### you can add more environments that you can run via `hugo server --environment blafasel`.

Files in the selected configuration directory will override files in the `_default` directory. The selected directory will be merged on top of `_default`.

If you want to "erase" a configuration section that has it's own file just add an empty file in the selected configuration environment.

## Use cases for config directories

On a first look it might sound like using multiple directories for your configuration, so here are some samples where it makes sense:

- Disabling analytics in development environments
- Add output formats that you use only local (for instance for creating and submitting your search indexes)
