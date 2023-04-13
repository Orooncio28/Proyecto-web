-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 30-01-2023 a las 23:13:33
-- Versión del servidor: 10.4.22-MariaDB
-- Versión de PHP: 8.0.13

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `cursoaplicacionesweb`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `gestion`
--

CREATE TABLE `gestion` (
  `Indentificador` int(255) NOT NULL,
  `nombre` varchar(255) COLLATE utf8mb4_spanish_ci NOT NULL,
  `descripcion` text COLLATE utf8mb4_spanish_ci NOT NULL,
  `precio` decimal(5,2) NOT NULL,
  `peso` varchar(255) COLLATE utf8mb4_spanish_ci NOT NULL,
  `dimensiones` varchar(255) COLLATE utf8mb4_spanish_ci NOT NULL,
  `existencia` int(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;

--
-- Volcado de datos para la tabla `gestion`
--

INSERT INTO `gestion` (`Indentificador`, `nombre`, `descripcion`, `precio`, `peso`, `dimensiones`, `existencia`) VALUES
(1, 'Calcetines Blancos', 'Comodos y frescos calcetines ideales para la temporada de verano', '5.00', '1', '1x1x1', 1000),
(2, 'Calcetines dia del padre', 'Calcetines horribles que necesitan ser llamados asi para venderse', '3.80', '1', '1x1x1', 50);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pedidos`
--

CREATE TABLE `pedidos` (
  `Indentificador` int(255) NOT NULL,
  `idusuario` int(255) NOT NULL,
  `idproducto` int(255) NOT NULL,
  `cantidad` int(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;

--
-- Volcado de datos para la tabla `pedidos`
--

INSERT INTO `pedidos` (`Indentificador`, `idusuario`, `idproducto`, `cantidad`) VALUES
(1, 1, 1, 3),
(2, 2, 2, 5),
(3, 2, 2, 10);

-- --------------------------------------------------------

--
-- Estructura Stand-in para la vista `pedios_de_ccienets`
-- (Véase abajo para la vista actual)
--
CREATE TABLE `pedios_de_ccienets` (
`Nombres del Usuario` varchar(255)
,`Apellidos del Usuario` varchar(255)
,`Email del Usuario` varchar(255)
,`Cantidad de productos` int(255)
,`Producto Comprado` varchar(255)
,`Precio del Producto` decimal(5,2)
,`Sub Total` decimal(65,2)
);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `Indentificador` int(255) NOT NULL,
  `usuario` varchar(255) COLLATE utf8mb4_spanish_ci NOT NULL,
  `password` varchar(255) COLLATE utf8mb4_spanish_ci NOT NULL,
  `nombres` varchar(255) COLLATE utf8mb4_spanish_ci NOT NULL,
  `apellidos` varchar(255) COLLATE utf8mb4_spanish_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_spanish_ci NOT NULL,
  `direccion` varchar(255) COLLATE utf8mb4_spanish_ci NOT NULL,
  `telefono` varchar(255) COLLATE utf8mb4_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci COMMENT='Aqui voy a guardar la nformacion de los usurios';

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`Indentificador`, `usuario`, `password`, `nombres`, `apellidos`, `email`, `direccion`, `telefono`) VALUES
(1, 'oroncio66', 'Oro280166', 'Francisco Oroncio', 'Chacón Torres', 'oroncio66@gmail.com', 'Av Municipal Torre Porteña Psio 16 apto16-1, Puerto la Cruz', '+584248731479'),
(2, 'PEDRO45', 'pedro0125', 'pedroJose25', 'Pedro Jose', 'pedro2543@gmail.com', 'La Calle de pedro', '+58444247586'),
(3, 'maria2543', 'mj25689', 'Maria Josefina', 'Carmona Perez', 'mariajose25@gmail.com', 'calle de maria', '+584240745268');

-- --------------------------------------------------------

--
-- Estructura para la vista `pedios_de_ccienets`
--
DROP TABLE IF EXISTS `pedios_de_ccienets`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `pedios_de_ccienets`  AS SELECT `usuarios`.`nombres` AS `Nombres del Usuario`, `usuarios`.`apellidos` AS `Apellidos del Usuario`, `usuarios`.`email` AS `Email del Usuario`, `pedidos`.`cantidad` AS `Cantidad de productos`, `gestion`.`nombre` AS `Producto Comprado`, `gestion`.`precio` AS `Precio del Producto`, `pedidos`.`cantidad`* `gestion`.`precio` AS `Sub Total` FROM ((`pedidos` left join `usuarios` on(`pedidos`.`idusuario` = `usuarios`.`Indentificador`)) left join `gestion` on(`pedidos`.`idproducto` = `gestion`.`Indentificador`)) ;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `gestion`
--
ALTER TABLE `gestion`
  ADD PRIMARY KEY (`Indentificador`);

--
-- Indices de la tabla `pedidos`
--
ALTER TABLE `pedidos`
  ADD PRIMARY KEY (`Indentificador`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`Indentificador`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `gestion`
--
ALTER TABLE `gestion`
  MODIFY `Indentificador` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `pedidos`
--
ALTER TABLE `pedidos`
  MODIFY `Indentificador` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `Indentificador` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
