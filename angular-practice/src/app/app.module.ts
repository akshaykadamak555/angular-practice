import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InterpolationComponent } from './Angular-fundamentals/interpolation/interpolation.component';
import { DirectivesComponent } from './Angular-fundamentals/directives/directives.component';
import { CourceserviceService } from './Angular-fundamentals/service/courceservice.service';
import { PropertyBindingComponent } from './Displaying-data-and-handling-events/property-binding/property-binding.component';
import { AttributeBindingComponent } from './Displaying-data-and-handling-events/attribute-binding/attribute-binding.component';
import { ClassBindingComponent } from './Displaying-data-and-handling-events/class-binding/class-binding.component';
import { StyleBindingComponent } from './Displaying-data-and-handling-events/style-binding/style-binding.component';
import { EventBindingComponent } from './Displaying-data-and-handling-events/event-binding/event-binding.component';
import { EventBubblingComponent } from './Displaying-data-and-handling-events/event-bubbling/event-bubbling.component';
import { EventFilteringComponent } from './Displaying-data-and-handling-events/event-filtering/event-filtering.component';
import { TemplateVariablesComponent } from './Displaying-data-and-handling-events/template-variables/template-variables.component';
import { TwoWayBindingComponent } from './Displaying-data-and-handling-events/two-way-binding/two-way-binding.component';
import { PipesComponent } from './Displaying-data-and-handling-events/pipes/pipes.component';
import { CustomPipeComponent } from './Displaying-data-and-handling-events/custom-pipe/custom-pipe.component';
import { SummaryPipe } from './Displaying-data-and-handling-events/pipes/summary.pipe';
import { ParentToChildComponent } from './Building-reusable-components/parent-to-child/parent-to-child.component';
import { ChildToParentComponent } from './Building-reusable-components/child-to-parent/child-to-parent.component';
import { NgContentComponent } from './Building-reusable-components/ng-content/ng-content.component';
import { NgContainerComponent } from './Building-reusable-components/ng-container/ng-container.component';
import { StructuralDirectivesComponent } from './Directives/structural-directives/structural-directives.component';
import { AttributeDirectivesComponent } from './Directives/attribute-directives/attribute-directives.component';
import { CustomDirectivesComponent } from './Directives/custom-directives/custom-directives.component';
import { InputFormatDirective } from './Directives/custom-directives/input-format.directive';
import { ContactFormComponent } from './Template-driven-forms/contact-form/contact-form.component';
import { ReactiveFormComponent } from './Reactive-forms/reactive-form/reactive-form.component';
import { DataComponent } from './Consuming-http-services/data/data.component';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './Consuming-http-services/api.service';

@NgModule({
  declarations: [
    AppComponent,
    InterpolationComponent,
    DirectivesComponent,
    PropertyBindingComponent,
    AttributeBindingComponent,
    ClassBindingComponent,
    StyleBindingComponent,
    EventBindingComponent,
    EventBubblingComponent,
    EventFilteringComponent,
    TemplateVariablesComponent,
    TwoWayBindingComponent,
    PipesComponent,
    CustomPipeComponent,
    SummaryPipe,
    ParentToChildComponent,
    ChildToParentComponent,
    NgContentComponent,
    NgContainerComponent,
    StructuralDirectivesComponent,
    AttributeDirectivesComponent,
    CustomDirectivesComponent,
    InputFormatDirective,
    ContactFormComponent,
    ReactiveFormComponent,
    DataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [CourceserviceService, ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
