module.exports = {
    css: {
        extract: false
    },
    publicPath: process.env.NODE_ENV === 'production' ?
        '/travel/' // test20200915 為 repo 名稱
        :
        '/'
}