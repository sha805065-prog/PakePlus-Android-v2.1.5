(function () {
    'use strict';

    const VERSIONS = [{version:"星火微光",description:"为初识或暧昧期的伴侣设计，如星火初燃，在安全距离内进行温柔试探与默契，点亮彼此的好感信号。",content:[{type:"默契",text:"如果现在有一首歌能形容我们此刻的氛围，你觉得会是哪首？",but1:"思考下",but2:"我知道"},{type:"轻柔试探",text:"你猜我现在是看着你，还是因为害羞而看向别处？",but1:"看别处",but2:"看着我"},{type:"真心话",text:"我做的哪件小事，曾让你觉得心头一暖？",but1:"好像没有",but2:"有的"},{type:"小小冒险",text:"让我们同时伸出手，比较一下手掌的大小。",but1:"不好意思",but2:"伸出手"},{type:"感官初探",text:"闭上眼睛，让我用指尖轻轻碰一下你的手背。",but1:"不闭",but2:"好的"},{type:"真心话",text:"你觉得我笑起来的时候，哪只眼睛会弯得更明显一些？",but1:"没注意",but2:"左眼"},{type:"默契",text:"同时说出一种你最喜欢的水果。",but1:"苹果",but2:"草莓"},{type:"轻柔试探",text:"我今天的发型和上次见面时有什么不同吗？",but1:"一样",but2:"有变化"},{type:"小小冒险",text:"分享一张你手机里最近拍的天空照片给我。",but1:"没有",but2:"发给你"},{type:"真心话",text:"你记忆中，我们第一次见面那天的天气怎么样？",but1:"忘了",but2:"记得"},{type:"感官初探",text:"让我轻轻碰一下你的酒杯或水杯的杯沿。",but1:"不要",but2:"碰杯"},{type:"默契",text:"背对背，数到三同时回头。",but1:"不玩",but2:"来试试"},{type:"轻柔试探",text:"我说话时有没有什么你不自觉会注意到的小习惯？",but1:"没有",but2:"有哦"},{type:"真心话",text:"你更喜欢晴天、阴天还是雨天？为什么？",but1:"晴天",but2:"雨天"},{type:"小小冒险",text:"用非惯用手写我的名字。",but1:"字丑",but2:"写啦"},{type:"感官初探",text:"让我看一下你今天戴的饰品（手表、手链等）。",but1:"没戴",but2:"给你看"},{type:"默契",text:"用手指比一个数字，让对方猜。",but1:"不猜",but2:"猜猜看"},{type:"轻柔试探",text:"你觉得我安静不说话的时候，可能是在想什么？",but1:"不知道",but2:"在想事"},{type:"真心话",text:"你理想中的周末下午是如何度过的？",but1:"宅家",but2:"户外"},{type:"小小冒险",text:"模仿一下我常做的一个小动作。",but1:"不会",but2:"看好了"},{type:"真心话",text:"你对我最初的心动瞬间是什么时候？",but1:"保密",but2:"告诉你"},{type:"小小冒险",text:"轻轻碰一下我的手指尖，然后迅速收回。",but1:"不了",but2:"碰一下"},{type:"默契",text:"一起数到十，然后同时做一个可爱的鬼脸。",but1:"不做",but2:"做好啦"},{type:"轻柔试探",text:"我穿什么颜色的衣服会让你觉得更想靠近？",but1:"都行",but2:"浅色"},{type:"真心话",text:"你觉得我们之间最有趣的共同点是什么？",but1:"还没发现",but2:"有的"},{type:"感官初探",text:"让我帮你把被风吹乱的头发轻轻理到耳后。",but1:"不用",but2:"谢谢"},{type:"小小冒险",text:"约定一个只有我们懂的暗号手势。",but1:"想不到",but2:"这个好"},{type:"真心话",text:"你最喜欢我称呼你什么？",but1:"都行",but2:"有偏好"},{type:"默契",text:"同时模仿一种小动物的叫声。",but1:"不学",but2:"汪汪"},{type:"轻柔试探",text:"我身上有哪种味道是你喜欢的？",but1:"没注意",but2:"洗发水"},{type:"小小冒险",text:"发一条仅我可见的朋友圈，内容是一颗爱心。",but1:"不发",but2:"发了"},{type:"感官初探",text:"让我轻轻拍一下你的肩膀，像老朋友打招呼那样。",but1:"不行",but2:"可以"},{type:"真心话",text:"你觉得我什么时候看起来最认真？",but1:"工作",but2:"思考"},{type:"默契",text:"不说话，用眼神示意对方做一件事（比如喝水）。",but1:"不懂",but2:"明白"},{type:"轻柔试探",text:"如果我是一种天气，你觉得我是什么样的？",but1:"晴天",but2:"微风"},{type:"小小冒险",text:"用手机拍下你此刻的桌面发给我。",but1:"杂乱",but2:"分享"},{type:"真心话",text:"你小时候幻想过的浪漫场景是什么样的？",but1:"忘了",but2:"记得"},{type:"感官初探",text:"交换我们正在喝的东西，尝一小口。",but1:"不换",but2:"尝尝"},{type:"默契",text:"同时在手掌心画一个符号。",but1:"不画",but2:"画好了"},{type:"轻柔试探",text:"我哪一次迟到让你印象最深刻？",but1:"没有",but2:"有一次"},{type:"小小冒险",text:"说一句你从没对我说过的夸奖。",but1:"词穷",but2:"你真棒"},{type:"真心话",text:"你更喜欢热闹的聚会还是安静的二人世界？",but1:"热闹",but2:"安静"},{type:"感官初探",text:"让我轻轻碰一下你的耳垂。",but1:"介意",but2:"不介意"},{type:"默契",text:"猜拳，输的人答应赢的人一个小要求。",but1:"不猜",but2:"来嘛"},{type:"轻柔试探",text:"你觉得我最大的优点是什么？",but1:"很多",but2:"善良"},{type:"小小冒险",text:"分享一件你最近的糗事。",but1:"没有",but2:"好吧"},{type:"真心话",text:"你相信一见钟情还是日久生情？",but1:"一见",but2:"日久"},{type:"感官初探",text:"让我看看你手机的锁屏壁纸。",but1:"隐私",but2:"给你看"},{type:"默契",text:"同时说出一个数字（1-10）。",but1:"3",but2:"7"},{type:"轻柔试探",text:"我做什么事情的时候，会让你觉得特别可爱？",but1:"吃饭",but2:"发呆"},{type:"小小冒险",text:"用方言对我说一句“你好”。",but1:"不会",but2:"你好呀"},{type:"真心话",text:"你最近单曲循环的一首歌是什么？",but1:"",but2:""},{type:"感官初探",text:"让我轻轻捏一下你的手指关节。",but1:"不要",but2:"轻点"},{type:"默契",text:"一起做一个表示“加油”的手势。",but1:"不做",but2:"加油！"},{type:"轻柔试探",text:"如果我是小动物，你觉得我像什么？",but1:"猫",but2:"狗"},{type:"小小冒险",text:"把微信头像暂时换成我指定的图片（可爱的）。",but1:"不换",but2:"换就换"},{type:"真心话",text:"你最喜欢自己身体的哪个部位？",but1:"眼睛",but2:"手"},{type:"感官初探",text:"让我用手指轻轻划过你的掌心。",but1:"痒",but2:"试试"},{type:"默契",text:"不说话，用口型对我说一句话让我猜。",but1:"太难",but2:"猜猜看"},{type:"轻柔试探",text:"你觉得我什么时候最需要人陪？",but1:"晚上",but2:"生病"},{type:"小小冒险",text:"录一段你学猫叫的语音发给我。",but1:"不录",but2:"喵~"},{type:"真心话",text:"你对我最好奇的一点是什么？",but1:"没有",but2:"很多"},{type:"感官初探",text:"轻轻靠在我肩膀上10秒钟。",but1:"不好意思",but2:"靠一下"},{type:"默契",text:"同时转身，走三步再同时转回来。",but1:"不玩",but2:"好"},{type:"轻柔试探",text:"我送你的东西里，你最喜欢哪一件？",but1:"都喜欢",but2:"那个"},{type:"小小冒险",text:"在社交媒体上分享一首代表你现在心情的歌。",but1:"不要",but2:"分享"},{type:"真心话",text:"你觉得理想的约会时长是多久？",but1:"半天",but2:"一天"},{type:"感官初探",text:"让我帮你整理一下衣领。",but1:"不用",but2:"谢谢"},{type:"默契",text:"用手指比划出“爱心”的形状。",but1:"比不好",but2:"比好了"},{type:"轻柔试探",text:"我什么时候会让你觉得有点傻乎乎的？",but1:"开心时",but2:"犯困时"},{type:"小小冒险",text:"对我说一句电影里的经典台词。",but1:"想不起",but2:"我知道"},{type:"真心话",text:"你更看重伴侣的智慧还是幽默感？",but1:"智慧",but2:"幽默"},{type:"感官初探",text:"让我碰一下你的手腕，感受一下脉搏。",but1:"不要",but2:"给"},{type:"默契",text:"同时眨一下左眼。",but1:"不会",but2:"眨啦"},{type:"轻柔试探",text:"你觉得我生气的时候好哄吗？",but1:"不好哄",but2:"好哄"},{type:"小小冒险",text:"把你的手机屏保给我看一眼。",but1:"不行",but2:"看一眼"},{type:"真心话",text:"你更喜欢拥抱还是牵手？",but1:"拥抱",but2:"牵手"},{type:"感官初探",text:"让我轻轻拍掉你肩膀上看不见的灰尘。",but1:"没有灰",but2:"拍吧"},{type:"默契",text:"一起做个“耶”的手势拍照。",but1:"不拍",but2:"茄子"},{type:"轻柔试探",text:"我哪一次穿搭让你印象最深？",but1:"不记得",but2:"那一次"},{type:"小小冒险",text:"唱一句你最喜欢的歌词。",but1:"跑调",but2:"唱了"},{type:"真心话",text:"你害怕孤独吗？",but1:"不怕",but2:"有时"},{type:"感官初探",text:"让我轻轻拉一下你的小拇指。",but1:"不行",but2:"拉一下"},{type:"默契",text:"同时指向房间里你最喜欢的一件物品。",but1:"",but2:""},{type:"轻柔试探",text:"你觉得我什么时候最温柔？",but1:"说话时",but2:"安静时"},{type:"小小冒险",text:"用手机搜一张你觉得最可爱的动物图片发我。",but1:"不搜",but2:"搜了"},{type:"真心话",text:"你相信梦境有特殊含义吗？",but1:"不信",but2:"信"},{type:"感官初探",text:"让我用手指轻轻点一下你的鼻尖。",but1:"不要",but2:"点一下"},{type:"默契",text:"一起深呼吸三次。",but1:"不呼吸",but2:"深呼吸"},{type:"轻柔试探",text:"我做什么样的决定会让你最支持？",but1:"对的",but2:"喜欢的"},{type:"小小冒险",text:"把微信状态改成一首歌名，让我猜。",but1:"不改",but2:"改好了"},{type:"真心话",text:"你对自己最满意的一点是什么？",but1:"性格",but2:"外表"},{type:"感官初探",text:"让我帮你拿一下你手里的杯子。",but1:"不用",but2:"给你"},{type:"默契",text:"同时用手比出“OK”的手势。",but1:"不比",but2:"OK"},{type:"轻柔试探",text:"你觉得我沉默的时候是在生闷气还是放空？",but1:"生闷气",but2:"放空"},{type:"小小冒险",text:"分享一个你最近发现的有趣表情包。",but1:"没有",but2:"这个"},{type:"真心话",text:"你如何看待“个人空间”的重要性？",but1:"重要",but2:"很需要"},{type:"感官初探",text:"让我轻轻碰一下你的眉毛。",but1:"别碰",but2:"轻点"},{type:"默契",text:"一起从1数到7。",but1:"不数",but2:"1,2,3..."},{type:"轻柔试探",text:"我哪一次为你做的事让你最意外？",but1:"没有",but2:"有次"},{type:"小小冒险",text:"对我说一句只有我们俩懂的“暗语”。",but1:"没有",but2:"有哦"},{type:"真心话",text:"你更喜欢白天还是夜晚？",but1:"白天",but2:"夜晚"},{type:"感官初探",text:"让我轻轻拍一下你的手背，像击掌那样。",but1:"不要",but2:"击掌"},{type:"默契",text:"同时做一个“思考”的表情。",but1:"不做",but2:"思考中"},{type:"轻柔试探",text:"你觉得我什么时候最需要鼓励？",but1:"失败时",but2:"挑战时"},{type:"小小冒险",text:"在备忘录里写一句想对我说的话，截图发我。",but1:"不写",but2:"写了"},{type:"真心话",text:"你记忆中最美好的童年片段是什么？",but1:"忘了",but2:"记得"},{type:"感官初探",text:"让我轻轻扶一下你的胳膊，帮你保持平衡（假装）。",but1:"不用",but2:"扶着"},{type:"默契",text:"同时说“明天见”。",but1:"不说",but2:"明天见"},{type:"轻柔试探",text:"我哪种情绪表现最让你心疼？",but1:"难过",but2:"强撑"},{type:"小小冒险",text:"把手机背景暂时换成我的照片（可爱的）。",but1:"不换",but2:"换一张"},{type:"真心话",text:"你更喜欢打电话还是发信息？",but1:"打电话",but2:"发信息"},{type:"感官初探",text:"让我用手指轻轻梳理一下你耳边的头发。",but1:"不用",but2:"好"},{type:"默契",text:"一起做个“嘘”的手势。",but1:"不做",but2:"嘘~"},{type:"轻柔试探",text:"你觉得我最大的孩子气表现在哪里？",but1:"没有",but2:"吃东西"},{type:"小小冒险",text:"用语音对我说“晚安”。",but1:"打字",but2:"语音"},{type:"真心话",text:"你相信缘分吗？",but1:"相信",but2:"不信"},{type:"感官初探",text:"让我轻轻碰一下你的膝盖。",but1:"不要",but2:"碰了"},{type:"默契",text:"同时用手在空气中画一个圈。",but1:"不画",but2:"画圈"},{type:"轻柔试探",text:"我做什么样的梦会让你觉得有趣？",but1:"飞的梦",but2:"奇怪的"},{type:"小小冒险",text:"分享一个你最近学会的新技能。",but1:"没有",but2:"有哦"},{type:"真心话",text:"你更喜欢山还是海？",but1:"山",but2:"海"},{type:"感官初探",text:"让我轻轻捏一下你的耳垂。",but1:"不行",but2:"轻点"},{type:"默契",text:"一起做个“胜利”的手势。",but1:"不做",but2:"胜利！"},{type:"轻柔试探",text:"我什么时候的反应最让你觉得好笑？",but1:"吃惊时",but2:"害羞时"},{type:"小小冒险",text:"在社交媒体上给我最新的动态点个赞。",but1:"不点",but2:"点了"},{type:"真心话",text:"你如何看待“承诺”这件事？",but1:"重要",but2:"看情况"},{type:"感官初探",text:"让我轻轻拍一下你的头顶（如果身高允许）。",but1:"不行",but2:"轻点"},{type:"默契",text:"同时捂住自己的眼睛三秒钟。",but1:"不捂",but2:"捂住了"},{type:"轻柔试探",text:"你觉得我什么时候最像大人？",but1:"工作",but2:"照顾人"},{type:"小小冒险",text:"用我的名字首字母拼一个词。",but1:"拼不出",but2:"拼好了"},{type:"真心话",text:"你最喜欢我什么样的笑容？",but1:"大笑",but2:"微笑"},{type:"感官初探",text:"让我轻轻碰一下你的下巴。",but1:"不要",but2:"碰一下"},{type:"默契",text:"同时做一个“睡觉”的动作。",but1:"不做",but2:"zzZ"},{type:"轻柔试探",text:"我哪一次帮助别人让你觉得我很善良？",but1:"没注意",but2:"那次"},{type:"小小冒险",text:"用画画的方式表示你现在的心情。",but1:"不会画",but2:"画了"},{type:"真心话",text:"你觉得我们第一次约会哪里最完美？",but1:"地点",but2:"聊天"},{type:"感官初探",text:"让我轻轻碰一下你的手肘。",but1:"别碰",but2:"轻点"},{type:"默契",text:"一起哼同一段旋律。",but1:"不哼",but2:"哼啦"},{type:"轻柔试探",text:"我什么时候最让你觉得有安全感？",but1:"承诺时",but2:"行动时"},{type:"小小冒险",text:"发一个你觉得最可爱的表情包给我。",but1:"没有",but2:"发你"},{type:"真心话",text:"你更喜欢春天还是秋天？",but1:"春天",but2:"秋天"},{type:"感官初探",text:"让我轻轻拍一下你的后背。",but1:"不要",but2:"拍吧"},{type:"默契",text:"同时做一个“惊喜”的表情。",but1:"不做",but2:"哇！"},{type:"轻柔试探",text:"我哪一次做饭或选餐厅让你印象深刻？",but1:"没有",but2:"有次"},{type:"小小冒险",text:"用三个词形容今天的天气。",but1:"",but2:""},{type:"真心话",text:"你觉得自己最迷人的特质是什么？",but1:"性格",but2:"笑容"},{type:"感官初探",text:"让我轻轻碰一下你的眉毛。",but1:"别碰",but2:"轻点"},{type:"默契",text:"一起数到五，然后同时跳一下。",but1:"不跳",but2:"跳了"},{type:"轻柔试探",text:"我什么时候最让你觉得心疼？",but1:"累的时候",but2:"生病时"},{type:"小小冒险",text:"在空气中写我的名字。",but1:"不写",but2:"写了"},{type:"真心话",text:"你更喜欢城市生活还是乡村生活？",but1:"城市",but2:"乡村"},{type:"感官初探",text:"让我轻轻拉一下你的衣袖。",but1:"不要",but2:"拉一下"},{type:"默契",text:"同时做一个“跳舞”的动作。",but1:"不做",but2:"跳了"},{type:"轻柔试探",text:"我哪一次送你的礼物最合你心？",but1:"都合",but2:"那个"},{type:"小小冒险",text:"用一句话描述你现在的感觉。",but1:"",but2:""},{type:"真心话",text:"你觉得爱情中最重要的是什么？",but1:"信任",but2:"理解"},{type:"感官初探",text:"让我轻轻碰一下你的鼻梁。",but1:"不要",but2:"碰了"},{type:"默契",text:"一起说“加油”。",but1:"不说",but2:"加油"},{type:"轻柔试探",text:"我什么时候最让你觉得骄傲？",but1:"成功时",but2:"日常"},{type:"小小冒险",text:"分享一首你最近喜欢的诗或歌词。",but1:"没有",but2:"分享"},{type:"真心话",text:"你更喜欢旅行还是宅在家？",but1:"旅行",but2:"宅家"},{type:"感官初探",text:"让我轻轻拍一下你的大腿（外侧）。",but1:"不行",but2:"轻点"},{type:"默契",text:"同时做一个“跑步”的动作。",but1:"不做",but2:"跑啦"},{type:"轻柔试探",text:"我哪一次坚持己见让你觉得我有主见？",but1:"没有",but2:"有次"},{type:"小小冒险",text:"用你的方式表示“开心”。",but1:"不会",but2:"表示啦"},{type:"真心话",text:"你更喜欢狗还是猫？",but1:"狗",but2:"猫"},{type:"感官初探",text:"让我轻轻碰一下你的锁骨。",but1:"不要",but2:"碰了"},{type:"默契",text:"一起做一个“拥抱”的姿势。",but1:"不抱",but2:"抱抱"},{type:"轻柔试探",text:"我什么时候最让你觉得我可靠？",but1:"困难时",but2:"总是"},{type:"小小冒险",text:"说一件你希望我为你做的小事。",but1:"没有",but2:"有件"},{type:"真心话",text:"你更喜欢早晨还是夜晚？",but1:"早晨",but2:"夜晚"},{type:"感官初探",text:"让我轻轻碰一下你的太阳穴。",but1:"不要",but2:"轻点"},{type:"默契",text:"同时做一个“许愿”的动作。",but1:"不许",but2:"许了"},{type:"轻柔试探",text:"我哪一次幽默感让你笑得很开心？",but1:"不记得",but2:"那次"},{type:"小小冒险",text:"用你的手机拍一张你现在的表情发我。",but1:"不拍",but2:"拍了"},{type:"真心话",text:"你觉得我什么时候最有趣？",but1:"聊天时",but2:"玩耍时"},{type:"感官初探",text:"让我轻轻碰一下你的手腕内侧。",but1:"不要",but2:"碰了"},{type:"默契",text:"一起说“谢谢”。",but1:"不说",but2:"谢谢"},{type:"轻柔试探",text:"我什么时候最让你觉得我细心？",but1:"照顾时",but2:"观察时"},{type:"小小冒险",text:"写下一个你最近的小目标。",but1:"没有",but2:"写了"},{type:"真心话",text:"你更喜欢读书还是看电影？",but1:"读书",but2:"电影"},{type:"感官初探",text:"让我轻轻拍一下你的手背。",but1:"不要",but2:"拍啦"},{type:"默契",text:"同时做一个“鼓掌”的动作。",but1:"不鼓",but2:"鼓掌"},{type:"轻柔试探",text:"我哪一次浪漫举动让你印象深刻？",but1:"没有",but2:"有次"},{type:"小小冒险",text:"用一句话形容你对我的第一印象。",but1:"",but2:""},{type:"真心话",text:"你更喜欢甜食还是辣食？",but1:"甜食",but2:"辣食"},{type:"感官初探",text:"让我轻轻碰一下你的耳后。",but1:"不要",but2:"碰了"},{type:"默契",text:"一起做一个“挥手”的动作。",but1:"不挥",but2:"挥了"},{type:"轻柔试探",text:"我什么时候最让你觉得我温柔？",but1:"说话时",but2:"行动时"},{type:"小小冒险",text:"分享一个你最近的梦想。",but1:"没有",but2:"分享"},{type:"真心话",text:"你更喜欢运动还是静坐？",but1:"运动",but2:"静坐"},{type:"感官初探",text:"让我轻轻碰一下你的脸颊。",but1:"不要",but2:"碰了"},{type:"默契",text:"同时做一个“爱心”的手势。",but1:"不做",but2:"做了"},{type:"终极大冒险",text:"现在，你可以问我任何一个问题，我会诚实回答。",but1:"不问",but2:"我问"},{type:"轻柔试探",text:"你觉得我什么时候笑起来最好看？",but1:"都好看",but2:"思考中"},{type:"默契",text:"如果现在有一首歌能形容我们的关系，你觉得会是哪首？",but1:"",but2:""},{type:"眼神挑战",text:"和我对视15秒，不许笑。",but1:"我输了",but2:"完成"},{type:"真心话",text:"你第一次见我时，对我是什么印象？",but1:"忘了",but2:"记得"},{type:"小小冒险",text:"用三个词形容此刻的我。",but1:"",but2:""},{type:"感官初探",text:"闭上眼睛，让我轻轻碰一下你的手背。",but1:"不闭",but2:"好"},{type:"真心话",text:"你理想中的约会是什么样子的？",but1:"",but2:""},{type:"默契",text:"同时伸出手，比较一下手掌的大小。",but1:"不比",but2:"来吧"},{type:"轻柔试探",text:"我今天的发型/穿着，有哪里不一样吗？",but1:"没注意",but2:"有"},{type:"小小冒险",text:"分享一件你小时候的糗事。",but1:"没有",but2:"好吧"},{type:"真心话",text:"你相信一见钟情，还是日久生情？",but1:"一见",but2:"日久"},{type:"感官初探",text:"让我看看你今天的手机锁屏壁纸。",but1:"不行",but2:"可以"},{type:"默契",text:"同时说出一种水果。",but1:"",but2:""},{type:"轻柔试探",text:"你觉得我最大的优点是什么？",but1:"很多",but2:"一个"},{type:"小小冒险",text:"学一种小动物的叫声。",but1:"不要",but2:"喵/汪"},{type:"真心话",text:"你最近单曲循环的一首歌是什么？",but1:"",but2:""},{type:"感官初探",text:"让我闻一下你手腕上的味道（如果有香水/护肤品味）。",but1:"不好",but2:"给"},{type:"默契",text:"背对背，数到三同时转头。",but1:"不玩",but2:"好"},{type:"轻柔试探",text:"我做过什么事，让你觉得挺温暖的？",but1:"忘了",but2:"有件"},{type:"小小冒险",text:"用非惯用手写我的名字。",but1:"字丑",but2:"写啦"},{type:"真心话",text:"你独处时最喜欢做什么？",but1:"",but2:""},{type:"感官初探",text:"让我轻轻拍一下你的肩膀。",but1:"不行",but2:"可以"},{type:"默契",text:"猜拳，输的人回答赢的人一个问题。",but1:"不猜",but2:"来"},{type:"轻柔试探",text:"你觉得我像哪种动物？",but1:"",but2:""},{type:"小小冒险",text:"发一条仅我可见的朋友圈，内容自定。",but1:"不发",but2:"发了"},{type:"真心话",text:"你最喜欢的电影类型是什么？",but1:"",but2:""},{type:"感官初探",text:"交换手机，看彼此拍的最好的一张风景照。",but1:"不给",but2:"给看"},{type:"默契",text:"用手指比一个数字，让对方猜。",but1:"不玩",but2:"猜猜"},{type:"轻柔试探",text:"我说话时有没有什么你不自觉会注意的小习惯？",but1:"没注意",but2:"有"},{type:"小小冒险",text:"模仿我的一个习惯性动作。",but1:"不会",but2:"看着"},{type:"真心话",text:"你最想去哪里旅行？",but1:"",but2:""},{type:"感官初探",text:"让我看一下你手掌的纹路（看手相借口）。",but1:"不看",but2:"看吧"},{type:"默契",text:"一起做同一个表情，拍照。",but1:"不拍",but2:"茄子"},{type:"轻柔试探",text:"你觉得我认真做事的时候，看起来怎么样？",but1:"还行",but2:"专注"},{type:"小小冒险",text:"说一件你最近遇到的开心小事。",but1:"",but2:""},{type:"真心话",text:"你对“灵魂伴侣”这个词怎么看？",but1:"",but2:""},{type:"感官初探",text:"让我轻轻碰一下你的耳垂（如果你不介意）。",but1:"介意",but2:"不介意"},{type:"默契",text:"不说话，用眼神示意对方做一件事（比如喝水）。",but1:"不懂",but2:"明白"},{type:"轻柔试探",text:"我身上有什么味道是你喜欢的吗？",but1:"没注意",but2:"有"},{type:"小小冒险",text:"给对方起一个只有你能叫的昵称。",but1:"",but2:""},{type:"真心话",text:"你理想的周末是如何度过的？",but1:"",but2:""},{type:"感官初探",text:"让我帮你把额前掉下的头发撩到耳后。",but1:"不用",but2:"谢谢"},{type:"默契",text:"在手掌上写一个字，让对方猜。",but1:"不写",but2:"写啦"},{type:"轻柔试探",text:"你觉得我什么时候看起来最放松？",but1:"都行",but2:"吃饭时"},{type:"小小冒险",text:"分享一个你的怪癖或小习惯。",but1:"没有",but2:"有哦"},{type:"真心话",text:"你更喜欢热闹的聚会，还是安静的二人世界？",but1:"热闹",but2:"安静"},{type:"感官初探",text:"让我看看你今天戴的饰品（手表、项链等）。",but1:"没戴",but2:"给你"},{type:"默契",text:"同时闭上眼睛，数到五再睁开。",but1:"不闭",but2:"闭了"},{type:"轻柔试探",text:"我做的哪件事，让你觉得我挺细心的？",but1:"没",but2:"有"},{type:"小小冒险",text:"用方言说一句“你好可爱”或“你好帅”。",but1:"不会",but2:"说啦"},{type:"真心话",text:"你害怕孤独吗？",but1:"不怕",but2:"有时"},{type:"感官初探",text:"让我轻轻拍一下你的头顶（如果身高允许）。",but1:"不行",but2:"轻点"},{type:"默契",text:"用手指比划一个东西，让对方猜。",but1:"不猜",but2:"来吧"},{type:"轻柔试探",text:"你觉得我穿什么颜色的衣服最好看？",but1:"都行",but2:"蓝色"},{type:"小小冒险",text:"发一张你手机里最近拍的有趣照片给我。",but1:"没有",but2:"发你"},{type:"真心话",text:"你相信星座/血型吗？",but1:"不信",but2:"信一点"},{type:"感官初探",text:"让我碰一下你的指尖。",but1:"不给碰",but2:"给"},{type:"默契",text:"同时做一个鬼脸。",but1:"不做",but2:"做了"},{type:"轻柔试探",text:"我说话的声音，你觉得怎么样？",but1:"普通",but2:"好听"},{type:"小小冒险",text:"唱一句你喜欢的歌。",but1:"不唱",but2:"唱了"},{type:"真心话",text:"你对自己最满意的一点是什么？",but1:"",but2:""},{type:"感官初探",text:"让我帮你整理一下衣领或袖口。",but1:"不用",but2:"好"},{type:"默契",text:"在手心画圈，让对方猜是顺时针还是逆时针。",but1:"不玩",but2:"猜"},{type:"轻柔试探",text:"你觉得我生气的时候可怕吗？",but1:"可怕",but2:"不可怕"},{type:"小小冒险",text:"说一个你的小愿望（近期可实现的）。",but1:"",but2:""},{type:"真心话",text:"你如何看待承诺？",but1:"",but2:""},{type:"感官初探",text:"让我轻轻拉一下你的手指（只拉一下）。",but1:"不行",but2:"一下哦"},{type:"默契",text:"同时指向房间里的一个东西。",but1:"",but2:""},{type:"轻柔试探",text:"我哪一次让你觉得有点意外（惊喜的意外）？",but1:"没有",but2:"那次"},{type:"小小冒险",text:"做一个你觉得自己最可爱的表情。",but1:"不可爱",but2:"看"},{type:"真心话",text:"你喜欢雨天还是晴天？",but1:"晴天",but2:"雨天"},{type:"感官初探",text:"让我看看你今天的鞋子。",but1:"不好看",but2:"看吧"},{type:"默契",text:"不说话，用手指比出1-5中的一个数字，看是否一致。",but1:"不玩",but2:"来"},{type:"轻柔试探",text:"你觉得我是一个好的倾听者吗？",but1:"还行",but2:"是"},{type:"小小冒险",text:"分享一个你最近学会的新词或梗。",but1:"",but2:""},{type:"真心话",text:"你相信梦境有预示作用吗？",but1:"不信",but2:"信"},{type:"感官初探",text:"让我轻轻碰一下你的手肘。",but1:"别碰",but2:"嗯"},{type:"默契",text:"同时说出一种饮料。",but1:"",but2:""},{type:"轻柔试探",text:"我沉默的时候，你会好奇我在想什么吗？",but1:"不好奇",but2:"好奇"},{type:"小小冒险",text:"夸我一句，不能重复以前的。",but1:"词穷",but2:"夸了"},{type:"真心话",text:"你如何看待“个人空间”？",but1:"",but2:""},{type:"感官初探",text:"让我帮你拿一下你手里的东西（比如杯子）。",but1:"不用",but2:"给你"},{type:"默契",text:"背对背，走三步，然后同时回头。",but1:"不玩",but2:"好"},{type:"终极大冒险",text:"现在，你可以问我任何一个问题，我会诚实回答。",but1:"不问",but2:"我问"}]}];
    const STATE = {
        versionIndex: 0,
        position: 0,
        steps: 0,
        rolling: false,
        cols: 6,
        cellCount: 0,
        content: []
    };

    const pages = {
        load: document.getElementById('page-load'),
        join: document.getElementById('page-join'),
        index: document.getElementById('page-index'),
        game: document.getElementById('page-game')
    };

    const elements = {
        versionDesc: document.getElementById('version-desc'),
        gameVersion: document.getElementById('game-version'),
        grid: document.getElementById('game-grid'),
        dice: document.getElementById('dice'),
        stepCount: document.getElementById('step-count'),
        posCount: document.getElementById('pos-count'),
        modal: document.getElementById('modal-question'),
        qType: document.getElementById('question-type'),
        qText: document.getElementById('question-text'),
        qBtn1: document.getElementById('btn-q1'),
        qBtn2: document.getElementById('btn-q2'),
        btnStart: document.getElementById('btn-start'),
        btnBack: document.getElementById('btn-back'),
        btnShuffle: document.getElementById('btn-shuffle'),
        btnVerify: document.getElementById('btn-verify'),
        btnSkip: document.getElementById('btn-skip'),
        joinAnswer: document.getElementById('join-answer'),
        joinStatus: document.getElementById('join-status')
    };

    function showPage(name) {
        Object.values(pages).forEach((el) => el.classList.remove('active'));
        pages[name].classList.add('active');
    }

    function formatLocalTime() {
        const d = new Date();
        const parts = [
            d.getFullYear(),
            String(d.getMonth() + 1).padStart(2, '0'),
            String(d.getDate()).padStart(2, '0'),
            String(d.getHours()).padStart(2, '0')
        ];
        return parts.join('');
    }

    function goNextFromLoad() {
        if (formatLocalTime() < '2026010523') {
            showPage('index');
        } else {
            showPage('join');
        }
    }

    function initIndex() {
        const version = VERSIONS[STATE.versionIndex];
        elements.versionDesc.textContent = version.description;
    }

    function initGame() {
        const version = VERSIONS[STATE.versionIndex];
        STATE.content = version.content.slice();
        STATE.cellCount = Math.max(30, Math.min(60, STATE.content.length));
        elements.gameVersion.textContent = version.version;
        buildGrid();
        updateStats();
    }

    function buildGrid() {
        const rows = Math.ceil(STATE.cellCount / STATE.cols);
        elements.grid.style.gridTemplateColumns = `repeat(${STATE.cols}, 1fr)`;
        elements.grid.style.gridTemplateRows = `repeat(${rows}, minmax(64px, 1fr))`;
        elements.grid.innerHTML = '';

        for (let i = 0; i < STATE.cellCount; i += 1) {
            const row = Math.floor(i / STATE.cols);
            let col = i % STATE.cols;
            if (row % 2 === 1) {
                col = STATE.cols - 1 - col;
            }
            const cell = document.createElement('div');
            cell.className = 'grid-cell';
            cell.style.gridColumn = String(col + 1);
            cell.style.gridRow = String(row + 1);
            const num = document.createElement('span');
            num.className = 'num';
            num.textContent = String(i + 1);
            cell.appendChild(num);
            cell.appendChild(document.createTextNode('挑战'));
            elements.grid.appendChild(cell);
        }
        highlightCell();
    }

    function highlightCell() {
        const cells = Array.from(elements.grid.children);
        cells.forEach((cell) => cell.classList.remove('current'));
        const current = cells[STATE.position];
        if (current) current.classList.add('current');
    }

    function updateStats() {
        elements.stepCount.textContent = String(STATE.steps);
        elements.posCount.textContent = String(STATE.position + 1);
    }

    function rollDice() {
        if (STATE.rolling) return;
        STATE.rolling = true;
        let count = 0;
        const interval = setInterval(() => {
            const value = Math.floor(Math.random() * 6) + 1;
            elements.dice.textContent = String(value);
            count += 1;
            if (count >= 12) {
                clearInterval(interval);
                STATE.rolling = false;
                moveSteps(Number(elements.dice.textContent));
            }
        }, 80);
    }

    function moveSteps(step) {
        STATE.position = (STATE.position + step) % STATE.cellCount;
        STATE.steps += step;
        highlightCell();
        updateStats();
        showQuestion();
    }

    function showQuestion() {
        const item = STATE.content[STATE.position % STATE.content.length];
        elements.qType.textContent = item.type || '挑战';
        elements.qText.textContent = item.text || '一起完成一个小挑战吧。';
        elements.qBtn1.textContent = item.but1 || '好的';
        elements.qBtn2.textContent = item.but2 || '拒绝';
        elements.modal.classList.add('active');
    }

    function closeModal() {
        elements.modal.classList.remove('active');
    }

    function shuffleContent() {
        for (let i = STATE.content.length - 1; i > 0; i -= 1) {
            const j = Math.floor(Math.random() * (i + 1));
            [STATE.content[i], STATE.content[j]] = [STATE.content[j], STATE.content[i]];
        }
        STATE.position = 0;
        STATE.steps = 0;
        highlightCell();
        updateStats();
    }

    function openQQGroup() {
        const key = 'cn0pc4EU_zOH37C_Jpypx7ZJQ62mHGdB';
        const url = `mqqopensdkapi://bizAgent/qm/qr?url=http%3A%2F%2Fqm.qq.com%2Fcgi-bin%2Fqm%2Fqr%3Ffrom%3Dapp%26p%3Dandroid%26jump_from%3Dwebapi%26k%3D${key}`;
        window.location.href = url;
    }

    function verifyAndJoin() {
        elements.joinStatus.textContent = '答案验证中...';
        setTimeout(() => {
            elements.joinStatus.textContent = '正在打开 QQ 群...';
            openQQGroup();
        }, 5000);
    }

    function bindEvents() {
        elements.btnStart.addEventListener('click', () => {
            showPage('game');
            initGame();
        });
        elements.btnBack.addEventListener('click', () => showPage('index'));
        elements.dice.addEventListener('click', rollDice);
        elements.qBtn1.addEventListener('click', closeModal);
        elements.qBtn2.addEventListener('click', closeModal);
        elements.btnShuffle.addEventListener('click', shuffleContent);
        elements.btnVerify.addEventListener('click', verifyAndJoin);
        elements.btnSkip.addEventListener('click', () => showPage('index'));
        elements.joinAnswer.addEventListener('input', (e) => {
            const value = e.target.value.replace(/\D/g, '').slice(0, 3);
            e.target.value = value;
        });
        elements.modal.addEventListener('click', (e) => {
            if (e.target === elements.modal) closeModal();
        });
    }

    function init() {
        initIndex();
        bindEvents();
        setTimeout(goNextFromLoad, 2200);
    }

    window.addEventListener('DOMContentLoaded', init);
})();
