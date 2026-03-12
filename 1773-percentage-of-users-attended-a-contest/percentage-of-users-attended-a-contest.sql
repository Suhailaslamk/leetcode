/* Write your T-SQL query statement below */
SELECT contest_id,ROUND(COUNT(r.user_id)*100.00 / (SELECT COUNT(*) FROM Users),2) AS percentage FROM Users u
JOIN Register r ON u.user_id = r.user_id 
GROUP BY contest_id 
ORDER BY Percentage DESC,r.contest_id ASC
