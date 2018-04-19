"""
script per la creazione del file json da visualizare con leaflet

"""

import sqlite3

fields = ["family", "area", "country", "city", "title", "text", "question","file", "latitude", "longitude", "reference"]

template = """{{
"type": "Feature",
"properties": {{
"name": "{family} {area} {country} {city}",
"html": "<audio width='300' height='32' src='http://www.lfsag.unito.it/ark/tramontane/{file}' controls='controls'></audio>{title}<br><br>{text}<br><br>{question}<hr>{reference}"
}},
"geometry": {{
"type": "Point",
"coordinates": [{longitude},{latitude}]
}}
}},
"""



BEFORE="""var sounds = {"type": "FeatureCollection","features": [
"""

AFTER="""]}"""


db = sqlite3.connect("tramontane.sqlite")
db.row_factory = sqlite3.Row
cursor = db.cursor()

cursor.execute("SELECT * FROM tramontane ORDER by family, area, country, city")
all_rows = cursor.fetchall()

print(BEFORE)
for row in all_rows:
    # row[0] returns the first column in the query (name), row[1] returns email column.
    d = {}
    for field in fields:
        d[field] = str(row[field]).replace("\n", "<br>").replace('"', '\\"') if row[field] else ""

    if d["latitude"] and d["longitude"]:
        print(template.format(**d))
print(AFTER)

db.close()
