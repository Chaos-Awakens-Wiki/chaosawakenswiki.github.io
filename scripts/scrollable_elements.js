document.addEventListener('DOMContentLoaded', (event) => {
  document.getElementById('spawn-eggs').addEventListener('wheel', function(event) {
      event.preventDefault();

      let activeSlot = document.querySelector('.invslot.active');
      let nextActiveSlot = event.deltaY < 0 ? activeSlot.previousElementSibling : activeSlot.nextElementSibling;

      if (nextActiveSlot && nextActiveTab.classList.contains('invslot')) {
          activeSlot.classList.remove('active');
          nextActiveSlot.classList.add('active');
      }
  });

  document.getElementById('def-spawn-egg').addEventListener('wheel', function(event) {
    event.preventDefault();
  });
});