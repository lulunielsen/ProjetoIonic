import { NgModule } from '@angular/core';
import { CoreModule } from './core/core.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';





@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [CoreModule, AppRoutingModule],
  bootstrap: [AppComponent],
})
export class AppModule {}