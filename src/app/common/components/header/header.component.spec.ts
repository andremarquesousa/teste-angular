import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [RouterTestingModule],
    declarations: [
      HeaderComponent
    ]
  }));

  it(`alt da logo deve ser 'Elumini'`, () => {
    const fixture = TestBed.createComponent(HeaderComponent);
    const header = fixture.componentInstance;
    expect(header.altImage).toEqual('Elumini');
  });
});
