# Tic Tac Toe Challenge

This is a solution to the [Tic Tac Toe challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/tic-tac-toe-game-Re7ZF_E2v). Frontend Mentor challenges are designed to help developers improve their coding skills by building realistic projects. Assets are provided, but no guidance, and developers are free to choose any approach to solving the challenge.

## Overview

🚨 This project is a work in progress. I'm improving it as I learn more React. 🚨

### The challenge

Users should be able to:

- View the optimal layout for the game depending on their device's screen size
- See hover states for all interactive elements on the page
- Play the game either solo vs the computer or multiplayer against another person
- **Bonus 1**: Save the game state in the browser so that it’s preserved if the player refreshes their browser
- **Bonus 2**: Instead of having the computer randomly make their moves, try making it clever so it’s proactive in blocking your moves and trying to win

### Screenshot

![Design preview for the Tic Tac Toe coding challenge](./images/preview.jpg)

## The solution

- [Live Site URL](https://fem-ttt-game-react.netlify.app)

### Built with

- [React](https://reactjs.org/) - JS library
- [Styled Components](https://styled-components.com/) - For layout and styling

### What I learned

This is my second project using React and the first using styled components. I've been super lucky in that I'm one of the early testers on [Josh Comeau's Joy of React course](https://www.joyofreact.com/), and I wanted to apply what I had learnt in the first three modules of the course on a real world challenge. This was also the first time I had used styled components, I can see the advantages of the approach, particularly with regards avoiding issues with the cascade element of CSS (but I actually really like the cascade!).

### Where I got stuck

- One issue I had with styled components is keeping track of whether the components in the file were now React components or styled components! I also struggled mapping the styled components to the rendered DOM in the dev tools, which made debugging a bit tricky in some cases. On reflection, I think that a simple naming convention could solve this.
- 'React.useEffect` is asking for additional dependencies in a couple of places in board.js. The only way I could get the app deployed was to ignore them, and if I add them as suggested I end up with infinite loops. I can see that some of this is now due to passing in an object, and having done a little more study there are patterns that I can use to avoid this.
- Board.js is a bit of a monster, I had a look at refactoring things, but I couldn't see any obvious ways to do this. I considered moving the remaining game logic functions out, but they all change state so this didn't seem sensible. Again, having done a little more study I now understand a couple of approaches I can use to at least reduce the number of props being passed.

### Continued development

I'd like to keep pushing on with React, but need to step up my learning to some additional concepts as I am now pushing up against the edge of what I've learned to date. I'd like to come back and refactor this based on this new knowledge. I'd also like to have another go at using styled components, as although the approach doesn't really map with how I like to write CSS, I like the the way it compartmentalizes all relevant code into one file.

## Author

- [Personal Website](https://www.dwhenson.com)
- Frontend Mentor Profile - [@dwhenson](https://www.frontendmentor.io/profile/dwhenson)
