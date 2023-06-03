import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RollerListComponent } from './pages/roller-list/roller-list.component';
import { CaptainCoasterInterceptorInterceptor } from './services/interceptors/captain-coaster-interceptor.interceptor';
import { CaptainCoasterService } from './services/captain-coaster.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    RollerListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers:[
    CaptainCoasterService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CaptainCoasterInterceptorInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
