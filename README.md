# Welcome to my portfolio !

This read me is a collection of my thoughts on the project, just somewhere where I can keep track of what I'm working on and my goals with this project.

## MVP

Essential features for this portfolio:

### Landing Section:

   - The message needs to be reworked to better define the fact that I'm looking for a job and not contracts.

   - * The project button scrolls past the section heading.

### Project Section

   - Group skill buttons

   - There should be a section talking about what skills I have and what I have used for projects. This section needs to be reworded.

   - Each project should on hover display a succinct list of the skills that I used and a link to their Github repo. These buttons need to be better placed and animated.

   - There should be a Github button that 'heads' the buttons and should be styled somewhat differently.

   - On hover, a second image from the project (which should be darker) should scroll down and replace the previous image.

   - * Each project should have a more detailed breakdown. This could be done with a page turn effect on the projects section.

   - * Skill buttons should filter which projects are shown.

### About Section

   - The about section needs a reworked summary.

### Footer Section

   - * The section needs some further styling

### Responsiveness

    - Laptop Size: (screen > 1200px)

    - Medium Screen Size: (1200px > screen > 800px)

    - Smaller Screens and Tablets: (800px > screen > ?)

    - Mobile and beyond. Will most likely break down needs into 200px sections.

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
</div>
```
