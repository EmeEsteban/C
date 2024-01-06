import fetch from 'node-fetch';
const handler = async (m, {conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems}) => {
  if (usedPrefix == 'a' || usedPrefix == 'A') return;
  try {
    const pp = imagen4;
    // let vn = './media/menu.mp3'
    const img = './Menu2.jpg';
    const d = new Date(new Date + 3600000);
    const locale = 'es-ES';
    const week = d.toLocaleDateString(locale, {weekday: 'long'});
    const date = d.toLocaleDateString(locale, {day: '2-digit', month: '2-digit', year: 'numeric'});
    const _uptime = process.uptime() * 1000;
    const uptime = clockString(_uptime);
    const user = global.db.data.users[m.sender];
    const {money, joincount} = global.db.data.users[m.sender];
    const {exp, limit, level, role} = global.db.data.users[m.sender];
    const rtotalreg = Object.values(global.db.data.users).filter((user) => user.registered == true).length;
    const rtotal = Object.entries(global.db.data.users).length || '0'
    const more = String.fromCharCode(8206);
    const readMore = more.repeat(850);
    const taguser = '@' + m.sender.split('@s.whatsapp.net')[0];
    const doc = ['pdf', 'zip', 'vnd.openxmlformats-officedocument.presentationml.presentation', 'vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'vnd.openxmlformats-officedocument.wordprocessingml.document'];
    const document = doc[Math.floor(Math.random() * doc.length)];
    const str = `𝙏𝙃𝙀 𝙈𝙔𝙎𝙏𝙄𝘾 - 𝘽𝙊𝙏

 ▢ *Hola,* ${taguser}

 
 _*< SOBRE EL BOT />*_

  ▢ _${usedPrefix}grupos_
  ▢ _${usedPrefix}estado_
  ▢ _${usedPrefix}reporte *<txt>*_
  ▢ _${usedPrefix}fixmsgespera_


 _*< SUB-BOTS />*_

  ▢ _${usedPrefix}enable restrict_
  ▢ _${usedPrefix}disable restrict_
  ▢ _${usedPrefix}enable autoread_
  ▢ _${usedPrefix}disable autoread_
  ▢ _${usedPrefix}enable antispam_
  ▢ _${usedPrefix}disable antispam_
  ▢ _${usedPrefix}enable anticall_
  ▢ _${usedPrefix}disable anticall_
  ▢ _${usedPrefix}enable antiprivado_
  ▢ _${usedPrefix}disable antiprivado_


 _*< ACT./DESACT. FUNC. />*_

  ▢ _${usedPrefix}enable *welcome*_
  ▢ _${usedPrefix}disable *welcome*_
  ▢ _${usedPrefix}enable *modohorny*_
  ▢ _${usedPrefix}disable *modohorny*_
  ▢ _${usedPrefix}enable *antilink*_
  ▢ _${usedPrefix}disable *antilink*_
  ▢ _${usedPrefix}enable *antilink2*_
  ▢ _${usedPrefix}disable *antilink2*_
  ▢ _${usedPrefix}enable *detect*_
  ▢ _${usedPrefix}disable *detect*_
  ▢ _${usedPrefix}enable *audios*_
  ▢ _${usedPrefix}disable *audios*_
  ▢ _${usedPrefix}enable *autosticker*_
  ▢ _${usedPrefix}disable *autosticker*_
  ▢ _${usedPrefix}enable *antiviewonce*_
  ▢ _${usedPrefix}disable *antiviewonce*_
  ▢ _${usedPrefix}enable *antitoxic*_
  ▢ _${usedPrefix}disable *antitoxic*_
  ▢ _${usedPrefix}enable *antitraba*_
  ▢ _${usedPrefix}disable *antitraba*_
  ▢ _${usedPrefix}enable *antiarabes*_
  ▢ _${usedPrefix}disable *antiarabes*_
  ▢ _${usedPrefix}enable *modoadmin*_
  ▢ _${usedPrefix}disable *modoadmin*_
  ▢ _${usedPrefix}enable *antidelete*_
  ▢ _${usedPrefix}disable *antidelete*_


 _*< GRUPOS />*_

  ▢ _${usedPrefix}add *num>*_
  ▢ _${usedPrefix}kick *<@tag>*_
  ▢ _${usedPrefix}kick2 *<@tag>*_
  ▢ _${usedPrefix}listanum *<txt>*_
  ▢ _${usedPrefix}kicknum *<txt>*_
  ▢ _${usedPrefix}grupo *<abrir/cerrar>*_
  ▢ _${usedPrefix}grouptime *<opcion> <tiempo>*_
  ▢ _${usedPrefix}promote *<@tag>*_
  ▢ _${usedPrefix}demote *<@tag>*_
  ▢ _${usedPrefix}infogroup_
  ▢ _${usedPrefix}resetlink_
  ▢ _${usedPrefix}link_
  ▢ _${usedPrefix}setname *<txt>*_
  ▢ _${usedPrefix}setdesc *<txt>*_
  ▢ _${usedPrefix}invocar *<txt>*_
  ▢ _${usedPrefix}setwelcome *<txt>*_
  ▢ _${usedPrefix}setbye *<txt>*_
  ▢ _${usedPrefix}hidetag *<txt>*_
  ▢ _${usedPrefix}hidetag *<audio>*_
  ▢ _${usedPrefix}hidetag *<video>*_
  ▢ _${usedPrefix}hidetag *<img>*_
  ▢ _${usedPrefix}warn *<@tag>*_
  ▢ _${usedPrefix}unwarn *<@tag>*_
  ▢ _${usedPrefix}listwarn_
  ▢ _${usedPrefix}fantasmas_
  ▢ _${usedPrefix}destraba_
  ▢ _${usedPrefix}setpp *<img>*_
  ▢ _admins *<txt>*_ (sin prefijo)


 _*< CONVERTIDORES />*_

  ▢ _${usedPrefix}blur_

 _*< CHAT ANÓNIMO />*_

  ▢ _${usedPrefix}start_
  ▢ _${usedPrefix}next_
  ▢ _${usedPrefix}leave_


 _*< HERRAMIENTAS />*_
 
  ▢ _${usedPrefix}inspect *<wagc_url>*_
  ▢ _${usedPrefix}spamwa *num|txt|cant>*_
  ▢ _${usedPrefix}readviewonce *<img / video>*_
  ▢ _${usedPrefix}encuesta *<txt1|txt2>*_
  ▢ _${usedPrefix}acortar *<url>*_
  ▢ _${usedPrefix}del *<msj>*_
  ▢ _${usedPrefix}nowa *num>*_

 _*< STICKERS />*_

  ▢ _${usedPrefix}sticker *<responder a img o video>*_
  ▢ _${usedPrefix}sticker *<url>*_
  ▢ _${usedPrefix}sticker2 *<responder a img o video>*_
  ▢ _${usedPrefix}sticker2 *<url>*_
  ▢ _${usedPrefix}s *<responder a img o video>*_
  ▢ _${usedPrefix}s *<url>*_
  ▢ _${usedPrefix}emojimix *<emoji 1>&<emoji 2>*_
  ▢ _${usedPrefix}scircle *<img>*_
  ▢ _${usedPrefix}sremovebg *<img>*_
  ▢ _${usedPrefix}semoji *<tipo> <emoji>*_
  ▢ _${usedPrefix}qc *<txt>*_
  ▢ _${usedPrefix}attp *<txt>*_
  ▢ _${usedPrefix}attp2 *<txt>*_
  ▢ _${usedPrefix}attp3 *<txt>*_
  ▢ _${usedPrefix}ttp *<txt>*_
  ▢ _${usedPrefix}ttp2 *<txt>*_
  ▢ _${usedPrefix}ttp3 *<txt>*_
  ▢ _${usedPrefix}ttp4 *<txt>*_
  ▢ _${usedPrefix}ttp5 *<txt>*_
  ▢ _${usedPrefix}dado_
  ▢ _${usedPrefix}wm *<packname> <autor>*_
  ▢ _${usedPrefix}stickermarker *<efecto> <img>*_
  ▢ _${usedPrefix}stickerfilter *<efecto> <img>*_


 _*< PROPIETARIO Y MODS. />*_

  ▢ _> *<funcion>*_
  ▢ _=> *<funcion>*_
  ▢ _$ *<funcion>*_
  ▢ _${usedPrefix}dsowner_
  ▢ _${usedPrefix}setprefix *<prefijo>*_
  ▢ _${usedPrefix}resetprefix_
  ▢ _${usedPrefix}autoadmin_
  ▢ _${usedPrefix}grouplist_
  ▢ _${usedPrefix}leavegc_
  ▢ _${usedPrefix}blocklist_
  ▢ _${usedPrefix}owner *<@tag / num>*_
  ▢ _${usedPrefix}nowner *<@tag / num>*_
  ▢ _${usedPrefix}block *<@tag / num>*_
  ▢ _${usedPrefix}unblock *<@tag / num>*_
  ▢ _${usedPrefix}enable *restrict*_
  ▢ _${usedPrefix}disable *restrict*_
  ▢ _${usedPrefix}enable *autoread*_
  ▢ _${usedPrefix}disable *autoread*_
  ▢ _${usedPrefix}enable *public*_
  ▢ _${usedPrefix}disable *public*_
  ▢ _${usedPrefix}enable *pconly*_
  ▢ _${usedPrefix}disable *pconly*_
  ▢ _${usedPrefix}enable *gconly*_
  ▢ _${usedPrefix}disable *gconly*_
  ▢ _${usedPrefix}enable *anticall*_
  ▢ _${usedPrefix}disable *anticall*_
  ▢ _${usedPrefix}enable *antiprivado*_
  ▢ _${usedPrefix}disable *antiprivado*_
  ▢ _${usedPrefix}enable *modejadibot*_
  ▢ _${usedPrefix}disable *modejadibot*_
  ▢ _${usedPrefix}enable *antispam*_
  ▢ _${usedPrefix}disable *antispam*_
  ▢ _${usedPrefix}msg *<txt>*_
  ▢ _${usedPrefix}banchat_
  ▢ _${usedPrefix}unbanchat_
  ▢ _${usedPrefix}resetuser *<@tag>*_
  ▢ _${usedPrefix}banuser *<@tag>*_
  ▢ _${usedPrefix}unbanuser *<@tag>*_
  ▢ _${usedPrefix}banuser *<@tag>*_
  ▢ _${usedPrefix}bc *<txt>*_
  ▢ _${usedPrefix}bcchats *<txt>*_
  ▢ _${usedPrefix}bcgc *<txt>*_
  ▢ _${usedPrefix}bcgc2 *<aud>*_
  ▢ _${usedPrefix}bcgc2 *<vid>*_
  ▢ _${usedPrefix}bcgc2 *<img>*_
  ▢ _${usedPrefix}bcbot *<txt>*_
  ▢ _${usedPrefix}cleartpm_
  ▢ _${usedPrefix}restart_
  ▢ _${usedPrefix}update_
  ▢ _${usedPrefix}banlist_
  ▢ _${usedPrefix}listcmd_
  ▢ _${usedPrefix}setppbot *<responder a img>*_
  ▢ _${usedPrefix}addcmd *<txt>*_
  ▢ _${usedPrefix}delcmd_
  ▢ _${usedPrefix}saveimage_
  ▢ _${usedPrefix}viewimage_`.trim();
    if (m.isGroup) {
      // await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
      const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};
      conn.sendMessage(m.chat, {image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net')}, {quoted: m});
    } else {
      // await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
      const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};
      conn.sendMessage(m.chat, {image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net')}, {quoted: fkontak2});
    }
  } catch {
    conn.reply(m.chat, '*[ ℹ️ ] Este menu tiene un error interno, por lo cual no fue posible enviarlo.*', m);
  }
};
handler.command = /^(menu|menú|memu|memú|help|info|comandos|allmenu|2help|menu1.2|ayuda|commands|commandos|cmd)$/i;
handler.exp = 50;
handler.fail = null;
export default handler;
function clockString(ms) {
  const h = isNaN(ms) ? '--' : Math.floor(ms / 3600000);
  const m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60;
  const s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60;
  return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(':');
}
