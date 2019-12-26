# Php project

> 1. Composer install doen in php project
> 2. in '.env' je huidig ip-address van je host (laptop) toevoegen
>    voorbeeld: CORS_ALLOW_ORIGIN=^https?://(localhost|192\.168\.0\.114)(:[0-9]+)?\$
>
> Om Mysql database aan te passen:
> mysql -u student -p wp1DB < wp1DB.sql
>
> In src/util/PdoFactory.php moet je jou specifieke database gegevens toevoegen, dus de connection, username en passwoord.
>
> Om de php server te runnen voer je volgend commando uit:
>
> _(php) bin/console server:run YOUR_LOCAL_IP_ADDRESS_
>
> _example: bin/console server:run 10.81.2.167_

# React project

1. doe een npm install
2. Bij het installeren van een externe libary ==> beter om yarn te gebruiken...
3. in redux/constants/baseUrl.js zet je het ip address van je local host (je laptop), zoals je het in het php project hebt aangepast.

4. normaal zou dit moeten werken :clap:
