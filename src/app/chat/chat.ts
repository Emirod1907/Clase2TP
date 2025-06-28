import { Component } from '@angular/core';

@Component({
  selector: 'app-chat',
  imports: [],
  templateUrl: './chat.html',
  styleUrl: './chat.css'
})
export class Chat {
  messages= [
    {
      author: 'John Doe',
      text: 'Hello World',
      id: 1
    },
    {
      author: 'Mary Doe',
      text: 'How are you?',
      id: 2
    },
    {
      author: 'Joe Doe',
      text: 'Hi',
      id: 3
    },
  ]
}
