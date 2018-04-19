import sqlite3

fields = ["family", "area", "country", "region", "city", "title", "text", "question","file", "reference", "audio_quality"]

template = """<tr>
<td>{family}</td>
<td>{area}</td>
<td>{region}</td>
<td>{city}</td>

<td>
<audio width='300' height='32' src='http://www.lfsag.unito.it/ark/tramontane/{file}' controls='controls'></audio><br>

<small><b><p align="justify">{title}</p></b></small>
<small><p align="justify">{text}</p></small>
<small><p align="justify">{question}</p></small>

</td>

<!--
<td>
<a class="ui-btn ui-btn-inline ui-corner-all"></a><div class="popupContent" style="display:none;">
<p align="justify">{title}</p>
<p align="justify">{text}</p>
<p align="justify">{question}</p>
<p><audio controls><source src="/ark/tramontane/{file}" type="audio/mp3"></audio></p>
</div></td>
-->

<td>{audio_quality}</td>



<!--
<td><a class="ui-btn ui-btn-inline ui-corner-all"></a><div class="popupContent" style="display:none;">
<p align="center">{reference}</p></div>
</td>
-->

<td>
<small>
{reference}</div>
</small>
</td>

</tr>
"""



db = sqlite3.connect("tramontane.sqlite")
db.row_factory = sqlite3.Row
cursor = db.cursor()

cursor.execute("""SELECT * FROM tramontane WHERE country = "Italia" ORDER by family, area, country, city """)
all_rows = cursor.fetchall()

print("""
<table class="table">
    <thead>
<tr>
            <th>Area</th>
            <th>Divisione</th>
            <th>Paese</th>
            <th>Punto d'inchiesta</th>
            <th>Audio</th>
            <th>Qualità</th>
            <th>Rif. bibliografici</th>
        </tr>
</thead>
<tbody>
""")


for row in all_rows:
    # row[0] returns the first column in the query (name), row[1] returns email column.
    d = {}
    for field in fields:
        d[field] = row[field] if row[field] else ""

    d["audio_quality"] = len(d["audio_quality"]) * "⋆"
    print(template.format(**d))

print("""
</tbody>
</table>
""")

db.close()
