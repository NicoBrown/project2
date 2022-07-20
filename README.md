<div align="center">
<h1>Milestone Project 2</h1>

![Screenshot 2022-07-18 072220](https://user-images.githubusercontent.com/69271605/179501523-51520bbd-1552-4ca0-8d95-946c52c34361.jpg)

<p align="center">A Periodic Table Memory Game</p>

[View the live project here](https://nicobrown.github.io/project2/)

</div>

    
    


## Introduction
This project was developed as a part of [code institutes](https://codeinstitute.net/) Full Stack Development Diploma's - Interactive Frontend Development Milestone Project
The project is a simple memory based card game where data is collected from an API, displayed and altered using javascript based on user actions.

The game has three modes: easy, medium and hard corresponding to different numbers of cards in the grid. When all cards have been paired up the user is prompted to play again and select a new difficulty.

## Design

### Colours
The background colour were derived from complementry colours found on https://coolors.co/
### Layout
The sites layout was developed using bootstraps as a framewrok, the game section is a grid system and responsive based on viewing device.
Javascript was used to amend the number of columns in the grid based on the difficulty to give a consistent experience.

The basic semantic layout of the page is:
        
        -- header -- 

            -- game div -- 
                -- welcome div --
                -- grid div -- 

        -- Footer --
## Features

The page loads wih a welcome div that lets the user select a difficulty:
![image](https://user-images.githubusercontent.com/69271605/179899428-1368e7c6-b528-42b7-845d-2b001797eda4.png)

The main game has cards which can be clicked to turn them over and play the game:
![image](https://user-images.githubusercontent.com/69271605/179899578-3792e949-16b9-497c-886d-e653e946361d.png)

there is a prompt at the bottom of the game that lets you select a new difficulty:
![image](https://user-images.githubusercontent.com/69271605/179899669-5e2315eb-859b-4d61-81e1-3318e73c636a.png)


## User Experience (UX)
### User stories

- As a user I want the game play to be intuitive so I don’t have to spend much time learning how to play.
- As a user I want a fun and interesting game so that I can enjoy playing it when I have some free time.
- As a user I want to know if I win a game.
- As a user I want to be able to reset a game so that I can start again.
- As a user I want to have a visually appealing interface so that I will enjoy playing the game for longer.
- As a user I want a game I can play on my mobile so that I can play while on the go.

### Site Owner Stories
- As a site owner I want to present my work in a professional, creative and visually appealing way.
- As a site owner I want to provide a good user experience for my users, so that they want to come back.
- As a site owner I want to present a game users can start playing quickly and intuitively so that they don’t have to make a big time commitment in learning how to play.
- As a site owner I want to provide feedback to my users on how they are doing.

## User Interface
### wireframe

I wanted to keep the interface as minimal and simple as possible, so I went with a single column page with a header and game area:
![image](https://user-images.githubusercontent.com/69271605/179901733-7f998d44-4367-4b6e-bda0-40d515fc1723.png)

I made sure the site was responsive and fit different device screen sizes with CSS and didnt overflow.
![image](https://user-images.githubusercontent.com/69271605/180041329-b32f1002-91be-4534-b569-e43b839de15b.png)


## Technologies Used
### Languages Used

-   [HTML5](https://en.wikipedia.org/wiki/HTML5)
-   [CSS3](https://en.wikipedia.org/wiki/Cascading_Style_Sheets)
-   [Javacript](https://en.wikipedia.org/wiki/JavaScript)

### Frameworks, Libraries & Programs Used

1. [Git](https://git-scm.com/)
    - Git was used for version control by utilizing the Gitpod terminal to commit to Git and Push to GitHub.
1. [GitHub:](https://github.com/)
    - GitHub is used to store the projects code after being pushed from Git.
1. [bootstrap](https://getbootstrap.com/) 
    - Bootstrap was used to create the grid elements and provide responsiveness and OOTB CSS classes.

## Testing
### HTML

The W3C html checker returned one error related to a class attribute with no value:
![Screenshot 2022-07-18 054051](https://user-images.githubusercontent.com/69271605/179901874-94f98896-8b51-48cb-84c6-c9c020d00628.jpg)

### CSS
The W3C Markup Validator and W3C CSS Validator Services were used to validate the project to ensure there were no syntax errors in the project.

-   [W3C CSS Validator](https://jigsaw.w3.org/css-validator/#validate_by_input)

This returned no errors.

### Javascript

The porjects javascript was validated by JShint as it was being developed. The JShint options were set at the top of each javascript file, the linter was configured to ignore messages related to using ES6 language features such as `=>` functions and `let` keywords. the options were set in comments:
```
/* jshint -W119, -W104 */
```  
I linted the javascript files online at [JSHint.com](www.jshint.com) the results gave errors relating to wrapping parameters in arrow functions and unexpected trailing psaces which were resolved but there were a few errors which couldnt be resolved:
```javascript
1. [JSLint was unable to finish] Unexpected 'let'.
        for (let i = 0; i < difficulty/ 2; i++) {
11: 432. Use 'function (...)', not '(...) =>' when arrow functions become too complex.
    getPeriodicElements(getData((element) => {
16: 93. Unexpected 'for'.
        for (let i = 0; i < difficulty/ 2; i++) {
```
On investigation, items 1 & 3 are related; the developer reccomens that all variables are declared at the top of the file and that `for` loops can be replaced by `foreach` creating these issues. Item 2 is a callback function to get the API data, this could be simplified but my understanding of them is limited, I did attempt to use promises with the `await` function. 

I also used postman to test the enpoints for the API and see what format the response was before starting.
### Accessibility testing
Lightinhouse reported a 100 accessibility score, I added aria attributes to make the game more accessible for screen-readers.
### Further Testing
## Known Bugs
In the `checkcard()` function the length of an if statement that checks there is already an object in the array had to be changed from one to three
because I have some prototype functions that are showing up as enumerable in it

```javascript
(3) [div.card.faceUp.event-disabled, …]
0: div.card.faceUp.event-disabled
length: 3
[[Prototype]]:Array(0)
[[Prototype]]: object
```
The cards are populated with data coming from an API call in some instances the cards are rendered before the data is received resulting in fewer cards being created.
## Deployment

### GitHub Pages

The project was deployed to GitHub Pages using the following steps...

1. Log in to GitHub and locate the [GitHub Repository](https://github.com/NicoBrown/project2)
2. At the top of the Repository (not top of page), locate the "Settings" Button on the menu.
3. Scroll down the Settings page until you locate the "GitHub Pages" Section.
4. Under "Source", click the dropdown called "None" and select "Master Branch".
5. The page will automatically refresh.
6. Scroll back down through the page to locate the now published site [link](https://github.com) in the "GitHub Pages" section.

### Forking the GitHub Repository

By forking the GitHub Repository we make a copy of the original repository on our GitHub account to view and/or make changes without affecting the original repository by using the following steps...

1. Log in to GitHub and locate the [GitHub Repository](https://github.com/NicoBrown/project2)
2. At the top of the Repository (not top of page) just above the "Settings" Button on the menu, locate the "Fork" Button.
3. You should now have a copy of the original repository in your GitHub account.

### Making a Local Clone

1. Log in to GitHub and locate the [GitHub Repository](https://github.com/NicoBrown/project2)
2. Under the repository name, click "Clone or download".
3. To clone the repository using HTTPS, under "Clone with HTTPS", copy the link.
4. Open Git Bash
5. Change the current working directory to the location where you want the cloned directory to be made.
6. Type `git clone`, and then paste the URL you copied in Step 3.

```
$ git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY
```

7. Press Enter. Your local clone will be created.

```
$ git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY
> Cloning into `CI-Clone`...
> remote: Counting objects: #, done.
> remote: Compressing objects: 100% (#/#), done.
> remove: Total # (delta 1), reused # (delta 1)
> Unpacking objects: 100% (#/#), done.
```

Click [Here](https://help.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository#cloning-a-repository-to-github-desktop) to retrieve pictures for some of the buttons and more detailed explanations of the above process.

## Credits

### Code
The API call was made to ['https://periodic-table-elements-info.herokuapp.com/elements'] the retreive all of the element data used in the game

The code for the background gradient css and animation was taken from https://codepen.io/alvarotrigo/pen/dyzgOER

The css for the card flip animation was adapted from https://www.tutorialspoint.com/css/css_animation_flip_in_y.htm

The card shuffling aligrithm taken from https://dev.to/codebubb/how-to-shuffle-an-array-in-javascript-2ikj

Some good ideas for user stories taken from https://github.com/Sharon-B/21-The-Card-Game

### Acknowledgements
My original project plan was overly ambitious and wouldnt have worked out so a big shout out to my Mentor Reuben Ferrante, who reviewed it and made me take a step back and led me to developing this game instead so I could actually pass.  
