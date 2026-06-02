# Write your MySQL query statement below
SELECT person_name FROM (SELECT person_name , turn , SUM(weight) OVER (ORDER BY turn ) AS total_weight  FROM Queue ) t
WHERE total_weight <= 1000
order by total_weight desc 
limit 1;