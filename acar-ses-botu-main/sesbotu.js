const { Discord, Client, MessageEmbed, WebhookClient} = require('discord.js');
const client = global.client = new Client({fetchAllMembers: true});
const fs = require('fs');
const express = require('express');
const request = require('request')
const app = express();
client.on('voiceStateUpdate', (oldState, newState) => {
     const acarteyitkanal = "732378204232351834" // teyit kanal ıd
     let teyitkanaltani = client.channels.cache.get(acarteyitkanal); 
     if(!teyitkanaltani) return console.log('Kanal Bulunamadı.');
     let member = client.users.cache.get(newState.member.id);
     if(!newState.channelID === acarteyitkanal);
     if(!oldState.channelID === acarteyitkanal);
         teyitkanaltani.join().then(connection => { 
	    if (newState.channelID === acarteyitkanal){
	    if(!newState.member.roles.cache.get('840570492230565898')) return; //teyitsiz rol id
	   const dispatcher = connection.play(require("path").join(__dirname, './acar.mp3')); // buraya çalışcak sesin uzantısını girin!	
            dispatcher.on('end', () => {
                dispatcher.destroy();
		return;
            });
			  if(!newState.member.roles.cache.get('840570238776508428')) return; //teyitsiz rol id
	   const dispatcher = connection.play(require("path").join(__dirname, './yetkili.mp3')); // buraya çalışcak sesin uzantısını girin!	
            dispatcher.on('end', () => {
                dispatcher.destroy();
		return;
            });
}
});
});
client.login('NzI4MTk1NjExODk5MzMwNjIx.Xv23Aw.IYsE3vl2dz8HdNySDf9h5HU8UPs').then(c => console.log(`${client.user.tag} # Ses botu giriş sağladı!`)).catch(err => console.error("Bot giriş bilgileri yanlış olduğundan bota giriş yapılamadı!"));
