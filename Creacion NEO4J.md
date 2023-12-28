# Contributor Covenant Code of Conduct

## Our Pledge

We as members, contributors, and leaders pledge to make participation in our
community a harassment-free experience for everyone, regardless of age, body
size, visible or invisible disability, ethnicity, sex characteristics, gender
identity and expression, level of experience, education, socio-economic status,
nationality, personal appearance, race, religion, or sexual identity
and orientation.

We pledge to act and interact in ways that contribute to an open, welcoming,
diverse, inclusive, and healthy community.

## Our Standards

Examples of behavior that contributes to a positive environment for our
community include:
# Creacion de la base de datos de Neo4J
La base de datos ha sido creada de forma manual a base de importaciones CSV y Querrys con la consola que se puede encontrar en la pagina perteneciente a la base de datos. <br>Los CSVs son importados, al igual que el ejercicio anterior de la pagina con spring batch, de la web de Mockaroo, la cual me aporta una cantidad de posibilidades casi infinitas. Estos CSVs han sido usados para la creacion de la base de datos y los objetos de los mismos (nodos para neo4j) son completamente al azar, desde nombres hasta titulos de los libros. <br>
<hr>
## Links a los CSV

- Usuario.csv: https://www.mockaroo.com/e5e409b0
- Bibliotecario.csv: https://www.mockaroo.com/b32ebdd0
- Administrador.csv: https://www.mockaroo.com/eca16b10
- Libro.csv: https://www.mockaroo.com/7e4b1300
## Querys usadas para la creacion de la base de datos
```markdown
Añadir las Categorías de los Libros

```cypher
CREATE (:Categoria {nombre: 'Ficción'})
CREATE (:Categoria {nombre: 'Misterio'})
CREATE (:Categoria {nombre: 'Romance'})
CREATE (:Categoria {nombre: 'Ciencia Ficción'})
CREATE (:Categoria {nombre: 'Fantasía'})
CREATE (:Categoria {nombre: 'Thriller'})
CREATE (:Categoria {nombre: 'Biografía'})
CREATE (:Categoria {nombre: 'Autoayuda'})
CREATE (:Categoria {nombre: 'Historia'})
CREATE (:Categoria {nombre: 'Cocina'})
```

```markdown
 Crear las Relaciones entre Libros y Categorías

```cypher
CREATE (:Categoria {nombre: 'Ficción'})
CREATE (:Categoria {nombre: 'Misterio'})
CREATE (:Categoria {nombre: 'Romance'})
CREATE (:Categoria {nombre: 'Ciencia Ficción'})
CREATE (:Categoria {nombre: 'Fantasía'})
CREATE (:Categoria {nombre: 'Thriller'})
CREATE (:Categoria {nombre: 'Biografía'})
CREATE (:Categoria {nombre: 'Autoayuda'})
CREATE (:Categoria {nombre: 'Historia'})
CREATE (:Categoria {nombre: 'Cocina'})

WITH 1 as dummy // Puedes utilizar WITH para dividir las fases de la consulta

MATCH (b:Libro), (c:Categoria {nombre: b.categoria})
CREATE (b)-[:PERTENECE_A]->(c)
```

### Visualizacion del grafo despues de esta implementación

![Visualización del Grafo](Imagenes/primerGrafo.png)

```markdown
Crear la relacion entre Bibliotecarios y categorias

```cypher
MATCH (b:Bibliotecario), (c:Categoria {nombre: b.categoriaBibliotecario})
CREATE (b)-[:TRABAJA_EN]->(c)
```

### Visualizacion del grafo con los Libros y Bibliotecarios separados por Categorias

![Visualizacion del Grafo](Imagenes/segundoGrafo.png)

```markdown
Crear la coleccion Autor y sus relaciones con los libros

```cypher
CREATE (:Autor {nombre: 'John Smith'})
CREATE (:Autor {nombre: 'Emily Johnson'})
CREATE (:Autor {nombre: 'Michael Davis'})
CREATE (:Autor {nombre: 'Jessica Wilson'})
CREATE (:Autor {nombre: 'David Anderson'})
CREATE (:Autor {nombre: 'Sarah Thompson'})
CREATE (:Autor {nombre: 'Daniel Martinez'})
CREATE (:Autor {nombre: 'Olivia Taylor'})
CREATE (:Autor {nombre: 'Matthew Thomas'})
CREATE (:Autor {nombre: 'Sophia Hernandez'})
CREATE (:Autor {nombre: 'Andrew Moore'})
CREATE (:Autor {nombre: 'Emma Clark'})
CREATE (:Autor {nombre: 'Joseph Lewis'})
CREATE (:Autor {nombre: 'Ava Lee'})
CREATE (:Autor {nombre: 'Christopher Walker'})
CREATE (:Autor {nombre: 'Mia Hall'})
CREATE (:Autor {nombre: 'Nicholas Young'})
CREATE (:Autor {nombre: 'Abigail King'})
CREATE (:Autor {nombre: 'Joshua Hill'})
CREATE (:Autor {nombre: 'Charlotte Adams'})
CREATE (:Autor {nombre: 'Ethan Baker'})
CREATE (:Autor {nombre: 'Harper Wright'})
CREATE (:Autor {nombre: 'Anthony Garcia'})
CREATE (:Autor {nombre: 'Amelia Mitchell'})
CREATE (:Autor {nombre: 'Ryan Turner'})
CREATE (:Autor {nombre: 'Elizabeth Scott'})
CREATE (:Autor {nombre: 'William Rodriguez'})
CREATE (:Autor {nombre: 'Sofia Green'})
CREATE (:Autor {nombre: 'James White'})
CREATE (:Autor {nombre: 'Grace Harris'})
CREATE (:Autor {nombre: 'Benjamin Martin'})
CREATE (:Autor {nombre: 'Chloe Robinson'})
CREATE (:Autor {nombre: 'David Perez'})
CREATE (:Autor {nombre: 'Victoria Hall'})
CREATE (:Autor {nombre: 'Alexander Turner'})
CREATE (:Autor {nombre: 'Zoe Martinez'})
CREATE (:Autor {nombre: 'Daniel Johnson'})
CREATE (:Autor {nombre: 'Natalie Davis'})
CREATE (:Autor {nombre: 'Josephine Wilson'})
CREATE (:Autor {nombre: 'Henry Anderson'})
CREATE (:Autor {nombre: 'Lily Thompson'})
CREATE (:Autor {nombre: 'Samuel Moore'})
CREATE (:Autor {nombre: 'Ella Clark'})
CREATE (:Autor {nombre: 'Gabriel Lewis'})
CREATE (:Autor {nombre: 'Scarlett Lee'})
CREATE (:Autor {nombre: 'Jackson Walker'})
CREATE (:Autor {nombre: 'Avery Hall'})
CREATE (:Autor {nombre: 'David Young'})
CREATE (:Autor {nombre: 'Madison King'})
CREATE (:Autor {nombre: 'Lucas Hill'})

WITH 1 as dummy
MATCH (a:Autor), (l:Libro {autor: a.nombre})
CREATE (a)-[:ESCRITO_POR]->(l)
```
### Visualizacion de la relacion Autor con sus libros
![Visualizacion del Grafo](Imagenes/tercerGrafo.png)


```markdown

Añado los usuarios, estos tienen 3 gustos cada uno que van relacionados con las categorias de los libros
```cypher
MATCH (u:Usuario)
WITH u, [u.gusto1, u.gusto2, u.gusto3] AS gustos
UNWIND gustos AS gusto
MERGE (c:Categoria {nombre: gusto})
MERGE (u)-[:TIENE_GUSTO]->(c)

```
### Viasualizacion de todas las relaciones hasta ahora de la biblioteca
![Visualizacion del Grafo](Imagenes/cuartoGrafo.png)


- Demonstrating empathy and kindness toward other people
- Being respectful of differing opinions, viewpoints, and experiences
- Giving and gracefully accepting constructive feedback
- Accepting responsibility and apologizing to those affected by our mistakes,
  and learning from the experience
- Focusing on what is best not just for us as individuals, but for the
  overall community

Examples of unacceptable behavior include:

- The use of sexualized language or imagery, and sexual attention or
  advances of any kind
- Trolling, insulting or derogatory comments, and personal or political attacks
- Public or private harassment
- Publishing others' private information, such as a physical or email
  address, without their explicit permission
- Other conduct which could reasonably be considered inappropriate in a
  professional setting

## Enforcement Responsibilities

Community leaders are responsible for clarifying and enforcing our standards of
acceptable behavior and will take appropriate and fair corrective action in
response to any behavior that they deem inappropriate, threatening, offensive,
or harmful.

Community leaders have the right and responsibility to remove, edit, or reject
comments, commits, code, wiki edits, issues, and other contributions that are
not aligned to this Code of Conduct, and will communicate reasons for moderation
decisions when appropriate.

## Scope

This Code of Conduct applies within all community spaces, and also applies when
an individual is officially representing the community in public spaces.
Examples of representing our community include using an official e-mail address,
posting via an official social media account, or acting as an appointed
representative at an online or offline event.

## Enforcement

Instances of abusive, harassing, or otherwise unacceptable behavior may be
reported to the community leaders.
All complaints will be reviewed and investigated promptly and fairly.

All community leaders are obligated to respect the privacy and security of the
reporter of any incident.

## Enforcement Guidelines

Community leaders will follow these Community Impact Guidelines in determining
the consequences for any action they deem in violation of this Code of Conduct:

### 1. Correction

**Community Impact**: Use of inappropriate language or other behavior deemed
unprofessional or unwelcome in the community.

**Consequence**: A private, written warning from community leaders, providing
clarity around the nature of the violation and an explanation of why the
behavior was inappropriate. A public apology may be requested.

### 2. Warning

**Community Impact**: A violation through a single incident or series
of actions.

**Consequence**: A warning with consequences for continued behavior. No
interaction with the people involved, including unsolicited interaction with
those enforcing the Code of Conduct, for a specified period of time. This
includes avoiding interactions in community spaces as well as external channels
like social media. Violating these terms may lead to a temporary or
permanent ban.

### 3. Temporary Ban

**Community Impact**: A serious violation of community standards, including
sustained inappropriate behavior.

**Consequence**: A temporary ban from any sort of interaction or public
communication with the community for a specified period of time. No public or
private interaction with the people involved, including unsolicited interaction
with those enforcing the Code of Conduct, is allowed during this period.
Violating these terms may lead to a permanent ban.

### 4. Permanent Ban

**Community Impact**: Demonstrating a pattern of violation of community
standards, including sustained inappropriate behavior, harassment of an
individual, or aggression toward or disparagement of classes of individuals.

**Consequence**: A permanent ban from any sort of public interaction within
the community.

## Attribution

This Code of Conduct is adapted from the [Contributor Covenant][homepage],
version 2.0, available at
https://www.contributor-covenant.org/version/2/0/code_of_conduct.html.

Community Impact Guidelines were inspired by [Mozilla's code of conduct
enforcement ladder](https://github.com/mozilla/diversity).

[homepage]: https://www.contributor-covenant.org

For answers to common questions about this code of conduct, see the FAQ at
https://www.contributor-covenant.org/faq. Translations are available at
https://www.contributor-covenant.org/translations.
