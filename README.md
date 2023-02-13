# Tests unitaires

Ceci est un repository dédié à la découverte des tests-unitaires Javascript/Typescript.

**Attention**, les exemples et définitions de ce repository concernent le langage Javascript. Si les concepts sont les mêmes, les exemples en fonction des langages risquent de différer.

## Définitions 

Les tests unitaires constituent une suite d'opérations permettant de vérifier la validité d'unités individuelles et indépendantes, dans le but de couvrir un maximum de surface scalable de l'application. 

### Mots-clés et définitions : 

- **Unité** : C'est le plus petit élément identifiable et testable de l'application. Cela peut être une fonction, une méthode, une classe, ...
- **Whitebox** : Le whitebox testing est un test du code en lui-même. Ce test appelle une partie du code afin d'en tester sa robustesse, sa structure. Ce test nécessite de bien connaître le code testé. 
- **Blackbox** : Les tests en blackbox examinent la sortie de la fonctionnalité de manière à déterminer si celle-ci est conforme ou non. Ces tests ne nécessitent pas de connaître le code de la fonction testée, car un simple appel à celle-ci permet d'en connaître l'output.
- **Isolation** : Les tests répondent à une logique d'isolation de l'unité entre elles. Chaque fonction d'un code est testée séparément.
- **Assertion** : De façon générale, proposition, de forme affirmative ou négative, qu'on avance et qu'on donne comme vraie. Dans le testing, l'assertion permet de vérifier une condition considérée comme juste. Schématiquement : 
  - Si une condition est vraie, l'assertion reste muette.
  - Si la condition est fausse, un message d'erreur apparaît.
- **Engine** : Lorsque l'on parle d'Engines, on parle de moteurs d'exécutions de tests.
- **Coverage** : Le taux de couverture exprime la surface de code testée et donc censée être robuste. Ce taux permet de déterminer à quel point nos tests unitaires recouvrent notre code. Attention toutefois, beaucoup d'entreprises ne jurent que par un 'code coverage' de 100%. Il ne faut néanmoins pas créer du test dans le simple but d'en créer. Chaque test doit ainsi être étudié et sa pertinence pensée lors de sa construction. 
- **Tests cases** : Les tests cases ou **scénarios de test** servent à vérifier que l'application répond bien aux spécifications demandées. Pour ce faire, le scénario de test comprends le nom de la fonction, la description du test, les conditions préalables requises, les étapes nécessaires à l'exécution du test, les résultats attendus et la sortie réelle. L'erreur doit également être spécifiée avec a minima un message d'erreur, un journal d'erreur, une capture d'écran du problème, et leurs étapes pour reproduire le problème. Le scénario de test peut donc prendre la forme d'un tableau récapitulatif, ou d'une documentation de test. 
- **Fixtures** : Une fixture en testing est une portion de données prédéfinie utilisée pour tester une fonction ou un composant particulier. Elles peuvent être utilisées pour fournir des entrées connues à un test, afin de s'assurer que les résultats produits sont corrects. Les fixtures permettent également de standardiser les entrées pour les tests, ce qui peut aider à éviter les erreurs d'encodage ou les oublis de données dans les tests manuels.
- **Tests suites** : La suite de tests est un groupement de tests assemblés de façon logique qui vérifient un aspect du comportement de l'application. L'organisation des tests permet de mieux gérer les erreurs, dans le but de mieux gérer les retouches de code ou les ajouts de fonctionnalités. 
- **Automation** : La 'test automation', ou automatisation des tests est un processus orienté Devops
- **Dette technique** : Les deadlines, la pression et les ressources limitées obligent les développeurs à prendre des choix de simplification dans le développement. Lorsque ces choix se font, une dette technique se constitue. Celle-ci e 
- **Les tests doubles (mocks objects et fake objects)** : D'après [Martin Fowler](https://martinfowler.com/articles/mocksArentStubs.html), les tests doubles sont des tests utilisant des objets factices en lieu et place des objets réels. Ces objets factices peuvent être utilisés selon différentes façons et sont les **dummy**, **Stubs**, **Spy**, **Fake Objects** et **Mocks objects**.
  - **Le Dummy** : Ce sont des objets passés dans la fonction à tester sans jamais être réellement utilisés. Ils servent uniquemement à remplir les paramètres des fonctions à tester. 
  - **Le stubbing, ou stubs** : Ce sont des objets servant à répondre automatiquement lors des appels. C'est une simulation d'objet permettant d'obtenir une réponse lorsque le test l'appelle. Il permet d'éviter la réponse 'null' et potentiellement d'avoir accès à des informations sur l'appel en lui-même (nombre d'appels, journal des appels..). Le stub est comme une image virtuelle. Celle-ci sert à vérifier le comportement de la fonctionnalité. 
  - **Le Spy** : Le spy est un objet factice ressemblant beaucoup au Stub, mais pouvant enregistrer en plus des paramètres.
  - **Les fake objects** : Ce sont des objets fonctionnels passés en paramètre, mais qui n'ont pas vocation à être utilisés en production, car inutiles. Par exemple, un object faut objet simulant la connection en base de donnée peut être créé afin de tester l'efficacité d'une fonction de lecture ou d'insertion en base de donnée. 
  - **Les mock objects** : Les mocks objects sont les formes les plus complexes de ces objets factices. Littéralement mock signifie "Simulacre". Le mock est donc un objet factice entier, permettant de prévoir les sorties de fonction et donc de vérifier les comportements. C'est une imitation d'une chose réelle qui peut être utilisée à sa place. 
- **Regression** : La régression ou **test de régression** est un test permettant de vérifier que l'ajout d'une fonctionnalité n'a pas altéré le fonctionnement du code existant. Grossièrement, les tests précédents sont ré-exécutés afin de vérifier que la nouvelle fonctionnalité ou nouvelle correction n'altère pas les fonctionnalités précédemment mises en place. Ces tests sont indispensables à toute application de qualité. Devant la complexité que peut représenter le test de toute l'application à chaque ajout ou modification de code, différentes méthodes peuvent être envisagées afin de réduire la complexité de ces tests : Du test global de l'application au simple test unitaire, les tests peuvent être [partiels, sélectifs, progressifs, ... ](https://visuresolutions.com/fr/what-is-regression-testing-definition-and-top-tools#:~:text=Le%20test%20de%20r%C3%A9gression%20est,produit%20logiciel%20de%20haute%20qualit%C3%A9.) 
- **Re factorisation** : La re factorisation du code est une étape intervenant après le temps de développement, dans lequel le développeur améliore son code de différentes façons (beauté, lisibilité, performances, ...). La phase de re factorisation du code peut amener des effets indésirables, bugs ou oublis de fonctionnalités en cas d'oubli ... Dans ce cadre, le test permet d'être certain que le code refactorisé possède les mêmes fonctionnalités que sa première version. Poussée à son paroxysme, cette façon d'envisager le test conduit à le placer en amont, ce que nous verrons dans le TDD.  
- **Behavior Driven Development** : Le Behavior Driven Developement, c'est en amont du développement réfléchir aux comportements qu'il doit posséder. Cette approche est particulièrement pertinente dans une méthodologie Agile de type Scrum. Dan North en 2003 définit celui-ci comme une extension du TDD, cette fois généralisée aux équipes du projet afin que celles-ci partagent un même niveau de compréhension des fonctionnalités. 
- **Test Driven Development** : Le TDD est le développement piloté par les tests. C'est une méthodologie de développement qui pousse les développeurs à tester toutes les fonctionnalités de l'application. Cette approche conseille même de concevoir ces tests en amont du développement des fonctionnalités, de façon à ce que l'étape de développement ne puisse rencontrer d'écart avec la ligne directrice fonctionnelle.  
- **Branch coverage** : La définition du branch coverage est une extension de la définition de coverage étendue aux branches. L'objectif erst de s'assurer que toutes les branches ont été testées.
- **Entropy** : L'entropie peut être comprise comme une forme de mesure de la complexité du code. Une entropie élevée correspond à un code complexe tandis qu'une entropie basse correspond à un code compréhensible et propre. Beaucoup d'indicateurs peuvent ou non être considérés en fonction des choix dans la mesure. Entre autre : le nombre de ligne de code par fichier, le nombre de fichiers, les profondeurs d'imbrications, le nombre de branches, les routes de fichiers et l'architecture, .. Dans tous les cas, cela reste une mesure personnelle et subjective.
- **Snapshot testing** : Les tests snapshot ou instantanés permettent de comparer un composant de l'interface utilisateur à un composant de référence stocké, les deux composants doivent correspondre pour que le test passe.
- **Inline Snapshots** : Les Inline snapshot sont des snapshot avec un code écrit à l'intérieur, sans passer par un instantané externe.
- **Smoke tests** ! Les tests de fumée sont des tests qui testent les fonctions critiques de l'application avant l'investigation des fonctions plus avancées. Par exemple, avant detester une fonction, le smoke test peut vouloir répondre à la question "l'application s'allume-t-elle ?" En cas de réponse négative, rien ne sert d'aller plus loin. 


##### Les autres types de test :

- **Tests d'intégration** : ce sont des tests qui vérifient la manière dont les différentes parties du code fonctionnent ensemble.
- **Tests de bout en bout** : ce sont des tests qui simulent l'interaction avec le système comme un utilisateur final. Ils permettent de vérifier que l'application répond bien aux besoins des utilisateurs.
- **Composant Testing** : Les tests de composants peuvent être considérés comme des tests intermédiaires entre les tests unitaires et les tests end-to-end.C'est un entre deux entre performance et le meilleur test coverage. Ils prennent notamment leur sens lorsque l'on parle de microservices. 
- **Tests exploratoires** : Ces tests n'adoptent pas de méthodologie structurée et explorent l'application afin de simuler les comportements utilisateurs attendus et inattendus.
- **Les tests de performance** : ces tests mesurent les performances d'un système sous différentes contraintes. 
- **Les tests de qualité** : ces tests vérifient la qualité de l'application en plusieurs termes : Qualité globale, sécurité, expérience utilisateur, ...'
- **Le Contract Testing** : [contract testing et le framework PACT](https://docs.pact.io/)

### Les outils 

|        **Mot-clé**         |                                                                                   **Outils associé**                                                                                    |
|:--------------------------:|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|
|       Test Unitaire        |                            [Jest](https://jestjs.io/fr/) [Mocha](https://mochajs.org/) [Jasmine](https://jasmine.github.io/) [Chai](https://www.chaijs.com/)                            |
| Coverage / Branch coverage |                                  [Istanbul](https://istanbul.js.org/) [C8](https://www.npmjs.com/package/c8) [NYC](https://www.npmjs.com/package/nyc)                                   |
|     Scénarios de tests     |                                                                            [cucumber](https://cucumber.io/)                                                                             |
|       Tests doubles        |                 [Jest](https://jestjs.io/fr/) [Mocha](https://mochajs.org/) [Sinon.js](https://sinonjs.org/) [testbouble.js](https://www.npmjs.com/package/testdouble)                  |
|          Entropie          |                           [SonarQube](https://www.sonarsource.com/products/sonarqube/) [ESLint](https://eslint.org/) [CodeClimate](https://codeclimate.com/)                            |
|   Tests de bout en bout    |            [Cypress](https://www.cypress.io/) [Puppeteer](https://pptr.dev/) [Selenium](https://www.selenium.dev/documentation/webdriver/) [testCafe](https://testcafe.io/)             |
|    Tests exploratoires     |              [BrowserStack](https://www.browserstack.com/) [Sauce Labs](https://saucelabs.com/) [Ghost Inspector](https://ghostinspector.com/) [Percy](https://percy.io/)               |
|    Tests de performance    | [JMeter](https://jmeter.apache.org/) [LoadRunner](https://www.microfocus.com/fr-fr/products/loadrunner-professional/overview) [Gatling](https://gatling.io/) [wrk](https://wrk.com/fr/) |
|      Tests de qualité      |                                              [ESLint](https://eslint.org/) [jslint](https://www.jslint.com/) [JsHint](https://jshint.com/)                                              |
 |            Autres          |                                     [TestCheck](https://github.com/leebyron/testcheck-js) [fastCheck](https://github.com/dubzzz/fast-check#readme)                                      | 

### La Pyramide de tests 

[pyramide de test](https://martinfowler.com/bliki/TestPyramid.html)
[Testing Microservices](https://copyconstruct.medium.com/testing-microservices-the-sane-way-9bb31d158c16)
[Testing in Prodiuction, the safe way](https://copyconstruct.medium.com/testing-in-production-the-safe-way-18ca102d0ef1)
[Testing in production, The hard parts](https://copyconstruct.medium.com/testing-in-production-the-hard-parts-3f06cefaf592)


### Les Tests en CI/CD


### Les tests Infrastructure

[Les tests du chaos](https://principlesofchaos.org/)
[Chaos Monkey](https://github.com/Netflix/chaosmonkey)
[node chaos monkey - à venir](https://github.com/goldbergyoni/node-chaos-monkey)



### Les différents moteurs et librairies de test : 

#### JEST 

#### MochaJS

#### CHAI 

#### C8 