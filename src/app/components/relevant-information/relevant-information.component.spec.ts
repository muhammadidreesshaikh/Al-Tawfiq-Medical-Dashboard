import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelevantInformationComponent } from './relevant-information.component';

describe('RelevantInformationComponent', () => {
  let component: RelevantInformationComponent;
  let fixture: ComponentFixture<RelevantInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RelevantInformationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RelevantInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
