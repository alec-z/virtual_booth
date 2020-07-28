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
  @Input() banner = 'linear-gradient(148deg, #A509D8 0%, rgba(88,121,224,0.00) 100%);';
  @Input() project: string;
  constructor() { }

  ngOnInit(): void {
  }

}
