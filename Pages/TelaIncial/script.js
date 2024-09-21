// Seleciona o elemento canvas
const ctx = document.getElementById('meuGrafico').getContext('2d');

// Cria o gráfico
const meuGrafico = new Chart(ctx, {
  type: 'bar', // Tipo de gráfico ('bar', 'line', 'pie', etc.)
  data: {
    labels: [
      'Acre',
      'Alagoas',
      'Amapá',
      'Amazonas',
      'Bahia',
      'Ceará',
      'Distrito Federal',
      'Espírito Santo',
      'Goiás',
      'Maranhão',
      'Mato Grosso',
      'Mato Grosso do Sul',
      'Minas Gerais',
      'Pará',
      'Paraíba',
      'Paraná',
      'Pernambuco',
      'Piauí',
      'Rio de Janeiro',
      'Rio Grande do Norte',
      'Rio Grande do Sul',
      'Rondônia',
      'Roraima',
      'Santa Catarina',
      'São Paulo',
      'Sergipe',
      'Tocantins',
    ],
    datasets: [
      {
        label: 'Números de incidências',
        data: [519.1, 511.2, 1220.9, 207.5, 1640, 146.8, 9782.4, 3843.9, 4588.3, 164.6, 1135.1, 688.5, 8252.4, 249, 335.9, 5658.7, 329, 465.7, 1845.8, 507.7, 1799.5, 320.6, 99.5, 4765, 4773.5, 1013, 318.8],
        backgroundColor: [
          'rgba(60, 115, 79, 0.7)',
        ],
        borderColor: [
          'rgba(60, 115, 79, 0.7)',
        ],
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});
