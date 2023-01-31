import { Component, OnInit } from '@angular/core';
import { ContentList } from '../helper-files/content-list';
import { Content } from '../helper-files/content-interface';

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss']
})
export class ContentCardComponent implements OnInit {
  
  songCard:Content = {
    id:1,
    title:"Dance Monkey",
    description:"Dance Monkey topped the official singles charts in over 30 countries and peaked within the top ten of many others, including the United States. ",
    creator:"Tones and I",
    imgURL:"https://upload.wikimedia.org/wikipedia/en/1/1f/Dance_Monkey_by_Tones_and_I.jpg",
    type:"Electropop"
  }
  songCard2:Content = {
    id:2,
    title:"Fairytale",
    description:"In February 2009, Norwegian media reported that Fairytale is about Rybak's ex-girlfriend Ingrid Berg Mehus whom he got to know through the Barratt Due Institute of Music in Oslo",
    creator:"Alexander Rybak",
    imgURL:"https://en.wikipedia.org/wiki/Fairytale_(Alexander_Rybak_song)#/media/File:Alexander_fairytale.jpg",
    type:"Pop folk"
  }
  songCard3:Content = {
    id:3,
    title:"Despacito",
    description:"The lyrics of Despacito, were written in late 2015 in Luis Fonsi's house in Miami because he wanted to record a swinging song for his new album after two years without releasing new music",
    creator:" Luis Fonsi and Daddy Yankee",
    imgURL:"https://en.wikipedia.org/wiki/Despacito#/media/File:Luis_Fonsi_Feat._Daddy_Yankee_-_Despacito_(Official_Single_Cover).png",
    type:"Plant"
  }

songCards = new ContentList(this.songCard);
  contentList = this.songCards.getitems();

  

  constructor(){
    this.songCards.addContent(this.songCard);
    this.songCards.addContent(this.songCard2);
    this.songCards.addContent(this.songCard3);
  }
  
  
  
    ngOnInit(): void {
      const div = document.getElementById('pokemonCards');
      console.log(div);
      if(div) {
        div.innerHTML += this.songCards.printProperties(0);
        div.innerHTML += this.songCards.printProperties(1);
        div.innerHTML += this.songCards.printProperties(2);
      }
  
    }
  }

