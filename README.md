# Welcome to my portfolio !

I am Max, a developer from Calgary, Canada and this is my portfolio.

## MVP

Essential features for this portfolio:

### Landing Section:

   - The project button scrolls past the section heading.

### Project Section

   - * There should be a second picture of the project that slides down into place.

   - * Each project should have a more detailed breakdown. This could be done with a page turn effect on the projects section.

   - * Skill buttons should filter which projects are shown.

   - * Group skill buttons

### About Section

   - The about section needs a reworked summary.

### Footer Section

   - * The section needs some further styling

### Responsiveness

    - Laptop Size: (screen > 1200px)
      CHECK

    - Medium Screen Size: (1200px > screen > 1000px)
      CHECK

    - Smaller Screens and Tablets: (1000px > screen > 800px)
      CHECK

    - Smallest Screens: (800px > screen > 600px)
      CHECK

    - Tablets and large phones: (600px > screen > 440px)
      CHECK

    - Mobile: (440px > screen > 200px)
      CHECK

    - Swatches and tiny things: (200px > screen)

* denotes stretch focus' beyond the mvp needs.

## Resources

As this page was made with vanilla css, html and javascript, I have a collection of elements that are essential to the project here.

Color Palette:

CSS index
  Colors:
  Primary: #eeeeee
  P - Light: #ffffff
  P - Dark: #bcbcbc
  P - Text: #000000

  Secondary: #795548
  S - Light: #a98274
  S - Dark: #4b2c20
  S - Text: #ffffff

  Second Secondary: #18227c
  S - Light: #514aac
  S - Dark: #00004f
  S - Text: #ffffff

  'white': #F5F5F7
  nav silver: #DEE1E6
  nav red: #F16860
  nav orange: #F9BE52
  nav green: #64C35B

Fonts:

  Roboto Fonts:
  font-family: 'Roboto', sans-serif;
  font-family: 'Roboto Mono', monospace;
  font-family: 'Roboto Slab', serif;

Project layout:

```html
<div class="col-5 project">
  <div class="project-nav">
    <div class="project-nav-buttons">
      <span class="project-nav-button red-button"></span>
      <span class="project-nav-button yellow-button"></span>
      <span class="project-nav-button green-button"></span>
    </div>
    <h6 class="project-nav-name">Project Name</h6>
  </div>
  <div class="project-main">
    this should have a picture
  </div>
  <div class="project-buttons">
    <button type="button" name="button">Github</button>
  </div>
</div>
```
