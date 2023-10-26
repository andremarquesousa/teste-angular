import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-default-modal',
  templateUrl: './default-modal.component.html',
  styleUrls: ['./default-modal.component.scss']
})

export class DefaultModalComponent {
  @ViewChild('amElement', {static: true}) div:any;
  @Input() title:string;
  @Input() openModal:boolean;
  @Output() closeModal = new EventEmitter<any>();
  timeOut:any;

  constructor(
  ) { }

  handleModal(item: any): void {
    this.closeModal.emit(item);
  }
}
