function copyText() {
    this.event.preventDefault();
  
    const $button = this.event.target;
    const initialButtonText = $button.text;
    const urlCopiedButtonText = $button.getAttribute('data-url-copied-text');
  
    window.navigator.clipboard.writeText("example@gmail.com");
  
    $button.text = urlCopiedButtonText;
    setTimeout(function() {
      $button.text = initialButtonText;
      alert('Текст успішно скопійовано!');
    }, 100);
  }