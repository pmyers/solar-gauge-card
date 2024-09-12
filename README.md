# solar-gauge-card
Solar gauge card for Home Assistant

![GitHub release (latest by date)](https://img.shields.io/github/v/release/Haluska77/solar-gauge-card?style=flat-square)
![GitHub all releases](https://img.shields.io/github/downloads/Haluska77/solar-gauge-card/total?style=flat-square)
![commit_activity](https://img.shields.io/github/commit-activity/y/Haluska77/solar-gauge-card?color=brightgreen&label=Commits&style=flat-square)


## Goal

The goal is to display Solar production and its distribution to home, grid or battery in gauge style.

## Install

### HACS (recommended)

This card is direclty available in [HACS](https://hacs.xyz/) (Home Assistant Community Store).
_HACS is a third party community store and is not included in Home Assistant out of the box._
To install this:

- Go to HACS
- Click on `Frontend`
- Search for `Solar gauge card`
- Install via UI

<details>  <summary>Manual Install</summary>

1. Download and copy `solar-gague-card.js` from the [latest release](https://github.com/Haluska77/solar-gauge-card/releases/latest) into your `config/www` directory.

2. Add the resource reference as decribed below.

### Add resource reference

If you configure Dashboards via YAML, add a reference to `solar-gague-card.js` inside your `configuration.yaml`:

```yaml
resources:
  - url: /local/solar-gague-card.js
    type: module
```

Else, if you prefer the graphical editor, use the menu to add the resource:

1. Make sure, advanced mode is enabled in your user profile (click on your user name to get there)
2. Navigate to Settings -> Dashboards
3. Click three dot icon
4. Select Resources
5. Hit (+ ADD RESOURCE) icon
6. Enter URL `/local/solar-gague-card.js` and select type "JavaScript Module".
   (Use `/hacsfiles/solar-gague-card/solar-gague-card.js` and select "JavaScript Module" for HACS install if HACS didn't do it already)
 
</details>
   
