# Frontend Mentor - Tic Tac Toe solution

This is a solution to the [Tic Tac Toe challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/tic-tac-toe-game-Re7ZF_E2v). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Where I got stuck](#got-stuck)
  - [Continued development](#continued-development)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the game depending on their device's screen size
- See hover states for all interactive elements on the page
- Play the game either solo vs the computer or multiplayer against another person
- **Bonus 1**: Save the game state in the browser so that it’s preserved if the player refreshes their browser
- **Bonus 2**: Instead of having the computer randomly make their moves, try making it clever so it’s proactive in blocking your moves and trying to win

### Screenshot

![Design preview for the Tic Tac Toe coding challenge](./images/preview.jpg)

### Links

- [Solution URL](https://github.com/dwhenson/fem-ttt-game)
- [Live Site URL](https://fem-ttt-game-react.netlify.app)

## My process

### Built with

- [React](https://reactjs.org/) - JS library
- [Styled Components](https://styled-components.com/) - For layout and styling

### What I learned

This is my second project using React and the first using styled componenets. I've been super lucky in that I'm one of the early testers on [Josh Comeau's Joy of React course](https://www.joyofreact.com/), and when back to his CSS course to learn about styled components.

### Where I got stuck

- ❗ I used `focus-within` to manage the keyboard focus outline on the styled inputs, but didn't manage to get the outline not appearing on mouse clicks only. I wanted something like `:focus-within:not(:focus-visible)` but I couldn't make this work. The outline is not really needed as the color change is very obvious. I could remove it completely but preferred to leave it rather than remove it.
- ❗ One issue I had with styled components is keeping track of whether the components in the file were now React components or styled components! I also struggled mapping the styled components to the rendered DOM in the dev tools, which made debugging a bit tricky in some cases.
- ❗ 'React.useEffect` is asking for additional dependencies in a couple of places in board.js (see FIXMEs). The only way I could get the app deployed was to ignore them, and if I add them as suggested I end up with infinite loops. I wasn't sure how to deal with this if any one knows how to deal with this I would love to know.
- ❗ Board.js is a bit of a monster, I had a look at refactoring things, but I couldn't see any obvious ways to do this. I considered moving the remaining game logic functions out, but they all change state so this didn't seem sensible. Any suggestions would be welcome!

### Continued development

I'd like to keep pushing on with React, but need to step up my learning to some additional concepts as I am now pushing up against the edge of what I've learned to date. I'd like to have another go at using styled components, as although the approach doesn't really map with how I like to write CSS, I like the the way it compartmentalizes all realvent code into one file.

## Author

- [Personal Website](https://www.dwhenson.com)
- Frontend Mentor Profile - [@dwhenson](https://www.frontendmentor.io/profile/dwhenson)
