class Solution:
    def isBoomerang(self, points: List[List[int]]) -> bool:
        # destructure three points
        x1, y1 = points[0]
        x2, y2 = points[1]
        x3, y3 = points[2]
        # calculate area
        area = abs(x1*(y2 - y3) + x2*(y3 - y1) + x3*(y1 - y2)) / 2
        if area != 0: return True
        return False