import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  calendars = [
    {
      dayStr: '07.20  星期三',
      items: [
        {
          time: '17：00',
          title: '会议session',
          detail: '【JustinMind培训赋能第二期】主讲人：谢巧华；胡福；时间：2020年7月21日（周二）19:00-21:00；地点：U8-2-A08R；其他地域语音。',
          meetingType: 'type1',
          outerLink: 'http://servicecomb.apache.org'
        },
        {
          time: '17：00',
          title: '会议session',
          detail: '【JustinMind培训赋能第二期】主讲人：谢巧华；胡福；时间：2020年7月21日（周二）19:00-21:00；地点：U8-2-A08R；其他地域语音。',
          meetingType: 'type2'
        }
      ]
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
