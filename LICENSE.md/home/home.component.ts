import { Component, OnInit } from '@angular/core';
import { MemeService } from '../meme.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  memeI: any = "";
  constructor(private image: MemeService) { }

  ngOnInit() {
    this.image.getMeme().subscribe(
      res => {
        this.memeI = res['value'];
        console.log(this.memeI);
      }
    );
  }

}
