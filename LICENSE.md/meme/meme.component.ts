import { Component, OnInit } from '@angular/core';
import { MemeService } from '../meme.service';

@Component({
  selector: 'app-meme',
  templateUrl: './meme.component.html',
  styleUrls: ['./meme.component.css']
})
export class MemeComponent implements OnInit {
  card: any[];
  constructor(private meme: MemeService) { }

  ngOnInit() {
   this.meme.getMeme().subscribe(
     res => {
       this.card = res.cards;
       console.log(res);
     }
   );
  }
}
