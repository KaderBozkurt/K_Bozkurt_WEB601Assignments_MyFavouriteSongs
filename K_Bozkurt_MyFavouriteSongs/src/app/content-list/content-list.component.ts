import { Component,Input , OnInit } from '@angular/core';
import { content } from '../helper-files/content-interface';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent implements OnInit {
  contentArray:content[];
  @Input() isFirst: Boolean;
  constructor() {
    this.isFirst=false;
    this.contentArray=[{
      id:1,
    title:"Dance Monkey",
    description:"Dance Monkey topped the official singles charts in over 30 countries and peaked within the top ten of many others, including the United States. ",
    creator:"Tones and I",
    imgURL:"https://upload.wikimedia.org/wikipedia/en/1/1f/Dance_Monkey_by_Tones_and_I.jpg",
    type:"Electropop",
    tags:["Pop", "Electropop"]
    },
{
  id:2,
    title:"Fairytale",
    description:"In February 2009, Norwegian media reported that Fairytale is about Rybak's ex-girlfriend Ingrid Berg Mehus whom he got to know through the Barratt Due Institute of Music in Oslo",
    creator:"Alexander Rybak",
    imgURL:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Alexander_Rybak_001.jpg/640px-Alexander_Rybak_001.jpg",
    type:"Pop folk",
    tags:["Pop", "Pop Folk"]
},
{
  id:3,
  title:"Anti-Hero",
  description:"Anti-Hero is a song by American singer-songwriter Taylor Swift and the lead single from her tenth studio album, Midnights (2022).",
  creator:" Taylor Swift",
  imgURL:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Taylor_Swift_2009_MTV_VMA_%28cropped%29.jpg/640px-Taylor_Swift_2009_MTV_VMA_%28cropped%29.jpg",
  type:"Pop-rock",
  tags:["Pop", "Rock", "Pop-Rock"]
},
   {
    id:4,
    title:"Flowers (Miley Cyrus song)",
    description:"Flowers is a song by American singer Miley Cyrus. ",
    creator:" Miley Cyrus",
    imgURL:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Miley_Cyrus_2010_MMVA_%28Straighten_Crop%29.jpg/640px-Miley_Cyrus_2010_MMVA_%28Straighten_Crop%29.jpg",
    type:"Disco-pop",
    tags:["Rock", "Pop", "Disco"]
   },
   { 
    id:5,
    title:"Calm Down",
    description:"Calm Down is a song by Nigerian singer Rema, from his debut studio album Rave & Roses (2022).",
    creator:" Taylor Swift",
    imgURL:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Selena_Gomez_2016.png/640px-Selena_Gomez_2016.png",
    type:"Afrobeast",
    tags:["Pop", "Slow"]
  },
  {
    id:6,
    title:"Kill Bill (SZA song)",
    description:"A martial arts film duology that focuses on an assassin named the Bride and her quest to exact revenge on her ex-boyfriend by murdering him.",
    creator:"SZA ",
    imgURL:"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/SZA_performing.jpg/640px-SZA_performing.jpg",
    
    type:"Pop",
    tags:["Rock", "Pop"]
  
      }];
   }
  
   
  
  
    ngOnInit(): void {
      
  
    }
  

    

  }




 