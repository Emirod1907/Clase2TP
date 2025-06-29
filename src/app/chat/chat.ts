import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'


@Component({
  selector: 'app-chat',
  imports: [FormsModule],
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
  enviarMensaje(){
    console.log("mensaje enviado")
    console.log(this.form_state)
  }
  form_state= {
    author:'',
    text:''
  }
}
