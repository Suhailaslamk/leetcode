/* Write your T-SQL query statement below */




with checkedlist AS ( SELECT tiv_2016 ,
COUNT(*) OVER (PARTITION BY tiv_2015 ) AS tiv_count ,
COUNT(*) OVER (PARTITION BY lat , lon ) AS lan_count FROM Insurance )

SELECT ROUND(SUM(tiv_2016), 2) AS tiv_2016 FROM checkedlist
WHERE tiv_count > 1 
AND 
lan_count = 1