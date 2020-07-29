import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  calendars = [
    {
      dayStr: '基础软件与云原生专场 (07.30 星期四 10:00 - 12:00)',
      items: [
        {
          time: '10:00',
          title: 'iSulad轻量级容器引擎的裸金属实践',
          detail: '主讲人：蔡灏旻，华为iSula容器团队架构师；时间：10:00-10:40',
          meetingType: 'type1',
          outerLink: 'http://www.itdks.com/Home/Act/apply?id=5235'
        },
        {
          time: '10:40',
          title: '如何进一步加强容器安全启动',
          detail: '主讲人：卢景晓，华为iSula容器团队高级工程师；时间：10:40-11:20',
          meetingType: 'type1',
          outerLink: 'http://www.itdks.com/Home/Act/apply?id=5235'
        },
        {
          time: '11:20',
          title: 'Java垃圾回收技术的现状与趋势',
          detail: '主讲人：彭成寒，华为JDK团队架构师；时间：11:20-12:00',
          meetingType: 'type1',
          outerLink: 'http://www.itdks.com/Home/Act/apply?id=5235'
        }
      ]
    },
    {
      dayStr: '大会Day1：07.30  星期四',
      items: [
        {
          time: '15:15',
          title: '【主题演讲】华为云：技术+产业双轮驱动 加速云原生创新',
          detail: '主讲人：刘赫伟，华为云容器域技术总监；时间：15:15-15:30',
          meetingType: 'type1',
          outerLink: 'http://www.itdks.com/Home/Act/apply?id=5235'
        },
        {
          time: '15:40',
          title: '【闪电演讲】以AI和大数据为例，将批处理功能引入Kubernetes',
          detail: '主讲人：马达，华为云容器批量计算首席架构师；时间：15:40-15:55',
          meetingType: 'type1',
          outerLink: 'http://www.itdks.com/Home/Act/apply?id=5235'
        },
        {
          time: '17:00',
          title: 'Kubernetes SIG MultiCluster多云混合云领域发展趋势介绍',
          detail: '主讲人：任洪彩，华为云高级软件工程师；时间：17:00-17:30',
          meetingType: 'type1',
          outerLink: 'http://www.itdks.com/Home/Act/apply?id=5235'
        },
        {
          time: '17:40',
          title: 'KubeEdge：云原生边缘计算框架',
          detail: '主讲人：王泽锋，华为云云原开源负责人，Dave Chen，ARM高级工程师；时间：17:40-18:10',
          meetingType: 'type4',
          outerLink: 'http://www.itdks.com/Home/Act/apply?id=5238'
        },
        {
          time: '20:50',
          title: 'CNCF SIG-Runtime介绍',
          detail: '主讲人：马达，华为云容器批量计算首席架构师，Ricardo，乐天SRE经理；时间：20:50-21:20',
          meetingType: 'type4',
          outerLink: 'http://www.itdks.com/Home/Act/apply?id=5235'
        },
        {
          time: '21:30',
          title: '告别事件丢失：使用KubeEdge在不稳定的网络上管理工作负载',
          detail: '主讲人：徐飞，华为云高级软件工程师；时间：21:30-22:00',
          meetingType: 'type4',
          outerLink: 'http://www.itdks.com/Home/Act/apply?id=5238'
        }
      ]
    },
    {
      dayStr: 'MindSpore与云原生专场 (07.31 星期五 10:00 - 12:00)',
      items: [
        {
          time: '10:00',
          title: 'MindSpre和WebAssembly',
          detail: '主讲人：王辉，华为MindSpore高级工程师；时间：10:00-10:40',
          meetingType: 'type1',
          outerLink: 'http://www.itdks.com/Home/Act/apply?id=5239'
        },
        {
          time: '10:40',
          title: '如何进一步加强容器安全启动',
          detail: '主讲人：卢景晓，华为iSula容器团队高级工程师；时间：10:40-11:20',
          meetingType: 'type1',
          outerLink: 'http://www.itdks.com/Home/Act/apply?id=5239'
        },
        {
          time: '11:20',
          title: 'Java垃圾回收技术的现状与趋势',
          detail: '主讲人：彭成寒，华为JDK团队架构师；时间：11:20-12:00',
          meetingType: 'type1',
          outerLink: 'http://www.itdks.com/Home/Act/apply?id=5239'
        }
      ]
    },
    {
      dayStr: '大会Day2：07.31  星期五',
      items: [
        {
          time: '15:00',
          title: '【主题演讲】MindSpore助力全新云与AI原生生态系统',
          detail: '主讲人：黄之鹏，华为计算开源生态部副总监；时间：15:00-15:15',
          meetingType: 'type1',
          outerLink: 'http://www.itdks.com/Home/Act/apply?id=5239'
        },
        {
          time: '16:20',
          title: '极低开销和高性能的Serverless容器',
          detail: '主讲人：冯绍宝，华为云高级软件工程师；时间：16:20-16:50',
          meetingType: 'type3',
          outerLink: 'http://www.itdks.com/Home/Act/apply?id=5242'
        },
        {
          time: '17:00',
          title: '深入了解Volcano',
          detail: '主讲人：马达，华为云容器批量计算首席架构师，徐中虎，华为云高级软件工程师；时间：17:00-17:30',
          meetingType: 'type3',
          outerLink: 'http://www.itdks.com/Home/Act/apply?id=5242'
        },
        {
          time: '17:00',
          title: 'Thanos：轻松扩展Prometheus监控',
          detail: '主讲人：戴翔，华为云高级软件工程师；时间：17:00-17:30',
          meetingType: 'type1',
          outerLink: 'http://www.itdks.com/Home/Act/apply?id=5239'
        },
        {
          time: '20:10',
          title: '【闪电演讲】使用SODA和CSI进行卷扩容的最佳实践',
          detail: '主讲人：刘羽，华为高级软件工程师，SODA资深开发者；时间：20:10-20:25',
          meetingType: 'type1',
          outerLink: 'http://www.itdks.com/Home/Act/apply?id=5239'
        },
        {
          time: '21:30',
          title: 'Kubernetes SIG Instrumentation深入剖析集群监控',
          detail: '主讲人：任洪彩，华为云高级软件工程师；时间：21:30-22:00',
          meetingType: 'type1',
          outerLink: 'http://www.itdks.com/Home/Act/apply?id=5239'
        }
      ]
    },
    {
      dayStr: 'openGauss与云原生专场 (08.01 星期六 09:30 - 12:00)',
      items: [
        {
          time: '09:30',
          title: '自建社区？你要的容器基础设施都在这里',
          detail: '主讲人：向新勇，华为高级工程师；时间：09:00-10:00',
          meetingType: 'type1',
          outerLink: 'http://www.itdks.com/Home/Act/apply?id=5246'
        },
        {
          time: '10:00',
          title: 'openGauss：基于内存表(MOT)的极致性能探索和实践',
          detail: '主讲人：Vinoth Veeraraghavan，华为openGauss首席工程师；时间：10:00-10:40',
          meetingType: 'type1',
          outerLink: 'http://www.itdks.com/Home/Act/apply?id=5246'
        },
        {
          time: '10:50',
          title: 'ServiceComb ToolKit加速企业应用红微服务化改造的实践',
          detail: '主讲人：郑志鹏，华为开源软件部高级工程师；时间：10:50-11:20',
          meetingType: 'type1',
          outerLink: 'http://www.itdks.com/Home/Act/apply?id=5246'
        },
        {
          time: '11:20',
          title: '通过统一微服务治理平台整合spring cloud、ServiceComb与ServiceMesh',
          detail: '主讲人：田晓亮，华为云ServiceStage首席工程师；时间：11:20-12:00',
          meetingType: 'type1',
          outerLink: 'http://www.itdks.com/Home/Act/apply?id=5246'
        }
      ]
    },
    {
      dayStr: '大会Day3：08.01  星期六',
      items: [
        {
          time: '16:20',
          title: 'Kubernetes和服务网格在新冠期间助力在线协作',
          detail: '主讲人：张超盟，华为云应用服务网格架构师，谢飞，华为云高级软件工程师，时间：16:20-16:50',
          meetingType: 'type1',
          outerLink: 'http://www.itdks.com/Home/Act/apply?id=5235'
        },
        {
          time: '19:30',
          title: '【主题演讲】使用Kubernetres管理中国高速公路上的十万个边缘节点',
          detail: '主讲人：张琦，华为云智能边缘平台首席架构师，董晓龙，数软科技有限公司架构师，时间：19:30-19:45',
          meetingType: 'type1',
          outerLink: 'http://www.itdks.com/Home/Act/apply?id=5249'
        }
      ]
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  goToLink(url: string): void {
    window.open(url, '_blank');
  }

}
