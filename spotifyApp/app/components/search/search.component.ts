import { Component } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

import 'rxjs/add/operator/map';
import { Artist } from '../../../Artist';

@Component({
  moduleId: module.id,
  selector: 'search',
  templateUrl: 'search.component.html'
})

export class SearchComponent{
  private search: string;
  private searchResult: Artist[];

  constructor(private spotifyService: SpotifyService){

  }

  searchMusic(){
    // console.log(this.search);
    this.spotifyService.searchMusic(this.search).subscribe(res => {
      // console.log(res.artists.items)
      this.searchResult = res.artists.items;
    });
  }
}
