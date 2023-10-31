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
  resultModal = false;
  resultData:any;

  constructor(
    private titleService: Title,
  ) {
  }

  ngOnInit() {
    this.titleService.setTitle('Investimentos | CDB');
  }

  receiveResult(event:any) {
    console.log(event);
    this.resultModal = true;
    this.resultData = event;
  }

  closeModal(event: any) {
    this.resultModal = event;
  }
}
