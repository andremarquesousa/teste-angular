import { TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HomeComponent } from './home.component';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';
import { CdbComponent } from '../investments/cdb/cdb.component';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

describe('HomeComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([
          {path: 'investimentos/cdb', component: CdbComponent}
      ])
      ],
      declarations: [
        HomeComponent,
        CdbComponent
      ],
    });
  });

  it('Link para simulador CDB',
    fakeAsync(() => {
      const location:Location = TestBed.inject(Location);
      const router:Router = TestBed.get(Router);
      const fixture = TestBed.createComponent(HomeComponent);
      fixture.debugElement.query(By.css('a[data-test="am-link-cdb"]')).nativeElement.click();
      router.navigateByUrl('/investimentos/cdb');
      fixture.detectChanges(); 
      tick();
      expect(location.path()).toBe('/investimentos/cdb');
    }
  ));
});
