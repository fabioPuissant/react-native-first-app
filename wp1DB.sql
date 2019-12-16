-- phpMyAdmin SQL Dump
-- version 4.5.4.1deb2ubuntu2.1
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Gegenereerd op: 16 dec 2019 om 10:23
-- Serverversie: 5.7.27-0ubuntu0.16.04.1
-- PHP-versie: 7.3.8-1+ubuntu16.04.1+deb.sury.org+1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `wp1DB`
--

-- --------------------------------------------------------

--
-- Tabelstructuur voor tabel `asset`
--

CREATE TABLE `asset` (
  `id` int(11) NOT NULL,
  `roomId` int(11) NOT NULL,
  `name` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Gegevens worden geëxporteerd voor tabel `asset`
--

INSERT INTO `asset` (`id`, `roomId`, `name`) VALUES
(1, 1, 'Beamer'),
(2, 2, 'Blackboard');

-- --------------------------------------------------------

--
-- Tabelstructuur voor tabel `room`
--

CREATE TABLE `room` (
  `id` int(11) NOT NULL,
  `name` varchar(250) NOT NULL,
  `happinessScore` int(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Gegevens worden geëxporteerd voor tabel `room`
--

INSERT INTO `room` (`id`, `name`, `happinessScore`) VALUES
(1, 'B051', 3451),
(2, 'ISpace07', 20),
(3, 'BlackBox', 50),
(4, 'B243', 2);

-- --------------------------------------------------------

--
-- Tabelstructuur voor tabel `ticket`
--

CREATE TABLE `ticket` (
  `id` int(11) NOT NULL,
  `assetId` int(11) NOT NULL,
  `numberOfVotes` int(11) NOT NULL,
  `description` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Gegevens worden geëxporteerd voor tabel `ticket`
--

INSERT INTO `ticket` (`id`, `assetId`, `numberOfVotes`, `description`) VALUES
(1, 1, 5, 'Beamer geeft geen correcte kleuren'),
(2, 1, 0, 'The PC doesn\'t start.'),
(3, 1, 0, 'The PC doesn\'t start.'),
(4, 1, 0, 'The PC doesn\'t start.');

--
-- Indexen voor geëxporteerde tabellen
--

--
-- Indexen voor tabel `asset`
--
ALTER TABLE `asset`
  ADD PRIMARY KEY (`id`);

--
-- Indexen voor tabel `room`
--
ALTER TABLE `room`
  ADD PRIMARY KEY (`id`);

--
-- Indexen voor tabel `ticket`
--
ALTER TABLE `ticket`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT voor geëxporteerde tabellen
--

--
-- AUTO_INCREMENT voor een tabel `asset`
--
ALTER TABLE `asset`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT voor een tabel `room`
--
ALTER TABLE `room`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT voor een tabel `ticket`
--
ALTER TABLE `ticket`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
