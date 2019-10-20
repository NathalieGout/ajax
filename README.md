
Ressources 
===
https://developer.mozilla.org/fr/docs/Web/API/Fetch_API/Using_Fetch#Cr%C3%A9er_une_requ%C3%AAte_fetch

https://developer.mozilla.org/fr/docs/Apprendre/JavaScript/Client-side_web_APIs/Fetching_data

https://developers.google.com/web/ilt/pwa/lab-fetch-api


++ 

- https://www.grafikart.fr/tutoriels/promise-async-await-875

- https://frank.taillandier.me/2017/03/23/comprendre-les-promesses-en-javascript/

- https://oncletom.io

Contexte
===



L'ajax repose sur le protocole ```XMLHttpRequest```
C'est assez ennuyant à manipuler, donc on a de nouvelles solutions pour gérer ça.

La fonction ```fetch``` ( récemment intégrée ) permet de faire des appels ajax plus simples



L'objet ```Promise``` est un objet rajouté depuis ```ES6``` ( comme ```Math```, ```String```, etc ..)

il permet de manipuler facilement les appels asynchrones passés avec fetch ( ou d'autres librairies comme ```axios``` , car c'est une promise que renvoie un appel fait avec fetch.

Une autre syntaxe est apparue encore plus récemment, pour recoller avec la syntaxe des autres langages : c'est le ```async await```, car pour la bonne pratique, il s'utilise dans un block ```try catch``` ( présents dans les langages back comme ```java```, ```php```)

info : appeler avec fetch renvoie une promise 


Instructions
==

ressources :

url1: https://opentdb.com/api.php?amount=10#

url2 https://opentdb.com/api.php?amount=5#


1) utiliser la documentation ```fetch``` pour faire un appel ajax sur l'url donnée à la ligne 1


2) utiliser la documentation des ```promises``` et de la méthode ```then``` pour afficher le résultat de l'appel ajax précédemment fait.

3) utiliser la documentation des ```promises``` et notamment le chainage des méthode ```then``` pour appeler l'url2 une fois seulement que vous avez récupéré les valeurs de l'appel à l'url1

4) utiliser la documentation ```async await``` et trouver des exemples pour réécrire les appels précédents ( étape 1 à 3 )  avec les mots clefs async await

5) Réécrire les différents appels avec la librairie ```axios```


TP en ligne :
https://next.tech/projects/9026598b-7582-4b58-bd13-cf4ceef74ab8?access_token=809968B39A5A2D7513800D9D3ACD7FFC&internal=false

<!-- tester :https://github.com/stevekane/promise-it-wont-hurt -->

Intégration avec React :
==

- Faire l'appel vers l'url 1 dans un component
- Stocker le retour de cet appel dans le state
- afficher la liste de chaque question de chaque élément de la collection  (utiliser la collection stockée dans le state pour faire un ```.map``` dans la partie jsx du component )
