const topBarCenterText = `KN4RUW - FAIRHOPE, AL`;
// Menu items
// Structure is as follows HTML Color code, Option, target URL, scaling 1=Original Size, side (optional, nothing is Left, "R" is Right)
// The values are [color code, menu text, target link, scale factor, side],
// add new lines following the structure for extra menu options. The comma at the end is important!
const aURL = [
  ["add10d", "BACK", "#", "1"],
  ["add10d", "BACK", "#", "1", "R"],
  ["ff9100", "Refresh", "#", "1"],

  ["2196F3", "WINDY", "https://embed.windy.com/embed.html?type=map&location=coordinates&metricRain=default&metricTemp=%C2%B0F&metricWind=default&zoom=5&overlay=radar&product=radar&level=surface&lat=31.062&lon=-90.956", "7"],
  [
    "2196F3",
    "PLANES",
    "https://globe.adsbexchange.com/",
    "1",
  ],
  [
    "2196F3",
    "RADAR",
    "https://thurlowpa.com/FullScreenRadarStuartZoom7Statewide.html",
    "1",
  ],
  ["2196F3", "CAMS", "https://bamaone251.github.io/LOCALWX/", "1", "R"],
  [
    "2196F3",
    "LIGHTNING",
    "https://map.blitzortung.org/#3.87/36.5/-89.41",
    "1",
    "R",
  ],

  ["2196F3", "WATER VAPOR", "https://cw3e.ucsd.edu/ivt_iwv_namerica/", '1'],

  ["2196F3", "CURRENTS", "https://earth.nullschool.net/#current/ocean/surface/currents/orthographic=-71.31,25.84,793/loc=-68.845,31.7940", "1", "R"],
  [
    "2196F3",
    "WEATHER",
    "https://weather.cod.edu/satrad/nexrad/?parms=MOB-N0B-0-24-100-usa-ww",
    "1",
    "R",
  ],
  [
    "2196F3",
    "WINDS",
    "https://earth.nullschool.net/#current/wind/surface/level/orthographic=-78.79,44.09,3000",
    "1",
    "R",
  ],
];

// Dashboard items
// Structure is Title, Image Source URL
// [Title, Image Source URL],
// the comma at the end is important!
// You can't add more items because there are only 12 placeholders on the dashboard
// but you can replace the titles and the images with anything you want.
const aIMG = [
  ["", "https://cdn.star.nesdis.noaa.gov/GOES16/ABI/CONUS/13/GOES16-CONUS-13-625x375.gif",],

  [
  "",
  "https://cdn.star.nesdis.noaa.gov/GOES16/GLM/SECTOR/smv/EXTENT3/GOES16-SMV-EXTENT3-600x600.gif",
],


[
  "",
  "https://cdn.star.nesdis.noaa.gov/GOES16/ABI/SECTOR/GM/Sandwich/GOES16-GM-Sandwich-1000x1000.gif", 
  "https://cdn.star.nesdis.noaa.gov/GOES16/ABI/SECTOR/gm/DayNightCloudMicroCombo/",
  "https://cdn.star.nesdis.noaa.gov/GOES16/ABI/SECTOR/gm/GEOCOLOR/GOES16-GM-GEOCOLOR-1000x1000.gif",
  "https://cdn.star.nesdis.noaa.gov/GOES16/ABI/SECTOR/gm/13/GOES16-GM-13-1000x1000.gif",
],

  [
    "",
    "https://www.youtube.com/embed/N5wWOVOTHmQ", "https://www.youtube.com/embed/N5wWOVOTHmQ",
    ],
  
    

  [
    "",
    "https://www.ssd.noaa.gov/PS/TROP/floaters/18L/imagery/rb-animated.gif",
      ],

  [
    "",
    "https://radar.weather.gov/ridge/standard/SOUTHMISSVLY_loop.gif",
    "https://climate.cod.edu/data/satellite/regional/southcentral/current/southcentral.ww.gif",
    "http://wxmaps.org/pix/avnmr5.00hr.png",
  ],
  

  [
    "",
    "https://cdn.star.nesdis.noaa.gov/GOES16/GLM/CONUS/EXTENT3/GOES16-CONUS-EXTENT3-625x375.gif",
  ],

  [
  "",
  "https://radar.weather.gov/ridge/standard/CONUS_loop.gif",
  ],



  [
    "",
    "https://cdn.star.nesdis.noaa.gov/GOES16/ABI/SECTOR/smv/AirMass/GOES16-SMV-AirMass-600x600.gif",
  ],


  [
    "",
    "https://cdn.star.nesdis.noaa.gov/GOES16/ABI/SECTOR/GM/Sandwich/GOES16-GM-Sandwich-1000x1000.gif", ".8",
  ],

  [
    "",
    "https://cdn.star.nesdis.noaa.gov/GOES16/GLM/SECTOR/smv/EXTENT3/GOES16-SMV-EXTENT3-600x600.gif",
  ],


  ["TROPICS", "https://cdn.star.nesdis.noaa.gov/GOES16/GLM/SECTOR/taw/EXTENT3/GOES16-TAW-EXTENT3-900x540.gif"],

[
    "WARNINGS",
    "https://climate.cod.edu/data/satellite/regional/southcentral/current/southcentral.ww.gif",
  ],



  ["24HR FORECAST", "https://www.wpc.ncep.noaa.gov/noaa/noaad1.gif",],

  [
    "72HR FORECAST",
    "https://www.wpc.ncep.noaa.gov/noaa/noaad3.gif",
  ],

  [
    "ISS & RS-44 POSITION",
    "https://www.heavens-above.com/orbitdisplay.aspx?icon=iss&width=600&height=300&mode=M&satid=25544",
    "https://www.heavens-above.com/orbitdisplay.aspx?icon=default&width=600&height=300&mode=M&satid=44909",
  ],

  [
    "",
    "https://www.tideschart.com/tide-charts/en/Meaher-State-Park-Mobile-Bay-Baldwin-County-Alabama-United-States-tide-chart-30030859-ft.png?",
  ],

];
