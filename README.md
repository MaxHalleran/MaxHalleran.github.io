# Welcome to my portfolio !

This read me is a collection of my thoughts on the project, just somewhere where I can keep track of what I'm working on and my goals with this project.

## MVP

Essential features for this portfolio:

### Landing Section:

  Goal:
  - The landing page needs my name, email, some convenient links and a succinct and captivating message.

   Focus:
   - The message needs to be reworked to better define the fact that I'm looking for a job and not contracts.

### Project Section

  Goal:
  - the project section needs to display 4 of my most recent and high profile projects in an easy to digest way.

   Focus:
   - There should be a section talking about what skills I have and what I have used for projects.
   - * These skills buttons should filter which projects are shown.
   - Each project should on hover display a succinct list of the skills that I used and a link to their github repo.
   - * Each project should have a more detailed breakdown. This could be done with a page turn effect on the projects section.

### About Section

  Goal:
  - the about section should give a quick summary about me and also have an email link.

   Focus:
   - The project section needs a summary.

 - footer

  Goal:
  - The footer should have a collection of links to my social media and links to transverse the page.

   Focus:
   - * The section needs some further styling

### Responsiveness

  Goal:
  - The portfolio site should be responsive across all browsers (within reason) and all screen sizes.

    Focus:
    - Laptop Size: (screen > 1200px)

    - Medium Screen Size: (1200 > screen > 800px)

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
