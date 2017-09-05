import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterLanguageComponent } from './register-language.component';

describe('RegisterLanguageComponent', () => {
  let component: RegisterLanguageComponent;
  let fixture: ComponentFixture<RegisterLanguageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterLanguageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterLanguageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
