import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-simulator',
  templateUrl: './simulator.component.html',
  styleUrls: ['./simulator.component.scss']
})

export class SimulatorComponent {
  @Output() value = new EventEmitter<any>();
  timeOut:any;
  simulatorForm!: FormGroup;
  monthsList = [{ value: '', name: 'Selecione meses' }, { value: '2', name: '2 meses' }, { value: '3', name: '3 meses' }, { value: '4', name: '4 meses' }, { value: '5', name: '5 meses' }, { value: '6', name: '6 meses' }, { value: '12', name: '12 meses' }, { value: '24', name: '24 meses' }, { value: '36', name: '36 meses' }];
  result:number = 0;
  tax = 0;

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.simulatorForm = this.formBuilder.group({
      months: ['', [Validators.required]],
      amount: ['', [Validators.required]]
    });
  }

  IRValue(value:number, months:number) {
    if (months <= 6) {
      return value * (22.5 / 100) / 12;
    } else if (months > 6 && months <= 12) {
      return value * (20 / 100) / 12;
    } else if (months > 12 && months <= 24) {
      return value * (17.5 / 100) / 12;
    } else {
      return value * (15 / 100) / 12;
    }
  }

  handleSimulator() {
    let lastValue:number = this.simulatorForm.value.amount;
    this.tax = this.IRValue(lastValue, Number(this.simulatorForm.value.months));

    const numberMonths = new Array(Number(this.simulatorForm.value.months)).fill(0);

    numberMonths.forEach((value) => {
      const cdi = (0.9 * 13.65) / 12;
      const tb = (108 / 100) / 100;
      lastValue = lastValue * (1 + (cdi * tb));
    });

    
    this.result = lastValue;
    this.value.emit({amount: this.simulatorForm.value.amount, result: this.result, tax: this.tax});
  }
}
