import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { SpotifyService } from '../../services/spotify.service';

import { Artist } from '../../../Artist';
import { Album } from '../../../Album';


@Component({
  moduleId: module.id,
  selector: 'artist',
  templateUrl: 'artist.component.html'
})

export class ArtistComponent implements OnInit{
  private id:string;
  private artist: Artist[];
  private albums:Album[];
  constructor(
    private spotifyService: SpotifyService,
    private route:ActivatedRoute
  ){

  }

  ngOnInit(){
    this.route.params.map(params => params['id']).subscribe(id => {
      this.spotifyService.getArtist(id).subscribe(artist => {
        this.artist = artist;
      })
    });

    this.route.params.map(params => params["id"]).subscribe(id => {
      this.spotifyService.getAlbums(id).subscribe(albums => {
        this.albums = albums.items;
      })
    })
  }

}
