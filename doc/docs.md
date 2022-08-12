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
  - 示例：  
    “left”对应的是左边轴，“right”对应的是右边轴
    ```json
    {
      "left": [
        {
        "title": "LOREM",
        "time": "2011 - NOW",
        "context": "ituum vel, ultricies eget nibh. Duis et felis lectus. Donec orci libero, auctor eget sodales at, euismod venenatis nibh."
        },
        {
        "title": "IPSUM",
        "time": "2013",
        "context": "ero in nibh convallis sollici blandit neque in, ornare libero."
        }
      ],
    "right": [
        {
        "title": "ORNARE",
        "time": "2012 - 06.2013",
        "context": "ipsum pulvinar, blandit neque in, ornare libero."
        }
      ]
    }
    ```
    