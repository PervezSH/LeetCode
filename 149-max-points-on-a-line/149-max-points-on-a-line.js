/**
 * @param {number[][]} points
 * @return {number}
 */
// O(n^2) time | O(n) space - where n is the number of points
var maxPoints = function(points) {
    let maxPoints = 1;
    // Iterate through points, and calculate slope
    for (let i=0; i<points.length; i++){
        const p1 = points[i];
        // Store slope as key and points as values
        const slopes = {};
        for (let j=i+1; j<points.length; j++){
            const p2 = points[j];
            // Calculate Slope
            const [num, den] = getSlope(p1, p2);
            // Stringify slope
            const slopeKey = num.toString() + " : " + den.toString()
            if (!(slopeKey in slopes))
                slopes[slopeKey] = 1;
            slopes[slopeKey] += 1;
        }
        const currentMaxPoints = Object.values(slopes).reduce((a, b) => Math.max(a, b), 0)
        maxPoints = Math.max(maxPoints, currentMaxPoints);
    }
    return maxPoints;
};

function getSlope(p1, p2){
	const [p1x, p1y] = p1;
	const [p2x, p2y] = p2;
	let slope = [1, 0]; // slope of vertical line
	if (p1x != p2x){
		let y = p2y - p1y;
		let x = p2x - p1x;
		// Reduce y and x to most reduced form
		let gcd = calGCD(Math.abs(x), Math.abs(y));
		y = Math.floor(y / gcd);
		x = Math.floor(x / gcd);
        // Handle signs
		if (x < 0){
			y *= -1;
			x *= -1;
        }
		slope = [y, x];
    }
	return slope;
}

function calGCD(a, b){
	if(b === 0)
		return a
	else
		return calGCD(b, a % b)
}