# -*- coding: utf-8 -*-
# Generated by Django 1.11.6 on 2019-10-28 13:33
from __future__ import unicode_literals

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('georef_addenda', '0014_profile_language'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='profile',
            name='language',
        ),
    ]