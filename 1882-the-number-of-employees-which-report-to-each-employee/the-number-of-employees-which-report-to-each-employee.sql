/* Write your T-SQL query statement below */






SELECT m.employee_id , m.name , COUNT(e.reports_to ) AS reports_count , ROUND(AVG(CAST(e.age AS DECIMAL(10,2))),0) AS average_age FROM Employees e
INNER JOIN Employees m ON m.employee_id = e.reports_to 
GROUP BY m.employee_id , m.name 
ORDER BY m.employee_id 
