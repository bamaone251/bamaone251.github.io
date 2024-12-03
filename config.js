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
    "https://bamaone251.github.io/LAWX/",
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
    "https://cdn.star.nesdis.noaa.gov/GOES16/ABI/CONUS/GEOCOLOR/GOES16-CONUS-GEOCOLOR-625x375.gif",
    "https://cdn.star.nesdis.noaa.gov/GOES16/ABI/CONUS/Sandwich/GOES16-CONUS-Sandwich-625x375.gif",
    "https://cdn.star.nesdis.noaa.gov/GOES16/ABI/CONUS/DayNightCloudMicroCombo/GOES16-CONUS-DayNightCloudMicroCombo-625x375.gif",
  ],

  
  [
    "",
    "https://radar.weather.gov/ridge/standard/SOUTHMISSVLY_loop.gif",
  ],

  [
    "",
    "https://climate.cod.edu/data/satellite/regional/southcentral/current/southcentral.ww.gif",
    "https://images.lightningmaps.org/blitzortung/america/index.php?animation=usa",  
  ],






 

["", 
     "https://cdn.star.nesdis.noaa.gov/GOES16/ABI/CONUS/09/2500x1500.jpg",
    "https://cdn.star.nesdis.noaa.gov/GOES16/ABI/CONUS/10/2500x1500.jpg",
    "https://cdn.star.nesdis.noaa.gov/GOES16/ABI/CONUS/11/2500x1500.jpg",
    "https://cdn.star.nesdis.noaa.gov/GOES16/ABI/CONUS/01/2500x1500.jpg",
    "https://cdn.star.nesdis.noaa.gov/GOES16/ABI/CONUS/02/2500x1500.jpg",
    "https://cdn.star.nesdis.noaa.gov/GOES16/ABI/CONUS/05/2500x1500.jpg",
    "https://cdn.star.nesdis.noaa.gov/GOES16/ABI/CONUS/06/2500x1500.jpg",
    "https://cdn.star.nesdis.noaa.gov/GOES16/ABI/CONUS/07/2500x1500.jpg",
    "https://cdn.star.nesdis.noaa.gov/GOES16/ABI/CONUS/08/2500x1500.jpg",
    "https://cdn.star.nesdis.noaa.gov/GOES16/ABI/CONUS/09/2500x1500.jpg",
    "https://cdn.star.nesdis.noaa.gov/GOES16/ABI/CONUS/10/2500x1500.jpg",
    "https://cdn.star.nesdis.noaa.gov/GOES16/ABI/CONUS/11/2500x1500.jpg",
    "https://cdn.star.nesdis.noaa.gov/GOES16/ABI/CONUS/12/2500x1500.jpg",
    "https://cdn.star.nesdis.noaa.gov/GOES16/ABI/CONUS/13/2500x1500.jpg",
    "https://cdn.star.nesdis.noaa.gov/GOES16/ABI/CONUS/14/2500x1500.jpg",
  ],

  [
    "",
    
    
    "https://cdn.star.nesdis.noaa.gov/GOES16/ABI/SECTOR/smv/07/1200x1200.jpg",
    "https://cdn.star.nesdis.noaa.gov/GOES16/ABI/SECTOR/smv/08/1200x1200.jpg",
    "https://cdn.star.nesdis.noaa.gov/GOES16/ABI/SECTOR/smv/13/1200x1200.jpg",
    "https://cdn.star.nesdis.noaa.gov/GOES16/ABI/SECTOR/smv/01/1200x1200.jpg",
    "https://cdn.star.nesdis.noaa.gov/GOES16/ABI/SECTOR/smv/02/1200x1200.jpg",
    "https://cdn.star.nesdis.noaa.gov/GOES16/ABI/SECTOR/smv/03/1200x1200.jpg",
    "https://cdn.star.nesdis.noaa.gov/GOES16/ABI/SECTOR/smv/04/1200x1200.jpg",
    "https://cdn.star.nesdis.noaa.gov/GOES16/ABI/SECTOR/smv/05/1200x1200.jpg",
    "https://cdn.star.nesdis.noaa.gov/GOES16/ABI/SECTOR/smv/06/1200x1200.jpg",
    "https://cdn.star.nesdis.noaa.gov/GOES16/ABI/SECTOR/smv/07/1200x1200.jpg",
    "https://cdn.star.nesdis.noaa.gov/GOES16/ABI/SECTOR/smv/08/1200x1200.jpg",
    "https://cdn.star.nesdis.noaa.gov/GOES16/ABI/SECTOR/smv/09/1200x1200.jpg",
    "https://cdn.star.nesdis.noaa.gov/GOES16/ABI/SECTOR/smv/10/1200x1200.jpg",
    "https://cdn.star.nesdis.noaa.gov/GOES16/ABI/SECTOR/smv/11/1200x1200.jpg",
    "https://cdn.star.nesdis.noaa.gov/GOES16/ABI/SECTOR/smv/12/1200x1200.jpg",
    "https://cdn.star.nesdis.noaa.gov/GOES16/ABI/SECTOR/smv/06/1200x1200.jpg",
  ],


  [
    "",
    "https://cdn.star.nesdis.noaa.gov/GOES16/ABI/SECTOR/GM/Sandwich/GOES16-GM-Sandwich-1000x1000.gif", 
    "https://cdn.star.nesdis.noaa.gov/GOES16/ABI/SECTOR/gm/DayNightCloudMicroCombo/GOES16-GM-DayNightCloudMicroCombo-1000x1000.gif",
    "https://cdn.star.nesdis.noaa.gov/GOES16/ABI/SECTOR/gm/GEOCOLOR/GOES16-GM-GEOCOLOR-1000x1000.gif",
    "https://cdn.star.nesdis.noaa.gov/GOES16/ABI/SECTOR/gm/13/GOES16-GM-13-1000x1000.gif",
  ],




  ["TROPICS", "https://cdn.star.nesdis.noaa.gov/GOES16/GLM/SECTOR/taw/EXTENT3/GOES16-TAW-EXTENT3-900x540.gif"],


  [
    "THE SUN",
    "https://cdn.star.nesdis.noaa.gov/GOES16/SUVI/FD/He303/latest.jpg",
    "https://cdn.star.nesdis.noaa.gov/GOES16/SUVI/FD/Fe171/latest.jpg",
  ],




  
  [
    "FORECAST", 
    "https://www.wpc.ncep.noaa.gov/noaa/noaad1.gif",
    "https://www.wpc.ncep.noaa.gov/noaa/noaad3.gif",
  ],

    [
    "FORECAST", 
    <iframe width="32.8%" height="220vh" src="https://www.youtube.com/embed/pJqrjIuvGFE" frameborder="0" allowfullscreen></iframe>
        
        <iframe width="32.8%" height="220vh" src="https://www.youtube.com/embed/N5wWOVOTHmQ" frameborder="0" allowfullscreen></iframe>
        
        <iframe width="32.8%" height="220vh" src="https://webcams.windy.com/webcams/stream/1647127872"  frameborder="0" ></iframe>
   
  ],


];
