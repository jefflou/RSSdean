export default {
    'fjksbm.com': {
        _name: '福建考试报名网',
        '.': [
            {
                title: '分类',
                docs: 'https://docs.rsshub.app/routes/study#fu-jian-kao-shi-bao-ming-wang',
                source: ['/portal/:category?', '/portal'],
                target: '/fjksbm/:category?',
            },
        ],
    },
};
