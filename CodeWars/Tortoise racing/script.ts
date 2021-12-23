type int = number;
export class G964 {
    public static race = function (v1: int, v2: int, g: int): Array<int> | null {
        return  v1 >= v2 ? null: 
        [Math.floor(g * 3600 / (v2 - v1) / 3600), Math.floor((g * 3600 / (v2 - v1) % 3600) / 60),Math.floor(g * 3600 / (v2 - v1) %60)]
    }
} 
console.log(G964.race(720,850,70));



//* More generally: given two speeds v1 (A's speed, integer > 0) and v2 (B's speed, integer > 0) and a lead g (integer > 0)
//* how long will it take B to catch A ?
//* The result will be an array [hour, min, sec] which is the time needed in hours, minutes and
//* seconds(round down to the nearest second) or a string in some languages.
//* If v1 >= v2 then return nil, nothing, null
//* feet per hour
// * 1 kilometers per hour = 3280

//? race(720, 850, 70) => [0, 32, 18] or "0 32 18"
//? race(80, 91, 37)   => [3, 21, 49] or "3 21 49"

