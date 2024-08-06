layui.define([], function (exports) {
  console.log('page module loaded');

  const { $, layer } = layui;

  // page.render({
  //   el: '#LAY_app',
  //   url: '/index.html',
  //   done: function (res) {
  //     console.log('done', res);
  //   }
  // });
  function render(opts) {
    $.ajax({
      url: opts.url,
      type: 'get',
      dataType: 'html',
      success: function (data) {
        $(opts.el).html(data);
      },
      error: function (xhr) {
        return layer.msg(
          'Status:' + xhr.status + '，' + xhr.statusText + '，请稍后再试！'
        );
      },
    });
  }

  exports('page', {
    render,
  });
});
