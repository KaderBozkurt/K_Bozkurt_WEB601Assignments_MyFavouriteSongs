import { Component } from '@angular/core';
import{content} from '../app/helper-files/content-interface';
import { MessageService } from './message.service';
import { SongService } from './song.service';
import{subscribeOn} from 'rxjs';
import{concatMap, filter, map} from 'rxjs/operators'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'K_Bozkurt_MyFavouriteSongs';
  oneContent?:content;
  songs?:content[];
  selectedSong?:content;
  id?:number;
  constructor(private songService:SongService, private messageService:MessageService){}
  ngOnInit(): void{this.getSongs();
  }
  onSelect(content:content): void {
    this.messageService.add(`SongComponent: Selected song id=${content.id}`);
  }
  errorMessage():void{
    this.messageService.add("Some kind of error occured!");
  }
  getSongs(): void {
    this.songService.getSongs()
        .subscribe(songs => this.songs = songs);
  }
  show(id:any):void{
    
    this.songService.getContentObj().subscribe((song)=>{
      id=parseInt(id);
      this.id=id;
      if(song.length>=id){
        for(let i=0; i<=song.length;i++){
        
          if(song[i].id==id){
            this.oneContent=song[i];
            this.onSelect(song[i]);
          }
        }
        
         return this.oneContent;
      }
      else{
        this.errorMessage();
        return  this.oneContent={
          id:0,
          title:"",
          description:"",
          creator:"",
          imgURL:"https://miro.medium.com/max/1200/1*6FVkh62q28nvgoNzSZVNHA.jpeg"
        };
      }
      
      });
      
  }
}
