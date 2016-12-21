This is the official website of BigGIS project hosted through "github pages"

## How to update the website

### Small changes

Small changes can be made directly from github web-interface by editing individual markdown files.
When saved, the website is automatically updated and you can after ~5 seconds see the result at http://biggis-project.eu

### Large changes

The following steps are applicable:
 - if you need to substantially update the website, e.g. by changing the layout,
 - if you want to edit the text and preview the generated website before publishing

Use Jekyll locally and then push to github:
 1. Install `Jekyll` locally (e.g. `$ sudo apt install jekyll`)
 2. clone the git repository
 3. Start Jekyll HTTP server inside the cloned directory: `$ jekyll serve`
    - The HTTP server starts at http://0.0.0.0:4000 by default
 4. Preview your changes instantly in browser
 5. When finished, commit and push the changes to github
 6. After approx. 5 seconds visit http://biggis-project.eu

### Other notes
- Lists of papers, presentations and press releases are generated from JSON files located in `data/*.json`
- Rendering runs on client side with the help of Handlebar templates located in `_includes/*-tpl.html`
- In future, it is thus possible to load JSON from external services.
- We are using javascript here, because the jekyll engine used by github is not powerfull enough
  to transform json data to html.
