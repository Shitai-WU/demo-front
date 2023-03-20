import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactListContainerComponent } from './contact-list-container.component';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRoute } from '@angular/router';
import { ContactFacade } from '../../../store/contact';
import { MatDialog } from '@angular/material/dialog';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('ContactListContainerComponent', () => {
  let component: ContactListContainerComponent;
  let fixture: ComponentFixture<ContactListContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContactListContainerComponent],
      imports: [RouterTestingModule],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {},
        },
        {
          provide: ContactFacade,
          useValue: jasmine.createSpyObj('ContactFacade', ['loadContacts']),
        },
        {
          provide: MatDialog,
          useValue: jasmine.createSpyObj('MatDialog', ['open']),
        },
      ],
      schemas: [NO_ERRORS_SCHEMA],
    })
      .compileComponents();

    fixture = TestBed.createComponent(ContactListContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
