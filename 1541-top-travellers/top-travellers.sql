/* Write your T-SQL query statement below */
SELECT name ,  ISNULL(SUM(distance),0) AS travelled_distance FROM Users u
 LEFT  JOIN Rides r ON r.user_id = u.id 
 GROUP BY u.id,name 
 
 ORDER BY SUM(distance) DESC, name ASC
