import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LipunmyyntiComponent } from './lipunmyynti.component';

describe('LipunmyyntiComponent', () => {
  let component: LipunmyyntiComponent;
  let fixture: ComponentFixture<LipunmyyntiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LipunmyyntiComponent]
    });
    fixture = TestBed.createComponent(LipunmyyntiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
