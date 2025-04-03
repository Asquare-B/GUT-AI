import { Component } from '@angular/core';
import { TopHeaderComponent } from "../top-header/top-header.component";
import { WhyusComponent } from "../whyus/whyus.component";
import { PageFooterComponent } from "../page-footer/page-footer.component";

@Component({
  selector: 'app-home-landing',
  imports: [TopHeaderComponent, WhyusComponent, PageFooterComponent],
  templateUrl: './home-landing.component.html',
  styleUrl: './home-landing.component.scss'
})
export class HomeLandingComponent {

}
