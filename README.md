# Angular assignment on media company
A static web page for a media company(xyz.com).
The media company has some interesting images that are only for private view and some images are allowed for public view.
They wish to  show their private images to the users  who have valid userid/password.

## Features
The goal of the project is to learn angular state management and other basics.

### The website should have 3 pages
- Homepage
- Gallery (visible only for private users)
- About page


### For public users
Header should have a Home link ,about links and a login button on the top right.
Footer should contain the company's copyright information. You can add additional details if required.

### HomePage 
Body can contain any content, you can pick any topic of your personal interest and render it here.
Body content can be of images/text/video, but make sure what you are adding has meaningful details in it.

### About us page
Display some content on what the company does and key members

### Login functionality
- As the login button should be on the header, it should be available both on home page,about us page
- onclick login button display a form with user-id(textbox),password(textbox), sign-in(button) elements
- This form should be displayed in the homepage, you can display it in either modal popup, or you can slide it inside the homepage, or any other ways. it’s up to you.

### For private users
- Everything remains the same except for below changes
- Header should have Home link ,Gallery link, About link and logged-in user-id(show the username of the userid which was used to login).
- Logout functionality: Header should have logout button, onclick return to homepage
- Display images in grid view(any number of rows * 4 columns). Use any images of your choice.
- Optional: You can add texts on top of image,animation effects, show full image on popup


### TO BE REMOVED
- Routing 3 parent components and folders
- Components
    - Header for tabs
    - Homepage
    - Gallery
    - About us
    - Login
    - Footer