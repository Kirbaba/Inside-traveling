<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="">
    <link rel="icon" href="/wp-content/uploads/2015/03/657068.ico" type="image/x-icon" />
    <link rel="shortcut icon" href="/wp-content/uploads/2015/03/657068.ico" type="image/x-icon" />
    <script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAaOWKyamSxMTXclSDFmJ2N4Am20PCTD6I&sensor=FALSE">
    </script>
    <title><?php bloginfo('name'); ?> <?php wp_title(); ?></title>
    <?php wp_head(); ?>
</head>
<body>
	<header class="header">
		<div class="contain">
			<div class="header__topline">
				<div class="header__topline--logo">
					<img src="<?php bloginfo('template_directory'); ?>/img/logo.png" alt="">
				</div>
				<div class="header__topline--banner">
					Рекламный баннер
				</div>
				<div class="header__topline--contacts">
					<h4>8 (495) 222 22 22</h4>
					<h4>inside@gamail.com</h4>
				</div>
			</div>
			<nav class="navigation">
				<a href="#" class="navigation__home">
					<i class="fa fa-home"></i>
				</a>
				<ul>
					<li><a href="#">О нас</a></li>
					<li><a href="#">Путешествия</a></li>
					<li><a href="#">Страны</a></li>
					<li><a href="#">Фотоотчет</a></li>
					<li><a href="#">Контакты</a></li>
					<li><a href="#">Расписание</a></li>
				</ul>
			</nav>
		</div>
	</header>