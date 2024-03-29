import cache from '@/utils/cache';
import got from '@/utils/got';
const { baseUrl, getBuildId, parseList, parseItem } = require('./utils');

export default async (ctx) => {
    const { kolId, lang = 'en' } = ctx.req.param();
    const { limit = 10 } = ctx.req.query();

    const buildId = await getBuildId(cache.tryGet);
    const { data: response } = await got(`${baseUrl}/_next/data/${buildId}/${lang}/kol/${kolId}.json`);

    const { queries } = response.pageProps.dehydratedState;
    const { data: profile } = queries.find((q) => q.queryKey[0] === '/user/get_profile').state;

    const list = parseList(queries.find((q) => q.queryKey[0] === '/feed/list/user').state.data.pages[0].list.slice(0, limit), lang, buildId);
    const items = await Promise.all(list.map((item) => parseItem(item, cache.tryGet)));

    ctx.set('data', {
        title: `${profile.nickname} - Followin`,
        description: profile.bio,
        link: `${baseUrl}/${lang}/kol/${kolId}`,
        image: profile.avatar,
        language: lang,
        item: items,
    });
};
