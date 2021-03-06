# Coaty JS Documentation Website

This folder contains a Jekyll based website which hosts the Coaty JS framework
documentation on GitHub Pages at
[https://coatyio.github.io/coaty-js/](https://coatyio.github.io/coaty-js/).

## Website Content

Documentation content is hosted in the subfolders

* `man` - contains Coaty JS manuals in markdown format,
* `api` - contains the Coaty JS framework API documentation generated
  automatically whenever a new Coaty JS framework release is created (using `npm
  run cut-release`).

GitHub Pages has been configured to host the static website content from the
`/docs` folder on the master branch. This means that each time, changes to `man`
or `api` folders are pushed on the master branch, GitHub Pages automatically
regenerates the documentation website.

## Previewing the website locally

If you'd like to preview the website locally (for example, in the process of
proposing a change):

* Install Ruby on your local machine (Jekyll is implemented in Ruby).
* Clone down the website's repository (`git clone https://github.com/coatyio/coaty-js.git`).
* cd into the website's directory (`/docs`).
* Run `bundle install` to install dependencies (Jekyll, etc.). Note that if you
  are located behind a company proxy, set the environment variable `HTTP_PROXY` to
  this proxy before invoking the `bundle` commands.
* Run `bundle exec jekyll serve` to start the preview server and point your
  browser to `localhost:4000/coaty-js/`.

## Upgrade gem dependencies

To upgrade a gem dependency to a newer version (e.g. because of a security
alert), add new gem version to `Gemfile` (e.g. `gem "nokogiri", ">= 1.10.8"`)
and run `bundle update` on the dependency (e.g. `bundle update nokogiri`).

To update all gem dependencies, run `bundle update`.

## GitHub Pages Theme

The documentation website uses the [Primer theme](https://github.com/pages-themes/primer),
a Jekyll theme for GitHub Pages.
