<script setup>
import {reactive,onMounted} from "vue";
import {NGrid,NGi,NIcon,NSpace,NConfigProvider} from 'naive-ui'
import DataLine20Regular from '@vicons/fluent/DataLine24Regular'
import ArticleOutlined from '@vicons/material/ArticleOutlined'
import ObjectStorageAlt from '@vicons/carbon/ObjectStorageAlt'
import DateRangeOutlined from '@vicons/material/DateRangeOutlined'
import Airplay from '@vicons/carbon/Airplay'

import timeLine from './timeLine.vue'

function GuideClick(num){
  const tar=[
      'https://live.bitnp.net/',
      'https://clinic-bitnp-info-bit-edu-cn-6wehcsemw54w.ztna.dingtalk.com/lightapp/?corpId=ding5afe027889e9ac43acaaa37764f94726#',
      'https://mirror.bit.edu.cn/',
      'https://bithesis.bitnp.net/',
      'https://wiki.bitnp.net/',
      'https://codimd.bitnp.net'
  ];
  window.location.href=tar[num-1];
}

</script>

<template>
  <n-config-provider :theme-overrides="responseTheme">
    <div id="bdOut1">
      <n-space vertical>
        <n-space justify="center">
            <div style="" id="outer2">
              <div>
                <n-grid cols="8" item-responsive x-gap="8px" responsive="screen">
                  <n-gi span="8 s:8 l:5">
<!--                    main title-->
                    <div id="bdTitleOut">
                      <span id="titles">
                      <b>
                        <n-icon>
                          <svg t="1659711080568" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="9218" width="200" height="200"><path d="M512 512.09998m-413.919156 0a413.919156 413.919156 0 1 0 827.838312 0 413.919156 413.919156 0 1 0-827.838312 0Z" fill="#F0C48A" p-id="9219"></path><path d="M778.947862 299.141574l-52.589729-52.389768L812.141379 188.163249l25.195079 25.39504z" fill="#FFFFFF" p-id="9220"></path><path d="M816.540519 208.959188l-43.591486 43.591486 22.395626 22.395626 35.393088-51.789885z" fill="#D3E6F8" p-id="9221"></path><path d="M307.04403 363.477008l354.470768 354.470768-38.882406 38.884405-354.470767-354.470767zM649.701105 324.184683l51.184003 51.184003-94.731497 94.733497-51.184004-51.184003z" fill="#FFFFFF" p-id="9222"></path><path d="M658.629361 364.526803l26.156892 26.156892-63.201656 63.203655-26.158891-26.158891zM593.454091 640.908822l26.156891 26.156892-46.800859 46.802859-26.154892-26.158891zM381.365515 429.088194l26.154891 26.158891-46.798859 46.800859-26.156892-26.158891z" fill="#D3E6F8" p-id="9223"></path><path d="M622.778364 768.449912c-3.199375 0-5.998828-1.199766-8.198399-3.399336L260.049209 410.51982c-4.599102-4.599102-4.599102-11.997657 0-16.596758l38.792423-38.792423c4.599102-4.599102 11.997657-4.599102 16.596759 0L669.969147 709.661394c4.599102 4.599102 4.599102 11.997657 0 16.596759l-38.792424 38.792423c-2.399531 2.19957-5.398946 3.399336-8.398359 3.399336z m-337.933998-366.12849l337.933998 337.933997 22.195665-22.195665-337.933998-337.933997-22.195665 22.195665zM1011.30248 191.762546c-6.39875 0-11.797696-5.198985-11.797696-11.797695 0-86.183167-70.186292-156.369459-156.369459-156.369459-6.39875 0-11.797696-5.198985-11.797696-11.797696s5.198985-11.797696 11.797696-11.797696c99.180629 0 179.76489 80.584261 179.76489 179.76489 0.199961 6.598711-5.198985 11.997657-11.597735 11.997656z" fill="#4C4372" p-id="9224"></path><path d="M957.912908 191.762546c-6.39875 0-11.797696-5.198985-11.797696-11.797695 0-56.788908-46.190978-102.979887-102.979887-102.979887-6.39875 0-11.797696-5.198985-11.797696-11.797696s5.198985-11.797696 11.797696-11.797696c69.78637 0 126.375317 56.788908 126.375317 126.375318 0.199961 6.598711-4.999024 11.997657-11.597734 11.997656zM606.181605 481.705917c-2.999414 0-5.998828-1.199766-8.198399-3.399336l-51.190002-51.190002c-2.19957-2.19957-3.399336-5.198985-3.399336-8.198399s1.199766-5.998828 3.399336-8.198399l94.781488-94.781488c2.19957-2.19957 5.198985-3.399336 8.198399-3.399336s5.998828 1.199766 8.198399 3.399336l51.190002 51.190002c4.599102 4.599102 4.599102 11.997657 0 16.596759l-94.781488 94.781488c-2.19957 1.999609-5.198985 3.199375-8.198399 3.199375z m-34.593243-62.787737l34.593243 34.593244 78.18473-78.18473-34.593244-34.593244-78.184729 78.18473zM778.947862 310.93927c-2.999414 0-5.998828-1.199766-8.198399-3.399336L717.959773 254.950205c-2.399531-2.399531-3.799258-5.998828-3.399336-9.398164 0.399922-3.399336 2.19957-6.598711 4.999024-8.598321l85.783246-58.588557c4.599102-3.199375 10.997852-2.599492 14.99707 1.399727l25.39504 25.39504c3.999219 3.999219 4.599102 10.198008 1.399727 14.997071l-58.588557 85.783245c-1.999609 2.799453-5.198985 4.799063-8.598321 4.999024h-0.999804z m-34.393283-62.587776l32.593634 32.593634 44.991213-65.987112-11.597735-11.597735-65.987112 44.991213z" fill="#4C4372" p-id="9225"></path><path d="M846.734622 178.765085m-42.791642 0a42.791642 42.791642 0 1 0 85.583284 0 42.791642 42.791642 0 1 0-85.583284 0Z" fill="#FD919E" p-id="9226"></path><path d="M846.734622 233.154462c-13.997266 0-27.994532-5.398946-38.592462-15.996876-10.198008-10.198008-15.996876-23.995313-15.996876-38.592462 0-14.597149 5.598906-28.194493 15.996876-38.592462 21.19586-21.19586 55.789104-21.19586 77.184925 0 10.198008 10.198008 15.996876 23.995313 15.996875 38.592462 0 14.597149-5.598906 28.194493-15.996875 38.592462-10.59793 10.797891-24.595196 15.996876-38.592463 15.996876z m0-85.583284c-7.998438 0-15.996876 2.999414-21.995704 8.998242-5.798867 5.798867-9.198203 13.597344-9.198203 21.995704s3.199375 16.196837 9.198203 21.995704c12.197618 12.197618 31.79379 12.197618 43.991408 0 5.798867-5.798867 9.198203-13.597344 9.198204-21.995704s-3.199375-16.196837-9.198204-21.995704c-5.998828-5.798867-13.997266-8.998243-21.995704-8.998242z m30.394064 61.38801z" fill="#4C4372" p-id="9227"></path><path d="M401.221636 733.456747l-109.578598-109.578598c-14.597149-14.597149-14.597149-38.392501 0-52.989651l194.961922-194.961921c14.597149-14.597149 38.392501-14.597149 52.98965 0l109.578598 109.578598c14.597149 14.597149 14.597149 38.392501 0 52.98965l-194.961921 194.961922c-14.597149 14.597149-38.392501 14.597149-52.989651 0z" fill="#FD919E" p-id="9228"></path><path d="M408.220269 727.85784l-10.397969-10.397969 241.552822-241.552822 10.397969 10.39797c15.197032 15.197032 15.197032 39.992189 0 55.18922l-186.363601 186.363601c-15.197032 15.197032-39.792228 15.197032-55.189221 0z" fill="#E8677D" p-id="9229"></path><path d="M278.845538 746.054286c-22.395626-22.395626-22.395626-58.788518 0-81.384104l26.794767-26.794767 81.384104 81.384105-26.794766 26.794766c-22.395626 22.395626-58.788518 22.395626-81.384105 0z" fill="#7BABF1" p-id="9230"></path><path d="M319.637571 774.648701c-17.796524 0-35.393087-6.798672-48.990432-20.196055-26.994728-26.994728-26.994728-70.786175 0-97.780902l26.794767-26.794767c4.599102-4.599102 11.997657-4.599102 16.596758 0l81.384105 81.384105c2.19957 2.19957 3.399336 5.198985 3.399336 8.198399 0 3.199375-1.199766 5.998828-3.399336 8.198398l-26.794767 26.794767c-13.597344 13.397383-31.393868 20.196055-48.990431 20.196055z m-32.393673-36.792813c17.796524 17.796524 46.790861 17.796524 64.787346 0l18.596368-18.596368-64.787346-64.787347-18.596368 18.596368c-17.796524 17.796524-17.796524 46.990822 0 64.787347z" fill="#4C4372" p-id="9231"></path><path d="M427.616481 756.052334c-13.197422 0-25.595001-5.198985-34.793204-14.397189L283.244679 632.076548c-19.196251-19.196251-19.196251-50.390158 0-69.586409l194.961921-194.961922c9.398164-9.398164 21.595782-14.397188 34.793205-14.397188 13.197422 0 25.595001 5.198985 34.793204 14.397188l109.578598 109.578598c19.196251 19.196251 19.196251 50.390158 0 69.586409l-194.961921 194.961921c-9.198203 9.398164-21.595782 14.397188-34.793205 14.397189z m85.383324-379.325913c-6.598711 0-13.197422 2.599492-18.196446 7.598516l-194.961922 194.961921c-9.998047 9.998047-9.998047 26.394845 0 36.392892l109.578598 109.578598c4.799063 4.799063 11.397774 7.598516 18.196446 7.598516 6.798672 0 13.397383-2.599492 18.196446-7.598516l194.961922-194.961922c9.998047-9.998047 9.998047-26.394845 0-36.392892L531.196251 384.124976c-4.999024-4.999024-11.597735-7.398555-18.196446-7.398555z" fill="#4C4372" p-id="9232"></path><path d="M899.524312 387.324351c-72.785784 72.785784-190.762742 72.785784-263.548526 0-72.785784-72.785784-72.785784-190.762742 0-263.548526l263.548526 263.548526z" fill="#E8677D" p-id="9233"></path><path d="M617.579379 365.92853c72.985745 53.789494 176.165593 47.590705 242.152705-18.396407l-223.956259-223.956259c-65.787151 66.187073-71.98594 169.366921-18.196446 242.352666z" fill="#FD919E" p-id="9234"></path><path d="M767.750049 453.511424c-52.98965 0-102.579965-20.595977-140.172623-57.988675-77.184925-77.184925-77.184925-202.960359 0-280.145284 2.19957-2.19957 5.198985-3.399336 8.198399-3.399336 3.199375 0 5.998828 1.199766 8.198399 3.399336l263.948447 263.548526c2.19957 2.19957 3.399336 5.198985 3.399336 8.198399 0 3.199375-1.199766 5.998828-3.399336 8.198399-37.392697 37.592658-87.182972 58.188635-140.172622 58.188635zM636.175747 140.572544c-59.988284 68.586604-57.388791 173.166178 7.998438 238.553408s169.966803 67.986721 238.553407 7.998438L636.175747 140.572544z" fill="#4C4372" p-id="9235"></path><path d="M675.961976 610.696723l241.212888 241.214888-160.336684 160.338684L515.619293 771.035407z" fill="#D3E6F8" p-id="9236"></path><path d="M886.750806 825.698731l28.278477 28.276477-158.219097 158.219098-28.278477-28.278477zM808.104167 747.224058l28.278477 28.278477-158.217098 158.217098-28.278477-28.278477zM724.53049 663.556399l28.278477 28.278477-158.217098 158.217098-28.278477-28.278477z" fill="#A4CFF2" p-id="9237"></path><path d="M756.752197 1024c-3.199375 0-5.998828-1.199766-8.198399-3.399336L507.200937 779.447764c-4.599102-4.599102-4.599102-11.997657 0-16.596758l160.368678-160.368678c2.19957-2.19957 5.198985-3.399336 8.198399-3.399336s5.998828 1.199766 8.198399 3.399336l241.1529 241.152899c4.599102 4.599102 4.599102 11.997657 0 16.596759l-160.368678 160.368678c-1.999609 2.19957-4.999024 3.399336-7.998438 3.399336zM532.196055 771.049404l224.556142 224.556142 143.771919-143.77192L675.967975 627.277485l-143.77192 143.771919z" fill="#4C4372" p-id="9238"></path><path d="M596.183558 859.232181c-2.999414 0-5.998828-1.199766-8.198399-3.399336-4.599102-4.599102-4.599102-11.997657 0-16.596758l156.169498-156.169498c4.599102-4.599102 11.997657-4.599102 16.596759 0 4.599102 4.599102 4.599102 11.997657 0 16.596758l-156.169498 156.169498c-2.399531 2.19957-5.398946 3.399336-8.39836 3.399336zM680.367116 943.415739c-2.999414 0-5.998828-1.199766-8.198399-3.399336-4.599102-4.599102-4.599102-11.997657 0-16.596758l156.169498-156.169499c4.599102-4.599102 11.997657-4.599102 16.596759 0 4.599102 4.599102 4.599102 11.997657 0 16.596759L688.565515 940.016403c-2.19957 2.19957-5.198985 3.399336-8.198399 3.399336z" fill="#4C4372" p-id="9239"></path><path d="M836.936536 943.815661c-2.999414 0-5.998828-1.199766-8.198399-3.399336L587.585237 699.263425c-4.599102-4.599102-4.599102-11.997657 0-16.596758 4.599102-4.599102 11.997657-4.599102 16.596759 0l241.1529 241.152899c4.599102 4.599102 4.599102 11.997657 0 16.596759-2.399531 2.19957-5.398946 3.399336-8.39836 3.399336z" fill="#4C4372" p-id="9240"></path><path d="M172.980215 107.916922L414.195103 349.13181l-160.338684 160.338684L12.641531 268.257606z" fill="#D3E6F8" p-id="9241"></path><path d="M383.771045 322.91693l28.278477 28.278477-158.217099 158.219098-28.278477-28.278477zM305.264378 244.302285l28.278477 28.278477-158.219098 158.219097L147.04528 402.521383zM221.688701 160.634626l28.278477 28.278477L91.74808 347.132201l-28.278476-28.278477z" fill="#A4CFF2" p-id="9242"></path><path d="M253.85042 521.098223c-3.199375 0-5.998828-1.199766-8.198399-3.399336L4.499121 276.545987c-2.19957-2.19957-3.399336-5.198985-3.399336-8.198399 0-3.199375 1.199766-5.998828 3.399336-8.198398l160.368678-160.368678c4.599102-4.599102 11.997657-4.599102 16.596759 0l241.1529 241.152899c4.599102 4.599102 4.599102 11.997657 0 16.596759l-160.368678 160.368678c-2.19957 1.999609-5.198985 3.199375-8.39836 3.199375zM29.294278 268.347588l224.556142 224.556142 143.771919-143.77192L173.066198 124.575669l-143.77192 143.771919z" fill="#4C4372" p-id="9243"></path><path d="M93.281781 356.330404c-2.999414 0-5.998828-1.199766-8.198399-3.399336-4.599102-4.599102-4.599102-11.997657 0-16.596758L241.25288 180.164812c4.599102-4.599102 11.997657-4.599102 16.596759 0 4.599102 4.599102 4.599102 11.997657 0 16.596758l-156.169498 156.169498c-2.399531 2.399531-5.398946 3.399336-8.39836 3.399336zM177.465339 440.513962c-2.999414 0-5.998828-1.199766-8.198399-3.399336-4.599102-4.599102-4.599102-11.997657 0-16.596758l156.169498-156.169499c4.599102-4.599102 11.997657-4.599102 16.596759 0s4.599102 11.997657 0 16.596759l-156.169499 156.169498c-2.399531 2.19957-5.398946 3.399336-8.398359 3.399336z" fill="#4C4372" p-id="9244"></path><path d="M334.034759 440.913884c-2.999414 0-5.998828-1.199766-8.198399-3.399336L84.68346 196.361648c-4.599102-4.599102-4.599102-11.997657 0-16.596758 4.599102-4.599102 11.997657-4.599102 16.596759 0l241.1529 241.152899c4.599102 4.599102 4.599102 11.997657 0 16.596759-2.399531 2.399531-5.398946 3.399336-8.39836 3.399336z" fill="#4C4372" p-id="9245"></path></svg>
                        </n-icon>
                        <span class=""
                              style="text-shadow: 1px 1px 2px rgba(75,75,75,0.42);"
                        >
<!--                          background-image: linear-gradient(119deg, #662df4 0%, #0a59d7 24%, #c85087 63%, #f6ac2c 100%);-->
                        Let's wander and immerse <br> &nbsp; &nbsp; &nbsp; in the sea of technologies.
                        </span>
                      </b>
                    </span>
                      <br>
                      <div id="bdStastics">
                        <n-grid cols="2 s:4 l:4" item-responsive x-gap="8" responsive="screen">
                          <n-gi span="1">
                            <n-space justify="center">
                              <div style="max-width: 100%">
                                <n-icon size="25" color="#096FE0FF">
                                  <DataLine20Regular />
                                </n-icon>
                                <span class="StasticsTitle" style="color: ">累计访问：</span><br>
                                <span class="StasticsNumber fontIngerdient"
                                      style="background-image: linear-gradient( 109.6deg,  rgba(61,245,167,1) 11.2%, rgba(9,111,224,1) 91.1% );"
                                >
                                  10045
                                </span>
                                <span class="StasticsUnits">人</span>
                              </div>
                            </n-space>
                          </n-gi>
                          <n-gi span="1">
                            <n-space justify="center">
                              <div style="max-width: 100%">
                                <n-icon size="25" color="	#1E90FF">
                                  <ArticleOutlined/>
                                </n-icon>
                                <span class="StasticsTitle">文章总数：</span><br>
                                <span class="StasticsNumber fontIngerdient"
                                      style="background-image: linear-gradient(90deg, #21D4FD 0%, #B721FF 100%);"
                                >
                                  105
                                </span>
                                <span class="StasticsUnits">篇</span>
                              </div>
                            </n-space>
                          </n-gi>
                          <n-gi span="1">
                            <n-space justify="center">
                              <div style="max-width: 100%">
                                <n-icon size="25" color="#8D4FFE">
                                  <ObjectStorageAlt/>
                                </n-icon>
                                <span class="StasticsTitle">资源总量：</span><br>
                                <span class="StasticsNumber fontIngerdient"
                                      style="background-image: linear-gradient(90deg, rgba(96,65,208,0.94) 0%, #C850C0 46%, #FFCC70 100%);"
                                >
                                  105
                                </span>
                                <span class="StasticsUnits">GB</span>
                              </div>
                            </n-space>
                          </n-gi>
                          <n-gi span="1">
                            <n-space justify="center">
                              <div style="max-width: 100%">
                                <n-icon size="25" color="#DB4D00">
                                  <DateRangeOutlined/>
                                </n-icon>
                                <span class="StasticsTitle">诊所预约：</span><br>
                                <span class="StasticsNumber fontIngerdient"
                                      style="background-image: linear-gradient( 69.7deg,  rgba(244,37,243,1) 1.4%, rgba(244,87,1,1) 36.2%, rgba(255,204,37,1) 72.2%, rgba(20,196,6,1) 113% );"
                                >
                                  15
                                </span>
                                <span class="StasticsUnits">人</span>
                              </div>
                            </n-space>
                          </n-gi>
                        </n-grid>
                        <div id="line"></div>
                      </div>
                    </div>
                  </n-gi>
<!--                    timeline-->
                  <n-gi span="0 s:0 l:3">
                    <div id="TimelineOut" style="" >
                      <time-line></time-line>
                    </div>
                  </n-gi>
                </n-grid>
              </div>
            </div>
        </n-space>
        <n-space justify="center">
          <!--          guides-->
          <div id="outer3">
            <n-grid cols="2 m:3 l:6" x-gap="26" y-gap="26" item-responsive responsive="screen">
              <!--                NPLive-->
              <n-gi offset="0" span="1">
                <div class="card-ele guideHover" @click="$emit('click',GuideClick(1))">
                  <n-space vertical align="center">
                    <div>
                      <n-icon size="140" >
                        <!--                            <img src="src/views/home/assets/live.svg" alt="">-->
                        <img src="/src/views/home/assets/live2.svg">
                      </n-icon>
                    </div>
                    <span style="font-size: 22px;" >NPLive</span>
                    <span style="color: #1a1a1a">我们的校内直播平台</span>
                  </n-space>
                </div>
              </n-gi>
              <!--                Clinic-->
              <n-gi offset="0" span="1">
                <div class="card-ele guideHover" @click="$emit('click',GuideClick(2))">
                  <n-space vertical align="center" >
                    <div>
                      <n-icon size="140" >
                        <img src="/src/views/home/assets/clinic2.svg" alt="">
                      </n-icon>
                    </div>
                    <span style="font-size: 22px;">电脑诊所</span>
                    <span style="color: #1a1a1a">
                        一个专业维修电子设备的部门
                      <!--                        or:i北理-电脑义诊-->
                      </span>
                  </n-space>
                </div>
              </n-gi>
              <!--                Mirror-->
              <n-gi offset="0" span="1">
                <div class="card-ele guideHover" @click="$emit('click',GuideClick(3))">
                  <n-space vertical align="center" >
                    <div>
                      <n-icon size="140" >
                        <img src="/src/views/home/assets/mirror.svg" alt="">
                      </n-icon>
                    </div>
                    <span style="font-size: 22px;">软件镜像站</span>
                    <span style="color: #1a1a1a">各种软件哦~</span>
                  </n-space>
                </div>
              </n-gi>
              <!--                Thesis-->
              <n-gi offset="0" span="1">
                <div class="card-ele guideHover" @click="$emit('click',GuideClick(4))">
                  <n-space vertical align="center" >
                    <div>
                      <n-icon size="140" >
                        <img src="/src/views/home/assets/thesis.svg" alt="">
                      </n-icon>
                    </div>
                    <span style="font-size: 22px;">BIThesis</span>
                    <span style="color: #1a1a1a">校内论文写作互助平台</span>
                  </n-space>
                </div>
              </n-gi>
              <!--                Wiki-->
              <n-gi offset="0" span="1">
                <div class="card-ele guideHover" @click="$emit('click',GuideClick(5))">
                  <n-space vertical align="center" >
                    <div>
                      <n-icon size="140" >
                        <img src="/src/views/home/assets/wiki.svg" alt="">
                      </n-icon>
                    </div>
                    <span style="font-size: 22px;">Wiki</span>
                    <span style="color: #1a1a1a">多人协作的创作系统</span>
                  </n-space>
                </div>
              </n-gi>
              <!--                Md-->
              <n-gi offset="0" span="1">
                <div class="card-ele guideHover" @click="$emit('click',GuideClick(6))">
                  <n-space vertical align="center" >
                    <div>
                      <n-icon size="140" >
                        <img src="/src/views/home/assets/md.svg" alt="">
                      </n-icon>
                    </div>
                    <span style="font-size: 22px;">Codimd</span>
                    <span style="color: #1a1a1a">Markdown在线编辑与共享平台</span>
                  </n-space>
                </div>
              </n-gi>
            </n-grid>
          </div>
        </n-space>
      </n-space>
    </div>
  </n-config-provider>
</template>

<script>
import {defineComponent} from "vue";

const responseTheme={
  breakpoints:{s:767}
}

export default defineComponent({
  name: "bodys",
})
</script>

<style scoped>
@media only screen and (max-width:768px){
  #titles{
    font-size: 35px;
    word-break: keep-all;
  }
  .StasticsTitle{
    font-size: 20px;
    color: #4b4b4b;
  }
  #outer2{
    width: 87vw;
    /*height: 55vh;*/
    height: 60%;
  }
  #bdStastics{
    margin-top: 7vh;
    /*width: 65%;*/
  }
  .StasticsNumber{
    /*font-size: 8vw;*/
    font-size: 30px;
    margin-top: 1vw;
  }
  .StasticsUnits{
    font-size: 1vw;
  }
  .card-ele{
    height: 100%;
    width: 100%;
  }
  #bdOut1{
    height: 93vh;
  }
}
@media only screen  and (min-width: 768px) and (max-width: 1280px){
  #titles{
    font-size: 42px;
    word-break: keep-all;
  }
  .StasticsTitle{
    font-size: 20px;
    color: #4b4b4b;
  }
  #outer2{
    width: 87vw;
    /*height: 58vh;*/
    height: 60%;
  }
  #bdStastics{
    margin-top:10vh;
    /*width: 65%;*/
  }
  .StasticsNumber{
    /*font-size: 5vw;*/
    font-size: 40px;
    margin-top: 1vw;
  }
  .StasticsUnits{
    font-size: 3vw;
  }
  .card-ele{
    width: 100%;
    /*height: 14vw;*/
    /*height: 28vh;*/
  }
  #bdOut1{
    height: 93%;
  }
}
@media only screen and (min-width:1280px) {
  #titles{
    font-size: 6vmin;
    /*font-size: 55px;*/
    word-break: keep-all;
  }
  .StasticsTitle{
    font-size: 20px;
    color: #4b4b4b;
  }
  #outer2{
    width: 87vw;
    height: 62vh;
    /*height: 62%;*/
  }

  #bdStastics{
    margin-top: 22vh;
    /*width: 65%;*/
  }
  .StasticsNumber{
    /*font-size: 2vw;*/
    font-size: 40px;
    margin-top: 1vw;
  }
  .StasticsUnits{
    font-size: 1vw;
  }
  .card-ele{
    width: 100%;
    /*height: 14vw;*/
    /*height: 28vh;*/
  }
  #bdOut1{
    height: 93vh;
  }
}
#outer2{
  /*overflow: auto;*/
}
.fontIngerdient{
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.card-ele{
  padding: 10px;
  /*width: 13vw;*/
  /*height: 14vw;*/
  /*height: 14vw;!* ? *!*/
  border: 1.3px solid rgba(70, 54, 54, 0.17);
  border-radius: 10px;
  transition: all .3s;
  box-sizing: border-box;
  /*background: rgba(83, 91, 242, 0.51);*/
  text-align: center;
  bottom: 0;
}
.card-ele:hover{
  bottom: 6px;
  box-shadow: 0 12px 32px 4px rgba(237, 239, 245, 0.3),
              0 8px 20px rgba(237, 239, 245, 0.54);
  background-color: white;
}
#outer3{
  width: 87vw;
  height: 28vh;
  padding-top: 5px;
  /*background: #535bf2;*/
  overflow-y: auto;
}
#bdOut1{
  /*height: 93%;*/
  /*height: 93vh;*/
  width: 100%;
  overflow: hidden;
}
#bdTitleOut{
  padding-top: 4vw;
  padding-left: 10px;
  padding-right: 10px;
  text-align: left;
  background: transparent;
  z-index: 11;
}
#line{
  width: 100%;
  height: 2px;
  background: rgba(36, 36, 36, 0.55);
  margin-top: 0.85vw;
}
#TimelineOut{
  padding-top: 4vh;
  overflow: hidden;
  height: 80%;
  z-index: 20;
}
.guideHover:hover{
  color: #4680FFFF;
  cursor: pointer;

}
.guidePress:active{
  color: #1C81CFFF;
}
.n-gradient-text{
  font-size: inherit;
}
</style>