import { TestBed, fakeAsync, tick } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { DefaultModalComponent } from './default-modal.component';
import { By } from '@angular/platform-browser';

describe('ModalComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [ DefaultModalComponent ],
      providers: [  ]
    }).compileComponents();
  });

  it(`evento quando fechar modal`, () => {
    const fixture = TestBed.createComponent(DefaultModalComponent);
    const modal = fixture.componentInstance;
    const emitSpy = spyOn(modal.closeModal, 'emit');
    modal.handleModal(false);
    expect(emitSpy).toHaveBeenCalled();
  });
});
