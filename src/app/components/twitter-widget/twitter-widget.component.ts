import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-twitter-widget',
  templateUrl: './twitter-widget.component.html',
  styleUrls: ['./twitter-widget.component.css'],
})
export class TwitterWidgetComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  ngAfterViewInit(): void {
    (<any>window).twttr.widgets.load();
  }
}
