module.exports = {

  name: "join",

  alias: ["joingc"],

  desc: "ask bot to Join a group",

  category: "Support",

  usage: "join <link>",

  react: "🎀",

  start: async (

    Miku,

    m,

    { args, text, prefix, isCreator, pushName, SUPPORTstatus }

  ) => {

    if (SUPPORTstatus == "false")  return m.reply(`Support is not enabled in this group!\n\nTo use this command, type:\n\n*${prefix}support* to join Support group`);

    if (!text)

      return Miku.sendMessage(

        m.from,

        { text: "Please provide a valid WhatsApp group link !" },

        { quoted: m }

      );

    if (!args[0].includes("whatsapp.com"))

      return Miku.sendMessage(

        m.from,

        { text: "Please provide a valid WhatsApp group link !" },

        { quoted: m }

      );

    let gcJoinCode = args[0].split("https://chat.whatsapp.com/")[1];

    await Miku.groupAcceptInvite(gcJoinCode)

      .then(async (res) => {

        Miku.sendMessage(

          m.from,

          { text: `_Successfully Joined !_` },

          { quoted: m }

        ).catch((e) => {

          Miku.sendMessage(

            m.from,

            {

              text: `_Failed to join group ! Maybe bot was removed from there before !_`,

            },

            { quoted: m }

          );

        });

      })

      .catch((e) => {

        Miku.sendMessage(

          m.from,

          {

            text: `_Failed to join group ! Maybe bot was removed from there before !_`,

          },

          { quoted: m }

        );

      });

  },

};

