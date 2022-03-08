/**
 * @param {number[][]} points
 * @return {boolean}
 */
// O(1) time | O(1) space
var isBoomerang = function(points) {
    // destructure three points
    const [x1, y1] = points[0]
    const [x2, y2] = points[1]
    const [x3, y3] = points[2]
    // calculate area
    const area = Math.abs(x1*(y2 - y3) + x2*(y3 - y1) + x3*(y1 - y2)) / 2
    if (area !== 0) return true
    return false
};