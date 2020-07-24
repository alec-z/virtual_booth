import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-normal-project',
  templateUrl: './normal-project.component.html',
  styleUrls: ['./normal-project.component.scss']
})
export class NormalProjectComponent implements OnInit {
  @Input() logo: string;
  @Input() logoWidth: string;
  @Input() title: string;
  @Input() detail: string;

  constructor() { }

  ngOnInit(): void {
  }

}
