import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-advertise',
  templateUrl: './advertise.component.html',
  styleUrls: ['./advertise.component.scss']
})
export class AdvertiseComponent implements OnInit {
  @Input() logo: string;
  @Input() title: string;
  @Input() outerLink: string;

  constructor() { }

  ngOnInit(): void {
  }

}
