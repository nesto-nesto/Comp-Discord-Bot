const weather = require('weather-js');
const discord = require('discord.js')




//TIME TO END STREAM
module.exports = {
  name: "weather",
  description: "Get the weather of anywhere",
  category: "info",
  usage: "weathet <>",
  run: (client, message, args) => {
    
    
    if(!args.length) {
      return message.channel.send("Navedite lokaciju!")
    }
    
 weather.find({search: args.join(" "), degreeType: 'C'}, function(err, result) {
try {
 
let embed = new discord.MessageEmbed()
.setTitle(`Vreme - ${result[0].location.name}`)
.setColor('GREEN')
.addField("Temperatura", `${result[0].current.temperature} Celcius`, true)
.addField("Vlaznost", result[0].current.humidity, true)
.addField("Brzina Vetra", result[0].current.windspeed, true)//What about image
.addField("Vreme:", result[0].current.observationtime, true)
.addField("Prikaz vetra:", result[0].current.winddisplay, true)
.setThumbnail(result[0].current.imageUrl);
   message.channel.send(embed)
} catch(err) {
  return message.channel.send("Unable To Get the data of Given location")
}
});   
    //LETS CHECK OUT PKG
    
  }
}