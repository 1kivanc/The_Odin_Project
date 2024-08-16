-- 1. Query to Show the Population of Germany:

SELECT population FROM world
WHERE name = 'Germany';

-- 2. Query to Show the Name and Population for Sweden, Norway, and Denmark:

SELECT name, population FROM world
WHERE name IN ('Sweden', 'Norway', 'Denmark');

-- 3. Query to Show the Country and Area for Countries with an Area Between 200,000 and 250,000 sq. km:

SELECT name, area FROM world
WHERE area BETWEEN 200000 AND 250000;
