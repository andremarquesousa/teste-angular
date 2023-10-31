import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FooterComponent } from './footer.component';
import { By } from '@angular/platform-browser';

describe('FooterComponent', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [RouterTestingModule],
    declarations: [
      FooterComponent
    ]
  }));

  it(`Texto deve ser 'André Marques © Copyright 2023'`, () => {
    const fixture = TestBed.createComponent(FooterComponent);
    const text = fixture.debugElement.query(By.css('p'));
    expect(text.nativeElement.textContent.trim()).toBe('André Marques © Copyright 2023')
  });
});
