import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SongComponent } from './song/song.component';
import { ContentCardComponent } from './content-card/content-card.component';
import { ContentListComponent } from './content-list/content-list.component';
import { FilterPipePipe } from './filter-pipe.pipe';
import { HoverEffectDirective } from './hover-effect.directive';

@NgModule({
  declarations: [
    AppComponent,
    SongComponent,
    ContentCardComponent,
    ContentListComponent,
    FilterPipePipe,
    HoverEffectDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
