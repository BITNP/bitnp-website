# **BITNP网站 开发者文档**

## API
***
### 整体说明
* 所有API返回json格式的数据，并返回状态码，状态码参考[MDN](https://developer.mozilla.org/zh-CN/docs/web/http/status)的文章.
### 时间轴部分
#### 主页时间轴获取信息   
  - 接口地址： `GET /`
  - 参数说明： 
    - `title`: 事件的标题
    - `time`: 事件发生的事件
    - `context`:事件的详细描述