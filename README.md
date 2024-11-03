# Tic Tac Toe Game

This project is a web-based implementation of the classic Tic Tac Toe game, created using HTML, CSS, and JavaScript. The goal of the game is to get three of your marks in a row—either horizontally, vertically, or diagonally.

## Project Structure

### HTML - Layout of the game structure
The layout of the website is constructed using HTML, which provides the foundational structure for the game board. Each square of the Tic Tac Toe grid is represented as a div element, making it easy to manipulate and style.

### CSS - Styling the webpage 
CSS is used to stylize the game, enhancing the overall appearance and user experience. The styles define the size of the game board, colors for the X and O markers, and transitions for a smoother interaction. This design creates an engaging interface that players will enjoy.

### JavaScript - Making the website functional  
JavaScript is where the core functionality of the game is implemented. I used `forEach` functions to handle the click events for each box, allowing players to take turns. The game keeps track of whose turn it is and updates the board accordingly. 

The `resultChecker()` function is essential for determining the game’s outcome. It checks the predefined winning conditions—rows, columns, and diagonals—to see if a player has won. Additionally, it counts the moves to detect a draw if all boxes are filled without a winner. 

To enhance user experience, the game displays a message when a player wins or when there is a draw. The interface resets when the player clicks the reset button, allowing for a new game without needing to refresh the page.

This project showcases my skills in web development, demonstrating how to combine HTML, CSS, and JavaScript to create an interactive game. Enjoy playing Tic Tac Toe!
