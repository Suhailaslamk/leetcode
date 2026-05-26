/* Write your T-SQL query statement below */
-- SELECT ROUND(SUM(tiv_2016 ), 2) 
--  FROM Insurance 
-- WHERE 
-- tiv_2015 IN (SELECT tiv_2015 FROM Insurance 
-- GROUP BY tiv_2015
-- HAVING COUNT(*) > 1 )
-- AND NOT EXISTS (
--         SELECT 1 
--         FROM Insurance i
--         WHERE i.lan <> 
-- )



with checkedlist AS ( SELECT tiv_2016 ,
COUNT(*) OVER (PARTITION BY tiv_2015 ) AS tiv_count ,
COUNT(*) OVER (PARTITION BY lat , lon ) AS lan_count FROM Insurance )

SELECT ROUND(SUM(tiv_2016), 2) AS tiv_2016 FROM checkedlist
WHERE tiv_count > 1 
AND 
lan_count = 1