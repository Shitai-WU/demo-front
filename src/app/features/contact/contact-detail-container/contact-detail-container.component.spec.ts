import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactDetailContainerComponent } from './contact-detail-container.component';

describe('ContactDetailContainerComponent', () => {
  let component: ContactDetailContainerComponent;
  let fixture: ComponentFixture<ContactDetailContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactDetailContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactDetailContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
