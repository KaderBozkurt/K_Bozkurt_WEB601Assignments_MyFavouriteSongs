import { Injectable } from '@angular/core';
import { content } from '../app/helper-files/content-interface';
import { CONTENTARRAY } from '../app/helper-files/contentDb';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class SongService {
  
  constructor(private messageService: MessageService) { }
 
  getContentObj():Observable<content[]>{
    return of(CONTENTARRAY);
  }
  getSongs(): Observable<content[]> {
    const songs = of(CONTENTARRAY);
    this.messageService.add('Content Loaded!');
    return songs;
  }
}
