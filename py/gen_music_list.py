#!/usr/bin/env python
# -*- coding: utf-8 -*-
# env: python3
# --------------------------------------------
# 生成仓库所有音乐文件的路径，供播放器读取
#  （可人工执行、亦可通过 Github Action 在 PR 时触发）
# --------------------------------------------
# usage: 
#   python ./py/gen_music_list.py
# --------------------------------------------


import os
import json
import hashlib
from mutagen.easyid3 import EasyID3
from color_log.clog import log

DEFAULT_ENCODING = "utf-8"
WORK_DIR = "."
MUSIC_DIR = f"{WORK_DIR}/static"
MUSIC_LIST = f"{MUSIC_DIR}/music_list.json"
MUSIC_SUFFIXES = [ ".mp3", ".wma" ]
LYRIC_SUFFIX = ".lrc"
PIC_SUFFIX = ".jpg"


def main() :
    # 创建歌曲列表
    musiclist = MusicList(
        id="9527",
        name="自定义列表",
        cover="/images/album.png",
        creatorName="EXP",
        creatorAvatar="/images/avatar.jpg"
    )

    # 遍历所有文件
    for root, _, files in os.walk(MUSIC_DIR):
        for file in files:
            if not file.lower().endswith(tuple(MUSIC_SUFFIXES)) :
                continue

            absolute_path = os.path.join(root, file)
            rel_path = os.path.relpath(absolute_path, WORK_DIR).replace("\\", "/")
            rel_dir = os.path.dirname(rel_path)
            music_name = file[:-4]
            
            lyric_path = f"{rel_dir}/{music_name}{LYRIC_SUFFIX}"
            pic_path = f"{rel_dir}/{music_name}{PIC_SUFFIX}"

            # 检查歌词文件和封面图片文件是否存在
            if not os.path.exists(os.path.join(WORK_DIR, lyric_path)) :
                lyric_path = ""
            if not os.path.exists(os.path.join(WORK_DIR, pic_path)) :
                pic_path = ""

            # 获取 MP3 文件的元数据
            try:
                audio = EasyID3(absolute_path)
                artist = audio.get('artist', [''])[0]
                album = audio.get('album', [''])[0]
            except:
                artist = ""
                album = ""

            # 创建 Music 对象
            music = Music(
                id=calculate_md5(absolute_path),
                name=music_name,
                artist=artist,
                album=album,
                pic=pic_path,
                url=rel_path,
                lyric=lyric_path
            )
            musiclist.add(music)

    musiclist.save_to_file(MUSIC_LIST)


def calculate_md5(file_path):
    return hashlib.md5(file_path.encode()).hexdigest().lower()


class MusicList:
    def __init__(self, id, name, cover, creatorName, creatorAvatar):
        self.id = id
        self.name = name
        self.cover = cover
        self.creatorName = creatorName
        self.creatorAvatar = creatorAvatar
        self.item = []

    def add(self, music):
        self.item.append(music.__dict__)

    def save_to_file(self, file_path):
        with open(file_path, 'w+', encoding=DEFAULT_ENCODING) as file:
            json.dump([self.__dict__], file, ensure_ascii=False, indent=4)

class Music:
    def __init__(self, id, name, artist, album, pic, url, lyric, source="local", url_id=None, pic_id=None, lyric_id=None):
        self.id = id
        self.name = name
        self.artist = artist
        self.album = album
        self.url = url
        self.pic = pic
        self.lyric = lyric
        self.source = source
        self.url_id = "" if not url else id
        self.pic_id = "" if not pic else id
        self.lyric_id = "" if not lyric else id


if __name__ == "__main__" :
    main()
