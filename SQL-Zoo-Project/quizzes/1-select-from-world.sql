-- 1. Show the name, continent, and population of all countries.
SELECT name, continent, population 
FROM world;

-- 2. Show the name for the countries that have a population of at least 200 million.
SELECT name 
FROM world 
WHERE population >= 200000000;

-- 3. Give the name and the per capita GDP for those countries with a population of at least 200 million.
SELECT name, gdp/population AS per_capita_gdp 
FROM world 
WHERE population >= 200000000;

-- 4. Show the name and population in millions for the countries of the continent 'South America'. 
-- Divide the population by 1000000 to get population in millions.
SELECT name, population / 1000000 AS population_in_millions 
FROM world 
WHERE continent = 'South America';

-- 5.Show the name and population for France, Germany, Italy
SELECT name
FROM your_table_name
WHERE name LIKE '%United%';

-- 6.Show the countries which have a name that includes the word 'United'
SELECT name
FROM world
WHERE name LIKE '%United%';

--7.Two ways to be big: A country is big if it has an area of more than 3 million sq km or it has a population of more than 250 million.
SELECT name, population, area
FROM world
WHERE area > 3000000 OR population > 250000000;

-- 8.
SELECT name, population, area
FROM world
WHERE (area > 3000000 AND population <= 250000000)
   OR (population > 250000000 AND area <= 3000000);