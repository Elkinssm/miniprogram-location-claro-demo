Page({
  onLoad() {
    my.showLoading({ content: 'Loading location...' });
    let that = this;
    my.getLocation({
      success(res) {
        my.hideLoading();
        console.log(res);
        const longitude = res.longitude;
        const latitude = res.latitude;
        const name = "Mi ubicación";
        const address = res.address;
        that.setData({
          longitude,
          latitude,
          name,
          address,
        });
      },
      fail() {
        my.hideLoading();
        my.alert({ title: 'Location failed' });
      },
    });
  },
})
