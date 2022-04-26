"use strict";
const URL_IMG = {
  mine: "./img/portfolio/m11.jpg",
  balls: "./img/portfolio/bbbbb.jpg",
  book: "./img/portfolio/book.jpg",
  black: "./img/portfolio/black1.jpg",
  trivia: "./img/portfolio/t1.jpg",
  login: "./img/portfolio/login.jpg",
};
const DESCRIPTIONS = {
  trivia: `Trivia game implemented in client/server architecture. 
  With the TCP protocol, you can receive connections from multiple players, and many players can play simultaneously.
  Using an external API for various trivia questions.`,
  black: `It was my final project in an Object-Oriented Programming course (OOP).
  My friend from college and I developed this project using C++ and MFC framework.
  In this project, a user plays blackjack21 against a computer.
  To represent objects for the game, we use polymorphism features of OOP and manage the different departments.
  In addition, we manage game saves and uploads.`,
  balls: `The game was developed using HTML CSS JS.
  In this project, I aim to strengthen my web development skills through self-study.
  The user has to collect all the balls displayed on the board in order to win, while avoiding stepping on the glue displayed on the board.`,
  mine: `The game is developed using HTML CSS JS.
  In this project, I aim to strengthen my web development skills through self-study.
  At this time I chose to develop the familiar game "Minesweeper" in which the user must mark all bombs with flags and open the empty cells around the bombs.`,
};

var gProjects;
_createProjects();

function _createProjects() {
  gProjects = [
    _createProject(
      "Blackjack",
      "Developed using C++ and MFC framework",
      DESCRIPTIONS.black,
      URL_IMG.black,
      "June 2021",
      "Gaming",
      "https://github.com/menybenatar/Blackjack.git"
    ),
    _createProject(
      "Trivia-game",
      "Developed using Python with client/server architecture.",
      DESCRIPTIONS.trivia,
      URL_IMG.trivia,
      "February 2022",
      "Gaming",
      "https://github.com/menybenatar/trivia-game.git"
    ),

    _createProject(
      "Collect those Balls",
      "Developed using HTML CSS JS",
      DESCRIPTIONS.balls,
      URL_IMG.balls,
      "March 2022",
      "Gaming",
      "https://menybenatar.github.io/Collect-those-Balls/"
    ),
    _createProject(
      "Mine Sweeper",
      "Developed using HTML CSS JS",
      DESCRIPTIONS.mine,
      URL_IMG.mine,
      "March 2022",
      "Gaming",
      "https://menybenatar.github.io/Mine-Sweeper/"
    ),
    // _createProject(
    //   "Book Shop",
    //   "shop owner to manage his books",
    //   makeLorem(),
    //   URL_IMG.book,
    //   "April 2022",
    //   "Inventory Management",
    //   "https://menybenatar.github.io/Book-Shop/"
    // ),
    // _createProject(
    //   "Login Page",
    //   "login page",
    //   makeLorem(),
    //   URL_IMG.login,
    //   "November 2021",
    //   "Inventory Management",
    //   "https://menybenatar.github.io/Login-page/"
    // ),

    // _createProject(
    //   "Login Page",
    //   "login page",
    //   makeLorem(),
    //   URL_IMG.login,
    //   "April 2022",
    //   "Inventory Management",
    //   "https://menybenatar.github.io/Login-page/"
    // ),
  ];
}
function _createProject(projName, title, desc, urlImg, date, category, link) {
  return {
    id: makeId(),
    name: projName,
    title,
    desc,
    urlImg,
    date,
    category,
    link,
  };
}
function getProjcets() {
  return gProjects;
}
