import { Component, Input, OnInit } from '@angular/core';
import { GifModel } from 'src/app/interfaces/gif.model';

@Component({
  selector: 'app-giphy-image',
  templateUrl: './giphy-image.component.html',
  styleUrls: ['./giphy-image.component.scss']
})
export class GiphyImageComponent implements OnInit {
  @Input() giphy: GifModel | undefined;
  giphyImage: any;
  constructor() {}

  ngOnInit(): void {
    this.setImageStyle();
  }

  setImageStyle(): void {
    if (!this.giphy) return;

    this.giphyImage = {
      backgroundImage: `url(${this.giphy.images.fixed_height_downsampled.url})`,
      backgroundRepeat: 'no-repeat'
    };
  }
}
