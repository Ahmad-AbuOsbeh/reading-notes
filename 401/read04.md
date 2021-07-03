# Data Modeling

# Review, Research, and Discussion

**Name 3 advantages to Test Driven Development**

1. TDD reduces the time required for project development
2. Code flexibility and easier maintenance
3. With TDD you will get a reliable solution
4. Save project costs in the long run
5. Detailed project documentation
6. Better program design and higher code quality

**In what case would you need to use beforeEach() or afterEach() in a test suite?**

- in the mocking tests, before sesting and after testing will return your code as before.

**What is one downside of Test Driven Development**

- Tests need to be maintained when requirements change.

**What’s the primary difference between ES6 Classes and Constructor/Prototype Classes?**

1. Classes can’t be called without new, but functions intended as constructors can (and their this will be wrong)
2. Classes can extend more types than constructors can (like functions and arrays)
3. Classes’ prototypes are their parents (they inherit static properties); writers of constructor functions usually don’t bother with this
4. Non-classes can’t extend classes (because they can’t call the parent constructor – see the first point)
5. Classes are also scoped like let/const (block scope, temporal dead zone, not redeclareable) rather than like var (function scope, hoisted) or like function declarations (it’s complicated).

**Why REST?**

1. REST is Easy to Understand and Implement
2. REST Makes your Application More Scalable

- No state
- Faster Data Interchange Format

3. Caching is Easier with REST
4. REST is Flexibile

**external resources**

[https://www.codica.com/blog/test-driven-development-benefits/](https://www.codica.com/blog/test-driven-development-benefits/)
[https://subscription.packtpub.com/book/application_development/9781785880735/1/ch01lvl1sec12/disadvantages-of-tdd](https://subscription.packtpub.com/book/application_development/9781785880735/1/ch01lvl1sec12/disadvantages-of-tdd)
[https://stackoverflow.com/questions/49643582/what-is-the-difference-between-prototype-based-class-syntax-and-class-syntax-in](https://stackoverflow.com/questions/49643582/what-is-the-difference-between-prototype-based-class-syntax-and-class-syntax-in)
[https://www.freecodecamp.org/news/benefits-of-rest/](https://www.freecodecamp.org/news/benefits-of-rest/)

# Document the following Vocabulary Terms

**functional programming** : it is a programming paradigm where you mostly construct and structure your code using functions.

**object-oriented programming (OOP)** : it is about creating objects that contain both data and functions.

**class** : it's a special functions in ES6, it's like a bluebrint for data modeling.

**super** : we use this when extending the class, to inherit the previous properties from the parent class.

**this** : it is a keyword in javascript that refers to the scope that will be called in.

**Test Driven Development (TDD)** : it's a software development practice, by testing then correct the test, then refactor the code.

**Jest** : it is a JavaScript testing framework designed to ensure correctness of any JavaScript codebase. It allows you to write tests.

**Continuous Integration (CI)** : it is the practice of automating the integration of code changes from multiple contributors into a single software project.

**REST** : REpresentational State Transfer, is an architectural style for providing standards between computer systems on the web, making it easier for systems to communicate with each other.

**Data Model** : Data Model is the modeling of the data description, data semantics, and consistency constraints of the data. It provides the conceptual tools for describing the design of a database at each level of data abstraction. there are four data models used for understanding the structure of the database.

# Preview

Which 3 things had you heard about previously and now have better clarity on?

- TDD, data model, REST.

Which 3 things are you hoping to learn more about in the upcoming lecture/demo?

- OOP, classes, nosql.

What are you most excited about trying to implement or see how it works?

- sql database, OOP.

# Preparation Materials

# sql vs nosql (Video)

## sql :

- same schema for all data.
- there are relations between the data.
- vertically scaling (limitted)
- can't make a lot of requests (thousunds per second) to this database.

## No sql

- differnet schemas in the same collection
- no relations between data in general, but you can do some relations manually.
- verticl & horizontal scalling are suitable.
- can read & write a lot of data at the same time.

## using of sql & No sql :

- in general you can use each of them for same application.
- the best choice depends on your data and your application.
- for very large applications you have to use both of them.

# nosql vs sql

## sql

- relational database
- table based
- predefined standard schema
- vertically scelable(increase hardware parts to increase the power like; RAM, CPU, SSD)
- structured query language
- examples: MySql, Oracle, Sqlite, Postgres and MS-SQL
- good for complex queries.
- good for For high transactional based application

## No sql

- non-relational database
- document, key-value pairs, and column based
- dynamic schema
- horizontaly scelable (increase number of servers to increase the power of DB)
- unstructured query language
- examples: MongoDB, BigTable, Redis, RavenDb, Cassandra, Hbase, Neo4j and CouchDb
- good for hierarchical data storage

# nosql modeling techniques

- there are many types of data modeling inside No sql databases :
- this sroting depends on the number of relation used in each one, from low to high.
- key-value > ordered key-value > big table > document & full-text search > graph.

- these are data modeling types and its type of No sql data base :

**Key-Value Stores:** Oracle Coherence, Redis, Kyoto Cabinet

**BigTable-style Databases:** Apache HBase, Apache Cassandra

**Document Databases:** MongoDB, CouchDB

**Full Text Search Engines:** Apache Lucene, Apache Solr

**Graph Databases:** neo4j, FlockDB
