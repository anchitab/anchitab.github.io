(function(Jump) {
    const pointer = document.querySelector(".pointer");
  
    pointer.addEventListener("click", e => {
      Jump(".intro");
    });
  })(window.Jump);
  