# ecowitt-service

Linux service to store Ecowitt weather data in mongodb

## Installation (user service)

This project is configured to run as a **systemd user service**.

1. Install dependencies:

    npm install

2. Copy the unit file to your user systemd directory:

    mkdir -p ~/.config/systemd/user
    cp ecowitt.service ~/.config/systemd/user/ecowitt.service

3. Enable and start the service:

    systemctl --user daemon-reload
    systemctl --user enable --now ecowitt.service

4. Check status/logs:

    systemctl --user status ecowitt.service
    journalctl --user -u ecowitt.service -f

### Run while logged out (optional)

Enable lingering once:

sudo loginctl enable-linger $USER

### If you previously installed a system service

Disable the old system unit to avoid conflicts:

sudo systemctl disable --now ecowitt.service
