import { Component, OnInit } from '@angular/core';
import { content } from '../helper-files/content-interface';
import { SongService } from '../song.service';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent implements OnInit {
contentArray:content[]=[];
outPut:string;
  messageColor!: string;
  
  constructor(private songService: SongService) {
   this.contentArray=[];
   this.outPut="";
   }
     
  
  
    ngOnInit(): void {
      this.songService.getContentObj().subscribe(array=>this.contentArray=array);
    }
    

      findTitle(findTitle:string):void {

        for(let i=0; this.contentArray.length>i; i++){
          let title=document.querySelector(`.${this.contentArray[i].title}`);
           title?.classList.remove('selected');
          if(this.contentArray[i].title.toLowerCase()==findTitle.toLowerCase()){
             this.outPut="this title is available in the content card";
             this.messageColor = 'green';
             title?.classList.remove('selected');
             title?.classList.add('selected');
             break;
            }
            else{
               this.outPut= "this title is not available in the content card";
              this.messageColor = 'red';
                }
            title?.classList.remove('selected');
          
        }
  
    }
    addSongToList(newSong:content):void{
      this.songService.addContent(newSong).subscribe(newfromServer=>{
        this.contentArray.push(newfromServer);
        this.contentArray=[...this.contentArray];
        console.log(newfromServer.id);
      });
     }
    }
    

  




 