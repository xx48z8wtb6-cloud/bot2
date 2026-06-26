import { getAnime } from '../../lib/frediApi.js';
import { getFakeQuoted } from '../../lib/fakeQuoted.js';

export default {
    name: 'blush',
    aliases: ['animeblush', 'embarrass'],
    description: 'Send a blushing anime image',
    run: async (context) => {
        const { client, m } = context;
        const fq = getFakeQuoted(m);
        try {
            await client.sendMessage(m.chat, { react: { text: '⌛', key: m.reactKey } });
            const url = await getAnime('blush');
            await client.sendMessage(m.chat, { react: { text: '✅', key: m.reactKey } });
            await client.sendMessage(m.chat, {
                image: { url },
                caption: '╭━━━ᕙ    Ongito-Md    ᕗ━━━\n├━━━≫ Bʟᴜsʜ ≪━━━\n╰━━━━━━━━━━━━━━━━ᕗ\n'
            }, { quoted: fq });
        } catch (error) {
            await client.sendMessage(m.chat, { react: { text: '❌', key: m.reactKey } });
            await m.reply('╭━━━ᕙ    Ongito-Md    ᕗ━━━\n├━━━≫ Eʀʀᴏʀ ≪━━━\n├ \n├ Too embarrassed to show up!\n╰━━━━━━━━━━━━━━━━ᕗ\n');
        }
    }
};
