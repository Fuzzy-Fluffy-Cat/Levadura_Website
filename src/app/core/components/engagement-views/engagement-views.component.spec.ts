import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EngagementViewsComponent } from './engagement-views.component';

describe('EngagementViewsComponent', () => {
  let component: EngagementViewsComponent;
  let fixture: ComponentFixture<EngagementViewsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EngagementViewsComponent]
    });
    fixture = TestBed.createComponent(EngagementViewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
