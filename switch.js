(function () {
  var STORAGE_KEY = 'site-lang';
  var DEFAULT_LANG = 'en';

  function applyLang(lang) {
    document.documentElement.setAttribute('lang', lang);

    document.querySelectorAll('[data-en]').forEach(function (el) {
      var val = el.getAttribute('data-' + lang);
      if (val !== null) el.textContent = val;
    });

    document.querySelectorAll('[data-en-html]').forEach(function (el) {
      var val = el.getAttribute('data-' + lang + '-html');
      if (val !== null) el.innerHTML = val;
    });

    var desc = document.querySelector('meta[name="description"][data-en-content]');
    if (desc) {
      var dval = desc.getAttribute('data-' + lang + '-content');
      if (dval !== null) desc.setAttribute('content', dval);
    }

    var title = document.querySelector('title[data-en]');
    if (title) {
      var tval = title.getAttribute('data-' + lang);
      if (tval !== null) document.title = tval;
    }

    document.querySelectorAll('.lang-switch [data-set-lang]').forEach(function (btn) {
      btn.setAttribute('aria-pressed', btn.getAttribute('data-set-lang') === lang ? 'true' : 'false');
    });

    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) {}
  }

  document.addEventListener('click', function (e) {
    var btn = e.target.closest('[data-set-lang]');
    if (btn) applyLang(btn.getAttribute('data-set-lang'));
  });

  var saved = null;
  try { saved = localStorage.getItem(STORAGE_KEY); } catch (e) {}
  applyLang(saved === 'nl' ? 'nl' : DEFAULT_LANG);
})();
