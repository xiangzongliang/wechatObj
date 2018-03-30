// pages/tenRoad/tenRoad.js
Page({
    data: {
        posterImg: [
            '../../image/001.jpg',
            '../../image/002.jpg'
        ],
        showFooter: false,
        orderList: [{
            title: '12333',
        }, {
            title: '12333',
        }]
    },
    onLoad: function (options) {

    },
    // 下拉到底部
    onReachBottom: function (e) {
        console.log(e)
    },
    //右上角转发
    onShareAppMessage: function (d) {
        console.log('dsd', d);
    }
})