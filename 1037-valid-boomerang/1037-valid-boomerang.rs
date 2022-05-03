impl Solution {
    // O(1) time | O(1) space
    pub fn is_boomerang(points: Vec<Vec<i32>>) -> bool {
        // destructring
        let (x1, y1) = (points[0][0], points[0][1]);
        let (x2, y2) = (points[1][0], points[1][1]);
        let (x3, y3) = (points[2][0], points[2][1]);

        (x1 * (y2 - y3) + x2 * (y3 - y1) + x3 * (y1 - y2)).abs() > 0
    }
}