import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppBarComponent } from './components/app-bar/app-bar.component';
import { CountryFlagComponent } from './components/country-flag/country-flag.component';
import { EditableTextComponent } from './components/editable-text/editable-text.component';
import { ErrorMessageComponent } from './components/error-message/error-message.component';
import { LoadingIndicatorComponent } from './components/loading-indicator/loading-indicator.component';
import { TrLogoComponent } from './components/logo/logo.component';
import { NewLocaleComponent } from './components/new-locale/new-locale.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { SearchComponent } from './components/search/search.component';
import { SelectLocaleModalComponent } from './components/select-locale-modal/select-locale-modal.component';
import { SelectLocaleComponent } from './components/select-locale/select-locale.component';
import { AutosizeDirective } from './directives/autosize.directive';
import { CanPipe } from './directives/can.pipe';
import { DropzoneDirective } from './directives/dropzone.directive';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, FormsModule, NgbModule, RouterModule.forChild([])],
  declarations: [
    DropzoneDirective,
    EditableTextComponent,
    LoadingIndicatorComponent,
    CountryFlagComponent,
    ErrorMessageComponent,
    TrLogoComponent,
    NotFoundComponent,
    SelectLocaleComponent,
    AutosizeDirective,
    NewLocaleComponent,
    SelectLocaleModalComponent,
    CanPipe,
    SearchComponent,
    AppBarComponent,
  ],
  exports: [
    ReactiveFormsModule,
    FormsModule,
    NgbModule,
    EditableTextComponent,
    LoadingIndicatorComponent,
    CountryFlagComponent,
    DropzoneDirective,
    AutosizeDirective,
    ErrorMessageComponent,
    TrLogoComponent,
    NotFoundComponent,
    SelectLocaleComponent,
    AutosizeDirective,
    NewLocaleComponent,
    SelectLocaleModalComponent,
    CanPipe,
    SearchComponent,
    AppBarComponent,
  ],
})
export class SharedModule {}
