/**************************************************
 * OnlineMusicPlayer v2.32
 * 播放列表配置模块
 *************************************************/
// 建议修改前先备份一下
// 获取 歌曲的网易云音乐ID 或 网易云歌单ID 的方法：
// 先在 js/player.js 中开启调试模式，然后按 F12 打开浏览器的控制台。播放歌曲或点开歌单即可看到相应信息

var musicList = [
    // 以下三个系统预留列表请勿更改，否则可能导致程序无法正常运行！
    // 预留列表：搜索结果
    {
        name: "搜索结果",   // 播放列表名字
        cover: "",          // 播放列表封面
        creatorName: "",        // 列表创建者名字
        creatorAvatar: "",      // 列表创建者头像
        item: [

        ]
    },
    // 预留列表：正在播放
    {
        name: "正在播放",   // 播放列表名字
        cover: "",          // 播放列表封面
        creatorName: "",        // 列表创建者名字
        creatorAvatar: "",      // 列表创建者头像
        item: [

        ]
    },
    // 预留列表：播放历史
    {
        /* 可以手动维护这个歌单，然后再把它自动生成就好了，其他功能用到再调 */
        name: "播放历史",   // 播放列表名字
        cover: "images/history.png",          // 播放列表封面
        creatorName: "",        // 列表创建者名字
        creatorAvatar: "",      // 列表创建者头像
        item: [
            
        ]
    },  
    // 以上三个系统预留列表请勿更改，否则可能导致程序无法正常运行！
    //*********************************************
    // 自定义列表，手动创建列表并添加歌曲信息
    {
        id: "9527", 
        name: "自定义列表",   // 播放列表名字
        cover: "/images/album.png", // 播放列表封面图像
        creatorName: "EXP",        // 列表创建者名字(暂时没用到，可空)
        creatorAvatar: "EXP",      // 列表创建者头像(暂时没用到，可空)
        item: [                 // 这里面放歌曲（这里不要手动添加，否则不会自动加载 music_list.json）
        /*
            {
                id: "1",  // 音乐ID
                name: "从别后",  // 音乐名字
                artist: "流浪的蛙蛙", // 艺术家名字
                album: "..",    // 专辑名字
                source: "local",     // 音乐来源
                url_id: "436514312",  // 链接ID
                pic_id: "2946691234868155",  // 封面ID
                lyric_id: "436514312",  // 歌词ID
                pic: "https://p3.music.126.net/34YW1QtKxJ_3YnX9ZzKhzw==/2946691234868155.jpg",    // 专辑图片
                url: "static/动漫/斗破苍穹/流浪的蛙蛙 - 从别后.mp3"   // mp3链接（此项建议不填，除非你有该歌曲的比较稳定的外链）
            },
            {
                id: "2",  // 音乐ID
                name: "打上花火",  // 音乐名字
                artist: "你的名字", // 艺术家名字
                album: "你的名字",    // 专辑名字
                source: "local",     // 音乐来源
                url_id: "436514312",  // 链接ID
                pic_id: "2946691234868155",  // 封面ID
                lyric_id: "436514312",  // 歌词ID
                pic: "https://p3.music.126.net/34YW1QtKxJ_3YnX9ZzKhzw==/2946691234868155.jpg",    // 专辑图片
                url: "static/动漫/你的名字 - 打上花火.mp3"   // mp3链接（此项建议不填，除非你有该歌曲的比较稳定的外链）
            },
            {
                id: "3",  // 音乐ID
                name: "没有人能在我的BGM里打败我",  // 音乐名字
                artist: "Apocalyptica 启示录乐队", // 艺术家名字
                album: "bilibili晚会2022最美的夜",    // 专辑名字
                source: "local",     // 音乐来源
                url_id: "436514312",  // 链接ID
                pic_id: "2946691234868155",  // 封面ID
                lyric_id: "436514312",  // 歌词ID
                pic: "https://p3.music.126.net/34YW1QtKxJ_3YnX9ZzKhzw==/2946691234868155.jpg",    // 专辑图片
                url: "static/综艺/bilibili晚会2022最美的夜 - Apocalyptica 启示录乐队 - 没有人能在我的BGM里打败我.MP3"   // mp3链接（此项建议不填，除非你有该歌曲的比较稳定的外链）
            }  // 列表中最后一首歌大括号后面不要加逗号
        */
        ]
    }
];