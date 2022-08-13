# **BITNP网站 开发者文档**

## 协作开发守则
### 文件命名、组织形式
  - 根目录下的src/assets、src/components主要是页眉、页脚等页面共用的内容，每个页面各自的assets、components分开放置，如about-us页面的素材放在"src/views/about-us/assets/"里。
### git守则

  - 少用`git add -A`，多用`git add [the-file-to-add]`
  - 多commit，避免一次commit包含过多修改
  - 多fetch、pull，除了每次开工写代码前pull一次，写代码过程中也可以隔一段时间fetch或pull一次（vscode有自动fetch插件）
  - commit尽量以  home页面: 或者 VIEW home: 开头

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