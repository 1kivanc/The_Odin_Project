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
SELECT name, population 
FROM world 
WHERE name IN ('France', 'Germany', 'Italy');