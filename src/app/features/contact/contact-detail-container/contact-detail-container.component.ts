import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { filter, map, switchMap, tap } from 'rxjs/operators';
import { ContactFacade } from '../../../store/contact';

@Component({
  selector: 'app-contact-detail-container',
  templateUrl: './contact-detail-container.component.html',
  styleUrls: ['./contact-detail-container.component.scss'],
})
export class ContactDetailContainerComponent implements OnInit {
  contact$ = this.route.params.pipe(
    map((params) => params['id']),
    filter((id) => !!id),
    tap((id) => this.contactFacade.findContact(id)),
    switchMap(() => this.contactFacade.selectedContact$),
  );

  constructor(private contactFacade: ContactFacade, private route: ActivatedRoute) {
  }

  ngOnInit(): void {

  }

}
