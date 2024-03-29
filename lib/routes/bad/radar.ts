export default {
    'bad.news': {
        _name: 'Bad.news',
        '.': [
            {
                title: '通用',
                docs: 'https://docs.rsshub.app/routes/new-media#bad-news-tong-yong',
                source: ['/'],
                target: (params, url) => `/bad${new URL(url).href.match(/bad\.news(.*?)/)[1]}`,
            },
        ],
    },
};
