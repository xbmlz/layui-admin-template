layui.define([], function (exports) {
  console.log('dark module loaded');

  const { $ } = layui;

  const darkCSS = './public/assets/css/layui-theme-dark.css';
  const CSS_DISABLE_TRANS =
    '*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}';

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
        $('#layui-dark-css').attr('href', e.matches ? darkCSS : '');
        $('#dark-mode-icon').attr(
          'class',
          e.matches
            ? 'layui-icon layui-icon-light'
            : 'layui-icon layui-icon-moon'
        );
      }
    });

  function toggleDark() {
    let style = document.createElement('style');
    style.appendChild(document.createTextNode(CSS_DISABLE_TRANS));
    document.head.appendChild(style);

    let isDark = document.documentElement.classList.contains('dark');
    isDark = !isDark;

    $('#dark-mode-icon').attr(
      'class',
      isDark ? 'layui-icon layui-icon-light' : 'layui-icon layui-icon-moon'
    );

    $('#layui-dark-css').attr('href', isDark ? darkCSS : '');
    document.documentElement.classList.toggle('dark', isDark);

    if (prefersDark === isDark) {
      localStorage.setItem('layui-color-scheme', 'auto');
    } else {
      localStorage.setItem('layui-color-scheme', isDark ? 'dark' : 'light');
    }

    getComputedStyle(style).opacity;
    document.head.removeChild(style);
  }

  exports('dark', {
    toggleDark: toggleDark,
  });
});
