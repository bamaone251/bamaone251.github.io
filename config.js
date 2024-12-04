const topBarCenterText = `KN4RUW - FAIRHOPE, AL`;
// Menu items
// Structure is as follows HTML Color code, Option, target URL, scaling 1=Original Size, side (optional, nothing is Left, "R" is Right)
// The values are [color code, menu text, target link, scale factor, side],
// add new lines following the structure for extra menu options. The comma at the end is important!
const aURL = [
  ["add10d", "BACK", "#", "1"],
  ["add10d", "BACK", "#", "1", "R"],
  ["ff9100", "Refresh", "#", "1"],

  ["2196F3", "WINDY", "https://embed.windy.com/embed.html?type=map&location=coordinates&metricRain=default&metricTemp=default&metricWind=default&zoom=8&overlay=wind&product=ecmwf&level=surface&lat=30.501&lon=-87.879",],
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
  ["2196F3", "CAMS", "https://bamaone251.github.io/LOCALWX/", "1", "R"],
  [
    "2196F3",
    "LIGHTNING",
    "https://map.blitzortung.org/#3.87/36.5/-89.41",
    "1",
    "R",
  ],

  ["2196F3", "WEATHER","https://digital.weather.gov/?zoom=5&lat=38.02828&lon=-91.9297&layers=F000BTTTTFTT&region=0&element=6&mxmz=true&barbs=true&subl=TFFFFF&units=english&wunits=nautical&coords=latlon&tunits=localt", '1'],

  ["2196F3", "CURRENTS", "https://earth.nullschool.net/#current/ocean/surface/currents/orthographic=-71.31,25.84,793/loc=-68.845,31.7940", "1", "R"],
  [
    "2196F3",
    "WEATHER",
    "https://www.vesselfinder.com/?p=USPGL001",
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
"https://cdn.star.nesdis.noaa.gov/GOES16/ABI/SECTOR/UMV/Sandwich/GOES16-UMV-Sandwich-600x600.gif",
"https://cdn.star.nesdis.noaa.gov/GOES16/ABI/SECTOR/UMV/GEOCOLOR/GOES16-UMV-GEOCOLOR-600x600.gif",
"https://cdn.star.nesdis.noaa.gov/GOES16/ABI/SECTOR/UMV/AirMass/GOES16-UMV-AirMass-600x600.gif",
"https://cdn.star.nesdis.noaa.gov/GOES16/ABI/SECTOR/UMV/DayNightCloudMicroCombo/GOES16-UMV-DayNightCloudMicroCombo-600x600.gif",
"https://cdn.star.nesdis.noaa.gov/GOES16/ABI/MESO/30N-87W/Sandwich/2000x2000.jpg",
"https://cdn.star.nesdis.noaa.gov/GOES16/ABI/MESO/30N-87W/GEOCOLOR/2000x2000.jpg",
],

  


  




  [
    "",
    "https://cdn.star.nesdis.noaa.gov/GOES16/ABI/SECTOR/eus/Sandwich/GOES16-EUS-Sandwich-1000x1000.gif",
    "https://cdn.star.nesdis.noaa.gov/GOES16/ABI/SECTOR/eus/GEOCOLOR/GOES16-EUS-GEOCOLOR-1000x1000.gif",
    "https://cdn.star.nesdis.noaa.gov/GOES16/ABI/SECTOR/eus/AirMass/GOES16-EUS-AirMass-1000x1000.gif",
    "https://cdn.star.nesdis.noaa.gov/GOES16/ABI/SECTOR/eus/DayNightCloudMicroCombo/GOES16-EUS-DayNightCloudMicroCombo-1000x1000.gif",
    "https://cdn.star.nesdis.noaa.gov/GOES16/ABI/SECTOR/eus/13/GOES16-EUS-13-1000x1000.gif",
    "https://cdn.star.nesdis.noaa.gov/GOES16/ABI/SECTOR/eus/09/2000x2000.jpg",
    
  ],
  [
    "",
    "https://radar.weather.gov/ridge/standard/SOUTHMISSVLY_loop.gif",
    "https://radar.weather.gov/ridge/standard/CONUS-LARGE_loop.gif",
    "https://radar.weather.gov/ridge/standard/KMOB_loop.gif",
    "https://climate.cod.edu/data/satellite/regional/southcentral/current/southcentral.ww.gif",
    "https://images.lightningmaps.org/blitzortung/america/index.php?animation=usa",  
  ],
  
  [
"",
"https://cdn.star.nesdis.noaa.gov/GOES16/ABI/SECTOR/sp/Sandwich/GOES16-SP-Sandwich-600x600.gif",
"https://cdn.star.nesdis.noaa.gov/GOES16/ABI/SECTOR/sp/GEOCOLOR/GOES16-SP-GEOCOLOR-600x600.gif",
"https://cdn.star.nesdis.noaa.gov/GOES16/ABI/SECTOR/sp/AirMass/GOES16-SP-AirMass-600x600.gif",
"https://cdn.star.nesdis.noaa.gov/GOES16/ABI/SECTOR/sp/13/GOES16-SP-13-600x600.gif",
],
  [
    "",
   
"https://cdn.star.nesdis.noaa.gov/GOES16/ABI/SECTOR/gm/Sandwich/GOES16-GM-Sandwich-1000x1000.gif",
"https://cdn.star.nesdis.noaa.gov/GOES16/ABI/SECTOR/gm/GEOCOLOR/GOES16-GM-GEOCOLOR-1000x1000.gif",
"https://cdn.star.nesdis.noaa.gov/GOES16/ABI/SECTOR/gm/AirMass/GOES16-GM-AirMass-1000x1000.gif",
"https://cdn.star.nesdis.noaa.gov/GOES16/ABI/SECTOR/gm/DayNightCloudMicroCombo/GOES16-GM-DayNightCloudMicroCombo-1000x1000.gif",
"https://cdn.star.nesdis.noaa.gov/GOES16/ABI/SECTOR/gm/FireTemperature/GOES16-GM-FireTemperature-1000x1000.gif",
"https://cdn.star.nesdis.noaa.gov/GOES16/ABI/SECTOR/gm/13/GOES16-GM-13-1000x1000.gif",
"https://cdn.star.nesdis.noaa.gov/GOES16/ABI/SECTOR/gm/08/GOES16-GM-08-1000x1000.gif",
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


  [
    "THE SUN",
    "https://cdn.star.nesdis.noaa.gov/GOES16/SUVI/FD/He303/latest.jpg",
    "https://cdn.star.nesdis.noaa.gov/GOES16/SUVI/FD/Fe171/latest.jpg",
  ],




  
  [
    "FORECAST", 
    "https://www.wpc.ncep.noaa.gov/noaa/noaad1.gif",
    "https://www.wpc.ncep.noaa.gov/noaa/noaad3.gif",
    "https://www.weather.gov/images//mob/graphicast/image_full21.png",
  ],




];
