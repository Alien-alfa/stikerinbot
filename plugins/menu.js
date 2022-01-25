let levelling = require('../lib/levelling')
let { MessageType } = require('@adiwajshing/baileys')
let fs = require('fs')
let path = require('path')
let fetch = require('node-fetch')
let moment = require('moment-timezone')
const defaultMenu = {
  before: `
┌─〔 %me 〕
├ Hai, %name!
│
├ Tersisa *%limit Limit*
├ Role *%role*
├ Level *%level (%exp / %maxexp)* [%xp4levelup]
├ %totalexp XP secara Total
│ 
├ Tanggal: *%week %weton, %date*
├ Tanggal Islam: *%dateIslamic*
├ Waktu: *%time*
│
├ Uptime: *%uptime (%muptime)*
├ Database: %rtotalreg dari %totalreg
├ Github:
├ %github
└────
%readmore`.trimStart(),
  header: '┌─〔 %category 〕',
  body: '├ %cmd %islimit %isPremium',
  footer: '└────\n',
  after: `
*%npmname@^%version*
${'```%npmdesc```'}
`,
}
let handler = async (m, { conn, usedPrefix: _p, args, command }) => {
  let tags
  let teks = `${args[0]}`.toLowerCase()
  let arrayMenu = ['all', 'game', 'xp', 'stiker', 'kerangajaib', 'quotes', 'admin', 'grup', 'premium', 'internet', 'anonymous', 'nulis', 'downloader', 'tools', 'fun', 'database', 'quran', 'audio', 'jadibot', 'info', 'tanpakategori', 'owner']
  if (!arrayMenu.includes(teks)) teks = '404'
  if (teks == 'all') tags = {
    'main': 'Utama',
    'game': 'Game',
    'xp': 'Exp & Limit',
    'sticker': 'Stiker',
    'kerang': 'Kerang Ajaib',
    'quotes': 'Quotes',
    'admin': `Admin ${global.opts['restrict'] ? '' : '(Dinonaktifkan)'}`,
    'group': 'Grup',
    'premium': 'Premium',
    'internet': 'Internet',
    'anonymous': 'Anonymous Chat',
    'nulis': 'MagerNulis & Logo',
    'downloader': 'Downloader',
    'tools': 'Tools',
    'fun': 'Fun',
    'database': 'Database',
    'vote': 'Voting',
    'absen': 'Absen',
    'quran': 'Al Qur\'an',
    'audio': 'Pengubah Suara',
    'jadibot': 'Jadi Bot',
    'info': 'Info',
    '': 'Tanpa Kategori',
  }
  if (teks == 'game') tags = {
    'game': 'Game'
  }
  if (teks == 'xp') tags = {
    'xp': 'Exp & Limit'
  }
  if (teks == 'stiker') tags = {
    'sticker': 'Stiker'
  }
  if (teks == 'kerangajaib') tags = {
    'kerang': 'Kerang Ajaib'
  }
  if (teks == 'quotes') tags = {
    'quotes': 'Quotes'
  }
  if (teks == 'admin') tags = {
    'admin': `Admin ${global.opts['restrict'] ? '' : '(Dinonaktifkan)'}`
  }
  if (teks == 'grup') tags = {
    'group': 'Grup'
  }
  if (teks == 'premium') tags = {
    'premium': 'Premium'
  }
  if (teks == 'internet') tags = {
    'internet': 'Internet'
  }
  if (teks == 'anonymous') tags = {
    'anonymous': 'Anonymous Chat'
  }
  if (teks == 'nulis') tags = {
    'nulis': 'MagerNulis & Logo'
  }
  if (teks == 'downloader') tags = {
    'downloader': 'Downloader'
  }
  if (teks == 'tools') tags = {
    'tools': 'Tools'
  }
  if (teks == 'fun') tags = {
    'fun': 'Fun'
  }
  if (teks == 'database') tags = {
    'database': 'Database'
  }
  if (teks == 'vote') tags = {
    'vote': 'Voting',
    'absen': 'Absen'
  }
  if (teks == 'quran') tags = {
    'quran': 'Al Qur\'an'
  }
  if (teks == 'audio') tags = {
    'audio': 'Pengubah Suara'
  }
  if (teks == 'jadibot') tags = {
    'jadibot': 'Jadi Bot'
  }
  if (teks == 'info') tags = {
    'info': 'Info'
  }
  if (teks == 'tanpakategori') tags = {
    '': 'Tanpa Kategori'
  }
  if (teks == 'owner') tags = {
    'owner': 'Owner',
    'host': 'Host',
    'advanced': 'Advanced'
  }



  try {
    let package = JSON.parse(await fs.promises.readFile(path.join(__dirname, '../package.json')).catch(_ => '{}'))
    let { exp, limit, level, role, registered } = global.db.data.users[m.sender]
    let { min, xp, max } = levelling.xpRange(level, global.multiplier)
    let name = registered ? global.db.data.users[m.sender].name : conn.getName(m.sender)
    let d = new Date(new Date + 3600000)
    let locale = 'id'
    // d.getTimeZoneOffset()
    // Offset -420 is 18.00
    // Offset    0 is  0.00
    // Offset  420 is  7.00
    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(d)
    let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    })
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
    let totalreg = Object.keys(global.db.data.users).length
    let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
    let help = Object.values(global.plugins).filter(plugin => !plugin.disabled).map(plugin => {
      return {
        help: Array.isArray(plugin.help) ? plugin.help : [plugin.help],
        tags: Array.isArray(plugin.tags) ? plugin.tags : [plugin.tags],
        prefix: 'customPrefix' in plugin,
        limit: plugin.limit,
        premium: plugin.premium,
        enabled: !plugin.disabled,
      }
    })
    if (teks == '404') {
      return conn.relayWAMessage(conn.prepareMessageFromContent(m.chat, {
        "listMessage": {
          "title": `${ucapan()}, ${name}`.trim(),
          "description": "© stikerin",
          "buttonText": "Klik Disini",
          "listType": "SINGLE_SELECT",
          "sections": [
            {
                "rows": [{
                  "title": `*★ミ★𝙈𝘼𝙄𝙉 𝙈𝙀𝙉𝙐★彡★*`,
                  "description": "All Commands menu",
                  "rowId": `.mainmenu`
                  }],
                "title": `List Menu ${conn.user.name}`
              }, {
                "rows": [{
                  "title": `𝘼𝘿𝙈𝙄𝙉 𝘾𝙊𝙈𝙈𝘼𝙉𝘿𝙎`,
                  "description": "Commands for Group Admins",
                  "rowId": `.m1`
                }],
                "title": "─────「 1 」"
              }, {
                "rows": [{
                  "title": `𝙂𝙍𝙊𝙐𝙋 𝘾𝙊𝙈𝙈𝘼𝙉𝘿𝙎`,
                  "description": "Commands For Group",
                  "rowId": `.m8`
                }],
                "title": "─────「 2 」"
              }, {
                "rows": [{
                  "title": `𝙄𝙉𝙏𝙀𝙍𝙉𝙀𝙏 𝘾𝙊𝙈𝙈𝘼𝙉𝘿𝙎`,
                  "description": "Internet Tools for Fun",
                  "rowId": `.m7`
                }],
                "title": "─────「 3 」"
                }, {
                "rows": [{
                  "title": `𝙊𝙒𝙉𝙀𝙍 𝘾𝙊𝙈𝙈𝘼𝙉𝘿𝙎`,
                  "description": "Commands Only Owner Can Use",
                  "rowId": `.m3`
                }],
                "title": "─────「 4 」"
              }, {
                "rows": [{
                  "title": `𝘿𝙀𝙏𝘼𝘽𝘼𝙎𝙀 𝘾𝙊𝙈𝙈𝘼𝙉𝘿𝙎`,
                  "description": "Detabase management Commands For Owner",
                  "rowId": `.m4`
                }],
                "title": "─────「 5 」"
              }, {
                "rows": [{
                  "title": `𝙎𝙏𝙄𝘾𝙆𝙀𝙍 𝘾𝙊𝙈𝙈𝘼𝙉𝘿𝙎`,
                  "description": "Sticker Convertor Commands",
                  "rowId": `.m2`
                }],
                "title": "─────「 6 」"
              }, {
                "rows": [{
                  "title": `𝙂𝘼𝙈𝙀 𝘾𝙊𝙈𝙈𝘼𝙉𝘿𝙎`,
                  "description": "Fun Group Game commands",
                  "rowId": `.m9`
                }],
                "title": "─────「 7 」"
              }, {
                "rows": [{
                  "title": `𝘿𝙊𝙒𝙉𝙇𝙊𝘼𝘿𝙀𝙍 𝘾𝙊𝙈𝙈𝘼𝙉𝘿𝙎`,
                  "description": "Internet Media Downloader Commands",
                  "rowId": `$m6`
                }],
                "title": "─────「 8 」"
              }, {
                "rows": [{
                  "title": `𝙈𝘼𝙄𝙉 𝙏𝙊𝙊𝙇 𝘾𝙊𝙈𝙈𝘼𝙉𝘿𝙎`,
                  "description": "Tools That Can be Utilized",
                  "rowId": `$m5`
                }],
                "title": "─────「 9 」"
              }, {
                "rows": [{
                  "title": `𝙀𝙓𝙏𝙍𝘼 𝙄𝙏𝙀𝙈𝙎`,
                  "description": "Some Extra Items",
                  "rowId": `$me10`
                }],
                "title": "─────「 10 」"
              }, {
                "rows": [{
                  "title": `𝙀𝙓𝙋 & 𝙇𝙄𝙈𝙄𝙏`,
                  "description": "Main Tools For BOT",
                  "rowId": `$me11`
                }],
                "title": "─────「 11 」"
              }, {
                "rows": [{
                  "title": `𝙆𝙀𝙍𝘼𝙉𝙂 𝘼𝙅𝘼𝙄𝘽`,
                  "description": "",
                  "rowId": `.me12`
                }],
                "title": "─────「 12 」"
              }, {
                "rows": [{
                  "title": `𝙈𝘼𝙂𝙀𝙍𝙉𝙐𝙇𝙄𝙎 & 𝙇𝙊𝙂𝙊`,
                  "description": "",
                  "rowId": `.me13`
                }],
                "title": "─────「 13 」"
              }, {
                "rows": [{
                  "title": `𝙁𝙐𝙉 𝙈𝙀𝙉𝙐`,
                  "description": "",
                  "rowId": `.me14`
                 }],
                 "title": "─────「 14 」"
              }, {
                "rows": [{
                  "title": `𝙑𝙊𝙏𝙄𝙉𝙂 𝙁𝙐𝙉𝘾𝙏𝙄𝙊𝙉𝙎`,
                  "description": "",
                  "rowId": `.me15`
                }],
                "title": "─────「 15 」"
              }, {
                "rows": [{
                  "title": `𝙍𝙊𝙇𝙇 𝘾𝘼𝙇𝙇`,
                  "description": "",
                  "rowId": `.me16`
                }],
                "title": "─────「 16 」"
              }, {
                "rows":[{
                  "title": `𝙏𝙀𝙈𝙋𝙊𝙍𝘼𝙍𝙔 𝘽𝙊𝙏`,
                  "description": "",
                  "rowId": `.me17`
                }],
                "title": "─────「 17 」"
              }, {
                "rows": [{
                  "title": `𝙃𝙊𝙎𝙏 𝘾𝙊𝙈𝙈𝘼𝙉𝘿𝙎`,
                  "description": "",
                  "rowId": `.me18`
                }],
                "title": "─────「 18 」"
              }, {
                "rows": [{
                  "title": `𝘽𝙊𝙏 𝙄𝙉𝙁𝙊 𝘾𝙊𝙈𝙈𝘼𝙉𝘿𝙎`,
                  "description": "",
                  "rowId": `.me19`
                }],
                "title": "─────「 19 」"
              }, {
                "rows": [{
                  "title": `𝙑𝙄𝘿𝙀𝙊𝙈𝘼𝙆𝙀𝙍 𝙏𝙊𝙊𝙇𝙎`,
                  "description": "",
                  "rowId": `.me20`
                }],
                "title": "─────「 20 」"
              }, {
                "rows": [{
                  "title": `𝙀𝙓𝙋 𝘾𝙊𝙈𝙈𝘼𝙉𝘿𝙎`,
                  "description": "",
                  "rowId": `.me21`
                }],
                "title": "─────「 21 」"
              }, {
                "rows": [{
                  "title": `𝙈𝘼𝙍𝙆𝙀𝙍 𝙏𝙊𝙊𝙇𝙎`,
                  "description": "",
                  "rowId": `.me22`
                }],
                "title": "─────「 22 」"
              }, {
                "rows": [{
                  "title":  `𝙂𝙄𝙏 𝘿𝙊𝙒𝙉𝙇𝙊𝘼𝘿 𝙏𝙊𝙊𝙇𝙎`,
                  "description": "",
                  "rowId": `.me23`
                }],
                "title": "─────「 23 」"
              }, {
                "rows": [{
                  "title": `𝙉𝙀𝙒𝙎  & 𝙄𝙉𝙁𝙊`,
                  "description": "",
                  "rowId": `.me24`
                }],
                "title": "─────「 24 」"
              }, {
                "rows": [{
                  "title":  `𝘼𝙐𝘿𝙄𝙊 𝙏𝙊𝙊𝙇𝙎`,
                  "description": "",
                  "rowId": `.me25`
                }],
                "title": "─────「 25 」"
              }, {
                "rows": [{
                  "title":  `𝙂𝙍𝙊𝙐𝙋𝙄𝙉𝙁𝙊`,
                  "description": "",
                  "rowId": `.groupinfo`
                }],
                "title": "─────「 26 」"
              }, {
                "rows": [{
                  "title":  `𝙍𝙀𝙂𝙄𝙎𝙏𝙀𝙍 𝙔𝙊𝙐𝙍 𝘿𝘼𝙏𝘼𝘽𝘼𝙎𝙀`,
                  "description": "",
                  "rowId": `.register`
                }],
                "title": "─────「 27 」"
              }, {
                "rows": [{
                  "title":  `𝙔𝙊𝙐𝙍 𝙋𝙍𝙊𝙁𝙄𝙇𝙀`,
                  "description": "",
                  "rowId": `.profile`
                }],
                "title": "─────「 28 」"
                }, {
                "rows": [{
                  "title":  `𝘽𝙊𝙏 𝙄𝙉𝙁𝙊`,
                  "description": "",
                  "rowId": `.info`
                }],
                "title": "─────「 29 」"
                }, {
                "rows": [{
                  "title":  `𝘽𝙊𝙏 𝙊𝙒𝙉𝙀𝙍/𝘼𝘿𝙈𝙄𝙉`,
                  "description": "Contact Of The Creator",
                  "rowId": `.owner`
                }],
                "title": "─────「 30 」"
                }, {
                "rows": [{
                  "title":  `𝙍𝙀𝘼𝘾𝙃 𝙊𝙐𝙏`,
                  "description": "Jual rdp murah dll",
                  "rowId": `.contact`
                }],
                "title": "WTS RDP MURAH"
              }
            ], "contextInfo": {
              "stanzaId": m.key.id,
              "participant": m.sender,
              "quotedMessage": m.message
            }
        }
      }, {}), { waitForAck: true })
      }
    // gunakan ini jika kamu menggunakan whatsapp bisnis
    //   throw `
    // ┌〔 DAFTAR MENU 〕
    // ├ ${_p + command} all
    // ├ ${_p + command} game
    // ├ ${_p + command} xp
    // ├ ${_p + command} stiker
    // ├ ${_p + command} kerang
    // ├ ${_p + command} quotes
    // ├ ${_p + command} admin
    // ├ ${_p + command} group
    // ├ ${_p + command} premium
    // ├ ${_p + command} internet
    // ├ ${_p + command} anonymous
    // ├ ${_p + command} nulis
    // ├ ${_p + command} downloader
    // ├ ${_p + command} tools
    // ├ ${_p + command} fun
    // ├ ${_p + command} database
    // ├ ${_p + command} vote
    // ├ ${_p + command} quran
    // ├ ${_p + command} audio
    // ├ ${_p + command} jadibot
    // ├ ${_p + command} info
    // ├ ${_p + command} tanpa kategori
    // ├ ${_p + command} owner
    // └────  
    //     `.trim()
    let groups = {}
    for (let tag in tags) {
      groups[tag] = []
      for (let plugin of help)
        if (plugin.tags && plugin.tags.includes(tag))
          if (plugin.help) groups[tag].push(plugin)
      // for (let tag of plugin.tags)
      //   if (!(tag in tags)) tags[tag] = tag
    }
    conn.menu = conn.menu ? conn.menu : {}
    let before = conn.menu.before || defaultMenu.before
    let header = conn.menu.header || defaultMenu.header
    let body = conn.menu.body || defaultMenu.body
    let footer = conn.menu.footer || defaultMenu.footer
    let after = conn.menu.after || (conn.user.jid == global.conn.user.jid ? '' : `Dipersembahkan oleh https://wa.me/${global.conn.user.jid.split`@`[0]}`) + defaultMenu.after
    let _text = [
      before,
      ...Object.keys(tags).map(tag => {
        return header.replace(/%category/g, tags[tag]) + '\n' + [
          ...help.filter(menu => menu.tags && menu.tags.includes(tag) && menu.help).map(menu => {
            return menu.help.map(help => {
              return body.replace(/%cmd/g, menu.prefix ? help : '%p' + help)
                .replace(/%islimit/g, menu.limit ? '(Limit)' : '')
                .replace(/%isPremium/g, menu.premium ? '(Premium)' : '')
                .trim()
            }).join('\n')
          }),
          footer
        ].join('\n')
      }),
      after
    ].join('\n')
    text = typeof conn.menu == 'string' ? conn.menu : typeof conn.menu == 'object' ? _text : ''
    let replace = {
      '%': '%',
      p: _p, uptime, muptime,
      me: conn.user.name,
      npmname: package.name,
      npmdesc: package.description,
      version: package.version,
      exp: exp - min,
      maxexp: xp,
      totalexp: exp,
      xp4levelup: max - exp <= 0 ? `Siap untuk *${_p}levelup*` : `${max - exp} XP lagi untuk levelup`,
      github: package.homepage ? package.homepage.url || package.homepage : '[unknown github url]',
      level, limit, name, weton, week, date, dateIslamic, time, totalreg, rtotalreg, role,
      readmore: readMore
    }
    text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])
    await conn.send2ButtonLoc(m.chat, await (await fetch(fla + teks)).buffer(), text.trim(), 'made with ❤️ by ariffb', 'Pemilik Bot', `${_p}owner`, 'Donasi', `${_p}donasi`, m)
  } catch (e) {
    conn.reply(m.chat, 'Maaf, menu sedang error', m)
    throw e
  }
}
handler.help = ['menu', 'help', '?']
handler.tags = ['main']
handler.command = /^(menu|help|\?)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 3

module.exports = handler

const more = String.fromCharCode(1)
const readMore = more.repeat(1)

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}
function ucapan() {
  const time = moment.tz('Asia/Jakarta').format('HH')
  res = "Selamat dinihari"
  if (time >= 4) {
    res = "Selamat pagi"
  }
  if (time > 10) {
    res = "Selamat siang"
  }
  if (time >= 15) {
    res = "Selamat sore"
  }
  if (time >= 18) {
    res = "Selamat malam"
  }
  return res
}
