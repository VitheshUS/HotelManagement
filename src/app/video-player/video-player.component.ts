import { AfterViewInit, Component, OnDestroy } from '@angular/core';
import 'jb-videojs-hls-quality-selector';
import videojs from 'video.js';

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.scss']
})

export class VideoPlayerComponent implements AfterViewInit,OnDestroy {
  
  public player: any;

  ngAfterViewInit() {
    
    this.player = videojs('my-video');
    this.player.loadMedia({
      artist: 'Disney',
      album: 'Oceans',
      title: 'Oceans',
      description: 'Journey in to the depths ... and race with dolphins at play.',
      poster: 'https://vjs.zencdn.net/v/oceans.png',
      src: [{
        src: 'https://bitdash-a.akamaihd.net/content/MI201109210084_1/m3u8s/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.m3u8',
        type: 'application/x-mpegURL'
      }]
    })
    this.player.currentTime(120);
    this.player.hlsQualitySelector({
      displayCurrentQuality: true,
    });
  }

  ngOnDestroy(): void {
    if (this.player != null) {
      this.player.dispose();
    }
  }
}


