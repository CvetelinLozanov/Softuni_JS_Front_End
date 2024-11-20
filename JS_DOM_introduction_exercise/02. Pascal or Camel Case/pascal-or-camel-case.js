function solve() {
  const text = document.querySelector('#text').value.toLowerCase().split(' ');
  const namingConvention = document.querySelector('#naming-convention').value.toLowerCase().trim();

  const result = document.querySelector('#result');

  function capitaliseWord(word) {
    return word[0].toUpperCase() + word.slice(1);
  }

  switch (namingConvention) {
    case 'camel case':
      result.textContent = text[0] + text.slice(1).map(capitaliseWord).join('');
      break;  
    case 'pascal case':
      result.textContent = text.map(capitaliseWord).join('');
      break;      
    default:
      result.textContent = 'Error!'
  }
}