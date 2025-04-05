import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MarkdownModule } from 'ngx-markdown';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FontAwesomeModule,MarkdownModule,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'trikal';
  onActivate(){
    window.scroll(0,0);
  }
}
