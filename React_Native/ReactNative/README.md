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
