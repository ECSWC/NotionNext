const CONFIG = {
  HEO_HOME_POST_TWO_COLS: true, // 首页博客两列显示，若为false则只显示一列
  HEO_LOADING_COVER: true, // 页面加载的遮罩动画

  HEO_HOME_BANNER_ENABLE: true,

  HEO_SITE_CREATE_TIME: '2021-09-21', // 建站日期，用于计算网站运行的第几天

  // 首页顶部通知条滚动内容，如不需要可以留空 []
  HEO_NOTICE_BAR: [
     { title: 'Welcome🤗', url: 'https://qianai.freeflarum.com' },
  ],

  // 英雄区左右侧组件颠倒位置
  HEO_HERO_REVERSE: false,
  // 博客主体区左右侧组件颠倒位置
  HEO_HERO_BODY_REVERSE: false,

  // 英雄区(首页顶部大卡)
  HEO_HERO_TITLE_1: 'A secret garden',
  HEO_HERO_TITLE_2: 'for the BDSM community',
  HEO_HERO_TITLE_3: 'FAAK_Toy',
  HEO_HERO_TITLE_4: 'NEW!',
  HEO_HERO_TITLE_5: 'FAAK_Toy forum',
  HEO_HERO_TITLE_LINK: 'https://qianai.freeflarum.com',
  // 英雄区遮罩文字
  HEO_HERO_COVER_TITLE: 'Walk Around',

  // 英雄区显示三个置顶分类
  HEO_HERO_CATEGORY_1: { title: 'Must-Read', url: '/tag/Must-Read' },
  HEO_HERO_CATEGORY_2: { title: 'Popular-Articles', url: '/tag/Popular-Articles' },
  HEO_HERO_CATEGORY_3: { title: 'Practical-Tutorials', url: '/tag/Practical-Tutorials' },

  // 英雄区右侧推荐文章标签, 例如 [推荐] , 最多六篇文章; 若留空白''，则推荐最近更新文章
  HEO_HERO_RECOMMEND_POST_TAG: 'Featured',
  HEO_HERO_RECOMMEND_POST_SORT_BY_UPDATE_TIME: false, // 推荐文章排序，为`true`时将强制按最后修改时间倒序
  //   HERO_RECOMMEND_COVER: 'https://cdn.pixabay.com/photo/2015/10/30/20/13/sunrise-1014712_1280.jpg', // 英雄区右侧图片

  // 右侧个人资料卡牌欢迎语，点击可自动切换
  HEO_INFOCARD_GREETINGS: [
    '🤗Hi!!!',
    'we are FAAK_Toy',
  ],

  // 个人资料底部按钮
  HEO_INFO_CARD_URL1: '/about',
  HEO_INFO_CARD_ICON1: 'fas fa-user',
  HEO_INFO_CARD_URL2: 'https://qianai.freeflarum.com',
  HEO_INFO_CARD_ICON2: 'fab fa-github',
  HEO_INFO_CARD_URL3: 'https://qianai.freeflarum.com',
  HEO_INFO_CARD_TEXT3: 'Learn More',

  // 用户技能图标
  HEO_GROUP_ICONS: [
    {
title_1: 'AfterEffect',
img_1: '/images/heo/cityfun-logo.webp',
color_1: '#ffffff',
title_2: 'Sketch',
img_2: '/images/heo/faak-logo.webp',
color_2: '#ffffff'
},
{
title_1: 'Docker',
img_1: '/images/heo/frrk-logo.webp',
color_1: '#ffffff',
title_2: 'Photoshop',
img_2: '/images/heo/geeba-logo.webp',
color_2: '#ffffff'
},
{
title_1: 'FinalCutPro',
img_1: '/images/heo/nnsx-logo.webp',
color_1: '#ffffff',
title_2: 'Python',
img_2: '/images/heo/oralsx-logo.webp',
color_2: '#ffffff'
},
{
title_1: 'Swift',
img_1: '/images/heo/qinz-logo.webp',
color_1: '#ffffff',
title_2: 'Principle',
img_2: '/images/heo/qkkq-logo.webp',
color_2: '#ffffff'
},
{
title_1: 'illustrator',
img_1: '/images/heo/sxxy.webp',
color_1: '#ffffff',
title_2: 'CSS3',
img_2: '/images/heo/yocy-logo.webp',
color_2: '#ffffff'
},
  ],

  HEO_SOCIAL_CARD: true, // 是否显示右侧，点击加入社群按钮
  HEO_SOCIAL_CARD_TITLE_1: 'Join Forum',
  HEO_SOCIAL_CARD_TITLE_2: 'Discuss & Share',
  HEO_SOCIAL_CARD_TITLE_3: [
    'One-Click Join',
    '🤗🍆🍌🥕🥖🦴',
    ],
  HEO_SOCIAL_CARD_URL: 'https://qianai.freeflarum.com',

  // 底部统计面板文案
  HEO_POST_COUNT_TITLE: 'Posts:',
  HEO_SITE_TIME_TITLE: 'Running for:',
  HEO_SITE_VISIT_TITLE: 'Total Visits:',
  HEO_SITE_VISITOR_TITLE: 'Total Users:',

  // *****  以下配置无效，只是预留开发 ****
  // 菜单配置
  HEO_MENU_INDEX: true, // 显示首页
  HEO_MENU_CATEGORY: true, // 显示分类
  HEO_MENU_TAG: true, // 显示标签
  HEO_MENU_ARCHIVE: true, // 显示归档
  HEO_MENU_SEARCH: true, // 显示搜索

  HEO_POST_LIST_COVER: true, // 列表显示文章封面
  HEO_POST_LIST_COVER_HOVER_ENLARGE: false, // 列表鼠标悬停放大

  HEO_POST_LIST_COVER_DEFAULT: true, // 封面为空时用站点背景做默认封面
  HEO_POST_LIST_SUMMARY: true, // 文章摘要
  HEO_POST_LIST_PREVIEW: false, // 读取文章预览
  HEO_POST_LIST_IMG_CROSSOVER: true, // 博客列表图片左右交错

  HEO_ARTICLE_ADJACENT: true, // 显示上一篇下一篇文章推荐
  HEO_ARTICLE_COPYRIGHT: true, // 显示文章版权声明
  HEO_ARTICLE_NOT_BY_AI: false, // 显示非AI写作
  HEO_ARTICLE_RECOMMEND: true, // 文章关联推荐

  HEO_WIDGET_LATEST_POSTS: true, // 显示最新文章卡
  HEO_WIDGET_ANALYTICS: false, // 显示统计卡
  HEO_WIDGET_TO_TOP: true,
  HEO_WIDGET_TO_COMMENT: true, // 跳到评论区
  HEO_WIDGET_DARK_MODE: true, // 夜间模式
  HEO_WIDGET_TOC: true // 移动端悬浮目录
}
export default CONFIG
