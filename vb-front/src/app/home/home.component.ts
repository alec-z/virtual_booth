import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  calendars = [
    {
      dayStr: '07.30  星期四',
      items: [
        {
          time: '15:15 - 15:30',
          title: '主题演讲：华为云：技术+产业双轮驱动 加速云原生创新 - 刘赫伟, 华为云容器域技术总监',
          detail: '主讲人：刘赫伟，华为云容器域技术总监',
          meetingType: 'type1',
          outerLink: 'http://www.itdks.com/Home/Act/apply?id=5235'
        },
        {
          time: '15:40 - 15:55',
          title: '以AI和大数据为例，将批处理功能引入Kubernetes',
          detail: '主讲人：马达，华为云容器批量计算首席架构师',
          meetingType: 'type1',
          outerLink: 'http://www.itdks.com/Home/Act/apply?id=5235'
        }
      ]
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
