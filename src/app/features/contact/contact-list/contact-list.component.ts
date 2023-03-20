import { AfterViewInit, Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { Contact } from '../../../core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss'],
})
export class ContactListComponent implements AfterViewInit {
  @Input() set contacts(contacts: Contact[]) {
    this.dataSource.data = contacts;
  }

  @Output() showContactDetailEvent = new EventEmitter<string>();
  @Output() openEditContactFormDialogEvent = new EventEmitter<Contact>();
  @Output() openDeleteContactFormDialogEvent = new EventEmitter<string>();
  @ViewChild(MatSort) sort: MatSort = new MatSort();
  dataSource = new MatTableDataSource<Contact>([]);
  displayedColumns: string[] = ['firstName', 'lastName', 'birthday', 'email', 'action'];

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  showContactDetail(id: string): void {
    this.showContactDetailEvent.emit(id);
  }

  openEditContactFormDialog(contact: Contact): void {
    this.openEditContactFormDialogEvent.emit(contact);
  }

  openDeleteContactFormDialog(id: string): void {
    this.openDeleteContactFormDialogEvent.emit(id);
  }

  applyFilter(event: KeyboardEvent) {
    const target = event.target as HTMLInputElement;
    this.dataSource.filter = target.value.trim().toLowerCase();
  }
}
