import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CronapiComponent } from './cronapi.component';

describe('CronapiComponent', () => {
  let component: CronapiComponent;
  let fixture: ComponentFixture<CronapiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CronapiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CronapiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});