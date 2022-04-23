//═══════[ THANKS 2K SUBSCRIBER ]════════\\
/*
• SCRIPT FULL NO ENC
• APIKEY PREMIUM
*/
const fs = require('fs')
const chalk = require('chalk')

global.APIs = {
	zenz: 'https://zenzapis.xyz', 
}
global.APIKeys = {
	'https://zenzapi.xyz': '805a6c3fa9', //Apikey Premium
}
global.Prefix = 'Multi'
global.meki = '6285878313791'
global.ownerNumber = '6285878313791'
global.botname = 'Ｃｈｉｔａｎｄａ - ＭＤ' 
global.ownername = '𝙸 𝙰𝚖 𝙺𝚒𝚉𝚊𝚔𝚒𝚇𝙳'
global.owner = ['6285878313791'] 
global.pemilik = ['6285878313791'] 
global.premium = ['6285878313791'] 
global.pengguna = '𝙺𝙸𝚉𝙰𝙺𝙸𝚇𝙳'
global.botnma = 'Ｃｈｉｔａｎｄａ - ＭＤ' 
global.ownernma = '𝙸 𝙰𝚖 𝙺𝚒𝚉𝚊𝚔𝚒𝚇𝙳'
global.packname = '✨ 𝙺𝙸𝚉𝙰𝙺𝙸𝚇𝙳 ✨' 
global.author = 'Ｃｈｉｔａｎｄａ - ＭＤ' 
global.sessionName = 'kizakixd'
global.prefa = ['#','!','/','']
global.sp = '» ' 
global.mess = {
    success: 'Berhasil.',
    admin: 'Fitur Khusus Admin Group!',
    botAdmin: 'Bot Harus Menjadi Admin Terlebih Dahulu!',
    owner: 'Fitur Khusus Owner Bot',
    group: 'Fitur Digunakan Hanya Untuk Group!',
    private: 'Fitur Digunakan Hanya Untuk Private Chat!',
    bot: 'Fitur Khusus Pengguna Nomor Bot',
    wait: 'Loading...',
    done: 'Done',
    endLimit: 'Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12',
    wrongFormat: 'Perintah Salah!!\nSertakan Link setelah Command..',
    example1: 'Welcome @user Di Group @subject Jangan Lupa Baca Rules @desc\n\nNote :\n1. @user (Mention User Join)\n2. @subject (Group Name)\n3. @tanggal (Date Now)\n4. @desc (Get Description Group)'
,
    example2: 'Good Bye @user Di Group @subject Jangan Lupa Baca Rules @desc\n\nNote :\n1. @user (Mention User Join)\n2. @subject (Group Name)\n3. @tanggal (Date Now)\n4. @desc (Get Description Group)'    
}
global.limitawal = {
    premium: "Infinity",
    free: 100
}

global.thumb = fs.readFileSync('./media/zaki.jpg')
global.fakeImg = fs.readFileSync('./media/fake.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
