const topBarCenterText = `KN4RUW - FAIRHOPE, AL`;
// Menu items
// Structure is as follows HTML Color code, Option, target URL, scaling 1=Original Size, side (optional, nothing is Left, "R" is Right)
// The values are [color code, menu text, target link, scale factor, side],
// add new lines following the structure for extra menu options. The comma at the end is important!
const aURL = [
  ["add10d", "BACK", "#", "1"],
  ["add10d", "BACK", "#", "1", "R"],
  ["ff9100", "Refresh", "#", "1"],

  ["2196F3", "WINDY", "https://embed.windy.com/embed.html?type=map&location=coordinates&metricRain=default&metricTemp=%C2%B0F&metricWind=default&zoom=5&overlay=radar&product=radar&level=surface&lat=31.062&lon=-90.956", "1"],
  [
    "2196F3",
    "PLANES",
    "https://globe.adsbexchange.com/",
    "1",
  ],
  [
    "2196F3",
    "RADAR",
    "radar.html",
    "1",
  ],
  
  ["2196F3", "DX CLUSTER", "https://www.nnvl.noaa.gov/NESDIS/site/videos/GOES/USlamWV-sector.mp4?_ga=2.214018519.1525759656.1717948358-643504581.1714231811", "1", "R"],
  
  [
    "2196F3",
    "LIGHTNING",
    "https://map.blitzortung.org/#3.87/36.5/-89.41",
    "1",
    "R",
  ],

  ["2196F3", "WEATHER", "https://digital.weather.gov/?zoom=5&lat=38.02828&lon=-91.9297&layers=F000BTTTTFTT&region=0&element=6&mxmz=true&barbs=true&subl=TFFFFF&units=english&wunits=nautical&coords=latlon&tunits=localt", '1'],


  
  ["2196F3", "CURRENTS", "https://earth.nullschool.net/#current/ocean/surface/currents/orthographic=-71.31,25.84,793/loc=-68.845,31.7940", "1", "R"],
  
  
  [
    "2196F3",
    "WEATHER",
    "https://www.",
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
  
  [
    "",
    "https://cdn.star.nesdis.noaa.gov/GOES16/ABI/CONUS/GEOCOLOR/2500x1500.jpg",
    "https://cdn.star.nesdis.noaa.gov/GOES16/ABI/CONUS/Sandwich/2500x1500.jpg",
    "https://cdn.star.nesdis.noaa.gov/GOES16/ABI/CONUS/Sandwich/GOES16-CONUS-Sandwich-625x375.gif",
    "https://cdn.star.nesdis.noaa.gov/GOES16/ABI/CONUS/GEOCOLOR/GOES16-CONUS-GEOCOLOR-625x375.gif",
    "https://cdn.star.nesdis.noaa.gov/GOES16/ABI/CONUS/DMW/2500x1500.jpg",
    "https://cdn.star.nesdis.noaa.gov/GOES16/ABI/CONUS/09/2500x1500.jpg",
    ],

    [
      "",
      "https://cdn.star.nesdis.noaa.gov/GOES16/ABI/SECTOR/gm/Sandwich/GOES16-GM-Sandwich-1000x1000.gif",
  "https://cdn.star.nesdis.noaa.gov/GOES16/ABI/SECTOR/gm/02/GOES16-GM-02-1000x1000.gif",
"https://cdn.star.nesdis.noaa.gov/GOES16/ABI/SECTOR/gm/07/GOES16-GM-07-1000x1000.gif",
"https://cdn.star.nesdis.noaa.gov/GOES16/ABI/SECTOR/gm/08/GOES16-GM-08-1000x1000.gif",
"https://cdn.star.nesdis.noaa.gov/GOES16/ABI/SECTOR/gm/13/GOES16-GM-13-1000x1000.gif",
"https://cdn.star.nesdis.noaa.gov/GOES16/ABI/SECTOR/gm/14/GOES16-GM-14-1000x1000.gif",
"https://cdn.star.nesdis.noaa.gov/GOES16/ABI/SECTOR/gm/AirMass/GOES16-GM-AirMass-1000x1000.gif",
"https://cdn.star.nesdis.noaa.gov/GOES16/ABI/SECTOR/gm/DayNightCloudMicroCombo/GOES16-GM-DayNightCloudMicroCombo-1000x1000.gif",
"https://cdn.star.nesdis.noaa.gov/GOES16/ABI/SECTOR/gm/FireTemperature/GOES16-GM-FireTemperature-1000x1000.gif",
"https://cdn.star.nesdis.noaa.gov/GOES16/ABI/SECTOR/gm/GEOCOLOR/GOES16-GM-GEOCOLOR-1000x1000.gif",

],

      
  
    
  [
    "",
  "https://cdn.star.nesdis.noaa.gov/GOES16/ABI/SECTOR/eus/Sandwich/GOES16-EUS-Sandwich-1000x1000.gif",
"https://cdn.star.nesdis.noaa.gov/GOES16/ABI/SECTOR/eus/GEOCOLOR/GOES16-EUS-GEOCOLOR-1000x1000.gif",
"https://cdn.star.nesdis.noaa.gov/GOES16/ABI/SECTOR/eus/13/GOES16-EUS-09-1000x1000.gif",
  ],
    

  [
    "",
    "https://www.weather.gov/images//mob/graphicast/image_full21.png",
    "https://www.wpc.ncep.noaa.gov/basicwx/94fndfd.gif",
    "https://www.wpc.ncep.noaa.gov/basicwx/96fndfd.gif",
    "https://www.wpc.ncep.noaa.gov/medr/display/wpcwx+frontsf072.gif",
    "https://graphical.weather.gov/images/conus/T1_conus.png", 
    "https://graphical.weather.gov/images/conus/WindSpd1_conus.png",
    "https://graphical.weather.gov/images/conus/PoP121_conus.png",
    "https://www.wpc.ncep.noaa.gov/noaa/noaad3.gif",
    ],
    


  [
    "THE SUN",
    "https://cdn.star.nesdis.noaa.gov/GOES16/SUVI/FD/He303/latest.jpg",
    "https://cdn.star.nesdis.noaa.gov/GOES16/SUVI/FD/Fe171/latest.jpg",
    "https://www.heavens-above.com/orbitdisplay.aspx?icon=iss&width=600&height=300&mode=M&satid=25544",
    "https://www.heavens-above.com/orbitdisplay.aspx?icon=default&width=600&height=300&mode=M&satid=44909",
  ],

  [
    "TROPICS",
    "https://cdn.star.nesdis.noaa.gov/GOES16/GLM/SECTOR/taw/EXTENT3/GOES16-TAW-EXTENT3-900x540.gif",
    "https://cdn.star.nesdis.noaa.gov/GOES16/ABI/SECTOR/cam/Sandwich/GOES16-CAM-Sandwich-1000x1000.gif",
    "https://cdn.star.nesdis.noaa.gov/GOES16/ABI/SECTOR/cam/GEOCOLOR/GOES16-CAM-GEOCOLOR-1000x1000.gif",
    "https://cdn.star.nesdis.noaa.gov/GOES16/ABI/SECTOR/cam/AirMass/GOES16-CAM-AirMass-1000x1000.gif",
    "https://cdn.star.nesdis.noaa.gov/GOES16/ABI/SECTOR/cam/DayNightCloudMicroCombo/GOES16-CAM-DayNightCloudMicroCombo-1000x1000.gif",
    "https://cdn.star.nesdis.noaa.gov/GOES16/ABI/SECTOR/cam/13/GOES16-CAM-13-1000x1000.gif",
    "https://cdn.star.nesdis.noaa.gov/GOES16/ABI/SECTOR/cam/08/GOES16-CAM-08-1000x1000.gif",
  ],


];
