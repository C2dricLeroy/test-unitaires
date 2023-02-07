# Tests unitaires

Ceci est un repository dédié à la découverte des tests-unitaires Javascript/Typescript.


## Définitions 

Les tests unitaires constituent une suite d'opérations permettant de vérifier la validité d'unités individuelles et indépendantes, dans le but de couvrir un maximum de surface scalable de l'application. 

### Mots clés : 

- Unité: C'est le plus petit élément identifiable et testable de l'application. Cela peut être une fonction, une méthode, une classe, ...
- Whitebox : Le whitebox testing est un test du code en lui même. Ce test appelle une partie du code afin d'en tester sa robustesse, sa structure. Ce test nécessite de bien connaître le code testé. 
- Blackbox : Les tests en blackbox examinent la sortie de la fonctionnalité de manière à déterminer si celle-ci est conforme ou non. Ces tests ne nécessitent pas de connaître le code de la focntion testée car un simple appel à celle-ci permet d'en connaître l'output.
- Isolation : Les tests répondent à une logique d'isolation des unité entre elles. Chaque fonction d'un code est testée séparément.
- Assertion : De façon générale, proposition, de forme affirmative ou négative, qu'on avance et qu'on donne comme vraie. Dans le testing, l'assertion permet de vérifier une condition considérée comme vraie. Schéatiquement : 
  - Si une condition est vraie, l'assertion reste muette.
  - Si la condition est fausse, un message d'erreur apparaît.
- Engine : Lorsque l'on parle d'Engines, on parle de moteurs d'éxécutions de tests.
- Coverage : Le taux de couverture exprime la surface de code testée et donc censée être robuste. Ce taux permet de déterminer à quel points nos tests unitaires recouvrent notre code. Attention toutefois, beaucoup d'entreprises ne jurent que par un 'code coverage' de 100%. Il ne faut néanmoins pas créer du test dans le simple but d'en créer. Chaque test doit donc être étudié et sa pertinenc pensée lors de sa construction. 