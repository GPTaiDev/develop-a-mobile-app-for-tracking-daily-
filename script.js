function addHabit() {
  var input = document.getElementById('newHabit');
  var newHabit = input.value;
  if (newHabit.trim() !== '') {
    var ul = document.getElementById('habitList');
    var li = document.createElement('li');
    li.textContent = newHabit;
    ul.appendChild(li);
    input.value = '';
  }
}
document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('newHabit').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
      addHabit();
    }
  });
});