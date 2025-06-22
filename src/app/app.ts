import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'ui';

  message: string = '';

  private http = inject(HttpClient);

   ngOnInit(): void {
    this.getMessage();
    
  }

  // GET message from /get endpoint
  getMessage(): void {
    this.http.get('http://localhost:8080/get', { responseType: 'text' })
      .subscribe(msg => {
        this.message = msg;
      });
  }
}
