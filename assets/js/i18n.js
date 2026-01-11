(function(){
  const KEY = "af26_lang";
  const defaultLang = "fr";

  function setLang(lang){
    document.documentElement.setAttribute("data-lang", lang);
    localStorage.setItem(KEY, lang);

    // Toggle buttons
    document.querySelectorAll("[data-lang-btn]").forEach(btn=>{
      btn.classList.toggle("active", btn.getAttribute("data-lang-btn") === lang);
    });

    // Show/hide bilingual nodes
    document.querySelectorAll("[data-i18n]").forEach(node=>{
      const fr = node.querySelector("[data-fr]");
      const en = node.querySelector("[data-en]");
      if(!fr || !en) return;
      fr.style.display = (lang === "fr") ? "" : "none";
      en.style.display = (lang === "en") ? "" : "none";
    });
  }

  function init(){
    const saved = localStorage.getItem(KEY);
    const lang = saved || defaultLang;
    setLang(lang);

    document.querySelectorAll("[data-lang-btn]").forEach(btn=>{
      btn.addEventListener("click", ()=>{
        setLang(btn.getAttribute("data-lang-btn"));
      });
    });
  }

  document.addEventListener("DOMContentLoaded", init);
})();
