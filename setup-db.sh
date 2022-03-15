#!/usr/bin/env bash
#
# @file
# Sets up the site from a database dump.
#
# Usage (works in bash, zsh, fish; should work in sh, ash):
#
#    ./setup-db.sh /path/to/db-dump.sql
#
# Prerequisites:
#
# - You must run `composer install` first (for Drush, Drupal Console).
#
echo "Using database file $1."
vendor/bin/drush -y sql-drop

if file "$1" | grep --color=auto -q "gzip compressed data"
then
  gunzip -c "$1" | `vendor/bin/drush sql-connect`
else
  vendor/bin/drush -y sqlq --file="$1"
fi
