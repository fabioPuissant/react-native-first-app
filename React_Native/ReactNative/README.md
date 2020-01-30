# Groepsuitbreiding

> Gebruik gemaakt van een component libary genaamd React-Native-Paper. De components van deze libary worden doorheen de gehele applicatie gebruikt. Verder hebben we ook nog zelf components geschreven voor bepaalde problemen in de app op te lossen en deze dan zelf gestyld via css en flexbox die ingebakken zit in de components die React-Native ons aanreikt.
>
> - **De component libary is toegevoegd als package via yarn.**
>
> [Link to site component libary](https://callstack.github.io/react-native-paper/index.html)
>
> Verder hebben we er een zelfgeschreven animation in gestoken. Deze animation zorgt voor het vertraagd laden van de asset items in het Room Detail scherm. Dit hebben we gedaan via de **Animated** API die in React Native standaard zit. Deze animation hebben we toegepast op een View en hebben hier een component van gemaakt zodat we dezelfde animation op meerdere plaatsen konden herbruiken in de applicatie.
>
> [Link to code](./layout/FadeInView.js)
>
> Een custom hooks package toegevoegd via yarn, voor navigeren en opnieuw ophalen van data van de API te vergemakkelijken.
> Door deze package kunnen we weten wanneer een component focus opnieuw focus heeft.
>
> [Link to package](https://github.com/react-navigation/hooks)

# Fabio individuele taak:

> ## Gebruik gemaakt van de fingerprint sensor van het toestel.
>
> Waneer iemand een Hapiness score wilt toevoegen aan een room moet deze score confirmed worden door een check te doen. Een fout boodschap komt er te staan wanneer de vingerafdruk niet herkend is.
>
> - Package hiervoor gebruikt = "_expo-local-authentication_"
>
> [Link to code](./screens/dialog/AddHappinessScoreDialog.js)

> NPM-package toegevoegd voor animations
> "_react-native-animatable_"
> Zichtbaar voor de room items. Deze items komen vertraagd op het scherm en lijken te springen bij het errste keer laden van dit scherm, code in RoomItem.js
>
> [Link to code](./components/rooms/RoomItem.js)

> Toevoeging van een animatie tijdens het authenticeren, hiervoor is gebruikt gemaakt van een package (Lottie package)
>
> [Link to Lottie pkg]('https://github.com/react-native-community/lottie-react-native')

# Michaël individuele taak:

> ## Gebruik gemaakt van de camera om QR-codes te scannen.

Het idee is om op assets zoals een beamer een qr-code te plakken, die kan dan gescand worden en dan krijg je te zien wat de naam en het id is van die asset. Zo kunnen gebruikers makkelijk deze informatie achterhalen indien ze een ticket willen aanmaken.

> - Package hiervoor gebruikt = "expo-barcode-scanner"

> [Link to code](./screens/QR.js)

Er is een QR-code onder React_Native/ReactNative folder toegevoegd om te demonstreren.

> [Link to QR-code](./qr-code.png)

# Michael individuele taak

> ## geolocation

Elke room heeft een locatie. men kan de locatie zien door bij het correspoderende room item op "see location" te klikken. Hierna wordt een static map image genereert waar een api key voor wordt gebruikt. Hier kan men de locatie vragen van de gebruiker en als mijn op de statische map klikt wordt men naar een interactieve map gebracht.
Ook via het menu kan je naar de interactieve map navigeren

packages:

- react-native-maps
- expo-permissions
- expo-location

interactieve map:

> [Link to code](./screens/MapScreen.js)

statische map:

> [Link to code](./screens/RoomMapScreen.js)
