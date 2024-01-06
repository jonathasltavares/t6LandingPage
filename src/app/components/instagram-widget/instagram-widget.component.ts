import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-instagram-widget',
  templateUrl: './instagram-widget.component.html',
  styleUrls: ['./instagram-widget.component.css'],
})
export class InstagramWidgetComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  ngAfterViewInit(): void {
    (<any>window).instgrm.Embeds.process();
  }
}
