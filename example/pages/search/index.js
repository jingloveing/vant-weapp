import Page from '../../common/page';

Page({
  data: {
    value: ''
  },

  onChange(e) {
    this.setData({
      value: e.detail
    });
  },

  onSearch(event) {
    if (this.data.value) {
      wx.showToast({
        title: '搜索：' + this.data.value,
        icon: 'none'
      });
    }
  },

  onCancel() {
    wx.showToast({
      title: '取消',
      icon: 'none'
    });
  }
});
