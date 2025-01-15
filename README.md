# solar-gauge-card
Solar gauge card for Home Assistant

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

## Using the card

We recommend looking at the [Example usage section](#example-usage) to understand the basics to configure this card.
(also) pay attention to the **required** options mentioned below.

### Options

#### Card options
| Name | Type | Default | Since | Description |
|------|:----:|:-------:|:-----:|-------------|
| type ***(required)*** | string |  | v0.0.1 | `custom:solar-gauge-card`.
| solarPower ***(required)*** | Object |  | v0.0.1 | Solar Power entity.
| homeConsumption ***(required)*** | Object |  | v0.0.1 | Home consumption entity.
| gridPower ***(required)*** | Object |  | v0.0.1 | Grid Power entity.
| batteryPower | Object |  | v0.0.1 | Battery Power entity.
| battery | Object |  | v0.0.1 | Battery entity.
| gaugeWidth | Number | 20 | v0.0.1 | Set the width of the gauge. Min = 5, max = 20. Gauge width is dynamically calculated based on Total Production value.

Total Production Value = Solar Power + Battery Power + Grid Out Power

#### Grid Power options
Grid Power could be setup in one sensor (sensor.grid_power) having positive and negative value, representing consumption from grid or feeding to grid. Eventually, grid power could be setup with 2 sensors: sensor.grid_power_out (consumption from grid) and sensor.grid_power_in (feeding grid). If all sensors are setup, then out and in sensors are ignored.

Minimum setup:
```yaml
type: custom:solar-gauge-card
solarPower: 
  entity: sensor.solar_power
homeConsumption: 
  entity: sensor.home_consumption
gridPower: 
  entity: sensor.grid_power
```

Full setup:
```yaml
type: custom:solar-gauge-card
solarPower: 
  entity: sensor.solar_power
  color: "#aaaaaa"
homeConsumption: 
  entity: sensor.home_consumption
  color: "#aaa00a"
gridPower: 
  entity: sensor.grid_power
  out:
    entity: sensor.grid_power_out
    color: "#ff00ff"
  in:
    entity: sensor.grid_power_in
    color: "#f0ff00"
batteryPower: 
  entity: sensor.battery_power
  out:
    color: "#000000"
  in:
    color: "#00ffff"
battery: 
  capacity:
    entity: sensor.battery_capacity
    color: "#0aa0f0"
  temperature: 
    entity: sensor.battery_temperature
gaugeWidth: 15
```


