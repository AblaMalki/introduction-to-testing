function getStoredSecret() {
  try {
    return localStorage.getItem('secret') || '';
  } catch {
    return '';
  }
}

export function createSecretInput() {
  const id = 'secret-input';

  const container = document.createElement('div');
  const input = document.createElement('input');
  const label = document.createElement('label');
  const button = document.createElement('button');

  input.id = id;
  input.type = 'password';
  input.name = 'secret';
  input.placeholder = 'Enter your secret…';
  input.value = getStoredSecret();

  label.htmlFor = id;
  label.textContent = 'Secret';

  button.id = `${id}-button`;
  button.textContent = 'Store Secret';
  button.addEventListener('click', () => {
    localStorage.setItem('secret', input.value);
    input.value = '';
  });

  container.appendChild(label);
  container.appendChild(input);
  container.appendChild(button);

  return container;
}
