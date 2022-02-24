class Solution:
    # O(n^2) time | O(n) space - where n is the number of points
    def maxPoints(self, points: List[List[int]]) -> int:
        maxPoints = 1
        # Store slope as key and points as values
        slopes = {}
        # Iterate through points, and calculate slope
        for i1, p1 in enumerate(points):
            for i2 in range(i1 + 1, len(points)):
                p2 = points[i2]
                # Calculate Slope
                slope = getSlope(p1, p2)
                # Stringify slope
                slopeKey = str(slope[0]) + " : " + str(slope[1])
                if slopeKey not in slopes:
                    slopes[slopeKey] = 1
                slopes[slopeKey] += 1
            maxPoints = max(maxPoints, max(slopes.values(), default=0))
            slopes.clear()
        return maxPoints

def getSlope(p1, p2):
	p1x, p1y = p1
	p2x, p2y = p2
	slope = [1, 0] # slope of vertical line
	if p1x != p2x:
		y = p2y - p1y
		x = p2x - p1x
		# Reduce y and x to most reduced form
		gcd = calGCD(abs(x), abs(y))
		y = y // gcd
		x = x // gcd
        # Handle signs
		if x < 0:
			y *= -1
			x *= -1
		slope = [y, x]
	return slope

def calGCD(a, b):
	if(b == 0):
		return a
	else:
		return calGCD(b, a % b)