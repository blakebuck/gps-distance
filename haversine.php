<?
class distance {
    public function haversine($latitude1, $longitude1, $latitude2, $longitude2, $unit) {
        $latitude1 = $this->toRadians($latitude1);
        $latitude2 = $this->toRadians($latitude2);
        $longitude1 = $this->toRadians($longitude1);
        $longitude2 = $this->toRadians($longitude2);

        $unit = strtolower($unit);
        $measures = Array("meters" => 6371000, "kilometers" => 6371, "miles" => 3959, "feet" => 20903520);
        $radius = in_array($unit, $measures) ? $measures[$unit] : $measures["meters"];

        $haversinLat = pow(sin(($latitude2 - $latitude1)/2), 2);
        $haversinLong = pow(sin(($longitude2 - $longitude1)/2), 2);

        $radicand = $haversinLat + cos($latitude1) * cos($latitude2) * $haversinLong;
        $distance = 2 * $radius * asin(sqrt($radicand));

        return $distance;
    }

    private function toRadians($degrees){
        return ($degrees * M_PI) / 180;
    }
}
