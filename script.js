const form = document.getElementById('age-form');
const result = document.getElementById('result');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const day = e.target.day.value;
  const month = e.target.month.value;
  const year = e.target.year.value;

  if (day === '' || month === '' || year === '') {
    result.textContent = 'Please fill in all fields.';
    return;
  }

  if (day < 1 || day > 31) {
    result.textContent = 'Please enter a valid day.';
    return;
  }

  if (month < 1 || month > 12) {
    result.textContent = 'Please enter a valid month.';
    return;
  }

  const date = new Date(year, month - 1, day);
  const today = new Date();
  const diff = today - date;
  const age = new Date(diff).getFullYear() - 1970;

  if (age < 0) {
    result.textContent = 'Please enter a date in the past.';
    return;
  }

  const years = Math.floor(age);
  const months = Math.floor((age % 1) * 12);
  const days = Math.floor((age % 1) * 12 * 30.44) % 30;

  result.textContent = `You are ${years} years, ${months} months, and ${days} days old.`;
});