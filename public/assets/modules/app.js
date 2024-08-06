layui.define(['dark', 'page'], function (exports) {
  console.log('app module loaded');

  const { dark, util, page } = layui;

  util.event('lay-header-event', {
    toggleDark: dark.toggleDark,
  });


  // 加载首页
  page.render({
    el: '#page-content',
    url: '/views/dashboard/workplace.html',
    done: function (res) {
      console.log('done', res);
    }
  });

  exports('app', {});
});
