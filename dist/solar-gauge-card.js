class SolarGaugeCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.svgX = 150;
    this.svgY = 60;
    this.circumferenceProd = 0;
    this.strokeWidth = 0;

    this.solarColor = "#ffee3A";
    this.gridOutColor = "#488fc2";
    this.gridInColor = "#8353d1";
    this.homeColor = "#ffa600";
    this.batteryOutColor = "#0bac3b";
    this.batteryInColor = "#83d3d1";

    this.batteryObject = {
      entity: undefined,
      capacity: undefined,
      temperature: undefined,
      origValue: '',
      textColor: '',
      valueColor: '',
      dynamicText: '',
      status: true
    };
    this.gridObject = {
      entity: undefined,
      origValue: '',
      textColor: '',
      valueColor: '',
      dynamicText: '',
      status: ''
    };
  }

  set hass(hass) {
    if (!this.content) {
      this.shadowRoot.innerHTML = `
      <style>
        ha-card {
            display: block;
            padding: 0px;
            border-radius: 8px;
            display: flex;
            justify-content: center;
            align-items: center;
            box-shadow: var(--ha-card-box-shadow, 0 2px 6px rgba(0, 0, 0, 0.15));
            background: var(--card-background-color, rgb(222, 222, 222));
            color: var(--primary-text-color, dimgray);
        }
        .circle {
          stroke-width: 20;
          fill: none;
          transform: rotate(-180deg);
          transform-origin: 50% 50%;
        }
        .circle-solar {
          stroke: ${this.solarColor};
        }
        .circle-grid-out {
          stroke: ${this.gridOutColor};
        }
        .circle-grid-in {
          stroke: ${this.gridInColor};
        }
        .circle-battery-out {
          stroke: ${this.batteryOutColor};
        }
        .circle-battery-in {
          stroke: ${this.batteryInColor};
        }
        .circle-home {
          stroke: ${this.homeColor};
        }
        .svg-text {
          font-family: Arial;
          font-weight: bold;
          fill: dimgray;
          alignment-baseline: middle;
        }
        .svg-text-value {     
          font-size: 13px;
        }
        .svg-text-description {
          font-size: 12px;
        }
        .svg-bigtext-value {     
          font-size: 26px;
        }
        .svg-bigtext-description {
          font-size: 24px;
        }
        .svg-text-right{
          text-anchor: end;
        }
        .svg-text-middle{
          text-anchor: middle;
        }
        .svg-text-left{
          text-anchor: start;
        }
      </style>

        <ha-card>
              <div id="gauge-container"></div>
        </ha-card>
      `;
      this.content = this.shadowRoot.querySelector("#gauge-container");
    }
    this.update(hass);
  }

  setConfig(config) {
    if (!config.solarSensor || !config.homeSensor || !config.gridSensor) {
      throw new Error("You need to define required entities in the card configuration.");
    }
    this.config = config;
  }

  getStrokeWidthClass = (value) => {
    const rawNumber = Math.trunc(value / 200);
    const minResult = Math.min(rawNumber, 20);
    const maxResult = Math.max(minResult, 5);
    return maxResult;
  };


  _gauge(radius, value, totalValue, previousValue, className) {
    const circumference = 2 * Math.PI * radius;
    const length = (value / totalValue) * circumference / 2;
    const previousLength = (previousValue / totalValue) * circumference / 2;
    return `
        <circle
          cx="${this.svgX}"
          cy="${this.svgY}"
          r="${radius}"
          stroke-dasharray="${length} ${circumference - length}"
          stroke-dashoffset="${0 - previousLength}"
          class="circle ${className}" style="stroke-width: ${this.strokeWidth}">
        </circle>
        `
  }

  customizeBatteryObject(value) {
    if (value < 0) {
      this.batteryObject.textColor = this.batteryInColor;
      this.batteryObject.valueColor = "green";
      this.batteryObject.dynamicText = 'Battery In';
      this.batteryObject.status = true;
    } else if (value == 0) {
      this.batteryObject.status = false;
    } else {
      this.batteryObject.textColor = this.batteryOutColor;
      this.batteryObject.valueColor = "red";
      this.batteryObject.dynamicText = 'Battery Out';
      this.batteryObject.status = true;
    }
  }

  customizeGridObject(value) {
    if (value < 0) {
      this.gridObject.textColor = this.gridInColor;
      this.gridObject.valueColor = "green";
      this.gridObject.dynamicText = 'Grid In';
      this.gridObject.status = true;
    } else if (value == 0) {
      this.gridObject.textColor = undefined;
      this.gridObject.valueColor = undefined;
      this.gridObject.dynamicText = 'Grid';
      this.gridObject.status = false;
    } else {
      this.gridObject.textColor = this.gridOutColor;
      this.gridObject.valueColor = "red";
      this.gridObject.dynamicText = 'Grid Out';
      this.gridObject.status = true;
    }
  }

  colorizeBatteryCells(value) {
    let cellColor = '';
    if (value > 60) {
      cellColor = 'green';
    } else if (value > 20) {
      cellColor = 'orange';
    } else {
      cellColor = 'red';
    }
    return cellColor;
  }

  drawBattery(capacity, temperature) {
    const batteryCapacityValue = parseInt(capacity?.state, 10);
    const batteryTemperatureValue = parseInt(temperature?.state, 10);

    const xStart = 130;
    const xEnd = 178;
    const bY = 160;
    const xMin = 0;
    const xMax = 100;
    const bx2 = xStart + (batteryCapacityValue - xMin) * (xEnd - xStart) / (xMax - xMin);

    const cellFullColor = this.colorizeBatteryCells(batteryCapacityValue);

    return capacity ? 
    `<text x="170" y="144" class="svg-text svg-text-middle" style="font-size: 10px;">${batteryCapacityValue}${capacity.attributes.unit_of_measurement}</text>
     ${temperature
           ? `
       <text x="140" y="144" class="svg-text svg-text-middle" style="font-size: 10px;">${batteryTemperatureValue}${temperature.attributes.unit_of_measurement}</text>
         ` : ``}
       <line id="batteryCellFull" x1="${xStart}" y1="${bY}" x2="${xEnd}" y2="${bY}" stroke="${cellFullColor}" stroke-width="12"
                 stroke-dasharray="8 2">
       </line>
       <line id="batteryCellEmpty" x1="${xEnd}" y1="${bY}" x2="${bx2}" y2="${bY}" stroke="lightgray" stroke-width="12"
                 stroke-dasharray="8 2">
       </line>
       <rect id="batteryCover" x="126" y="151" rx="3" ry="3" width="56" height="18" 
                 style="fill:none;stroke-width:2;stroke:green"></rect>
       <rect x="181" y="155" rx="3" ry="3" width="5" height="10" style="fill:green"></rect>
    ` 
    : ``;
  }

  update(hass) {

    const solarEntity = hass.states[this.config.solarSensor];
    const homeEntity = hass.states[this.config.homeSensor];
    this.gridObject.entity = hass.states[this.config.gridSensor];
    this.batteryObject.entity = hass.states[this.config.batterySensor];
    this.batteryObject.capacity = hass.states[this.config.batteryCapacitySensor];
    this.batteryObject.temperature = hass.states[this.config.batteryTemperatureSensor];

    // Svg
    const svgWidth = "300px";
    const svgHeight = "200px";

    // Production
    const radiusProd = 100;
    this.circumferenceProd = 2 * Math.PI * radiusProd;

    this.gridObject.origValue = parseInt(this.gridObject.entity?.state || 0, 10);
    this.batteryObject.origValue = parseInt(this.batteryObject.entity?.state || 0, 10);

    const solarValue = parseInt(solarEntity.state, 10);
    const gridOutValue = Math.max(0, this.gridObject.origValue);
    const batteryOutValue = Math.max(0, this.batteryObject.origValue);
    const totalProdValue = solarValue + batteryOutValue + gridOutValue;

    // Consumption
    this.strokeWidth = this.getStrokeWidthClass(totalProdValue);
    const radiusCons = radiusProd - this.strokeWidth;

    const homeValue = parseInt(homeEntity.state, 10);
    const gridInValue = Math.abs(Math.min(0, this.gridObject.origValue));
    const batteryInValue = Math.abs(Math.min(0, this.batteryObject.origValue));
    const totalConsValue = homeValue + batteryInValue + gridInValue;

    this.customizeGridObject(this.gridObject.origValue);

    //Battery
    const battery = this.drawBattery(this.batteryObject.capacity, this.batteryObject.temperature);

    this.customizeBatteryObject(this.batteryObject.origValue);

    let text1, text2 = undefined;

    if (this.batteryObject.status == true) {
      text1 = this.batteryObject
      if (this.gridObject.status == true)
        text2 = this.gridObject
    } else {
      text1 = this.gridObject
    }

    const svg = `
      <svg width="${svgWidth}" height="${svgHeight}">
        ${this._gauge(radiusProd, solarValue, totalProdValue, 0, 'circle-solar')}
        ${this._gauge(radiusProd, batteryOutValue, totalProdValue, solarValue, 'circle-battery-out')}
        ${this._gauge(radiusProd, gridOutValue, totalProdValue, solarValue + batteryOutValue, 'circle-grid-out')}
        ${this._gauge(radiusCons, gridInValue, totalConsValue, homeValue + batteryInValue, 'circle-grid-in')}
        ${this._gauge(radiusCons, batteryInValue, totalConsValue, homeValue, 'circle-battery-in')}
        ${this._gauge(radiusCons, homeValue, totalConsValue, 0, 'circle-home')}

  <text x="${this.svgX - radiusProd - this.strokeWidth / 2}" y="${this.svgY * 2.5}" class="svg-text svg-text-description svg-text-left" style="fill:${this.homeColor}">
    Home
  </text>
  <text x="${this.svgX - radiusProd - this.strokeWidth / 2}" y="${this.svgY * 2.7}" class="svg-text svg-text-value svg-text-left">
    ${homeValue} ${homeEntity.attributes.unit_of_measurement}
  </text>
  
  <text x="${this.svgX}" y="${this.svgY * 1.6}" class="svg-text svg-bigtext-description svg-text-middle" style="fill:${this.solarColor};">
    Solar
  </text>
  <text x="${this.svgX}" y="${this.svgY * 2}" class="svg-text svg-bigtext-value svg-text-middle">
    ${solarValue} ${solarEntity.attributes.unit_of_measurement}
  </text>

  <text  x="${this.svgX + radiusProd + this.strokeWidth / 2}" y="${this.svgY * 2.5}" class="svg-text svg-text-description svg-text-right" style="fill: ${text1.textColor}">
    ${text1.dynamicText}
  </text>
  <text x="${this.svgX + radiusProd + this.strokeWidth / 2}" y="${this.svgY * 2.7}" class="svg-text svg-text-value svg-text-right" style="fill: ${text1.valueColor}">
    ${text1.origValue} ${text1.entity.attributes.unit_of_measurement}
  </text>
  <text  x="${this.svgX + radiusProd + this.strokeWidth / 2}" y="${this.svgY * 2.9}" class="svg-text svg-text-description svg-text-right" style="fill: ${text2?.textColor || 'none'}">
    ${text2?.dynamicText || ''}
  </text>
  <text x="${this.svgX + radiusProd + this.strokeWidth / 2}" y="${this.svgY * 3.1}" class="svg-text svg-text-value svg-text-right" style="fill: ${text2?.valueColor || 'none'}">
    ${text2?.origValue} ${text2?.entity.attributes.unit_of_measurement}
  </text>
    ${battery}
</svg>

      `;
    this.content.innerHTML = svg;
  }
}

customElements.define("solar-gauge-card", SolarGaugeCard);

