import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SongComponent } from './song/song.component';
import { ContentCardComponent } from './content-card/content-card.component';
import { ContentListComponent } from './content-list/content-list.component';
import { FilterPipePipe } from './filter-pipe.pipe';
import { HoverEffectDirective } from './hover-effect.directive';
import { MessagesComponent } from './messages/messages.component';
import { HttpClientInMemoryWebApiModule } from "angular-in-memory-web-api";
import { ModifyContentComponentComponent } from './modify-content-component/modify-content-component.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { InmemorydataService } from './services/inmemorydata.service';

@NgModule({
  declarations: [
    AppComponent,
    SongComponent,
    ContentCardComponent,
    ContentListComponent,
    FilterPipePipe,
    HoverEffectDirective,
    MessagesComponent,
    ModifyContentComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InmemorydataService, {
      dataEncapsulation: false,
      delay: 500
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


