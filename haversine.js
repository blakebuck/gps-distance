function haversine(latitude1, longitude1, latitude2, longitude2, unit) {
    latitude1 = toRadians(latitude1);
    latitude2 = toRadians(latitude2);
    longitude1 = toRadians(longitude1);
    longitude2 = toRadians(longitude2);
    
    unit.toLowerCase();
    var measures = [];
    measures["meters"] = 6371000;
    measures["kilometers"] = 6371;
    measures["miles"] = 3959;
    measures["feet"] = 20903520;
    var radius;
    radius = typeof measures[unit] !== 'undefined' ? measures[unit] : measures["meters"];
    
    var haversinLat = Math.pow(Math.sin((latitude2 - latitude1)/2), 2);
    var haversinLong = Math.pow(Math.sin((longitude2 - longitude1)/2), 2);
    
    var radicand = haversinLat + Math.cos(latitude1) * Math.cos(latitude2) * haversinLong;
    var distance = 2 * radius * Math.asin(Math.sqrt(radicand));
    
    return distance;
}

function toRadians(degrees){
    return (degrees * Math.PI) / 180
}
