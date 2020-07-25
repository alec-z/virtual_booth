import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() title: string;
  @Input() subTitle: string;
  @Input() detail: string;
  @Input() logo: string;
  @Input() backgroundImage: string;
  @Input() project: string;
  constructor() { }

  ngOnInit(): void {
  }

}
