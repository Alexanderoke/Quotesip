import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QdisplayComponent } from './qdisplay.component';

describe('QdisplayComponent', () => {
  let component: QdisplayComponent;
  let fixture: ComponentFixture<QdisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QdisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QdisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
