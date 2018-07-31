import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverName = 'Testing';
  allowLogin = false;
  serverStatus = 'offline';
  status = false;
  message = 'Not connected';
  servers = ['server1', 'server 2'];


  getStatus() {
    return this.message;
  }

  constructor() {

    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';


    setTimeout(() => {
      this.status = true;
      this.message = 'You are Now connected';

    }, 2000);
  }


  onsubmitClick() {
    this.message = 'just clicked';
    this.allowLogin = true;
    this.servers.push(this.serverName);
  }

  getColor() {
    return this.serverStatus === 'online' ? 'green' : 'red';
  }

  onConfirmingEmail(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;

  }

}


