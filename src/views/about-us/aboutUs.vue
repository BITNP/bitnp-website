<script setup>
import { ref } from 'vue';
import { NSpace, NGridItem, NGrid, NButton, NImage, NIcon, NAnchor } from 'naive-ui';
import Neos from '@vicons/fa/Neos'
import Chess from '@vicons/fa/Chess'
import DrawImage20Regular from '@vicons/fluent/DrawImage20Regular'
import ConstructOutline from '@vicons/ionicons5/ConstructOutline'
import CodeOutlined from '@vicons/antd/CodeOutlined'
import ContainerServices from '@vicons/carbon/ContainerServices'
import HomeRepairServiceOutlined from '@vicons/material/HomeRepairServiceOutlined'
import Video from '@vicons/carbon/Video'
import HandshakeRegular from '@vicons/fa/HandshakeRegular'
const glassColor = "rgba(255, 255, 255, 0.91)";
const glassAnimationDurationSec = 0.67;
const showRail = ref(false);



window.addEventListener("scroll", function () {
    if (window.scrollY > 3) {
        document.getElementById("background-decorator")
            .className = "glass-appearing";
        showRail.value = true;
        // console.log("background-decorator class property: " + document.getElementById("background-decorator").className);
    }
    else {
        document.getElementById("background-decorator")
            .className = "glass-disappearing";
        showRail.value = false;
        // console.log("background-decorator class property: " + document.getElementById("background-decorator").className);
    }
});
</script>

<template>
    <div id="background-container">
        <div class="glass" id="background-decorator">
            <div style="margin:0px 100px 0px 100px; padding-top:30%; padding-bottom: 100px;">

                <div class="introduction-container" style="margin-bottom: 90px;">
                    <n-icon size="50">
                        <Neos />
                    </n-icon>
                    <span class="introduction-title">
                        网络开拓者协会</span>
                    <span class="introduction-content">
                        (Net Pioneer Association of
                        BIT，以下简称网协)，成立于1997年，是北京理工大学校内规模最大的社团之一，本着“网络无限，开拓不懈”的精神，不断摸索、引领校园网络建设，后成为校团委领导的全校唯一IT类学生组织。经过20年的不断成长，各项规章制度和硬件设备基本完善，成长为北理最大的网络服务提供团体，拥有每日最高的访问量，从学校学生工作，到日常娱乐服务，协会的服务范围仍然在继续的扩大。同时，协会自身也在不断努力的增强实力，拓展业务。
                    </span>
                </div>

                <div style="margin-bottom: 55px;">
                    <n-grid cols="3" x-gap="45px" y-gap="55px">
                        <n-grid-item offset="0" span="1">
                            <n-space justify="start">

                                <div class="introduction-container">
                                    <n-icon size="50">
                                        <HomeRepairServiceOutlined />
                                    </n-icon>

                                    <span class="introduction-title" style="display:block; margin-bottom: 15px;">
                                        服务</span>
                                    <n-anchor :show-rail="showRail">
                                        <span class="introduction-content" style="display:block; margin-left: 20px;">
                                            作为北京理工大学校团委领导的唯一校级IT类学生组织，秉持“网络无限，开拓不懈”的宗旨，坚定“不仅是代码与技术，更有思考与情怀”的信念，不断摸索、引领校园网络建设。有专业服务器和独立机房，为在校师生提供专业的校园网络咨询资讯，网络开发和维护技术教学，计算机设备故障咨询等服务。
                                        </span>
                                    </n-anchor>
                                </div>
                            </n-space>
                        </n-grid-item>

                        <n-grid-item offset="0" span="1">
                            <n-space justify="start">

                                <div class="introduction-container">
                                    <n-icon size="50">
                                        <Video />
                                    </n-icon>

                                    <span class="introduction-title" style="display:block; margin-bottom: 15px;">
                                        直播</span>
                                    <n-anchor :show-rail="showRail">
                                        <span class="introduction-content" style="display:block; margin-left: 20px;">
                                            NPLive是网协自主开发和维护的一套校园网直播系统，运用网协搭建的高可用高拓展性的视频流分发系统，不仅可以向校园网用户提供免流量高清视频直播服务，同时也可以在自主开发的外网平台上提供直播服务。与学电合作负责直播深秋歌会，军理课，毕业晚会，火红的青春五四舞蹈展演，北湖音乐节等学校大型活动；也与足协等组织合作提供球赛直播等服务。
                                        </span>
                                    </n-anchor>
                                </div>
                            </n-space>
                        </n-grid-item>

                        <n-grid-item offset="0" span="1">
                            <n-space justify="start">

                                <div class="introduction-container">
                                    <n-icon size="50">
                                        <HandshakeRegular />
                                    </n-icon>

                                    <span class="introduction-title" style="display:block; margin-bottom: 15px;">
                                        合作</span>
                                    <n-anchor :show-rail="showRail">
                                        <span class="introduction-content" style="display:block; margin-left: 20px;">
                                            网协现有各类技术骨干43名，部员100余人，微信公众号关注量5000以上。涉猎广泛，可进行服务器开发，网页设计，安卓&IOS开发，可承接各类外场活动，微信软文推广，文化活动企划，欢迎合作咨询。
                                        </span>
                                    </n-anchor>
                                </div>
                            </n-space>
                        </n-grid-item>

                    </n-grid>
                </div>

                <div style="margin-top: 200px;">
                    <div class="introduction-container" style="margin-bottom: 90px;">
                        <span class="introduction-title" style="font-size: 62px;">
                            组织结构</span>
                    </div>


                    <div style="margin-bottom: 90px;">
                        <n-grid cols="2" x-gap="150px" y-gap="55px">

                            <n-grid-item offset="0" span="1">
                                <n-space justify="start">
                                    <div class="introduction-container">
                                        <n-icon size="50">
                                            <Chess />
                                        </n-icon>
                                        <span class="introduction-title">
                                            主席团</span>
                                        <span class="introduction-content">
                                            ，网协的核心管理层，主要的职能有：统筹兼顾网协的发展规划，选择取舍适合的项目及方向；在各个部门之间进行串联，团结成员关系，提高组织凝聚力；主席团成员也会按照自己的技术能力，参与各个项目的进行；并且，主席团成员也会为大家讲授课程，帮助大家了解更多与网络有关的技术知识，管理网协活动正常有序进行。
                                        </span>
                                    </div>
                                </n-space>
                            </n-grid-item>

                            <n-grid-item offset="0" span="1">
                                <n-space justify="start">
                                    <div class="introduction-container">
                                        <n-icon size="50">
                                            <DrawImage20Regular />
                                        </n-icon>
                                        <span class="introduction-title">
                                            数字媒体部</span>
                                        <span class="introduction-content">
                                            ，昵称「树莓」，非典型技术部门。不止关注技术本身，而是着眼于新媒体运营、宣传造势、做与人有关，与美有关的事业。在这里，你可以得到基础的PS、AE、PR软件使用培训，掌握微信公众号等新媒体平台的运作经营、学习信息传媒和艺术设计的基本知识。如果你不甘心成为一个程序猿，如果你对于美已然自有见解，如果你想体验技术之外的磅礴力量，请加入我们。
                                        </span>
                                    </div>
                                </n-space>
                            </n-grid-item>
                        </n-grid>
                    </div>

                    <div style="margin-bottom: 55px;">
                        <n-grid cols="3" x-gap="105px" y-gap="55px">
                            <n-grid-item offset="0" span="1">
                                <n-space justify="start">
                                    <div class="introduction-container">
                                        <n-icon size="50">
                                            <ConstructOutline />
                                        </n-icon>
                                        <span class="introduction-title">
                                            电脑诊所</span>
                                        <span class="introduction-content">
                                            ，北理唯一一个专业维修以及推荐电脑和手机的部门。我们在徐特立图书馆有一个自己独立的阅览室——三楼自然科学第二阅览室311G。加入我们，你可以碰到会修各种电脑小问题的部长们，以及会各种编程语言以及debug的大神们，同时也会遇到各种各样的妹子来向你寻求帮助。同时，这里也可以给你提供一个能够亲自动手实践，亲自遇到问题并亲自解决的平台，这里可以让你增强动手能力，也可以让你增强交际能力。懂得更多，遇到更多，学到更多，就在北理网协电脑诊所。
                                        </span>
                                    </div>
                                </n-space>
                            </n-grid-item>

                            <n-grid-item offset="0" span="1">
                                <n-space justify="start">
                                    <div class="introduction-container">
                                        <n-icon size="50">
                                            <CodeOutlined />
                                        </n-icon>
                                        <span class="introduction-title">
                                            技术部</span>
                                        <span class="introduction-content">
                                            ，作为网络开拓者协会最大部门之一，一直是协会内技术精英、高干的聚集地。技术部以分享、创新、完善、发展技术为理念，最主要的任务就是为网协提供技术支持。参加技术部，技术部提供基础的C语言讲座，进阶的unity游戏制作和安卓端APP开发，还有亲自参与制作项目的机会。技多不压身，技术部也和诊所合作，为学习系统维护和硬件组装提供平台。在网协学习技术的过程中，没有持之以恒的毅力和踏实肯干的性格是很难做好的。技术并不是照猫画虎的模仿，研究技术是学生在校学习中对能力发展的一大助力。
                                        </span>
                                    </div>
                                </n-space>
                            </n-grid-item>

                            <n-grid-item offset="0" span="1">
                                <n-space justify="start">
                                    <div class="introduction-container">
                                        <n-icon size="50">
                                            <ContainerServices />
                                        </n-icon>
                                        <span class="introduction-title">
                                            组织部</span>
                                        <span class="introduction-content">
                                            ，网络开拓者协会的很重要的部门，内外兼修，掌管着网协的经济大权。内负责与各部门之间的交流合作以及一些日常事务的管理如人员考核，会议记录，内部活动策划，最重要的是我们也管理经济支出。外负责联系社会和学校，主要是拉赞助为网协的一些活动筹集资金，是我们接触社会，了解社会，融入社会的锻炼平台。如果你觉得自己交际能力和语言表达能力还不错，想在一个技术氛围浓厚的组织提升自己的能力，那么组织部将是你的不二选择，欢迎加入我们！
                                        </span>
                                    </div>
                                </n-space>
                            </n-grid-item>
                        </n-grid>
                    </div>
                </div>

            </div>

        </div>
    </div>
</template>

<style scoped>
.introduction-container {
    text-align: start;
}

.introduction-title {
    font: 35px Karla, 'Helvetica Neue', Helvetica, Arial, sans-serif;
}

.introduction-content {
    margin-top: 0;
    font: 1.3rem Karla, 'Helvetica Neue', Helvetica, Arial, sans-serif;
}

#background-container {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -2;

    background-image: url(./assets/about-us-background-image.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
}

/* #background-container {
    --glass-color: rgba(237, 237, 237, 0.91);
    --glass-animation-duration: 0.8s;
} */

.glass {
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;

    background-color: rgba(237, 237, 237, 0);
}

.glass-appearing {
    top: 0;
    left: 0;
    background-color: v-bind(glassColor);
    width: 100%;
    height: 100%;
    z-index: -1;

    animation-name: glass-appearing;
    animation-duration: v-bind(glassAnimationDurationSec + "s");
    animation-iteration-count: 1;
    animation-timing-function: ease;
}

@keyframes glass-appearing {
    from {
        background-color: rgba(237, 237, 237, 0);
    }

    to {
        background-color: v-bind(glassColor);
    }
}

.glass-disappearing {
    top: 0;
    left: 0;
    background-color: rgba(237, 237, 237, 0);
    width: 100%;
    height: 100%;
    z-index: -1;
    animation-name: glass-disappearing;
    animation-duration: v-bind(glassAnimationDurationSec + "s");
    animation-iteration-count: 1;
}


@keyframes glass-disappearing {
    from {
        background-color: v-bind(glassColor);
    }

    to {
        background-color: rgba(237, 237, 237, 0);
    }
}
</style>