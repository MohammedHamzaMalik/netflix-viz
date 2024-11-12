import pandas as pd
import numpy as np
import json

# Create data for the 28-day viewing pattern
days = range(1, 29)
korean_drama = [200, 500, 800, 1000, 1200, 1500, 2100, 3000, 3400, 3700, 4100, 4500, 4900, 5300, 5800, 6000, 6300, 6600, 6900, 7200, 7500, 7900, 8300, 8700, 9100, 9500, 9800, 10200]
english_thriller = [2000, 2500, 3000, 3500, 3300, 3100, 2900, 2800, 2700, 2600, 2500, 2400, 2300, 2200, 2100, 2000, 1900, 1800, 1700, 1600, 1550, 1500, 1450, 1400, 1350, 1300, 1250, 1200]
spanish_crime_drama = [400, 800, 1400, 2000, 3000, 4000, 4200, 4300, 4400, 4300, 4200, 4500, 4700, 4900, 5300, 5600, 5700, 5800, 5900, 6000, 6100, 6200, 6300, 6400, 6500, 6300, 6200, 6100]

viewing_pattern_df = pd.DataFrame({
    'Day': days,
    'Korean Drama': korean_drama,
    'English Thriller': english_thriller,
    'Spanish Crime Drama': spanish_crime_drama
})

# Create data for cultural viewing habits
regions = ['Americas', 'Europe', 'Africa', 'Asia', 'Oceania']
prime_time_hours = [20, 21, 22, 19, 20]  # Example prime time hours
subtitle_preference = [30, 60, 70, 80, 50]  # Percentage preferring subtitles
dubbing_preference = [70, 40, 30, 20, 50]  # Percentage preferring dubbing

cultural_habits_df = pd.DataFrame({
    'Region': regions,
    'Prime Time Hour': prime_time_hours,
    'Subtitle Preference (%)': subtitle_preference,
    'Dubbing Preference (%)': dubbing_preference
})

# Create data for the Billion-Hour Weekend
billion_hour_weekend = {
    'Region': regions,
    'Korean Drama': [100, 150, 50, 400, 100],
    'English Thriller': [300, 200, 100, 150, 50],
    'Spanish Crime Drama': [200, 250, 150, 50, 150]
}

billion_hour_df = pd.DataFrame(billion_hour_weekend)
billion_hour_df['Total'] = billion_hour_df.iloc[:, 1:].sum(axis=1)

# Convert DataFrames to JSON for use in JavaScript
viewing_pattern_json = viewing_pattern_df.to_json(orient='records')
cultural_habits_json = cultural_habits_df.to_json(orient='records')
billion_hour_json = billion_hour_df.to_json(orient='records')

# Save JSON data
with open('netflix_data.json', 'w') as f:
    json.dump({
        'viewing_pattern': json.loads(viewing_pattern_json),
        'cultural_habits': json.loads(cultural_habits_json),
        'billion_hour_weekend': json.loads(billion_hour_json)
    }, f)

print("Data preparation complete. JSON file 'netflix_data.json' created.")