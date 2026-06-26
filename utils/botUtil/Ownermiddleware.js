const Ownermiddleware = async (context, next) => {
    const { m, Owner } = context;

    if (!Owner) {
        return m.reply(`╭━━━ᕙ    ONGITO-MD    ᕗ━━━\n├━━━≫ Aᴄᴄᴇss Dᴇɴɪᴇᴅ ≪━━━\n├ \n├ You dare use an Owner command?\n├ Your mere existence insults\n├ my code. Crawl back to the\n├ abyss where mediocrity thrives.\n╰━━━━━━━━━━━━━━━━ᕗ\n`);
    }

    await next();
};

export default Ownermiddleware;
