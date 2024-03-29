# -*- coding: utf-8 -*-
# Generated by Django 1.11.6 on 2023-09-28 13:50
from __future__ import unicode_literals

import datetime
from django.conf import settings
import django.contrib.gis.db.models.fields
from django.db import migrations, models
import django.db.models.deletion
import georef.tasks
import uuid


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Autorrecursgeoref',
            fields=[
                ('id', models.CharField(default=uuid.uuid4, max_length=100, primary_key=True, serialize=False)),
            ],
            options={
                'verbose_name': 'Autors del recurs (relació)',
                'db_table': 'autorrecursgeoref',
                'managed': True,
            },
        ),
        migrations.CreateModel(
            name='Capawms',
            fields=[
                ('id', models.CharField(default=uuid.uuid4, max_length=200, primary_key=True, serialize=False)),
                ('baseurlservidor', models.CharField(max_length=400)),
                ('name', models.CharField(max_length=400)),
                ('label', models.CharField(blank=True, max_length=400, null=True)),
                ('minx', models.FloatField(blank=True, null=True)),
                ('maxx', models.FloatField(blank=True, null=True)),
                ('miny', models.FloatField(blank=True, null=True)),
                ('maxy', models.FloatField(blank=True, null=True)),
                ('boundary', django.contrib.gis.db.models.fields.GeometryField(blank=True, null=True, srid=4326)),
            ],
            options={
                'verbose_name': 'Capa WMS',
                'db_table': 'capawms',
                'managed': True,
            },
        ),
        migrations.CreateModel(
            name='Capesrecurs',
            fields=[
                ('id', models.CharField(default=uuid.uuid4, max_length=100, primary_key=True, serialize=False)),
            ],
            options={
                'verbose_name': 'Capes WMS del recurs (relació)',
                'db_table': 'capesrecurs',
                'managed': True,
            },
        ),
        migrations.CreateModel(
            name='Filtrejson',
            fields=[
                ('idfiltre', models.CharField(default=georef.tasks.pkgen, max_length=100, primary_key=True, serialize=False)),
                ('json', models.TextField()),
                ('modul', models.CharField(max_length=100)),
                ('nomfiltre', models.CharField(max_length=200)),
            ],
            options={
                'verbose_name': 'Filtre',
                'db_table': 'filtrejson',
                'managed': True,
            },
        ),
        migrations.CreateModel(
            name='Pais',
            fields=[
                ('id', models.CharField(default=uuid.uuid4, max_length=100, primary_key=True, serialize=False)),
                ('nom', models.CharField(max_length=200)),
            ],
            options={
                'verbose_name': 'País',
                'db_table': 'pais',
                'managed': True,
            },
        ),
        migrations.CreateModel(
            name='Paraulaclau',
            fields=[
                ('id', models.CharField(default=uuid.uuid4, max_length=100, primary_key=True, serialize=False)),
                ('paraula', models.CharField(max_length=500)),
            ],
            options={
                'verbose_name': 'Paraula clau',
                'db_table': 'paraulaclau',
                'managed': True,
            },
        ),
        migrations.CreateModel(
            name='ParaulaclauRecurs',
            fields=[
                ('id', models.CharField(default=uuid.uuid4, max_length=100, primary_key=True, serialize=False)),
            ],
            options={
                'verbose_name': 'Paraules clau del recurs (relació)',
                'db_table': 'paraulaclaurecursgeoref',
                'managed': True,
            },
        ),
        migrations.CreateModel(
            name='PrefsVisibilitatCapes',
            fields=[
                ('id', models.CharField(default=uuid.uuid4, max_length=100, primary_key=True, serialize=False)),
                ('prefscapesjson', models.TextField(blank=True, null=True)),
            ],
            options={
                'verbose_name': 'Preferències visualització capes WMS',
                'db_table': 'prefs_visibilitat_capes',
                'managed': True,
            },
        ),
        migrations.CreateModel(
            name='Qualificadorversio',
            fields=[
                ('id', models.CharField(default=uuid.uuid4, max_length=100, primary_key=True, serialize=False)),
                ('qualificador', models.CharField(max_length=500)),
            ],
            options={
                'verbose_name': 'Qualificador de la versió de topònim',
                'db_table': 'qualificadorversio',
                'managed': True,
            },
        ),
        migrations.CreateModel(
            name='Recursgeoref',
            fields=[
                ('id', models.CharField(default=uuid.uuid4, max_length=100, primary_key=True, serialize=False)),
                ('nom', models.CharField(max_length=500)),
                ('comentarisnoambit', models.CharField(blank=True, max_length=500, null=True)),
                ('campidtoponim', models.CharField(blank=True, max_length=500, null=True)),
                ('versio', models.CharField(blank=True, max_length=100, null=True)),
                ('fitxergraficbase', models.CharField(blank=True, max_length=100, null=True)),
                ('urlsuport', models.CharField(blank=True, max_length=250, null=True)),
                ('ubicaciorecurs', models.CharField(blank=True, max_length=200, null=True)),
                ('actualitzaciosuport', models.CharField(blank=True, max_length=250, null=True)),
                ('mapa', models.CharField(blank=True, max_length=100, null=True)),
                ('comentariinfo', models.TextField(blank=True, null=True)),
                ('comentariconsulta', models.TextField(blank=True, null=True)),
                ('comentariqualitat', models.TextField(blank=True, null=True)),
                ('classificacio', models.CharField(blank=True, max_length=300, null=True)),
                ('divisiopoliticoadministrativa', models.CharField(blank=True, max_length=300, null=True)),
                ('acronim', models.CharField(blank=True, max_length=100, null=True)),
                ('base_url_wms', models.CharField(blank=True, max_length=255, null=True)),
                ('capes_wms_json', models.TextField(blank=True, null=True)),
            ],
            options={
                'verbose_name': 'Recurs de georeferenciació',
                'db_table': 'recursgeoref',
                'managed': True,
            },
        ),
        migrations.CreateModel(
            name='Sistemareferenciamm',
            fields=[
                ('id', models.CharField(max_length=100, primary_key=True, serialize=False)),
                ('nom', models.CharField(max_length=500)),
            ],
            options={
                'verbose_name': 'Sistema de referència',
                'db_table': 'sistemareferenciamm',
                'managed': True,
            },
        ),
        migrations.CreateModel(
            name='Sistemareferenciarecurs',
            fields=[
                ('id', models.CharField(max_length=100, primary_key=True, serialize=False)),
                ('sistemareferencia', models.CharField(blank=True, max_length=1000, null=True)),
                ('conversio', models.CharField(blank=True, max_length=250, null=True)),
            ],
            options={
                'verbose_name': 'Sistema de referència del recurs',
                'db_table': 'sistemareferenciarecurs',
                'managed': True,
            },
        ),
        migrations.CreateModel(
            name='Suport',
            fields=[
                ('id', models.CharField(default=uuid.uuid4, max_length=100, primary_key=True, serialize=False)),
                ('nom', models.CharField(max_length=100)),
            ],
            options={
                'verbose_name': 'Tipus de suport',
                'db_table': 'suport',
                'managed': True,
            },
        ),
        migrations.CreateModel(
            name='Tipusrecursgeoref',
            fields=[
                ('id', models.CharField(default=uuid.uuid4, max_length=100, primary_key=True, serialize=False)),
                ('nom', models.CharField(max_length=100)),
            ],
            options={
                'verbose_name': 'Tipus de recurs',
                'db_table': 'tipusrecursgeoref',
                'managed': True,
            },
        ),
        migrations.CreateModel(
            name='Tipustoponim',
            fields=[
                ('id', models.CharField(default=uuid.uuid4, max_length=100, primary_key=True, serialize=False)),
                ('nom', models.CharField(max_length=100)),
            ],
            options={
                'verbose_name': 'Tipus de topònim',
                'db_table': 'tipustoponim',
                'managed': True,
            },
        ),
        migrations.CreateModel(
            name='Tipusunitats',
            fields=[
                ('id', models.CharField(default=uuid.uuid4, max_length=100, primary_key=True, serialize=False)),
                ('tipusunitat', models.CharField(max_length=500)),
            ],
            options={
                'verbose_name': 'Tipus unitats',
                'db_table': 'tipusunitats',
                'managed': True,
            },
        ),
        migrations.CreateModel(
            name='Toponim',
            fields=[
                ('id', models.CharField(default=georef.tasks.pkgen, max_length=200, primary_key=True, serialize=False)),
                ('codi', models.CharField(blank=True, max_length=50, null=True)),
                ('nom', models.CharField(max_length=250)),
                ('aquatic', models.CharField(blank=True, default='N', max_length=1, null=True)),
                ('sinonims', models.CharField(blank=True, max_length=500, null=True)),
                ('nom_fitxer_importacio', models.CharField(blank=True, max_length=255, null=True)),
                ('linia_fitxer_importacio', models.TextField(blank=True, null=True)),
                ('denormalized_toponimtree', models.TextField(blank=True, null=True)),
            ],
            options={
                'verbose_name': 'Topònim',
                'db_table': 'toponim',
                'managed': True,
            },
        ),
        migrations.CreateModel(
            name='Toponimversio',
            fields=[
                ('id', models.CharField(default=uuid.uuid4, max_length=200, primary_key=True, serialize=False)),
                ('codi', models.CharField(blank=True, max_length=50, null=True)),
                ('nom', models.CharField(max_length=250)),
                ('datacaptura', models.DateField(blank=True, default=datetime.date.today, null=True)),
                ('coordenada_x', models.FloatField(blank=True, null=True)),
                ('coordenada_y', models.FloatField(blank=True, null=True)),
                ('coordenada_z', models.FloatField(blank=True, null=True)),
                ('precisio_h', models.FloatField(blank=True, null=True)),
                ('precisio_z', models.FloatField(blank=True, null=True)),
                ('coordenada_x_origen', models.CharField(blank=True, max_length=50, null=True)),
                ('coordenada_y_origen', models.CharField(blank=True, max_length=50, null=True)),
                ('coordenada_z_origen', models.CharField(blank=True, max_length=50, null=True)),
                ('precisio_h_origen', models.CharField(blank=True, max_length=50, null=True)),
                ('precisio_z_origen', models.CharField(blank=True, max_length=50, null=True)),
                ('idpersona', models.CharField(blank=True, max_length=100, null=True)),
                ('observacions', models.TextField(blank=True, null=True)),
                ('numero_versio', models.IntegerField(blank=True, null=True)),
                ('coordenada_x_centroide', models.CharField(blank=True, max_length=50, null=True)),
                ('coordenada_y_centroide', models.CharField(blank=True, max_length=50, null=True)),
                ('last_version', models.BooleanField(default=False)),
                ('altitud_profunditat_minima', models.IntegerField(blank=True, null=True)),
                ('altitud_profunditat_maxima', models.IntegerField(blank=True, null=True)),
                ('georefcalc_string', models.TextField(blank=True, null=True)),
                ('georefcalc_uncertainty', models.FloatField(blank=True, null=True)),
                ('centroid_calc_method', models.IntegerField(default=0)),
                ('idqualificador', models.ForeignKey(blank=True, db_column='idqualificador', null=True, on_delete=django.db.models.deletion.CASCADE, to='georef.Qualificadorversio')),
                ('idrecursgeoref', models.ForeignKey(blank=True, db_column='idrecursgeoref', null=True, on_delete=django.db.models.deletion.DO_NOTHING, to='georef.Recursgeoref')),
                ('idsistemareferenciarecurs', models.ForeignKey(blank=True, db_column='idsistemareferenciarecurs', null=True, on_delete=django.db.models.deletion.DO_NOTHING, to='georef.Sistemareferenciarecurs')),
                ('idtoponim', models.ForeignKey(blank=True, db_column='idtoponim', null=True, on_delete=django.db.models.deletion.CASCADE, related_name='versions', to='georef.Toponim')),
                ('iduser', models.ForeignKey(blank=True, db_column='iduser', null=True, on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'verbose_name': 'Versió de topònim',
                'db_table': 'toponimversio',
                'managed': True,
            },
        ),
    ]
