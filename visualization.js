// Load the data
fetch('netflix_data.json')
    .then(response => response.json())
    .then(data => {
        createViewingPatternChart(data.viewing_pattern);
        createCulturalHabitsChart(data.cultural_habits);
        createBillionHourWeekendChart(data.billion_hour_weekend);
    });

function createViewingPatternChart(data) {
    const ctx = document.getElementById('viewingPatternChart').getContext('2d');
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: data.map(d => d.Day),
            datasets: [
                {
                    label: 'Korean Drama',
                    data: data.map(d => d['Korean Drama']),
                    borderColor: 'rgb(255, 99, 132)',
                    tension: 0.1
                },
                {
                    label: 'English Thriller',
                    data: data.map(d => d['English Thriller']),
                    borderColor: 'rgb(54, 162, 235)',
                    tension: 0.1
                },
                {
                    label: 'Spanish Crime Drama',
                    data: data.map(d => d['Spanish Crime Drama']),
                    borderColor: 'rgb(255, 206, 86)',
                    tension: 0.1
                }
            ]
        },
        options: {
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: 'Viewing Patterns Over 28 Days',
                    color: 'white'
                },
                legend: {
                    labels: {
                        color: 'white'
                    }
                }
            },
            scales: {
                x: {
                    title: {
                        display: true,
                        text: 'Days Since Launch',
                        color: 'white'
                    },
                    ticks: {
                        color: 'white'
                    }
                },
                y: {
                    title: {
                        display: true,
                        text: 'Viewing Hours (Millions)',
                        color: 'white'
                    },
                    ticks: {
                        color: 'white'
                    }
                }
            }
        }
    });
}

function createCulturalHabitsChart(data) {
    const ctx = document.getElementById('culturalHabitsChart').getContext('2d');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: data.map(d => d.Region),
            datasets: [
                {
                    label: 'Prime Time Hour',
                    data: data.map(d => d['Prime Time Hour']),
                    backgroundColor: 'rgba(255, 99, 132, 0.5)'
                },
                {
                    label: 'Subtitle Preference (%)',
                    data: data.map(d => d['Subtitle Preference (%)']),
                    backgroundColor: 'rgba(54, 162, 235, 0.5)'
                },
                {
                    label: 'Dubbing Preference (%)',
                    data: data.map(d => d['Dubbing Preference (%)']),
                    backgroundColor: 'rgba(255, 206, 86, 0.5)'
                }
            ]
        },
        options: {
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: 'Cultural Viewing Habits by Region',
                    color: 'white'
                },
                legend: {
                    labels: {
                        color: 'white'
                    }
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: 'white'
                    }
                },
                y: {
                    ticks: {
                        color: 'white'
                    }
                }
            }
        }
    });
}

function createBillionHourWeekendChart(data) {
    const ctx = document.getElementById('billionHourWeekendChart').getContext('2d');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: data.map(d => d.Region),
            datasets: [
                {
                    label: 'Korean Drama',
                    data: data.map(d => d['Korean Drama']),
                    backgroundColor: 'rgba(255, 99, 132, 0.5)'
                },
                {
                    label: 'English Thriller',
                    data: data.map(d => d['English Thriller']),
                    backgroundColor: 'rgba(54, 162, 235, 0.5)'
                },
                {
                    label: 'Spanish Crime Drama',
                    data: data.map(d => d['Spanish Crime Drama']),
                    backgroundColor: 'rgba(255, 206, 86, 0.5)'
                }
            ]
        },
        options: {
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: 'The Billion-Hour Weekend',
                    color: 'white'
                },
                legend: {
                    labels: {
                        color: 'white'
                    }
                }
            },
            scales: {
                x: {
                    stacked: true,
                    ticks: {
                        color: 'white'
                    }
                },
                y: {
                    stacked: true,
                    title: {
                        display: true,
                        text: 'Viewing Hours (Millions)',
                        color: 'white'
                    },
                    ticks: {
                        color: 'white'
                    }
                }
            }
        }
    });
}
