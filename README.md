# ecowitt-service

Linux service to store Ecowitt weather data in mongodb

## Installation (user service)

This project is configured to run as a **systemd user service**.

1. Install dependencies:

```bash
    npm install
```

2. Copy the unit file to your user systemd directory:

```bash
    mkdir -p ~/.config/systemd/user
    cp ecowitt.service ~/.config/systemd/user/ecowitt.service
```

3. Enable and start the service:

```bash
    systemctl --user daemon-reload
    systemctl --user enable --now ecowitt.service
```

4. Check status/logs:

```bash
    systemctl --user status ecowitt.service
    journalctl --user -u ecowitt.service -f
```

### Run while logged out

Enable lingering once:

```bash
loginctl enable-linger $USER
```

### Monitoring mongodb and ecowitt services

Assuming a working mail transport, adapt user's home path in
`monitoring-mail.service` and user's email address in `monitoring.sh`, then:

```bash
mkdir -p ~/.local/bin
cp monitoring.sh ~/.local/bin/
cp monitoring-mail.service ~/.config/systemd/user/
cp monitoring-mail.timer ~/.config/systemd/user/
systemctl --user daemon-reload
systemctl --user enable --now monitoring-mail.timer
```
