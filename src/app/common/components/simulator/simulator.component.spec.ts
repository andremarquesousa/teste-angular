import { TestBed, fakeAsync, inject } from '@angular/core/testing';
import { SimulatorComponent } from './simulator.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxCurrencyDirective } from 'ngx-currency';
import { RouterTestingModule } from '@angular/router/testing';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { By } from '@angular/platform-browser';

describe('SimulatorComponent', () => {
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
        SimulatorComponent
      ]
    });
  });

  it('Link para home',
    fakeAsync((inject([Router, Location], (router: Router, location: Location) => {
      const fixture = TestBed.createComponent(SimulatorComponent);
      fixture.detectChanges();

      fixture.debugElement.query(By.css('a')).nativeElement.click();
      fixture.whenStable().then(() => {
        expect(location.path()).toEqual('/');
      });
    })))
  );

  it(`Formulario inválido quando vazio`, () => {
    const fixture = TestBed.createComponent(SimulatorComponent);
    const simulator = fixture.componentInstance;
    fixture.detectChanges();
    expect(simulator.simulatorForm.valid).toBeFalsy();
  });

  it('Simulador valido', () => {
    const fixture = TestBed.createComponent(SimulatorComponent);
    const simulator = fixture.componentInstance;
    fixture.detectChanges();
    expect(simulator.simulatorForm.valid).toBeFalsy();

    simulator.simulatorForm.controls['months'].setValue(6);
    simulator.simulatorForm.controls['amount'].setValue(20000);

    expect(simulator.simulatorForm.valid).toBeTruthy();

    simulator.handleSimulator();
  });
});
