import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-filial',
  templateUrl: './filial.component.html',
  styleUrls: ['./filial.component.css'],
})
export class FilialComponent implements OnInit {
  constructor() {}

  @Input() logo!: string;
  @Input() estado!: string;
  @Input() url!: string;
  ngOnInit(): void {}
}
