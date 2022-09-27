<script setup>
import {NGrid,NGi,NImage,NSpace,NButton,NIcon,NCarousel,NTimeline,NTimelineItem} from 'naive-ui'
import CategoryOutlined from '@vicons/material/CategoryOutlined'
import IosLink from '@vicons/ionicons4/IosLink'
import LinkSquare16Filled from "@vicons/fluent/LinkSquare16Filled";
const newsInfo=[
  {
  imgHref:'https://bitnp-website-1258614279.cos.ap-beijing.myqcloud.com/static/temp_news.png',
  mTitle:'网络开拓者协会招新啦！',
  time:'2022/09/21',
  link:'https://mp.weixin.qq.com/s/GjDWeFZPbO20N_z_go2jeg',
  context: '网络开拓者协会（Net Pioneer Association of BIT），成立于1997年，是目前北京理工大学校内规模最大的校级学生组织之一，同时也是校团委领导的唯一校级IT类学生组织。\n 本着“网络无限，开拓不懈”的精神，网协不断助力校园网络和信息化建设。\n' +
      '\n' +
      '目前，网协对内开展应用开发、网络维护、计算机维护等教学，对外为校内师生提供校园网络咨询、计算机故障排查等服务；同时运营有NPLive直播平台、国防知识竞赛答题系统等校内平台，并积极参与学校的各大活动。',
  },
  {
    imgHref:'https://bitnp-website-1258614279.cos.ap-beijing.myqcloud.com/static/temp_news3.webp',
    mTitle:'2022笔记本电脑选购指南',
    time:'2022/08/04',
    link:'https://mp.weixin.qq.com/s/wzz_1dOj8bbnlYbj89stZQ',
    context:'  这个暑假，诊所的小伙伴们通过各渠道的查询筛选和整理，制作出了2022年新生电脑推荐表。除此之外，数字媒体部还结合诊所整理出的推荐表制作了一期面向大一新生的笔记本电脑推荐视频，已由bilibili“网络开拓者”账号发布。',
  },
  {
    imgHref:'https://bitnp-website-1258614279.cos.ap-beijing.myqcloud.com/static/temp_news2.png',
    mTitle:'校园网使用指南',
    time:'2022/09/07',
    link:'https://mp.weixin.qq.com/s/NoPAY0TcB1hO5YSLfO7YDQ',
    context:'快来这里get校园网使用方法~~\n 这里教会大家如何给校园网充值、多种设备多种方式多种方式连接校园网（￣︶￣）↗　',
  },

];
const timelineInfo=[
  {
    header:'2022/09/07',
    body:{
      func:()=>{
        window.location.href='https://mp.weixin.qq.com/s/IbNrmcoBqNEIQDuZHs_S1A'
      },
      Mtitle:"网络安全宣传周系列活动",
      Stitle:"网络安全为人民，网络安全靠人民"
    }
  },
  {
    header:'2022/09/18 19:00',
    body:{
      func:()=>{
        window.location.href='https://mp.weixin.qq.com/s/36B06GpoZDfDpmF4TU0sIg'
      },
      Mtitle:"计算机知识科普讲座来啦",
      Stitle:"更有直播抽奖环节等你来哦~"
    }
  },
  {
    header:'2022/9/25 7:30-12:00',
    body:{
      func:()=>{
        window.location.href='https://mp.weixin.qq.com/s/GjDWeFZPbO20N_z_go2jeg'
      },
      Mtitle:"网协迎新外场活动~~",
      Stitle:"多种小游戏还有奖品即将到来( •̀ ω •́ )✧"
    }
  },
  {
    header:'2022/9/25 晚上',
    body:{
      func:()=>{
        window.location.href='#/'
      },
      Mtitle:"网协迎新宣讲会",
      Stitle:"快到群里来~~"
    }
  },
];
const GuideLinkInfo=[
  //  bit101
  {
    photo:"https://bitnp-website-1258614279.cos.ap-beijing.myqcloud.com/static/101.svg",
    mTitle:"BIT101",
    sTitle:"开放式的交流平台",
    links:()=>{
      window.location.href='https://bit101.cn/#/'
    },
    infos:[
      {
        titles:"101的简介",
        linkk:()=>{
          window.location.href="https://bitnp-website-1258614279.cos.ap-beijing.myqcloud.com/static/101shortcut.webp";
        }
      },
      {
        titles:"101背后的故事",
        linkk:()=>{
          window.location.href="https://bit101.cn/#/paper/show/1";
        }
      }
    ]
  },
  //  电脑诊所
  {
    photo:"https://bitnp-website-1258614279.cos.ap-beijing.myqcloud.com/static/clinic2.svg",
    mTitle:"电脑诊所",
    sTitle:"一个维修硬件的部门",
    links:()=>{
      window.location.href="https://clinic-bitnp-info-bit-edu-cn-6wehcsemw54w.ztna.dingtalk.com/lightapp/?corpId=ding5afe027889e9ac43acaaa37764f94726#";
    },
    infos:[
      {
        titles:"电脑推荐表",
        linkk:()=>{
          window.location.href="https://mp.weixin.qq.com/s/wzz_1dOj8bbnlYbj89stZQ";
        }
      },
      {
        titles:"可以从i北理或钉钉上预约哦~",
        linkk:()=>{
          // window.location.href="https://www.naiveui.com/zh-CN/light/components/statistic";
        }
      }
    ]
  },
  //  NPLive
  {
    photo:"https://bitnp-website-1258614279.cos.ap-beijing.myqcloud.com/static/live2.svg",
    mTitle:"NPLive",
    sTitle:"校内直播平台",
    links:()=>{
      window.location.href="https://live.bitnp.net/";
    },
    infos:[
      // {
      //   titles:"近期活动之类的",
      //   linkk:()=>{
      //     // window.location.href="https://www.naiveui.com/zh-CN/light/components/statistic";
      //   }
      // },
      // {
      //   titles:"近期活动之类的",
      //   linkk:()=>{
      //     // window.location.href="https://www.naiveui.com/zh-CN/light/components/statistic";
      //   }
      // }
    ]
  },
  //  镜像站
  {
    photo:"https://bitnp-website-1258614279.cos.ap-beijing.myqcloud.com/static/mirror.svg",
    mTitle:"Mirror",
    sTitle:"由网协运营的北理镜像站",
    links:()=>{
      window.location.href="https://mirror.bit.edu.cn/";
    },
    infos:[
      // {
      //   titles:"近期活动之类的",
      //   linkk:()=>{
      //     // window.location.href="https://www.naiveui.com/zh-CN/light/components/statistic";
      //   }
      // },
      // {
      //   titles:"近期活动之类的",
      //   linkk:()=>{
      //     // window.location.href="https://www.naiveui.com/zh-CN/light/components/statistic";
      //   }
      // }
    ]
  },
  //  thesis
  {
    photo:"https://bitnp-website-1258614279.cos.ap-beijing.myqcloud.com/static/thesis.svg",
    mTitle:"BIThesis",
    sTitle:"非官方 LaTeX 模板集合，包含本科、研究生毕业设计模板及更多",
    links:()=>{
      window.location.href="https://bithesis.bitnp.net";
    },
    infos:[
      // {
      //   titles:"近期活动之类的",
      //   linkk:()=>{
      //     // window.location.href="https://www.naiveui.com/zh-CN/light/components/statistic";
      //   }
      // },
      // {
      //   titles:"近期活动之类的",
      //   linkk:()=>{
      //     // window.location.href="https://www.naiveui.com/zh-CN/light/components/statistic";
      //   }
      // }
    ]
  },
  //  map
  {
    photo:"https://bitnp-website-1258614279.cos.ap-beijing.myqcloud.com/static/map.svg",
    mTitle:"校园地图",
    sTitle:"按图索骥，玩转北理",
    links:()=>{
      window.location.href="https://map.bitnp.net";
    },
    infos:[
      // {
      //   titles:"近期活动之类的",
      //   linkk:()=>{
      //     // window.location.href="https://www.naiveui.com/zh-CN/light/components/statistic";
      //   }
      // },
      // {
      //   titles:"近期活动之类的",
      //   linkk:()=>{
      //     // window.location.href="https://www.naiveui.com/zh-CN/light/components/statistic";
      //   }
      // }
    ]
  },
  //  wiki
  {
    photo:"https://bitnp-website-1258614279.cos.ap-beijing.myqcloud.com/static/wiki2.svg",
    mTitle:"Wiki",
    sTitle:"多人协作的创作系统",
    links:()=>{
      window.location.href="https://wiki.bitnp.net/";
    },
    infos:[
      // {
      //   titles:"使用引导",
      //   linkk:()=>{
      //     // window.location.href="https://www.naiveui.com/zh-CN/light/components/statistic";
      //   }
      // },
      // {
      //   titles:"近期活动之类的",
      //   linkk:()=>{
      //     // window.location.href="https://www.naiveui.com/zh-CN/light/components/statistic";
      //   }
      // }
    ]
  },
  //  Codimd
  {
    photo:"https://bitnp-website-1258614279.cos.ap-beijing.myqcloud.com/static/md.svg",
    mTitle:"Codimd",
    sTitle:"写作与分享 Markdown 的最佳平台",
    links:()=>{
      window.location.href="https://codimd.bitnp.net";
    },
    infos:[
      // {
      //   titles:"使用引导",
      //   linkk:()=>{
      //     // window.location.href="https://www.naiveui.com/zh-CN/light/components/statistic";
      //   }
      // },
      // {
      //   titles:"近期活动之类的",
      //   linkk:()=>{
      //     // window.location.href="https://www.naiveui.com/zh-CN/light/components/statistic";
      //   }
      // }
    ]
  }
];
</script>

<template>
<!--  <!DOCTYPE html>-->
  <div id="sec1_outer">
    <div id="sec1_bg">
      <div id="sec1_bg_in1">
        <img src="https://bitnp-website-1258614279.cos.ap-beijing.myqcloud.com/static/bb3.svg" id="bg_img_l" style="">
        <img src="https://bitnp-website-1258614279.cos.ap-beijing.myqcloud.com/static/bb3s.svg" id="bg_img_s" style="">
      </div>
    </div>
    <div id="sec1_bd">
      <div style="width: 90%;margin: 0 auto;">
        <n-grid style="height:100%;" cols="1 s:1 l:2" x-gap="0" y-gap="15" item-responsive responsive="screen">
          <n-gi span="1">
            <div class="left_fill"></div>
            <div class="left_main">
              <n-space justify="start">
                <span class="mainTitle">
                  <n-icon>
                    <svg t="1659711080568" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="9218" width="50" height="50"><path d="M512 512.09998m-413.919156 0a413.919156 413.919156 0 1 0 827.838312 0 413.919156 413.919156 0 1 0-827.838312 0Z" fill="#F0C48A" p-id="9219"></path><path d="M778.947862 299.141574l-52.589729-52.389768L812.141379 188.163249l25.195079 25.39504z" fill="#FFFFFF" p-id="9220"></path><path d="M816.540519 208.959188l-43.591486 43.591486 22.395626 22.395626 35.393088-51.789885z" fill="#D3E6F8" p-id="9221"></path><path d="M307.04403 363.477008l354.470768 354.470768-38.882406 38.884405-354.470767-354.470767zM649.701105 324.184683l51.184003 51.184003-94.731497 94.733497-51.184004-51.184003z" fill="#FFFFFF" p-id="9222"></path><path d="M658.629361 364.526803l26.156892 26.156892-63.201656 63.203655-26.158891-26.158891zM593.454091 640.908822l26.156891 26.156892-46.800859 46.802859-26.154892-26.158891zM381.365515 429.088194l26.154891 26.158891-46.798859 46.800859-26.156892-26.158891z" fill="#D3E6F8" p-id="9223"></path><path d="M622.778364 768.449912c-3.199375 0-5.998828-1.199766-8.198399-3.399336L260.049209 410.51982c-4.599102-4.599102-4.599102-11.997657 0-16.596758l38.792423-38.792423c4.599102-4.599102 11.997657-4.599102 16.596759 0L669.969147 709.661394c4.599102 4.599102 4.599102 11.997657 0 16.596759l-38.792424 38.792423c-2.399531 2.19957-5.398946 3.399336-8.398359 3.399336z m-337.933998-366.12849l337.933998 337.933997 22.195665-22.195665-337.933998-337.933997-22.195665 22.195665zM1011.30248 191.762546c-6.39875 0-11.797696-5.198985-11.797696-11.797695 0-86.183167-70.186292-156.369459-156.369459-156.369459-6.39875 0-11.797696-5.198985-11.797696-11.797696s5.198985-11.797696 11.797696-11.797696c99.180629 0 179.76489 80.584261 179.76489 179.76489 0.199961 6.598711-5.198985 11.997657-11.597735 11.997656z" fill="#4C4372" p-id="9224"></path><path d="M957.912908 191.762546c-6.39875 0-11.797696-5.198985-11.797696-11.797695 0-56.788908-46.190978-102.979887-102.979887-102.979887-6.39875 0-11.797696-5.198985-11.797696-11.797696s5.198985-11.797696 11.797696-11.797696c69.78637 0 126.375317 56.788908 126.375317 126.375318 0.199961 6.598711-4.999024 11.997657-11.597734 11.997656zM606.181605 481.705917c-2.999414 0-5.998828-1.199766-8.198399-3.399336l-51.190002-51.190002c-2.19957-2.19957-3.399336-5.198985-3.399336-8.198399s1.199766-5.998828 3.399336-8.198399l94.781488-94.781488c2.19957-2.19957 5.198985-3.399336 8.198399-3.399336s5.998828 1.199766 8.198399 3.399336l51.190002 51.190002c4.599102 4.599102 4.599102 11.997657 0 16.596759l-94.781488 94.781488c-2.19957 1.999609-5.198985 3.199375-8.198399 3.199375z m-34.593243-62.787737l34.593243 34.593244 78.18473-78.18473-34.593244-34.593244-78.184729 78.18473zM778.947862 310.93927c-2.999414 0-5.998828-1.199766-8.198399-3.399336L717.959773 254.950205c-2.399531-2.399531-3.799258-5.998828-3.399336-9.398164 0.399922-3.399336 2.19957-6.598711 4.999024-8.598321l85.783246-58.588557c4.599102-3.199375 10.997852-2.599492 14.99707 1.399727l25.39504 25.39504c3.999219 3.999219 4.599102 10.198008 1.399727 14.997071l-58.588557 85.783245c-1.999609 2.799453-5.198985 4.799063-8.598321 4.999024h-0.999804z m-34.393283-62.587776l32.593634 32.593634 44.991213-65.987112-11.597735-11.597735-65.987112 44.991213z" fill="#4C4372" p-id="9225"></path><path d="M846.734622 178.765085m-42.791642 0a42.791642 42.791642 0 1 0 85.583284 0 42.791642 42.791642 0 1 0-85.583284 0Z" fill="#FD919E" p-id="9226"></path><path d="M846.734622 233.154462c-13.997266 0-27.994532-5.398946-38.592462-15.996876-10.198008-10.198008-15.996876-23.995313-15.996876-38.592462 0-14.597149 5.598906-28.194493 15.996876-38.592462 21.19586-21.19586 55.789104-21.19586 77.184925 0 10.198008 10.198008 15.996876 23.995313 15.996875 38.592462 0 14.597149-5.598906 28.194493-15.996875 38.592462-10.59793 10.797891-24.595196 15.996876-38.592463 15.996876z m0-85.583284c-7.998438 0-15.996876 2.999414-21.995704 8.998242-5.798867 5.798867-9.198203 13.597344-9.198203 21.995704s3.199375 16.196837 9.198203 21.995704c12.197618 12.197618 31.79379 12.197618 43.991408 0 5.798867-5.798867 9.198203-13.597344 9.198204-21.995704s-3.199375-16.196837-9.198204-21.995704c-5.998828-5.798867-13.997266-8.998243-21.995704-8.998242z m30.394064 61.38801z" fill="#4C4372" p-id="9227"></path><path d="M401.221636 733.456747l-109.578598-109.578598c-14.597149-14.597149-14.597149-38.392501 0-52.989651l194.961922-194.961921c14.597149-14.597149 38.392501-14.597149 52.98965 0l109.578598 109.578598c14.597149 14.597149 14.597149 38.392501 0 52.98965l-194.961921 194.961922c-14.597149 14.597149-38.392501 14.597149-52.989651 0z" fill="#FD919E" p-id="9228"></path><path d="M408.220269 727.85784l-10.397969-10.397969 241.552822-241.552822 10.397969 10.39797c15.197032 15.197032 15.197032 39.992189 0 55.18922l-186.363601 186.363601c-15.197032 15.197032-39.792228 15.197032-55.189221 0z" fill="#E8677D" p-id="9229"></path><path d="M278.845538 746.054286c-22.395626-22.395626-22.395626-58.788518 0-81.384104l26.794767-26.794767 81.384104 81.384105-26.794766 26.794766c-22.395626 22.395626-58.788518 22.395626-81.384105 0z" fill="#7BABF1" p-id="9230"></path><path d="M319.637571 774.648701c-17.796524 0-35.393087-6.798672-48.990432-20.196055-26.994728-26.994728-26.994728-70.786175 0-97.780902l26.794767-26.794767c4.599102-4.599102 11.997657-4.599102 16.596758 0l81.384105 81.384105c2.19957 2.19957 3.399336 5.198985 3.399336 8.198399 0 3.199375-1.199766 5.998828-3.399336 8.198398l-26.794767 26.794767c-13.597344 13.397383-31.393868 20.196055-48.990431 20.196055z m-32.393673-36.792813c17.796524 17.796524 46.790861 17.796524 64.787346 0l18.596368-18.596368-64.787346-64.787347-18.596368 18.596368c-17.796524 17.796524-17.796524 46.990822 0 64.787347z" fill="#4C4372" p-id="9231"></path><path d="M427.616481 756.052334c-13.197422 0-25.595001-5.198985-34.793204-14.397189L283.244679 632.076548c-19.196251-19.196251-19.196251-50.390158 0-69.586409l194.961921-194.961922c9.398164-9.398164 21.595782-14.397188 34.793205-14.397188 13.197422 0 25.595001 5.198985 34.793204 14.397188l109.578598 109.578598c19.196251 19.196251 19.196251 50.390158 0 69.586409l-194.961921 194.961921c-9.198203 9.398164-21.595782 14.397188-34.793205 14.397189z m85.383324-379.325913c-6.598711 0-13.197422 2.599492-18.196446 7.598516l-194.961922 194.961921c-9.998047 9.998047-9.998047 26.394845 0 36.392892l109.578598 109.578598c4.799063 4.799063 11.397774 7.598516 18.196446 7.598516 6.798672 0 13.397383-2.599492 18.196446-7.598516l194.961922-194.961922c9.998047-9.998047 9.998047-26.394845 0-36.392892L531.196251 384.124976c-4.999024-4.999024-11.597735-7.398555-18.196446-7.398555z" fill="#4C4372" p-id="9232"></path><path d="M899.524312 387.324351c-72.785784 72.785784-190.762742 72.785784-263.548526 0-72.785784-72.785784-72.785784-190.762742 0-263.548526l263.548526 263.548526z" fill="#E8677D" p-id="9233"></path><path d="M617.579379 365.92853c72.985745 53.789494 176.165593 47.590705 242.152705-18.396407l-223.956259-223.956259c-65.787151 66.187073-71.98594 169.366921-18.196446 242.352666z" fill="#FD919E" p-id="9234"></path><path d="M767.750049 453.511424c-52.98965 0-102.579965-20.595977-140.172623-57.988675-77.184925-77.184925-77.184925-202.960359 0-280.145284 2.19957-2.19957 5.198985-3.399336 8.198399-3.399336 3.199375 0 5.998828 1.199766 8.198399 3.399336l263.948447 263.548526c2.19957 2.19957 3.399336 5.198985 3.399336 8.198399 0 3.199375-1.199766 5.998828-3.399336 8.198399-37.392697 37.592658-87.182972 58.188635-140.172622 58.188635zM636.175747 140.572544c-59.988284 68.586604-57.388791 173.166178 7.998438 238.553408s169.966803 67.986721 238.553407 7.998438L636.175747 140.572544z" fill="#4C4372" p-id="9235"></path><path d="M675.961976 610.696723l241.212888 241.214888-160.336684 160.338684L515.619293 771.035407z" fill="#D3E6F8" p-id="9236"></path><path d="M886.750806 825.698731l28.278477 28.276477-158.219097 158.219098-28.278477-28.278477zM808.104167 747.224058l28.278477 28.278477-158.217098 158.217098-28.278477-28.278477zM724.53049 663.556399l28.278477 28.278477-158.217098 158.217098-28.278477-28.278477z" fill="#A4CFF2" p-id="9237"></path><path d="M756.752197 1024c-3.199375 0-5.998828-1.199766-8.198399-3.399336L507.200937 779.447764c-4.599102-4.599102-4.599102-11.997657 0-16.596758l160.368678-160.368678c2.19957-2.19957 5.198985-3.399336 8.198399-3.399336s5.998828 1.199766 8.198399 3.399336l241.1529 241.152899c4.599102 4.599102 4.599102 11.997657 0 16.596759l-160.368678 160.368678c-1.999609 2.19957-4.999024 3.399336-7.998438 3.399336zM532.196055 771.049404l224.556142 224.556142 143.771919-143.77192L675.967975 627.277485l-143.77192 143.771919z" fill="#4C4372" p-id="9238"></path><path d="M596.183558 859.232181c-2.999414 0-5.998828-1.199766-8.198399-3.399336-4.599102-4.599102-4.599102-11.997657 0-16.596758l156.169498-156.169498c4.599102-4.599102 11.997657-4.599102 16.596759 0 4.599102 4.599102 4.599102 11.997657 0 16.596758l-156.169498 156.169498c-2.399531 2.19957-5.398946 3.399336-8.39836 3.399336zM680.367116 943.415739c-2.999414 0-5.998828-1.199766-8.198399-3.399336-4.599102-4.599102-4.599102-11.997657 0-16.596758l156.169498-156.169499c4.599102-4.599102 11.997657-4.599102 16.596759 0 4.599102 4.599102 4.599102 11.997657 0 16.596759L688.565515 940.016403c-2.19957 2.19957-5.198985 3.399336-8.198399 3.399336z" fill="#4C4372" p-id="9239"></path><path d="M836.936536 943.815661c-2.999414 0-5.998828-1.199766-8.198399-3.399336L587.585237 699.263425c-4.599102-4.599102-4.599102-11.997657 0-16.596758 4.599102-4.599102 11.997657-4.599102 16.596759 0l241.1529 241.152899c4.599102 4.599102 4.599102 11.997657 0 16.596759-2.399531 2.19957-5.398946 3.399336-8.39836 3.399336z" fill="#4C4372" p-id="9240"></path><path d="M172.980215 107.916922L414.195103 349.13181l-160.338684 160.338684L12.641531 268.257606z" fill="#D3E6F8" p-id="9241"></path><path d="M383.771045 322.91693l28.278477 28.278477-158.217099 158.219098-28.278477-28.278477zM305.264378 244.302285l28.278477 28.278477-158.219098 158.219097L147.04528 402.521383zM221.688701 160.634626l28.278477 28.278477L91.74808 347.132201l-28.278476-28.278477z" fill="#A4CFF2" p-id="9242"></path><path d="M253.85042 521.098223c-3.199375 0-5.998828-1.199766-8.198399-3.399336L4.499121 276.545987c-2.19957-2.19957-3.399336-5.198985-3.399336-8.198399 0-3.199375 1.199766-5.998828 3.399336-8.198398l160.368678-160.368678c4.599102-4.599102 11.997657-4.599102 16.596759 0l241.1529 241.152899c4.599102 4.599102 4.599102 11.997657 0 16.596759l-160.368678 160.368678c-2.19957 1.999609-5.198985 3.199375-8.39836 3.199375zM29.294278 268.347588l224.556142 224.556142 143.771919-143.77192L173.066198 124.575669l-143.77192 143.771919z" fill="#4C4372" p-id="9243"></path><path d="M93.281781 356.330404c-2.999414 0-5.998828-1.199766-8.198399-3.399336-4.599102-4.599102-4.599102-11.997657 0-16.596758L241.25288 180.164812c4.599102-4.599102 11.997657-4.599102 16.596759 0 4.599102 4.599102 4.599102 11.997657 0 16.596758l-156.169498 156.169498c-2.399531 2.399531-5.398946 3.399336-8.39836 3.399336zM177.465339 440.513962c-2.999414 0-5.998828-1.199766-8.198399-3.399336-4.599102-4.599102-4.599102-11.997657 0-16.596758l156.169498-156.169499c4.599102-4.599102 11.997657-4.599102 16.596759 0s4.599102 11.997657 0 16.596759l-156.169499 156.169498c-2.399531 2.19957-5.398946 3.399336-8.398359 3.399336z" fill="#4C4372" p-id="9244"></path><path d="M334.034759 440.913884c-2.999414 0-5.998828-1.199766-8.198399-3.399336L84.68346 196.361648c-4.599102-4.599102-4.599102-11.997657 0-16.596758 4.599102-4.599102 11.997657-4.599102 16.596759 0l241.1529 241.152899c4.599102 4.599102 4.599102 11.997657 0 16.596759-2.399531 2.399531-5.398946 3.399336-8.39836 3.399336z" fill="#4C4372" p-id="9245"></path></svg>
                  </n-icon>
                  网络无限
                  <!--                  <span style="font-size: 15px; font-family: Calibri;">-->
                  <!--                  > > > > > > > > > >-->
                  <!--                  </span>-->
                </span>
              </n-space>
              <n-space justify="end">
                <span  class="mainTitle">
                  开拓不懈
                </span>
              </n-space>
              <n-space justify="center">
                <span style="font-size: 35px; font-family: 'Open Sans script=all rev=2';">
                  Net Pioneer Association of BIT
                </span>
              </n-space>
              <div style="height: 4vh;"></div>
              <n-space justify="center">
                <n-button style="--n-font-size:20px;" size="large" ghost color="#9867c6" @click="$router.push('/about-us')">
                  Know More...
                </n-button>
              </n-space>
            </div>
          </n-gi>
          <n-gi id="ngrid_R" span="1">
                <div class="box" id="box_ele1">
                  <n-carousel
                      direction="horizontal"
                      dot-type="line"
                      dot-placement="bottom"
                      show-arrow="show-arrow"
                      autoplay
                  >
                    <div class="box_inner" v-for="ele in newsInfo">
                      <div class="box_img">
                        <img :src="ele.imgHref" style="object-fit: cover; width:100%; border-radius: 10px; height: auto; object-position: center;">
                      </div>
                      <div class="box_text">
                      <span class="box_tTitle">
                        {{ ele.mTitle }}
                      </span>
                        <br>
                        <div class="box_tGap">
                          <div class="box_tG_left">
                            {{ele.time}}
                          </div>
                          <div class="box_tG_right">
                            <a :href="ele.link">
                              Learn more>>>
                            </a>
                          </div>
                        </div>
                        <div class="box_tSub">
                          {{ele.context}}
                        </div>
                      </div>
                    </div>
                  </n-carousel>
                </div>
                <div class="box" id="box_ele2">
                  <div class="box_inner ADJ_center box_G" style="width: 85%!important;">
                    <n-timeline>
                      <n-timeline-item type="success" v-for="ele in timelineInfo">
                        <template #header>
                          {{ele.header}}
                        </template>
                        <template #default>
                        <span style="font-size: 18px;" class="TOa" @click="ele.body.func">
                          {{ ele.body.Mtitle }}
                          <n-icon>
                            <IosLink></IosLink>
                          </n-icon>
                        </span>
                          <br>
                          <span style="font-size: 11px; color: rgba(26,26,26,0.6)">
                          {{ele.body.Stitle}}
                        </span>
                        </template>
                      </n-timeline-item>
                    </n-timeline>
                  </div>
                </div>
                <div class="box" id="box_ele3">
                  <n-carousel
                      dot-type="line"
                      dot-placement="bottom"
                      direction="horizontal"
                      show-arrow="show-arrow"

                  >
                    <div class="box_inner" v-for="ele1 in GuideLinkInfo">
                      <div class="box_photo">
                        <img :src="ele1.photo">
                      </div>
                      <div class="box_Gtext">
                        <div class="box_Gtitle TOa" @click="ele1.links()">
                      <span style="color: #1a1a1a;">
                        {{ ele1.mTitle }}
                      </span>
                        </div>
                        <div class="box_GStitle">
                      <span style="color: rgba(26,26,26,0.75);">
                        {{ ele1.sTitle }}
                      </span>
                        </div>
                        <div class="box_Ginfos">
                          <div class="box_Ginfos_ele TOa" v-for="ele2 in ele1.infos" @click="ele2.linkk()">
                            <n-icon size="20" style="padding-top: 2px;">
                              <LinkSquare16Filled></LinkSquare16Filled>
                            </n-icon>
                            <span>
                        {{ ele2.titles }}
                        </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </n-carousel>
                </div>
          </n-gi>
        </n-grid>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "home3.vue"
}
</script>

<style scoped>
.n-grid{
  margin: 0 auto;
}
/* abhaya-libre-regular - latin */
/*@font-face {*/
/*  font-family: 'Abhaya Libre';*/
/*  font-style: normal;*/
/*  font-weight: 400;*/
/*  src: local(''),*/
/*  url('src/assets/fonts/abhaya-libre-v13-latin/abhaya-libre-v13-latin-regular.woff2') format('woff2'), !* Chrome 26+, Opera 23+, Firefox 39+ *!*/
/*  url('src/assets/fonts/abhaya-libre-v13-latin/abhaya-libre-v13-latin-regular.woff') format('woff'); !* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ *!*/
/*}*/
@font-face {
  font-family: 'Open Sans script=all rev=2';
  font-style: italic;
  font-weight: 400;
  /*font-stretch: 100%;*/
  src: url(https://fonts.gstatic.googlefonts.cn/l/font?kit=memtYaGs126MiZpBA-UFUIcVXSCEkx2cmqvXlWqmu1wC67KgoOs1tigPYH0V6YQ-UQF2qi4KK77cO4oTYOucnk78L7C6k8mDsAWRqLJuiezQI2ao2H2NQxFpJirwQiNIYxgemg3ZgrO_5asai-I8veG1gTCvsiHtRgQjCRbjHgHyNjFj606QE7CYnDi3zdFFdcntTSWFR_6K52vquAkcxUiYqvh25k8l0ZdXrQEuyOjb7vbWCmK7lfvuhlxdOP45OLRlDRmZGzf4tqWePziuy9xZ2djgV5QXtR_aNAK8bNokZjnPF9DKhT960rPMpJ4VOAYAVMrqs-1OzxxB84Fv6MePOUTeTO-iBAeFL75BITwZvsNROIgr9NBn9oK5ekT1-8hg26FVnsYtvBAkFiguK3iFdSnv246gmHzVIcpmDSt7XJjLKPDEvb4JtGKCtfU1v5xVNmcKFNv7uxix8wqVvsWtM1dcz4ovLKBZxgvr_IywKmcT_54mZ92LoNGAxkY_c-CQfSrVZko5lZ2W11zvUCITYK9BvKtCobXmMeiodNcJEWLyg9eqWIRtPYZ49QqP2tIPb9swvwShpRDiiLxA-HytsPKHZJdfuvce_eTl4VT_6cVzHVgl5AUzUiCazl1lPlZjIKoUUh-nS8ae5pL7THQsk66CV3o5WJlvngBbdSOYUVi2FMkn32yNI72weaHSoR92dUj-bWM_UvNVzGFuWgjQS0M&skey=743457fe2cc29280&v=v34) format('woff2');
}

@media only screen and (max-width:767px){
  #sec1_outer{
    height: 93vh;
    /*overflow-y;*/
  }
  #sec1_bg_in1{
    width: 100%;
    height: 35%;
    /*border-radius: 10px;*/
  }
  .left_fill{
    height: 2vh;
  }
  .mainTitle{
    font-size: 35px;
  }
  .left_main{
    width: 85%;
  }
  #bg_img_l{
    display: none;
  }
  .box{
    /*width: 85vw;*/
    width: 350px;
    height: 430px;
    /*margin-top: 20px;*/
    margin: 20px auto 0 auto;
  }
  #box_ele1{
    /*position: fixed;*/
    /*transform: translate(0px,0vh);*/
    z-index: 3;
  }
  #box_ele2{
    /*position: fixed;*/
    /*transform: translate(25vw,0vh);*/
    z-index: 2;
  }
  #box_ele3{
    /*position: fixed;*/
    /*transform: translate(48vw,0vh);*/
    z-index: 1;
  }
  #box_ele1:hover{

    /*transform: translate(0px,calc(0vh - 10px)) scale(1.05,1.05)!important;*/
    -webkit-filter: blur(0);
    backface-visibility: hidden;
    -webkit-font-smoothing: subpixel-antialiased;
  }
  #box_ele2:hover{
    /*transform: translate(23vw,calc(0vh - 10px)) scale(1.05,1.05)!important;*/
  }
  #box_ele3:hover{
    /*transform: translate(46vw,calc(0vh - 10px)) scale(1.05,1.05)!important;*/
  }
  .box_tTitle{
    font-size: 20px;
  }
  .box_G{
    overflow: scroll;
  }
}
@media only screen  and (min-width: 768px) and (max-width: 1280px){
  #sec1_outer{
    height: 93vh;
  }
  #sec1_bg_in1{
    width: 100%;
    height: 65%;
    /*border-radius: 10px;*/
  }
  .left_fill{
    height: 10vh;
  }
  .mainTitle{
    font-size: 7vw;
  }
  .left_main{
    width: 65%;
  }
  #bg_img_s{
    display: none;
  }
  .box{
    /*width: 40vw;*/
    width: 330px;
    height: 430px;
    /*aspect-ratio: 9/16;*/
    margin-top: 20px;
  }
  #ngrid_R{
    /*margin: 0 auto;*/
  }
  #box_ele1{
    position: fixed;
    transform: translate(0px,0vh) scale(0.995,0.995);
    z-index: 3;
  }
  #box_ele2{
    position: fixed;
    transform: translate(30vw,0vh) scale(0.995,0.995);
    z-index: 2;
  }
  #box_ele3{
    position: fixed;
    transform: translate(calc(90vw - 330px),0vh) scale(0.995,0.995);
    z-index: 1;
  }
  #box_ele1:hover{

    transform: translate(0px,calc(0vh - 10px)) scale(1.0,1.0)!important;
    -webkit-filter: blur(0);
    backface-visibility: hidden;
    -webkit-font-smoothing: subpixel-antialiased;
  }
  #box_ele2:hover{
    transform: translate(30vw,calc(0vh - 10px)) scale(1.0,1.0)!important;
  }
  #box_ele3:hover{
    transform: translate(calc(90vw - 340px),calc(0vh - 10px)) scale(1.0,1.0)!important;
  }
  .box_tTitle{
    font-size: 25px;
  }
  .box_G{
    overflow: scroll;
  }
}
@media only screen and (min-width:1280px){
  #sec1_outer{
    height: 92vh;
    overflow: auto;
  }
  #sec1_bg_in1{
    width: 100%;
    height: 100%;
    /*width: 90%;*/
    /*height: 95%;*/
    border-radius: 10px;
  }
  .left_fill{
    height: 18vh;
  }
  .mainTitle{
    font-size: 55px;
  }
  .left_main{
    width: 65%;
  }
  #bg_img_s{
    display: none;
  }
  .box{
    /*width: 18vw;*/
    width: 330px;
    /*aspect-ratio: 14/16;*/
    height: 430px;
  }
  #box_ele1{
    position: fixed;
    transform: translate(0px,28vh) scale(0.995,0.995);
    z-index: 3;
  }
  #box_ele2{
    position: fixed;
    transform: translate(13vw,18vh) scale(0.995,0.995);
    z-index: 2;
  }
  #box_ele3{
    position: fixed;
    transform: translate(26vw,8vh) scale(0.995,0.995);
    z-index: 1;
  }
  #box_ele1:hover{

    transform: translate(0px,calc(28vh - 10px)) scale(1.0,1.0)!important;
    -webkit-filter: blur(0);
    backface-visibility: hidden;
    -webkit-font-smoothing: subpixel-antialiased;
  }
  #box_ele2:hover{
    transform: translate(13vw,calc(18vh - 10px)) scale(1.0,1.0)!important;
  }
  #box_ele3:hover{
    transform: translate(26vw,calc(8vh - 10px)) scale(1.0,1.0)!important;
  }
  .box_tTitle{
    font-size: 25px;
  }
}
.TOa{
  cursor: pointer;
}
.TOa:hover{
  color: #4680FFFF!important;
}
.ADJ_center{
  display: flex;
  justify-items: center;
  align-items: center;
}
.cursorr{
  cursor: pointer;
}
#sec1_outer{
  width: 100%;
  /*background: rgba(61, 50, 50, 0.02);*/
  padding-top: 5px;
  overflow: hidden;
}
#sec1_bg{
  width: 100%;
  height: 100%;
  /*background: linear-gradient(135deg, rgba(90, 195, 245, 0.17) 50%, rgba(207, 236, 121, 0.46));*/
  /*background-position: 0 50%;*/
  overflow-x: hidden;
  overflow-y: visible;
}
#sec1_bg_in1{
  width: 100%;
  overflow: hidden;
  /*height: 100%;*/
  /*background-image: url("src/views/home/assets/bb3.svg");*/
  /*background-size:120% ;*/
  /*background-repeat: no-repeat;*/
  /*background-position: center;*/
}
#bg_img_l{
  margin: 0 auto;

  transform: translateY(-10%);
}
#bg_img_s{
  margin: 0 auto;
  width: 110%;
  height: 110%;
  transform: translateY(-18%) scale(120%);
}
#sec1_bd{
  /*background: saddlebrown;*/
  width: 100%;
  height: 100%;
  padding-bottom: 10px;
  transform: translateY(-100%);
  overflow: auto;
}
.mainTitle{
  font-family: sans-serif;
  font-weight: 500;
}
.left_main{
  margin: 0 auto;
  transform: translateX(2%);
}
.box{
  /*border-radius: 20px;*/
  /*border: 2px solid rgba(26, 26, 26, 0.39);*/
  display: grid;
  place-items: center;

  background-color: rgba(255, 255, 255, 0.75);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 2px solid rgba(239, 238, 238, 0.18);
  box-shadow: rgba(142, 142, 142, 0.19) 0px 6px 15px 0px;
  -webkit-box-shadow: rgba(142, 142, 142, 0.19) 0px 6px 15px 0px;
  border-radius: 15px;
  -webkit-border-radius: 15px;
  color: rgb(255, 255, 255);
  /*background: white;*/
  transition:0.4s cubic-bezier(.17,.67,.83,.67);
  backface-visibility: hidden;
  -webkit-font-smoothing: subpixel-antialiased;
}
.box:hover{
  z-index: 4!important;
  transition:0.4s cubic-bezier(.17,.67,.83,.67);
  box-shadow:
      2.4px 2.7px 2.8px -25px rgba(0, 0, 0, 0.013),
      6px 6.9px 6.2px -25px rgba(0, 0, 0, 0.019),
      12.2px 14px 11.8px -25px rgba(0, 0, 0, 0.024),
      25.2px 28.8px 25px -25px rgba(0, 0, 0, 0.033),
      69px 79px 98px -25px rgba(0, 0, 0, 0.07)!important;
  backface-visibility: hidden;
  -webkit-font-smoothing: subpixel-antialiased;
}
.box_inner{
  /*background: #535bf2;*/
  width: 93%;
  height: 93%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 5.5%;
  /*margin: 5px;*/
  overflow: hidden;
}
.box_img{
  width: 100%;
  height: auto;
  /*height: 42%;*/
  /*background: #21D4FD;*/
  overflow: hidden;
}
.box_text{
  width: 100%;
  height: 45%;
  margin-top: 8px;
  /*background: #535bf2;*/
  /*display: grid;*/
  /*place-items: end center;*/
}
.box_tTitle{
  font-family: Serif;
  text-align: center;
  font-weight: bold;
  color: #1a1a1a;
}
.box_tSub{
  width: 100%;
  /*height: 50%;*/
  white-space: pre-line;
  word-break: normal;
  overflow: hidden;
  -webkit-line-clamp: 6;
  display: -webkit-box;
  -webkit-box-orient: block-axis;
  /*white-space: nowrap;*/
  /*text-overflow: ellipsis;*/
  color: #1a1a1a;
}
.box_tGap{
  width: calc(100% - 10px);
  padding: 0;
  margin: 0 auto;
  /*height: 10px;*/
  border-bottom: 1px solid rgba(26, 26, 26, 0.18);

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
}
.box_tG_left{
  grid-area: 1 / 1 / 2 / 2;
  text-align: start;
  color: rgba(26, 26, 26, 0.54);
  /*font-weight: 500;*/
}
.box_tG_right{
  grid-area: 1 / 2 / 2 / 3;
  text-align: right;
  color: rgba(26, 26, 26, 0.54);
}
.n-carousel{
  --n-dot-color: rgba(211, 182, 182, 0.3)!important;
  --n-dot-color-focus: rgba(211, 182, 182, 0.5)!important;
  --n-dot-color-active: rgba(211, 182, 182, 1)!important;
  --n-dot-size: 8px;
  --n-dot-line-width: 16px;
  --n-dot-line-width-active: 24px;
  --n-arrow-color: #7a7a7a !important;
}
.box_photo{
  width: 90%;
  height: auto;
  margin: 0 auto;
  /*background: #535bf2;*/
}
.box_Gtext{
  /*margin-top: 5px;*/
  padding-top: 0;
}
.box_Gtitle {
  font-size: 25px;
  font-family: sans-serif;
}
.box_GStitle{
  font-family: sans-serif;
  font-size: 15px;
  margin-top: 5px;
}
.box_Ginfos{
  margin: 0 auto;
  width: 80%;
  text-align:left;
  color: #1a1a1a;
}
.box_Ginfos_ele{
  border-bottom: 1px solid rgba(0,0,0,0.43);
}
</style>