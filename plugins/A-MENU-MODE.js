let fs = require('fs')
let pdfpic = fs.readFileSync('./fake.png')
let thumb = fs.readFileSync('./Raphae-2.png')
let fetch = require('node-fetch')
let pic1 = fs.readFileSync('./fake.mp4')
let safusimage = 'https://i.ibb.co/sgDvxrK/IMG-20210727-WA1305.jpg'
let moment = require('moment-timezone')
const { MessageType } = require('@adiwajshing/baileys')
let path = require('path')
let levelling = require('../lib/levelling')
let handler = async (m, { conn, usedPrefix }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  try {
    pp = await conn.getProfilePicture(who)
  } catch (e) {

  } finally {
    let AutoTime = moment.tz('Asia/Kolkata').format('HH')
    var greetingTime = '𝙶𝚘𝚘𝚍 𝙼𝚘𝚛𝚗𝚒𝚗𝚐 🌄'
				if (AutoTime >= '03' && AutoTime <= '10') {
				greetingTime = '𝓖𝓸𝓸𝓭 𝓜𝓸𝓻𝓷𝓲𝓷𝓰 🌄'
				} else if (AutoTime >= '10' && AutoTime <= '13') {
				greetingTime = '𝓖𝓸𝓸𝓭 𝓐𝓯𝓽𝓮𝓻𝓷𝓸𝓸𝓷 ☀️'
				} else if (AutoTime >= '13' && AutoTime <= '18') {
				greetingTime = '𝓖𝓸𝓸𝓭 𝓔𝓿𝓮𝓷𝓲𝓷𝓰 🌅'
				} else if (AutoTime >= '18' && AutoTime <= '23') {
				greetingTime = '𝓖𝓸𝓸𝓭 𝓝𝓲𝓰𝓱𝓽 🌙'
				} else {
				greetingTime = '𝓖𝓸𝓸𝓭 𝓝𝓲𝓰𝓱𝓽 🌙'
				} 
				   let name = conn.getName(m.sender)
    let d = new Date
    let locale = 'en'
				    let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    })
        let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
       let { exp, limit, registered, regTime, level, role } = global.DATABASE.data.users[m.sender]
    let { min, xp, max } = levelling.xpRange(level, global.multiplier)
       let _uptime = process.uptime() * 1000
    let _muptime
    if (process.send) {
      process.send('uptime')
      _muptime = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
    let muptime = clockString(_muptime)
    let uptime = clockString(_uptime)
    if (/^.*m1/i.test(m.text)) {
let menu1 =`╭─「 Admin 」❋ཻུ۪۪⸙
│ • .add nomor,nomor (Limit)
│ • .+ nomor,nomor (Limit)
│ • .demote @user
│ • .member @user
│ • .↓ @user
│ • .kick @user (Limit)
│ • .- @user (Limit)
│ • .demote @user
│ • .member @user
│ • .↓ @user
│ • .promote @user
│ • .admin @user
│ • .^ @user
│ • .↑ @user
╰────❋ཻུ۪۪⸙`.trim()
conn.send2ButtonImg(m.chat, pic1, menu1, `
▌▎▏▏▌█▏▋▊▍▌
★彡[ʀᴀᴘʜᴀᴇʟ-ʙᴏᴛ]彡★`, 'menu', '.menu', 'INFO', '.info', m)
}
	  
	  
	  
	  
	  
	  
	  
	  
if (/^.*m2/i.test(m.text)) {
let menu2 = `
╭─「 Sticker 」❋ཻུ۪۪⸙
│ • .attp <teks>
│ • .attp2 <teks> (Limit)
│ • .ctrigger <text> (Limit)
│ • .dadu
│ • .getexif
│ • .semoji [tipe] <emoji>
│ • .stiker (caption|reply media)
│ • .stiker <url>
│ • .stikergif (caption|reply media)
│ • .stikergif <url>
│ • .stikerline <url> (Limit)
│ • .stikertelegram <url> (Limit)
│ • .stikerly <pencarian> (Limit)
│ • .stickfilter (caption|reply media) (Limit)
│ • .stickmaker (caption|reply media) (Limit)
│ • .stikertelegram <url> (Limit) (Premium)
│ • .togif (reply)
│ • .toimg (reply)
│ • .toimg2 (reply)
│ • .tovideo (reply)
│ • .ttp <teks>
│ • .ttp2 <teks> (Limit)
│ • .ttpdark <teks> (Limit)
│ • .wm <packname>|<author>
╰──── ❋ཻུ۪۪⸙`.trim()
conn.send2ButtonImg(m.chat, pic1, menu2, `
▌▎▏▏▌█▏▋▊▍▌
★彡[ʀᴀᴘʜᴀᴇʟ-ʙᴏᴛ]彡★`, 'Menu', '.menu', 'INFO', '.info', m)
}
	  
	  
	  
	  
	  
	  
	  
	  
	  if (/^.*m3/i.test(m.text)) {
let menu3 = `
╭─「 Owner 」❋ཻུ۪۪⸙
│ • .whitelist nomor,nomor
│ • .addprem [@user]
│ • .banchat
│ • .ban
│ • .blocklist
│ • .broadcast <teks>
│ • .bc <teks>
│ • .broadcastgroup <teks>
│ • .bcgc <teks>
│ • .clearchat
│ • .clearchat chat
│ • .clearchat group
│ • .clearchat all
│ • .deletechat
│ • .deletechat chat
│ • .deletechat group
│ • .deletechat all
│ • .mutechat
│ • .mutechat chat
│ • .mutechat group
│ • .mutechat all
│ • .delprem [@user]
│ • .enable <option>
│ • .disable <option>
│ • .premlist
│ • .oadd @user
│ • .o+ @user
│ • .okick @user
│ • .o- @user
│ • .opromote @user
│ • .oadmin @user
│ • .o^ @user
│ • .setbotbio
│ • .setbotname
│ • .setbye <teks>
│ • .setexif <packname>|<owner>
│ • .setmenu <teks>
│ • .setmenubefore <teks>
│ • .setmenuheader <teks>
│ • .setmenubody <teks>
│ • .setmenufooter <teks>
│ • .setmenuafter <teks>
│ • .setwelcome <teks>
│ • .simulate <event> [@mention]
│ • .unbanchat
│ • .ban
│ • .upsw [text] (Reply Media)
│ • .upsw <text>
╰──── ❋ཻུ۪۪⸙`.trim()
conn.send2ButtonImg(m.chat, pic1, menu3, `
▌▎▏▏▌█▏▋▊▍▌
★彡[ʀᴀᴘʜᴀᴇʟ-ʙᴏᴛ]彡★`, 'Menu', '.menu', 'INFO', '.info', m)
}
	  
	  
	  
	  
	  
	  
	  
	  if (/^.*m4/i.test(m.text)) {
let menu4 = `
╭─「 Database 」❋ཻུ۪۪⸙
│ • .addvn <teks>
│ • .addmsg <teks>
│ • .addvideo <teks>
│ • .addgif <teks>
│ • .addaudio <teks>
│ • .addimg <teks>
│ • .addsticker <teks>
│ • .delcmd <text>
│ • .delvn <teks>
│ • .delmsg <teks>
│ • .delvideo <teks>
│ • .delgif <teks>
│ • .delaudio <teks>
│ • .delimg <teks>
│ • .delsticker <teks>
│ • .getvn <teks>
│ • .getmsg <teks>
│ • .getvideo <teks>
│ • .getgif <teks>
│ • .getaudio <teks>
│ • .getimg <teks>
│ • .getsticker <teks>
│ • .infocmd <text>
│ • .listcmd <text>
│ • .listall
│ • .listdoc
│ • .listvn
│ • .listmsg
│ • .listvideo
│ • .listgif
│ • .listaudio
│ • .listimg
│ • .liststicker
│ • .unlockcmd
│ • .lockcmd
│ • .unlockmsg
│ • .lockmsg
│ • .setcmd <text>
╰────❋ཻུ۪۪⸙`.trim()
conn.send2ButtonImg(m.chat, pic1, menu4, `
▌▎▏▏▌█▏▋▊▍▌
★彡[ʀᴀᴘʜᴀᴇʟ-ʙᴏᴛ]彡★`, 'Menu', '.menu', 'INFO', '.info', m)
}
	  
	  
	  
	  
	  
	  
	  
	  if (/^.*m5/i.test(m.text)) {
let menu5 = `
╭─「 Tools 」❋ཻུ۪۪⸙
│ • .aksara <opsi> <teks> (Limit)
│ • .asupan
│ • .base64
│ • .calc <expression>
│ • .calc <expression>
│ • .carigrup <pencarian>
│ • .caripesan <pesan>|<jumlah>
│ • .hd (caption|reply media)
│ • .enhance (caption|reply media)
│ • .enphoto <effect> <text>|[text2]|[text3]
│ • .whatmusic
│ • .gimage <query>
│ • .image <query>
│ • .githubsearch <pencarian>
│ • .hadis
│ • .halah <teks>
│ • .hilih <teks>
│ • .huluh <teks>
│ • .heleh <teks>
│ • .holoh <teks>
│ • .tobraille
│ • .inspect <chat.whatsapp.com>
│ • .kodepos <kota> (Limit)
│ • .memeg<apa|apa>
│ • .mention <teks>
│ • .nulis2 <teks>
│ • .profile [@user]
│ • .profile1 [@user]
│ • .qr <teks>
│ • .qrcode <teks>
│ • .readmore <teks>|<teks>
│ • .spoiler <teks>|<teks>
│ • .readviewonce
│ • .run (Limit)
│ • .scan [nomor]
│ • .spamcall <nomor> (Limit)
│ • .ping
│ • .speed
│ • .style <text>
│ • .textpro <effect> <text>|[text2]
│ • .translate <lang> <teks>
│ • .tts <lang> <teks>
│ • .upload (caption|reply media)
│ • .wait (caption|reply image)
│ • .wallpaperq (Limit)
│ • .yts <pencarian>
│ • .ytsearch <pencarian>
│ • .zodiac 2002 02 25
╰────❋ཻུ۪۪⸙`.trim()
conn.send2ButtonImg(m.chat, pic1, menu5, `
▌▎▏▏▌█▏▋▊▍▌
★彡[ʀᴀᴘʜᴀᴇʟ-ʙᴏᴛ]彡★`, 'Menu', '.menu', 'INFO', '.info', m)
}
	  
	  
	  
	  
	  
	  
	  
	  if (/^.*m6/i.test(m.text)) {
let menu6 = `
╭─「 Downloader 」❋ཻུ۪۪⸙
│ • .fb <url>
│ • .ig <url>
│ • .ighighlight <username>
│ • .igstalk <username>
│ • .igstory <username>
│ • .play <pencarian> (Limit)
│ • .play2 <pencarian> (Limit)

│ • .tiktok <url>
│ • .twitter <url> (Limit)
│ • .ytmp3 <url> [server: id4, en60, en61, en68] (Limit)
│ • .yta <url> [server: id4, en60, en61, en68] (Limit)
│ • .ytmp4 <url> [server: id4, en60, en61, en68] (Limit)
│ • .ytv <url> [server: id4, en60, en61, en68] (Limit)
│ • .yt <url> [server: id4, en60, en61, en68] (Limit)
╰──── ❋ཻུ۪۪⸙`.trim()
conn.send2ButtonImg(m.chat, pic1, menu6, `
▌▎▏▏▌█▏▋▊▍▌
★彡[ʀᴀᴘʜᴀᴇʟ-ʙᴏᴛ]彡★`, 'Menu', '.menu', 'INFO', '.info', m)
}
	  
	  
	  
	  
	  
	  
	  
	  if (/^.*m7/i.test(m.text)) {
let menu7 = `
╭─「 Internet 」❋ཻུ۪۪⸙
│ • .alkitab <pencarian>
│ • .anime <judul>
│ • .character <nama>
│ • .covid <negara>
│ • .darkjokes
│ • .fetch <url>
│ • .get <url>
│ • .gimage <query>
│ • .image <query>
│ • .google <pencarian>
│ • .googlef <pencarian>
│ • .epep <id>
│ • .katabijak <opsi>
│ • .kbbi <teks>
│ • .Layarkaca <query>
│ • .lirik <Apa>
│ • .manga <judul>
│ • .resep <makanan>
│ • .masak <makanan>
│ • .megumin
│ • .meme
│ • .neko
│ • pikachu
│ • .pinterest <keyword>
│ • .ppcouple
│ • .ppcp
│ • .loli
│ • .spotify <query>
│ • .ss <url>
│ • .ssf <url>
│ • .subreddit <query>
│ • .trendtwit
│ • .trendingtwitter
│ • .unsplash <keyword>
│ • .waifu
│ • .wallpaperanime (Limit)
│ • .wikipedia <apa>
│ • .Zodiakharian <zodiak>
│ • .Zodiakmingguan <zodiak>
╰──── ❋ཻུ۪۪⸙`.trim()
conn.send2ButtonImg(m.chat, pic1, menu7, `
▌▎▏▏▌█▏▋▊▍▌
★彡[ʀᴀᴘʜᴀᴇʟ-ʙᴏᴛ]彡★`, 'Menu', '.menu', 'INFO', '.info', m)
}
	  
	  
	  
	  
	  
	  
	  
	  if (/^.*m8/i.test(m.text)) {
let menu8 = `
╭─「 Group 」❋ཻུ۪۪⸙
│ • .group open / close
│ • .enable <option>
│ • .disable <option>
│ • .getsider
│ • .infogrup
│ • .leavegc
│ • .leavegcall
│ • .leavegroup
│ • .linkgroup
│ • .here
│ • .listonline
│ • .opengumuman [teks]
│ • .oannounce [teks]
│ • .ohidetag [teks]
│ • .pengumuman [teks]
│ • .announce [teks]
│ • .hidetag [teks]
│ • .revoke
│ • .setpp
│ • .setbye <teks>
│ • .Setdesk <text>
│ • .Setname <text>
│ • .setwelcome <teks>
│ • .simulate <event> [@mention]
│ • .totalpesan
│ • .warn [@user]
│ • .Cekwarn @user
│ • .Delwarn @user
╰──── ❋ཻུ۪۪⸙`.trim()
conn.send2ButtonImg(m.chat, pic1, menu8, `
▌▎▏▏▌█▏▋▊▍▌
★彡[ʀᴀᴘʜᴀᴇʟ-ʙᴏᴛ]彡★`, 'Menu', '.menu', 'INFO', '.info', m)
}
	  
	  
	  
	  
	  
	  
	  
	  if (/^.*m9/i.test(m.text)) {
let menu9 = `
╭─「 Game 」❋ཻུ۪۪⸙
│ • .asahotak
│ • .caklontong
│ • .delsesittt (Limit)
│ • .family100
│ • .math <mode>
│ • .siapakahaku
│ • .suit [gunting|batu|kertas]
│ • .suitpvp @tag
│ • .suit2 @tag
│ • .tebakgambar
│ • .tebakkata
│ • .tebakkimia
│ • .tebaklagu (Limit)
│ • .tebaklirik
│ • .tictactoe [custom room name]
│ • .ttt [custom room name]
╰──── ❋ཻུ۪۪⸙`.trim()
conn.send2ButtonImg(m.chat, pic1, menu9, `
▌▎▏▏▌█▏▋▊▍▌
★彡[ʀᴀᴘʜᴀᴇʟ-ʙᴏᴛ]彡★`, 'Menu', '.menu', 'INFO', '.info', m)
}
	  
	  
	  
	  
	  
	  
	  
if (/^.*me10/i.test(m.text)) {
let menu10 = `
╭─「 Main 」
│ • .afk [alasan]
│ • .jadian (Limit)
│ • .menu
│ • .help
╰──── ❋ཻུ۪۪⸙`.trim()
conn.send2ButtonImg(m.chat, pic1, menu10, `
▌▎▏▏▌█▏▋▊▍▌
★彡[ʀᴀᴘʜᴀᴇʟ-ʙᴏᴛ]彡★`, 'Menu', '.menu', 'INFO', '.info', m)
}
	  
	  
	  
	  
	  
	  
	  
	  	  
	  if (/^.*me11/i.test(m.text)) {
let menu11 = `
╭─「 Exp & Limit 」
│ • .buy<jumlah limit>
│ • .buy <jumlah limit>
│ • .buyall
│ • .daily
│ • .claim
│ • .leaderboard [jumlah user]
│ • .lb [jumlah user]
│ • .levelup
│ • .limit [@user]
│ • .pay @user <amount>
│ • .paylimit @user <amount>
╰──── ❋ཻུ۪۪⸙`.trim()
conn.send2ButtonImg(m.chat, pic1, menu11, `
▌▎▏▏▌█▏▋▊▍▌
★彡[ʀᴀᴘʜᴀᴇʟ-ʙᴏᴛ]彡★`, 'Menu', '.menu', 'INFO', '.info', m)
}
	  
	  
	  
	  
	  
	  
	  
	  	  
	  if (/^.*me12/i.test(m.text)) {
let menu12 = `
╭─「 Kerang Ajaib 」
│ • whatis <text>?
│ • .apakah <pertanyaan>
│ • .artinama <nama>
│ • kapan <text>?
│ • kapankah <text>?
│ • .kapan <pertanyaan>
│ • .kapankah <pertanyaan>
╰──── ❋ཻུ۪۪⸙`.trim()
conn.send2ButtonImg(m.chat, pic1, menu12, `
▌▎▏▏▌█▏▋▊▍▌
★彡[ʀᴀᴘʜᴀᴇʟ-ʙᴏᴛ]彡★`, 'Menu', '.menu', 'INFO', '.info', m)
}
	  
	  
	  
	  
	  
	  
	  
	  	  
	  if (/^.*me13/i.test(m.text)) {
let menu13 = `
╭─「 MagerNulis & Logo 」
│ • .tahta <teks> (Limit)
│ • .magernulis1 <teks> (Limit)
│ • .magernulis2 <teks> (Limit)
│ • .magernulis3 <teks> (Limit)
│ • .magernulis4 <teks> (Limit)
│ • .magernulis5 <teks> (Limit)
│ • .magernulis6 <teks> (Limit)
│ • .nulis <teks>
│ • .quotemaker <teks>|<wm> (Limit)
│ • .quotemaker2 <teks | wm> (Limit)
│ • .tahta2<teks>
╰──── ❋ཻུ۪۪⸙`.trim()
conn.send2ButtonImg(m.chat, pic1, menu13, `
▌▎▏▏▌█▏▋▊▍▌
★彡[ʀᴀᴘʜᴀᴇʟ-ʙᴏᴛ]彡★`, 'Menu', '.menu', 'INFO', '.info', m)
}
	  
	  
	  
	  
	  
	  
	  
	  	  
	  if (/^.*me14/i.test(m.text)) {
let menu14 = `
╭─「 Fun 」
│ • .simi <teks>
│ • .simsimi <teks>
│ • .simih <teks>
│ • .dadu
│ • .dare (Limit)
│ • .Namaninja <teks>
│ • .Purba <teks>
│ • .hug
│ • .pat
│ • .wink
│ • .jodoh <nama>|<nama doi> (Limit)
│ • .ref
│ • .simi <teks>
│ • .simsimi <teks>
│ • .simih <teks>
│ • .truth (Limit)
╰──── ❋ཻུ۪۪⸙`.trim()
conn.send2ButtonImg(m.chat, pic1, menu14, `
▌▎▏▏▌█▏▋▊▍▌
★彡[ʀᴀᴘʜᴀᴇʟ-ʙᴏᴛ]彡★`, 'Menu', '.menu', 'INFO', '.info', m)
}
	  
	  
	  
	  
	  
	  
	  
	  	  
	  if (/^.*me15/i.test(m.text)) {
let menu15 = `
╭─「 Voting 」
│ • .cekvote
│ • .hapusvote
│ • .mulaivote [alasan]
│ • .upvote
│ • .devote
╰──── ❋ཻུ۪۪⸙`.trim()
conn.send2ButtonImg(m.chat, pic1, menu15, `
▌▎▏▏▌█▏▋▊▍▌
★彡[ʀᴀᴘʜᴀᴇʟ-ʙᴏᴛ]彡★`, 'Menu', '.menu', 'INFO', '.info', m)
}
	  
	  
	  
	  
	  
	  
	  
	  	  
	  if (/^.*me16/i.test(m.text)) {
let menu16 = `
╭─「 Absen 」
│ • .cekabsen
│ • .hapusabsen
│ • .mulaiabsen [teks]
│ • .absen
╰──── ❋ཻུ۪۪⸙`.trim()
conn.send2ButtonImg(m.chat, pic1, menu16, `
▌▎▏▏▌█▏▋▊▍▌
★彡[ʀᴀᴘʜᴀᴇʟ-ʙᴏᴛ]彡★`, 'Menu', '.menu', 'INFO', '.info', m)
}
	  
	  
	  
	  
	  
	  
	  
	  	  
	  if (/^.*me17/i.test(m.text)) {
let menu17 = `
╭─「 Jadi Bot 」
│ • .getcode
│ • .jadibot (Limit)
│ • .listjadibot
│ • .berhenti
│ • .stop
│ • .berhenti
│ • .stop
╰──── ❋ཻུ۪۪⸙`.trim()
conn.send2ButtonImg(m.chat, pic1, menu17, `
▌▎▏▏▌█▏▋▊▍▌
★彡[ʀᴀᴘʜᴀᴇʟ-ʙᴏᴛ]彡★`, 'Menu', '.menu', 'INFO', '.info', m)
}
	  
	  
	  
	  
	  
	  
	  
	  	  
	  if (/^.*me18/i.test(m.text)) {
let menu18 = `
╭─「 Host 」
│ • .broadcastjadibot <teks>
│ • .bcbot <teks>
│ • .debounce
│ • .update
│ • .update2
╰──── ❋ཻུ۪۪⸙`.trim()
conn.send2ButtonImg(m.chat, pic1, menu18, `
▌▎▏▏▌█▏▋▊▍▌
★彡[ʀᴀᴘʜᴀᴇʟ-ʙᴏᴛ]彡★`, 'Menu', '.menu', 'INFO', '.info', m)
}
	  
	  
	  
	  
	  
	  
	  
	  	  
	  if (/^.*me19/i.test(m.text)) {
let menu19 = `
╭─「 Info 」
│ • .bannedlist
│ • .owner
│ • .creator
│ • .del
│ • .delete
│ • .donasi
│ • .groups
│ • .grouplist
│ • .bug <laporan>
│ • .report <laporan>
│ • .ping
│ • .speed
╰──── ❋ཻུ۪۪⸙`.trim()
conn.send2ButtonImg(m.chat, pic1, menu19, `
▌▎▏▏▌█▏▋▊▍▌
★彡[ʀᴀᴘʜᴀᴇʟ-ʙᴏᴛ]彡★`, 'Menu', '.menu', 'INFO', '.info', m)
}
	  
	  
	  
	  
	  
	  
	  
	  	  
	  if (/^.*me20/i.test(m.text)) {
let menu20 = `
╭─「 videomaker 」
│ • .army <text>
│ • .bold <text>
│ • .colorful <text>
│ • .glowing <text>
│ • .poly <text>
│ • .retro <text>
│ • .shaunthesheep
╰──── ❋ཻུ۪۪⸙`.trim()
conn.send2ButtonImg(m.chat, pic1, menu20, `
▌▎▏▏▌█▏▋▊▍▌
★彡[ʀᴀᴘʜᴀᴇʟ-ʙᴏᴛ]彡★`, 'Menu', '.menu', 'INFO', '.info', m)
}
	  
	  
	  
	  
	  
	  
	  
	  	  
	  if (/^.*me21/i.test(m.text)) {
let menu21 = `
╭─「 exp 」
│ • .ceksn
│ • .daftar <nama>.<umur>
│ • .reg <nama>.<umur>
│ • .register <nama>.<umur>
│ • .unreg <SN|SERIAL NUMBER>
│ • .unregister <SN|SERIAL NUMBER>
╰──── ❋ཻུ۪۪⸙`.trim()
conn.send2ButtonImg(m.chat, pic1, menu21, `
▌▎▏▏▌█▏▋▊▍▌
★彡[ʀᴀᴘʜᴀᴇʟ-ʙᴏᴛ]彡★`, 'Menu', '.menu', 'INFO', '.info', m)
}
	  
	  
	  
	  
	  
	  
	  
	  	  
	  if (/^.*me22/i.test(m.text)) {
let menu22 = `
╭─「 maker 」
│ • .gay
│ • .hornycard
│ • .hornylicense
│ • .itssostupid
│ • .iss
│ • .stupid
│ • .lolice
│ • .renungan (Limit)
│ • .simpcard
│ • .trigger
│ • .ytcomment <comment>
╰──── ❋ཻུ۪۪⸙`.trim()
conn.send2ButtonImg(m.chat, pic1, menu22, `
▌▎▏▏▌█▏▋▊▍▌
★彡[ʀᴀᴘʜᴀᴇʟ-ʙᴏᴛ]彡★`, 'Menu', '.menu', 'INFO', '.info', m)
}
	  
	  
	  
	  
	  
	  
	  
	  	  
	  if (/^.*me23/i.test(m.text)) {
let menu23 = `
╭─「 download 」
│ • .gitclone <url> (Limit)
│ • .githubdl (Limit)
╰──── ❋ཻུ۪۪⸙`.trim()
conn.send2ButtonImg(m.chat, pic1, menu23, `
▌▎▏▏▌█▏▋▊▍▌
★彡[ʀᴀᴘʜᴀᴇʟ-ʙᴏᴛ]彡★`, 'Menu', '.menu', 'INFO', '.info', m)
}
	  
	  
	  
	  
	  
	  
	  
	  	  
	  if (/^.*me24/i.test(m.text)) {
let menu24 = `
╭─「 berita 」
│ • .detik
│ • .kompas
│ • .liputan6
│ • .tribun
│ • .jalantikus
╰──── ❋ཻུ۪۪⸙`.trim()
conn.send2ButtonImg(m.chat, pic1, menu24, `
▌▎▏▏▌█▏▋▊▍▌
★彡[ʀᴀᴘʜᴀᴇʟ-ʙᴏᴛ]彡★`, 'Menu', '.menu', 'INFO', '.info', m)
}
	  
	  
	  
	  
	  
	  
	  
	  	  
	  if (/^.*me25/i.test(m.text)) {
let menu25 = `
╭─「 audio 」
│ • .tomp3 (reply)
│ • .tovn (reply)
│ • .bass [vn]
│ • .blown [vn]
│ • .deep [vn]
│ • .earrape [vn]
│ • .fast [vn]
│ • .fat [vn]
│ • .nightcore [vn]
│ • .reverse [vn]
│ • .robot [vn]
│ • .slow [vn]
│ • .smooth [vn]
│ • .tupai [vn]
╰──── ❋ཻུ۪۪⸙`.trim()
conn.send2ButtonImg(m.chat, pic1, menu25, `
▌▎▏▏▌█▏▋▊▍▌
★彡[ʀᴀᴘʜᴀᴇʟ-ʙᴏᴛ]彡★`, 'Menu', '.menu', 'INFO', '.info', m)
}
	  
	  
	  
	  
	  
	  
	  
	  	  
	  if (/^.*me26/i.test(m.text)) {
let menu26 = `
╭─「 temp 」
│ • .temp (Limit)
╰──── ❋ཻུ۪۪⸙`.trim()
conn.send2ButtonGif(m.chat, pic1, menu26, `
▌▎▏▏▌█▏▋▊▍▌
★彡[ʀᴀᴘʜᴀᴇʟ-ʙᴏᴛ]彡★`, 'Menu', '.menu', 'INFO', '.info', m)
}
	  
	  
	  
	  
	  
	  
	  
	  	  
	  
}}
handler.command = /^(m1|m2|m3|m4|m5|m6|m7|m8|m9|me10|me11|me12|me13|me14|me15|me16|me17|me18|me19|me20|me21|me22|me23|me24|me25|me26)$/i
module.exports = handler

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}
