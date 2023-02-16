import { Pipe, PipeTransform } from '@angular/core';
import { content } from './helper-files/content-interface';
@Pipe({
  name: 'filterPipe'
})
export class FilterPipePipe implements PipeTransform {

  transform(songs: content[], htype?:string): content[] {
    return songs.filter(function(h){
      if(h.type==htype){
        console.log(""+htype+" "+h.type);
        return h.type?.length!=0;
        
      }
     else{
       return h.type?.length==0;
     }
    });
  }

}

