import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-cdb',
  templateUrl: './cdb.component.html',
  styleUrls: ['./cdb.component.scss'],
  host: {
    class: 'ib-content'
  }
})
export class CdbComponent {
  constructor(
    private titleService: Title,
  ) {
  }

  async ngOnInit() {
    this.titleService.setTitle('Investimentos | CDB');
  }
}
