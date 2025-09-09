document.querySelector('form').addEventListener('submit', function(e) {
   const nome = document.getElementById('nome').value.trim();
   const email = document.getElementById('email').value.trim();
   const telefone = document.getElementById('telefone').value.trim();
   const checkin = document.getElementById('data-checkin').value;
   const checkout = document.getElementById('data-checkout').value;
   const quartos = document.getElementById('quartos').value;

   let erros = [];

   if (nome.length < 3) erros.push('Nome deve ter pelo menos 3 caracteres.');
   if (!email.match(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/)) erros.push('Email inválido.');
   if (!telefone.match(/^\d{10,11}$/)) erros.push('Telefone deve ter 10 ou 11 dígitos.');
   if (!checkin) erros.push('Informe a data de check-in.');
   if (!checkout) erros.push('Informe a data de check-out.');
   if (checkin && checkout && checkin >= checkout) erros.push('Check-out deve ser após o check-in.');
   if (quartos < 1) erros.push('Número de quartos deve ser pelo menos 1.');

   if (erros.length > 0) {
      alert(erros.join('\n'));
      e.preventDefault();
   }
});
