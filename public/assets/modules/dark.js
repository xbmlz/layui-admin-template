layui.define([], function (exports) {
  console.log('dark module loaded');

  const { element, $, util } = layui;

  const prefersDark =
    window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: dark)').matches;
  const isDark = document.documentElement.classList.contains('dark');

  $('#dark-mode-icon').attr(
    'class',
    isDark ? 'layui-icon layui-icon-light' : 'layui-icon layui-icon-moon'
  );

  window
    .matchMedia('(prefers-color-scheme: dark)')
    .addEventListener('change', (e) => {
      const setting = localStorage.getItem('layui-color-scheme') || 'auto';
      if (setting === 'auto') {
        document.documentElement.classList.toggle('dark', e.matches);
        $('#layui-dark-theme').attr(
          'href',
          e.matches ? '/public/assets/css/layui-theme-dark.css' : ''
        );
        $('#dark-mode-icon').attr(
          'class',
          e.matches
            ? 'layui-icon layui-icon-light'
            : 'layui-icon layui-icon-moon'
        );
      }
    });

  util.event('lay-header-event', {
    toggleDarkMode: function () {
      let isDark = document.documentElement.classList.contains('dark');
      isDark = !isDark;
      document.documentElement.classList.toggle('dark', isDark);
      $('#dark-mode-icon').attr(
        'class',
        isDark ? 'layui-icon layui-icon-light' : 'layui-icon layui-icon-moon'
      );
      $('#layui-dark-theme').attr(
        'href',
        isDark
          ? '/public/assets/css/layui-theme-dark.css'
          : ''
      );
      if (prefersDark === isDark) {
        localStorage.setItem('layui-color-scheme', 'auto');
      } else {
        localStorage.setItem('layui-color-scheme', isDark ? 'dark' : 'light');
      }
    },
  });

  exports('dark', {});
});
