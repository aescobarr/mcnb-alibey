# -*- coding: utf-8 -*-
# Generated by Django 1.11.6 on 2018-02-21 14:54
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('georef_addenda', '0005_auto_20180221_0927'),
    ]

    operations = [
        migrations.AlterField(
            model_name='profile',
            name='toponim_permission',
            field=models.CharField(blank=True, max_length=200, null=True),
        ),
    ]
