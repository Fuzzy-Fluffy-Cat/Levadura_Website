import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BurgerContainerComponent } from './burger-container.component';

describe('BurgerContainerComponent', () => {
  let component: BurgerContainerComponent;
  let fixture: ComponentFixture<BurgerContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BurgerContainerComponent]
    });
    fixture = TestBed.createComponent(BurgerContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
