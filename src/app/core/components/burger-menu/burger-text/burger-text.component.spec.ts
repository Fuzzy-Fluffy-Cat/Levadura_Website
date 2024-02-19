import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BurgerTextComponent } from './burger-text.component';

describe('BurgerTextComponent', () => {
  let component: BurgerTextComponent;
  let fixture: ComponentFixture<BurgerTextComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BurgerTextComponent]
    });
    fixture = TestBed.createComponent(BurgerTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
