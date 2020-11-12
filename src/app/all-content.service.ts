import { Injectable } from '@angular/core';

export interface ContentInterface {
  header: string;
  headerLink: string;
  img: string;
  imgLink: string;
  lastUpdated: string;
  content: string;
  button: string;
  buttonOnClick: string;
}

@Injectable({
  providedIn: 'root',
})
export class AllContentService {
  public allContents: ContentInterface[] = [
    {
      header: 'Tic Tac Toe',
      headerLink: 'https://github.com/santo75/TicTacToe',
      img: 'assets/images/TicTacToe.png',
      imgLink: 'https://github.com/santo75/TicTacToe',
      lastUpdated: '12th July 2020',
      content: `
          It's always fun and exciting when you learn something and apply them. And me too, after getting 
          little bit confidence in python, I wrote a script for Tic Tac Toe game. Till then i was familiar 
          with OOP in python, So i used little bit of that here. And it really helped in organizing codes and implementing different part of game as well.  
          `,
      button: 'Continue Reading',
      buttonOnClick: 'window.location = "none"',
    },
    {
      header: 'Line Follower Bot Using Arduino',
      headerLink: '/home',
      img: 'assets/images/lineFollower.jpeg',
      imgLink: '/home',
      lastUpdated: '10th November 2019',
      content: `
          We had to make a line follower bot using arduino which follows specified path.
          It was quit exciting to work on this project. Because when we came to know about this event, we had only 
          one day left to complete it. We were a team of 3 people. In a single day we learned about Arduino and about other
          tools that was required for this project. Since, we were familliar with c programming language it helped a lot
          in to programming Arduino. <strong>And finally, we got 2nd prize.<strong /> 
          `,
      button: 'Continue Reading',
      buttonOnClick: 'window.location = "none"',
    },
  ];

  home = [0, 1];

  constructor() {}

  getHomeContent() {
    const newContent = [];
    for (const i of this.home) {
      newContent.push(this.allContents[i]);
    }
    return newContent;
  }
}
