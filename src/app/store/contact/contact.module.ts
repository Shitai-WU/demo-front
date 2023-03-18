import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { contactFeature } from './reducers/contact.reducer';
import { EffectsModule } from '@ngrx/effects';
import { ContactEffects } from './effects/contact.effects';
import { ContactFacade } from "./facades/contact.facade";


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(contactFeature),
    EffectsModule.forFeature([ContactEffects])
  ],
  providers: [ContactFacade],
})
export class ContactModule {
}
