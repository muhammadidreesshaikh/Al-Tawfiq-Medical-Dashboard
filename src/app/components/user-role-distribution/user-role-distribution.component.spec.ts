import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRoleDistributionComponent } from './user-role-distribution.component';

describe('UserRoleDistributionComponent', () => {
  let component: UserRoleDistributionComponent;
  let fixture: ComponentFixture<UserRoleDistributionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserRoleDistributionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserRoleDistributionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
