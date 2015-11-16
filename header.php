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
					<li><a href="#" class="navigation__item">О нас</a>			
			            <ul>
			            	<li><a href="#">О клубе</a></li>
			                <li><a href="#">Наши гиды</a></li>
			                <li><a href="#">СМИ о нас</a></li>
			            </ul>        
					</li>
					<li><a href="#" class="navigation__item">Путешествия</a>
						<div class="navigation--travel">
							<select name="navigation--travel--region" id="navigation--travel--region">
								<option value="altay">Алтай</option>
								<option value="altay">Алтай</option>
								<option value="altay">Алтай</option>
								<option value="altay">Алтай</option>
								<option value="altay">Алтай</option>
							</select>
						</div>
					</li>
					<li><a href="#" class="navigation__item">Страны</a>
						<ul>
			            	<li><a href="#">Алтай</a></li>
							<li><a href="#">Байкал</a></li>
							<li><a href="#">Вьетнам</a></li>
							<li><a href="#">Греция</a></li>
							<li><a href="#">Исландия</a></li>
							<li><a href="#">Кавказ</a></li>
							<li><a href="#">Камчатка</a></li>
							<li><a href="#">Крым</a></li>
							<li><a href="#">Марокко</a></li>
							<li><a href="#">Непал</a></li>
							<li><a href="#">Новая зеландия</a></li>
							<li><a href="#">Танзания</a></li>
							<li><a href="#">Тибет</a></li>
							<li><a href="#">Турция</a></li>
							<li><a href="#">Южная Америка</a></li>
			            </ul> 
			        </li>
					<li><a href="#" class="navigation__item">Фотоотчет</a></li>
					<li><a href="#" class="navigation__item">Контакты</a></li>
					<li><a href="#" class="navigation__item">Расписание</a></li>
				</ul>
			</nav>
		</div>
	</header>