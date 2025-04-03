import { Component } from '@angular/core';
import { NavHeaderComponent } from "../nav-header/nav-header.component";
import { PageFooterComponent } from "../page-footer/page-footer.component";

@Component({
  selector: 'app-diet-home',
  imports: [NavHeaderComponent, PageFooterComponent],
  templateUrl: './diet-home.component.html',
  styleUrl: './diet-home.component.scss'
})
export class DietHomeComponent {

}
