import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactDetailContainerComponent } from './contact-detail-container.component';
import { ContactFacade } from '../../../store/contact';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('ContactDetailContainerComponent', () => {
  let component: ContactDetailContainerComponent;
  let fixture: ComponentFixture<ContactDetailContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContactDetailContainerComponent],
      providers: [
        {
          provide: ContactFacade,
          useValue: jasmine.createSpyObj('ContactFacade', ['findContact']),
        },
        {
          provide: ActivatedRoute,
          useValue: {
            params: of({id: 'id'}),
          },
        },
      ],
      schemas: [NO_ERRORS_SCHEMA],
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
