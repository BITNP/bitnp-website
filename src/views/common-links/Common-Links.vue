<script setup>
  import { NButton,NDivider,NSpace,NLayout,NLayoutSider,NLayoutContent,NCard,NEllipsis,NH1,NH2,NH3,NH4,NH5,NH6} from 'naive-ui'



</script>

<template>
    <base target="_blank">
    <!-- 在新标签页中打开链接 -->

    <!-- 右边折叠的侧边栏README -->
    <n-layout has-sider sider-placement="right">
      <n-layout-content content-style="padding: 24px;">
        <n-h3>本网站的作用是提供一些学校常用的网址和简单的功能介绍，
          更详细全面的功能请亲自打开网站后找到“关于我们”或“组织介绍”，一个示例：<a href="/#/about-us" target="_blank">合理打广告</a>
        <br> 
        另外，一些网址可能需要使用校内网，但不用担心我们有<a href="https://webvpn.bit.edu.cn" target="_blank">资源控制访问系统</a>，
        即使是校外也仍然可以访问你所需要的网址
        <br>

        </n-h3>
      </n-layout-content>
      <n-layout-sider
        collapse-mode="transform"
        :collapsed-width="120"
        :width="240"
        :native-scrollbar="false"
        show-trigger="bar"
        content-style="padding: 24px;"
        bordered
      >
        <n-h2>README</n-h2>
      </n-layout-sider>
    </n-layout>

    <!-- 下面的都是左边折叠的侧边栏 -->
    <!-- 第一部分侧边栏 服务-->
    <n-layout has-sider>
      <n-layout-sider
        collapse-mode="transform"
        :collapsed-width="160"
        :width="180"
        show-trigger="bar"
        content-style="padding: 60px;"
        bordered
        font="60px"
      >
      <h2>服务</h2>
      </n-layout-sider>
      <n-layout-content content-style="padding: 24px;">
          <n-card title="校历" hoverable class="thumbnail">
            <!-- 悬浮卡片中的内容 -->
            <a href="https://jwc.bit.edu.cn/2019gb/jxrl/index.htm">教学日历</a>       
              <n-ellipsis expand-trigger="click" line-clamp="1" :tooltip="false">
               提供各个学期的上课及放假安排
              </n-ellipsis>
          </n-card>
          <n-card title="i北理" hoverable class="thumbnail">
            <a href="https://i.bit.edu.cn/EIP/nonlogin/homePage.htm">智慧北理</a>
              <n-ellipsis expand-trigger="click" line-clamp="1" :tooltip="false">
               即网站版的i北理,可在此下载i北理,并且基本提供i北理的所有服务
              </n-ellipsis>
          </n-card>
          <n-card title="学指" hoverable class="thumbnail">
            <a href="http://xyzd.info.bit.edu.cn/">学业指导</a>
              <n-ellipsis expand-trigger="click" line-clamp="1" :tooltip="false">
               中心，可提供一对一辅导
              </n-ellipsis>
          </n-card>
      </n-layout-content>
    </n-layout>

    <!-- 第二部分侧边栏 教学-->
    <n-layout has-sider>
      <n-layout-sider
        collapse-mode="transform"
        :collapsed-width="160"
        :width="180"
        show-trigger="bar"
        content-style="padding: 60px;"
        bordered
        font="60px"
      >
      <h2>教学</h2>
      </n-layout-sider>
      <n-layout-content content-style="padding: 24px;">
          <n-card title="教务处" hoverable class="thumbnail">
            <!-- 悬浮卡片中的内容 -->
            <a href="https://jwc.bit.edu.cn/">本科生培养</a>       
              <n-ellipsis expand-trigger="click" line-clamp="1" :tooltip="false">
               专业设置规划，可以在此查询到各个专业的培养方案及教学通知
              </n-ellipsis>
          </n-card>
          <n-card title="选课" hoverable class="thumbnail">
            <a href="https://xk.bit.edu.cn/">选课系统</a>
              <n-ellipsis expand-trigger="click" line-clamp="1" :tooltip="false">
              选课通知会发布在教务处里，推荐课程可以通过一些其他渠道进行咨询
              </n-ellipsis>
          </n-card>
          <n-card title="乐学" hoverable class="thumbnail">
            <a href="http://lexue.bit.edu.cn/">在线教学服务</a>
              <n-ellipsis expand-trigger="click" line-clamp="1" :tooltip="false">
               课程作业的发布提交都会发布在这里，请大家及时按照老师要求加入课程。（乐学的评测系统向来是值得讨论的
              </n-ellipsis>
          </n-card>
          <n-card title="延河课堂" hoverable class="thumbnail">
            <a href="https://www.yanhekt.cn/liveCourse">直播及录播</a>
              <n-ellipsis expand-trigger="click" line-clamp="1" :tooltip="false">
              上网课及复习必备帮手，近日延河进行了升级给同学们带来了更好的体验
              </n-ellipsis>
          </n-card>
          <n-card title="学科竞赛" hoverable class="thumbnail">
            <a href="https://xkjs.bit.edu.cn">查看竞赛信息</a>
              <n-ellipsis expand-trigger="click" line-clamp="1" :tooltip="false">
            
              </n-ellipsis>
          </n-card>
          <n-card title="本硕博一体化教学系统" hoverable class="thumbnail">
            <a href="http://jxzxehall.bit.edu.cn">课表安排培养方案</a>
              <n-ellipsis expand-trigger="click" line-clamp="1" :tooltip="false">
            
              </n-ellipsis>
          </n-card>
      </n-layout-content>
    </n-layout>

    <!-- 第三部分侧边栏 教学教研机构 -->   
    <n-layout has-sider>
      <n-layout-sider
        collapse-mode="transform"
        :collapsed-width="60"
        :width="180"
        show-trigger="bar"
        content-style="padding: 60px;"
        bordered
        font="60px"
      >
      <h2>教学教研机构</h2>
      </n-layout-sider>
      <n-layout-content content-style="padding: 24px;">
          <n-card title="官网" hoverable class="thumbnail">

            <!-- 悬浮卡片中的内容 -->

            <a href="https://www.bit.edu.cn/">官网</a>
           
              <n-ellipsis expand-trigger="click" line-clamp="1" :tooltip="false">
               提供学校的基本概况以及工作成果
              </n-ellipsis>
          </n-card>
          <n-card title="邮箱" hoverable class="thumbnail">
            <a href="https://mail.bit.edu.cn/">邮箱内</a>
              <n-ellipsis expand-trigger="click" line-clamp="1" :tooltip="false">
               会收到学校的各种官方邮件，用学校的邮件可以注册一些软件或者网站，但一定要注意有使用期限哦
              </n-ellipsis>
          </n-card>
          <n-card title="就业信息网" hoverable class="thumbnail">
            <a href="http://job.bit.edu.cn/">该网站</a>           
              <n-ellipsis expand-trigger="click" line-clamp="1" :tooltip="false">
               提供毕业生与企业的双向选择渠道，以及招聘信息的汇总
              </n-ellipsis>
          </n-card>
          <n-card title="计划财务部" hoverable class="thumbnail">
            <a href="https://fad.bit.edu.cn/">会计核算</a>           
              <n-ellipsis expand-trigger="click" line-clamp="1" :tooltip="false">
               中心的业务包括工资查询税务中心以及网上缴费平台等等
              </n-ellipsis>
          </n-card>     
          <n-card title="党委办公室" hoverable class="thumbnail">
            <a href="https://dzb.bit.edu.cn/">党政办网</a>           
              <n-ellipsis expand-trigger="click" line-clamp="1" :tooltip="false">
                会发布一些红头文件，学校工作的基本
              </n-ellipsis>
          </n-card>        
      </n-layout-content>
    </n-layout>

    <!-- 第四部分侧边栏 学院-->   
    <n-layout has-sider>
      <n-layout-sider
        collapse-mode="transform"
        :collapsed-width="60"
        :width="180"
        show-trigger="bar"
        content-style="padding: 60px;"
        bordered
        font="60px"
      >
      <h2>提供学院概况以及工作情况</h2>
      </n-layout-sider>
      <n-layout-content content-style="padding: 24px;">
          <n-card title="徐特立学院" hoverable class="thumbnail">
            <a href="https://xuteli.bit.edu.cn/">学院官网</a>           
              <n-ellipsis expand-trigger="click" line-clamp="1" :tooltip="false">
               
              </n-ellipsis>
          </n-card>        
          <n-card title="宇航学院" hoverable class="thumbnail">
            <a href="https://sae.bit.edu.cn/">学院官网</a>           
              <n-ellipsis expand-trigger="click" line-clamp="1" :tooltip="false">
               
              </n-ellipsis>
          </n-card>
          <n-card title="机电学院" hoverable class="thumbnail">
            <a href="https://smen.bit.edu.cn/">学院官网</a>           
              <n-ellipsis expand-trigger="click" line-clamp="1" :tooltip="false">
              </n-ellipsis>
          </n-card>
          <n-card title="机械与车辆" hoverable class="thumbnail">
            <a href="https://me.bit.edu.cn/">学院官网</a>           
              <n-ellipsis expand-trigger="click" line-clamp="1" :tooltip="false">
              </n-ellipsis>
          </n-card>
          <n-card title="光电学院" hoverable class="thumbnail">
            <a href="https://opt.bit.edu.cn/">学院官网</a>           
              <n-ellipsis expand-trigger="click" line-clamp="1" :tooltip="false">
              </n-ellipsis>
          </n-card>   
          <n-card title="信息与电子" hoverable class="thumbnail">
            <a href="https://sie.bit.edu.cn/">学院官网</a>           
              <n-ellipsis expand-trigger="click" line-clamp="1" :tooltip="false">
              </n-ellipsis>
          </n-card>   
          <n-card title="自动化学院" hoverable class="thumbnail">
            <a href="https://ac.bit.edu.cn/">学院官网</a>           
              <n-ellipsis expand-trigger="click" line-clamp="1" :tooltip="false">
              </n-ellipsis>
          </n-card>   
          <n-card title="计算机学院" hoverable class="thumbnail">
            <a href="https://cs.bit.edu.cn/">学院官网</a>           
              <n-ellipsis expand-trigger="click" line-clamp="1" :tooltip="false">
              </n-ellipsis>
          </n-card>      
          <n-card title="网安学院" hoverable class="thumbnail">
            <a href="https://www.bit.edu.cn/gbxxgk/gbgljg/index.htm">学院官网</a>           
              <n-ellipsis expand-trigger="click" line-clamp="1" :tooltip="false">
              </n-ellipsis>
          </n-card> 
          <n-card title="材料学院" hoverable class="thumbnail">
            <a href="https://mse.bit.edu.cn/">学院官网</a>           
              <n-ellipsis expand-trigger="click" line-clamp="1" :tooltip="false">
              </n-ellipsis>
          </n-card> 
          <n-card title="化学与化工" hoverable class="thumbnail">
            <a href="https://cce.bit.edu.cn/">学院官网</a>           
              <n-ellipsis expand-trigger="click" line-clamp="1" :tooltip="false">
              </n-ellipsis>
          </n-card> 
          <n-card title="生命学院" hoverable class="thumbnail">
            <a href="https://ls.bit.edu.cn/">学院官网</a>           
              <n-ellipsis expand-trigger="click" line-clamp="1" :tooltip="false">
              </n-ellipsis>
          </n-card> 
          <n-card title="数学与统计" hoverable class="thumbnail">
            <a href="https://math.bit.edu.cn/">学院官网</a>           
              <n-ellipsis expand-trigger="click" line-clamp="1" :tooltip="false">
              </n-ellipsis>
          </n-card>     
          <n-card title="物理学院" hoverable class="thumbnail">
            <a href="https://physics.bit.edu.cn/">学院官网</a>           
              <n-ellipsis expand-trigger="click" line-clamp="1" :tooltip="false">
              </n-ellipsis>
          </n-card>  
          <n-card title="管理与经济" hoverable class="thumbnail">
            <a href="https://sme.bit.edu.cn/">学院官网</a>           
              <n-ellipsis expand-trigger="click" line-clamp="1" :tooltip="false">
              </n-ellipsis>
          </n-card>  
          <n-card title="人文与社科" hoverable class="thumbnail">
            <a href="https://rw.bit.edu.cn/">学院官网</a>           
              <n-ellipsis expand-trigger="click" line-clamp="1" :tooltip="false">
              </n-ellipsis>
          </n-card>  
          <n-card title="马院" hoverable class="thumbnail">
            <a href="https://marx.bit.edu.cn/">学院官网</a>           
              <n-ellipsis expand-trigger="click" line-clamp="1" :tooltip="false">
              </n-ellipsis>
          </n-card>  
          <n-card title="法学院" hoverable class="thumbnail">
            <a href="https://law.bit.edu.cn/">学院官网</a>           
              <n-ellipsis expand-trigger="click" line-clamp="1" :tooltip="false">
              </n-ellipsis>
          </n-card>     
          <n-card title="外国语学院" hoverable class="thumbnail">
            <a href="https://sfl.bit.edu.cn/">学院官网</a>           
              <n-ellipsis expand-trigger="click" line-clamp="1" :tooltip="false">
              </n-ellipsis>
          </n-card>   
          <n-card title="设计与艺术" hoverable class="thumbnail">
            <a href="https://design.bit.edu.cn/">学院官网</a>           
              <n-ellipsis expand-trigger="click" line-clamp="1" :tooltip="false">
              </n-ellipsis>
          </n-card>         
          <n-card title="北京学院" hoverable class="thumbnail">
            <a href="https://bj.bit.edu.cn/">学院官网</a>           
              <n-ellipsis expand-trigger="click" line-clamp="1" :tooltip="false">
               
              </n-ellipsis>
          </n-card>                               
      </n-layout-content>
    </n-layout>    

    <!-- 第五部分侧边栏 管理机构-->   
    <n-layout has-sider>
      <n-layout-sider
        collapse-mode="transform"
        :collapsed-width="60"
        :width="180"
        show-trigger="bar"
        content-style="padding: 60px;"
        bordered
        font="60px"
      >
      <h2>管理机构</h2>
      </n-layout-sider>
      <n-layout-content content-style="padding: 24px;">
          <n-card title="党委组织部" hoverable class="thumbnail">
            <a href="https://zzb.bit.edu.cn/">党校及党建工作</a>           
              <n-ellipsis expand-trigger="click" line-clamp="1" :tooltip="false">
               
              </n-ellipsis>
          </n-card>
          <n-card title="党委宣传部" hoverable class="thumbnail">
            <a href="https://xcb.bit.edu.cn/">新闻中心</a>           
              <n-ellipsis expand-trigger="click" line-clamp="1" :tooltip="false">
              </n-ellipsis>
          </n-card>
          <n-card title="纪检委" hoverable class="thumbnail">
            <a href="https://me.bit.edu.cn/">纪律检查委员会</a>           
              <n-ellipsis expand-trigger="click" line-clamp="1" :tooltip="false">
              </n-ellipsis>
          </n-card>
          <n-card title="保卫部" hoverable class="thumbnail">
            <a href="https://bwc.bit.edu.cn/">维护校园秩序</a>           
              <n-ellipsis expand-trigger="click" line-clamp="1" :tooltip="false">
              </n-ellipsis>
          </n-card>   
          <n-card title="保密办公室" hoverable class="thumbnail">
            <a href="https://bmc.bit.edu.cn/">第二校训</a>           
              <n-ellipsis expand-trigger="click" line-clamp="1" :tooltip="false">
              </n-ellipsis>
          </n-card>   
          <n-card title="人事处" hoverable class="thumbnail">
            <a href="https://renshichu.bit.edu.cn/">人力资源管理</a>           
              <n-ellipsis expand-trigger="click" line-clamp="1" :tooltip="false">
              </n-ellipsis>
          </n-card>   
          <n-card title="学工部" hoverable class="thumbnail">
            <a href="https://century.bit.edu.cn/">负责学生教育管理工作</a>           
              <n-ellipsis expand-trigger="click" line-clamp="1" :tooltip="false">
              </n-ellipsis>
          </n-card>      
          <n-card title="教务部" hoverable class="thumbnail">
            <a href="https://jwc.bit.edu.cn/">本科生招生与培养管理</a>           
              <n-ellipsis expand-trigger="click" line-clamp="1" :tooltip="false">
              </n-ellipsis>
          </n-card> 
          <n-card title="研究生院" hoverable class="thumbnail">
            <a href="https://grd.bit.edu.cn/">研究生培养管理</a>           
              <n-ellipsis expand-trigger="click" line-clamp="1" :tooltip="false">
              </n-ellipsis>
          </n-card> 
          <n-card title="计划财务部" hoverable class="thumbnail">
            <a href="https://jhcwb.bit.edu.cn/">为学校发展建设提供财务保障</a>           
              <n-ellipsis expand-trigger="click" line-clamp="1" :tooltip="false">
              </n-ellipsis>
          </n-card> 
          <n-card title="科技研究院" hoverable class="thumbnail">
            <a href="https://kjc.bit.edu.cn/">组织管理科研活动</a>           
              <n-ellipsis expand-trigger="click" line-clamp="1" :tooltip="false">
              </n-ellipsis>
          </n-card> 
          <n-card title="资实处" hoverable class="thumbnail">
            <a href="https://zsc.bit.edu.cn/">资产与实验室管理处</a>           
              <n-ellipsis expand-trigger="click" line-clamp="1" :tooltip="false">
              </n-ellipsis>
          </n-card>     
          <n-card title="后勤基建处" hoverable class="thumbnail">
            <a href="https://hqjjc.bit.edu.cn/">学校的后勤管理</a>           
              <n-ellipsis expand-trigger="click" line-clamp="1" :tooltip="false">
              </n-ellipsis>
          </n-card>  
          <n-card title="良乡管理处" hoverable class="thumbnail">
            <a href="https://liangxiang.bit.edu.cn/">良乡校区相关业务</a>           
              <n-ellipsis expand-trigger="click" line-clamp="1" :tooltip="false">
              </n-ellipsis>
          </n-card>  
          <n-card title="国际交流合作" hoverable class="thumbnail">
            <a href="https://rw.bit.edu.cn/">涉外政策</a>           
              <n-ellipsis expand-trigger="click" line-clamp="1" :tooltip="false">
              协调国际及港澳台交流与合作事务
              </n-ellipsis>
          </n-card>  
          <n-card title="离退休工作" hoverable class="thumbnail">
            <a href="https://ltx.bit.edu.cn/">离退休人员管理服务</a>           
              <n-ellipsis expand-trigger="click" line-clamp="1" :tooltip="false">
              
              </n-ellipsis>
          </n-card>  
          <n-card title="工会网站" hoverable class="thumbnail">
            <a href="https://gonghui.bit.edu.cn/">教职工管理</a>           
              <n-ellipsis expand-trigger="click" line-clamp="1" :tooltip="false">
              </n-ellipsis>
          </n-card>     
          <n-card title="机关党委" hoverable class="thumbnail">
            <a href="https://jgdw.bit.edu.cn/">机关党</a>           
              <n-ellipsis expand-trigger="click" line-clamp="1" :tooltip="false">
                领导学校思想政治工作和精神文明建设
              </n-ellipsis>
          </n-card>                 
      </n-layout-content>
    </n-layout>   

    <!-- 第六部分侧边栏 教学教研辅助机构-->
    <n-layout has-sider>
      <n-layout-sider
        collapse-mode="transform"
        :collapsed-width="60"
        :width="180"
        show-trigger="bar"
        content-style="padding: 60px;"
        bordered
        font="60px"
      >
      <h2>教学教研辅助机构</h2>
      </n-layout-sider>
      <n-layout-content content-style="padding: 24px;">
          <n-card title="图书馆" hoverable class="thumbnail">
            <a href="http://lib.bit.edu.cn/">常用的数据库</a>
              <n-ellipsis expand-trigger="click" line-clamp="1" :tooltip="false">
               要合理利用图书馆的数据库，未来研究查文献的时候会用到的
              </n-ellipsis>
          </n-card>
          <n-card title="网信中心" hoverable class="thumbnail">
            <a href="https://itc.bit.edu.cn/">为学校信息建设工作</a>
              <n-ellipsis expand-trigger="click" line-clamp="1" :tooltip="false">
               提供技术支持与保障
              </n-ellipsis>
          </n-card>
          <n-card title="教师发展中心" hoverable class="thumbnail">
            <a href="http://cfd.bit.edu.cn/">教学科研辅助机构</a>           
              <n-ellipsis expand-trigger="click" line-clamp="1" :tooltip="false">
               教师素质能力提升平台和教师公共事务服务平台
              </n-ellipsis>
          </n-card>
          <n-card title="学生事务中心" hoverable class="thumbnail">
            <a href="https://student.bit.edu.cn/">学生事务</a>           
              <n-ellipsis expand-trigger="click" line-clamp="1" :tooltip="false">
               学生资助，办事指南以及校园服务
              </n-ellipsis>
          </n-card>     
          <n-card title="教学运行与考务中心" hoverable class="thumbnail">
            <a href="https://jxzx.bit.edu.cn/">提供教学辅助</a>           
              <n-ellipsis expand-trigger="click" line-clamp="1" :tooltip="false">
                课表编排，选退课，教师调停课，考试安排及保障工作
              </n-ellipsis>
          </n-card>        
          <n-card title="留学生中心" hoverable class="thumbnail">
            <a href="https://isc.bit.edu.cn/">外国留学生的招生与培养管理</a>           
          </n-card>   
          <n-card title="技术转移中心" hoverable class="thumbnail">
            <a href="https://ttc.bit.edu.cn/">负责科技成果的转移转化</a>           
              <n-ellipsis expand-trigger="click" line-clamp="1" :tooltip="false">
              </n-ellipsis>
          </n-card>                       
      </n-layout-content>
    </n-layout>
</template>
<style scoped>
  .n-card {
  /* 卡片的大小 */
  max-width: 300px;
  max-height: 200px;
  }
  .thumbnail 
  {
  /* 控制卡片横向排列 */
	float:left;
	width:160px;
	height:90px;
	margin:5px;
  }
  a:link {text-decoration:none;}    /* unvisited link */
  a:visited {text-decoration:none;} /*visited link */
  a:hover {text-decoration:underline;
  color:rgb(10, 119, 83)}   /* mouse over link*/
  a:active {text-decoration:underline;
    color: rgb(76, 9, 40);
  }  /* selected link*/
  a{
    color:rgb(249, 131, 45)

  }

</style>