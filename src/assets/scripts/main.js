/**
 * Import dependencies from node_modules
 * see commented examples below
 */

// import 'some-node-module';
// import SomeModule from 'some-node-module';

/**
 * Write any other JavaScript below
 */
/**
+( function() {
  const university = "UOC";
  console.log(`Hello, ${university}!`);
} )(); */

    const ctx = document.getElementById('myChart').getContext('2d');
    const myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['2019', '2020 (Covid)', '2021', '2022', '2023'],
            datasets: [{
                label: 'Assistents',
                data: [7800, 2300, 4500, 7900, 8800],
                backgroundColor: [
                  'hwb(1, 80%, 0%)',
                  'hwb(60, 80%, 0%)',
                  'hwb(130, 80%, 0%)',
                  'hwb(230, 80%, 0%)',
                  'hwb(300, 80%, 0%)'
              ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(153, 102, 255, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
