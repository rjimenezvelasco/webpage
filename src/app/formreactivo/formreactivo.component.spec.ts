import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormreactivoComponent } from './formreactivo.component';

describe('FormreactivoComponent', () => {
  let component: FormreactivoComponent;
  let fixture: ComponentFixture<FormreactivoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormreactivoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormreactivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
