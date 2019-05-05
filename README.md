# User-Interface-Israel
This repository will serve as the landing page and about us section of the application

---

This repository stores the landing page and about page of the bubl social network app. It is built using LESS and some vanilla JavaScript.

# /components/nav-bar.less
The navigation bar is a LESS component found in /components/nav-bar.less. It is a fixed navigation bar that links to the landing page, the about page, the registration page and the login page.

The HTML code for the component is :
```HTML
<div class="nav-bar">
    <div class="container">
      <div class="container-left">
        <a href="index.html" class="logo">bubl</a>
        <a href="about.html" class="about">about us</a>
      </div>
      <div class="container-right">
        <span class="nav-cta cta">Join your bubl!</span>
        <span><i class="far fa-grin-beam login"></i></span>
      </div>
    </div>
  </div>
  ```
  
  This html should be added as the first elements in the body elements of all new pages created.


# about.html
The about page dynamically adds profile cards from an object named teamData in `/js/index.js`. You can add as many or as few team members to this object as necessary, and the page will remain responsive. The page will update with a new card for each member automatically. The profile pictures are grabbed from the `/assets/profile-pics/` folder. Make sure to add a profile picture for each member named after their first name.

- [ ] For each team member update the teamData object in index.js with their first name and their role

- [ ] Add PNG format profile pictures for each team member in `/assets/profile-pics/` folder

- [ ] Name each file with the same name you gave the member in the teamData object, for example `james.png`


### about.html styling
The LESS file `/components/about.less` contains styling for the about page.

# index.html
The landing page is structured with three containers for different sections. The content of these sections can be updated to reflect any changes for the app.

### index.html styling
The styling for the landing page is found in `/components/landing.less`

## LESS Folder
The `/LESS/` folder contains `mixins.less` and `index.less`. 

### mixins.less
This file contains some mixins created for the project. These are helpful styles and parametric mixins that can be used throughout the site. For example, there's a `.width-100()` mixin to make the width of an element 100%. There is also a paramteric mixin for flex properties. 

## index.js
This file contains some event listeners for the page. Specifically, there is an event listener that reveals the about us link when the user hovers over the logo. There's also event listeners to change the background styles of the call-to-action buttons.

As explained in the about.html section above, this file also contains the functionality for dynamically updating the about page with cards for each team member.

## bublTechnicalDesign.md
This file is the document that contains what the original team agreed on implementing and what the app would try to achieve.

## /design-files/
This folder contains wireframe images of the original design for the marketing pages. It also contains color scheme files generated using palletton.com. In the future I may add functionality to allow the user to select different color schemes.

## /CSS/
This contains the compiled CSS created by LESS.

## /assets/
This folder contains the header image used on the landing page, the video used on the landing page and the CC 2.0 bubble SVG icon file used throughout the site for styling. It also contains the `/profile-pics/` folder which is explained above in the about.html section.