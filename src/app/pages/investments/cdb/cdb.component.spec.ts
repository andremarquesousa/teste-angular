import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CdbComponent } from './cdb.component';
import { SimulatorComponent } from 'src/app/common/components/simulator/simulator.component';
import { DefaultModalComponent } from 'src/app/common/components/modal/default-modal.component';
import { NgxCurrencyDirective } from 'ngx-currency';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';

describe('CDBComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        NgSelectModule,
        ReactiveFormsModule,
        FormsModule,
        NgxCurrencyDirective,
      ],
      declarations: [
        CdbComponent,
        SimulatorComponent,
        DefaultModalComponent
      ],
    });
  });

  it('Testando resultado recebido do simulador', () => {
    const fixture = TestBed.createComponent(CdbComponent);
    const component = fixture.componentInstance;
    const result = {
      amount: 20000,
      result: 21363.999006788417,
      tax: 375
    };
    fixture.detectChanges()
    component.receiveResult(result);
    expect(component.resultData).toEqual(result);
  });

  it('Testando fechamento da modal', () => {
    const fixture = TestBed.createComponent(CdbComponent);
    const component = fixture.componentInstance;
    fixture.detectChanges()
    component.closeModal(false);
    expect(component.resultModal).toEqual(false);
  });
});
