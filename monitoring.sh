#!/bin/sh
set -eu

log="${XDG_RUNTIME_DIR:-/tmp}/monitoring.log"

{
  echo "Monitoring run: $(date)"
  echo

  systemctl status mongod.service
  echo

  systemctl --user status ecowitt.service | head -n 10
} >"$log" 2>&1

mail -s "monitoring" "$USER" <"$log"