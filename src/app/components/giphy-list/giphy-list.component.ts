import { Component, OnInit } from '@angular/core';
import { GifModel } from 'src/app/interfaces/gif.model';
import { GiphyParams } from 'src/app/interfaces/gihpy-params.model';
import { GiphyService } from 'src/app/services/giphy.service';
import { clean } from 'src/app/utils/utils';

@Component({
  selector: 'app-giphy-list',
  templateUrl: './giphy-list.component.html',
  styleUrls: ['./giphy-list.component.scss'],
})
export class GiphyListComponent implements OnInit {
  images: GifModel[] = [];
  request: GiphyParams = {
    limit: 9,
    offset: 0,
  };
  isFetchDone: boolean = false;
  constructor(private service: GiphyService) {}

  ngOnInit(): void {
    this.getImages();
  }

  getImages(data: any = {}): void {
    this.service.get(clean(this.request)).subscribe((response) => {
      if (response.data && !response.data.length) {
        this.isFetchDone = true;
        return;
      }

      if (this.request.offset && this.request.offset >= 9) {
        this.images.push(...response.data);
        return;
      }

      this.images = response.data;
    });
  }

  fetchNext(): void {
    this.request.offset = !this.request.offset ? 9 : (this.request.offset += 9);
    this.getImages();
  }

  searchImages(): void {
    this.reset();
    this.getImages();
  }

  reset(): void {
    this.request.limit = 9;
    this.request.offset = 0;
    this.isFetchDone = false;
  }
}
