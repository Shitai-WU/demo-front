import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactListContainerComponent } from "./contact-list-container/contact-list-container.component";
import { ContactDetailContainerComponent } from "./contact-detail-container/contact-detail-container.component";

const routes: Routes = [
  {
    path: ':id',
    component: ContactDetailContainerComponent,
  },
  {
    path: '',
    component: ContactListContainerComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactRoutingModule {
}
