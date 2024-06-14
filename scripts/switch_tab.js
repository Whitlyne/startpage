document.addEventListener('keydown', function(event) {
  if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
    let listSet1 = document.getElementById('list-set-1');
    let listSet2 = document.getElementById('list-set-2');

    if (!listSet1.classList.contains('hidden')) {
      listSet1.classList.add('hidden');
      listSet2.classList.remove('hidden');
    } else {
      listSet1.classList.remove('hidden');
      listSet2.classList.add('hidden');
    }
  }
});