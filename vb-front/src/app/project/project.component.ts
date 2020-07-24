import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

  data = {
    header: {
      title: 'KubeEdge云端展厅',
      subTitle: 'HUAWEI Sponsor Virtual Booth',
      detail: '目前华为云云端展厅包括：KubeEdge，Volcano' +
        'MindSpore，openEuler，openLooKeng，SODA，openGauss，ServiceComb'
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
