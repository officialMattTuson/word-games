import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConnectionsComponent } from './components/connections/connections.component';
import { TileComponent } from './molecules/tile/tile.component';

@NgModule({
  declarations: [
    AppComponent,
    ConnectionsComponent,
    TileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
