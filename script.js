document.addEventListener('DOMContentLoaded', (event) => {
    var ctx = document.getElementById('myPieChart').getContext('2d');
    var myPieChart = new Chart(ctx, {
      type: 'pie',
      data: {
        labels: ['Chair', 'Table', 'Sofa', 'Beds', 'Dresser'],
        datasets: [{
          label: 'Number of purchased items',
          data: [25, 10, 3, 5, 8],
          backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)',
            'rgba(153, 102, 255)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false
      }
    });
  });