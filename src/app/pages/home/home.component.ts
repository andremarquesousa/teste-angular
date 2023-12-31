import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  host: {
    class: 'ib-content'
  }
})
export class HomeComponent {
  constructor(
    private titleService: Title,
  ) {
  }

  async ngOnInit() {
    this.titleService.setTitle('Home');
  }
}
