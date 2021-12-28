import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GifModel } from 'src/app/interfaces/gif.model';

import { GiphyImageComponent } from './giphy-image.component';

describe('GiphyImageComponent', () => {
  let component: GiphyImageComponent;
  let fixture: ComponentFixture<GiphyImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GiphyImageComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GiphyImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set giphy style and background image', () => {
    component.giphy = <GifModel>{
      images: { fixed_height_downsampled: { url: 'my_url' } }
    };
    component.setImageStyle();
    expect(component.giphyImage.backgroundImage).toEqual('url(my_url)');
    expect(component.giphyImage.backgroundRepeat).toEqual('no-repeat');
  });
});
