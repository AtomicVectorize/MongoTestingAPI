### _SQL vs NoSQL_ 
NoSQL Databases are non-tabular databases that store data differently than relational tables and don't require a fixed schema. NoSQL database also known as non-relational database. It processes information in a distributed manner and can oblige tremendous volumes of data. The main types of NoSQL database are _document_, _key-value_, _wide-column_, and _graph_, whereas SQL databases containing _tables_, _constraints_, and _relations_. Therefore, they provide flexible schemas and scale easily with large amounts of data and high user loads differ from SQL database. or relational database, that are tend to have rigid, complex, tabular schemas and typically require expensive vertical scaling.
- **Document databases**:
Store data in JSON, BSON, XML documents containing pairs of fields and values. 
_Usecases: ecommerce platforms, trading platforms, and mobile app development across industries
Databases: MongoDB, CouchDB, Terrastore, OrientDB, RavenDB, and Lotus Notes_
- **Key-value databases**
Database where each item contains key and values. In a sense, key-value is like a relational database with only two columns: the key and the value.
_Usecases: shopping carts, user preferences, and user profiles
Databases: Riak, Redis, Memcached, BerkeleyDB, UpscakeDB, Amazon DynamoDB, Project Voldemort, and Couchbase_
- **Wide-column databases**
Store data in tables, rows, and dynamic columns
_Usecases: analytics
Databases: Cassandra, HBase, Hypertable, and Amazon DynamoDB_
- **Graph databases**
Store data in nodes and edges. Nodes containing information about people, things, places, while edges containing the relationships between the nodes. Graph database is optimized to capture and search the connections between data elements, overcoming joining multiple tables in SQL databases
_Usecases: fraud detection, social networks, and knowledge graphs
Databases: Neo4j, Infinite Graph, OrientDB, FlockDB_

In NoSQL, every item in the database stands on its own. Each item only has 2 fields: a _unique key_ and a _value_. For example, if we want to store product information, we can use "product's bar" code as our key and the product name as the value. Instead of just the product name that we use as our value, we can also use JSON document containing more detail information about the product (i.e name, description, price, etc). If a single database server is not enough to store all the data or handle all the queries, we can split the workload across two or more servers. Each server will then be responsible for only a part of your database. These parts of database often called _partitions_ in NoSQL terms. If we want to know where a certain item is stored, we can use the key to determines on what partition an item that we are looking for. NoSQL databases use a hash function to convert each item's key into a number between a fixed range. This hash value and the fixed range is then used to determine where to store an item. The range itself will be split according to the total number of server that we used. All we have to do to store or to find an item is calculate the hash of an item's key and keep track of which server is responsible for which part of certain range (known as _keyspace_ in NoSQL terms). The way NoSQL databases accesses the data is what makes this database extremely scalable, vertically and horizontally.

| NoSQL Databases | SQL Databases |
| ------ | ------ |
| It is non-relational database system in that it has a stable in-built schema | It is Relational Database Management System in which it has vital or live schema |
| Able to store data in a hierarchical model | Cannot able to store data in a hierarchical model |
| Horizontally scalable (scale-out across commodity servers) | Vertically scalable (scale-up with a larger server) |
| Does not need object-relational mapping as it can map documents directly with data structure | Essential for object-relational mapping |
| Flexible | Rigid |
| Most do not support multi-record ACID transaction | Supported the multi-record ACID transaction |
| Focusing on scaling and allowing for fast application change | Focusing on reducing the duplicates |
| Not required joins | Required joins |
| Give faster queries performance | Slower in performing queries than NoSQL |
| Stores the data in document format as JSON document, in key-value pair, in wide-column and in graph | Stores data in table format with fixed rows and columns |
| Oracle, MySQL, Microsoft SQL, Server, and PostgreSQL | MongoDB, CouchDB, Redis, DynamoDB, and Cassandra |
| General purpose | **Document**: general purpose, **Key-Value**: large amounts of data with simple lookup queries, **Wide-Column**: large amounts of data with predictable query patterns, **Graph**: analyzing and traversing relationships between connected data |

The list below is some Database Software that is a **NoSQL** by nature:
- [Couchbase]
- [Redis]
- [MongoDB]
- [IBM Cloudant]
- [Amazon DynamoDB]
- [RavenDB]
- [Cassandra]
- [MarkLogic Server]
- [DataStax Enterprise]
- [Cloud Bigtable]
- [Azure Cosmos DB]

Considerations when choosing between databases:
| SQL Databases | NoSQL Databases |
| ------ | ------ |
| When workloads volumes usually fits within thousands of transactions per second | To deal with high volume workloads that require predictable latency at a large scale |
| Data need to be highly structured and requires referential integrity | Data is dynamic and frequently changes |
| When relationships must be expressed through table joins by following normalized data models | Can be denormalized data models |
| Handle complex queries and reports | Simple data retrieval and without joins |
| Needs to be deployed to large, high end hardware | Needs to be deployed to commodity hardware, such as public clouds |


### _Try Out MongoDB_
MongoDB is one of NoSQL databases. Using mongoDB, we can perform CRUD (create, read, update, delete) operations to access the documents of our database. Intallation of MongoDB can be completed in two ways: directly from mongoDB website, or using docker. When using docker for intallation purpose, we can use `docker-compose` to start the Docker container environment and use mongoDB within the container. In this example, we are using Docker to install MongoDB. Before running `docker-compose` command, we need to prepare YAML file containing the services/packages that we are going to include in our containers and a networks to connect each container to other container. To perform simple CRUD operations, we are using mongo in container 1 and mongo-express in container 2. After preparing the YAML file, we can run `docker-compose` command, then they will begin to pull all the packages that we already defined in our YAML file and running the containers. Here, we are finished installing MongoDB in our Docker environment. There are two ways to connect to MongoDB: using GUI client (MongoExpress, DataGrip, MongoDB Compass) and using mongo shell. In this example, we connect to MongoDB by using Mongo Shell. Before connect to MongoDB, we need to run programs in containers that are already running. We can use `docker exec` command for that purpose. Then we can connect to MongoDB using Mongo Shell using  `mongo mongodb://localhost:27017 -u rootuser -p rootpass`, it means we connect MongoDB at it's default port `27017`. Here we completed connect to MongoDB. We can also use MongoDB Atlas, MongoDB's fully managed Database-as-a-Service to create and access a Database.

MongoDB shell is a tool to navigating, inspecting, and manipulating data. There are various command to perform operations within our databases:
- List Databases
```sh
show dbs;
```
- List Collections
```sh
use [Existing Database];;
show collections;
```
- Count Documents in a Collection
```sh
use [Existing Database];
db.[Selected Collection].count()
````
- Find the First Document in a Collection
```sh
use [Existing Database];
db.[Selected Collection].findOne()
````
- Find a Document by ID or by filter
```sh
use [Existing Database];
db.[Selected Collection].findOne({_id: ObjectId("[OBJECT ID]")})
````
We can also using sample dataset from MongoDB containing nine databases with its collections containing:
- sample_airbnb:
-- listingsAndReviews
- sample_analytics
-- accounts
-- customers
-- transactions
- sample_geospatial
-- shipwrecks
- sample_guides
-- planets
- sample_mflix
-- comments
-- movies
-- sessions
-- theaters
-- users
- sample_restaurants
-- neighborhoods
-- restaurants
- sample_supplies
-- sales
- sample_training
-- companies
-- grades
-- inspections
-- posts
-- routes
-- trips
-- zips
- sample_weatherdata
-- data

Performing queries operation on those Databases can be completed by calling functions below:
**Inserting a document in a collection**
Test case input on _empty_ document (in 'student' collection):
```sh
> student = {
...     "firstname" : "Christian",
...     "lastname" : "Justin",
...     "email" : "christian.jmustamu@gmail.com",
...     "gender" : "male",
...     "country" : "Indonesia",
...     "isActive" : false,
...     "favoriteSubjects" : [
...         "maths",
...         "physics",
...         "compsi"
...     ],
...     "totalSpentBooks" : 0.00
... }
{
	"firstname" : "Christian",
	"lastname" : "Justin",
	"email" : "christian.jmustamu@gmail.com",
	"gender" : "male",
	"country" : "Indonesia",
	"isActive" : false,
	"favoriteSubjects" : [
		"maths",
		"physics",
		"compsi"
	],
	"totalSpentBooks" : 0
}
> db.student.insert(student)
````
_Output:_
```sh
> db.student.count()
1
````
**Read all existing documents in a collection**
_Input:_
```sh
db.student.find({}).pretty()
````
_Output:_
```sh
{
	"_id" : ObjectId("62d6b6a246cbf0645f0a84ef"),
	"firstname" : "Christian",
	"lastname" : "Justin",
	"email" : "christian.jmustamu@gmail.com",
	"gender" : "male",
	"country" : "Indonesia",
	"isActive" : false,
	"favoriteSubjects" : [
		"maths",
		"physics",
		"compsi"
	],
	"totalSpentBooks" : 0
}
{
	"_id" : ObjectId("62d6b84946cbf0645f0a84f0"),
	"firstname" : "Christian",
	"lastname" : "Justin",
	"email" : "christian.jmustamu@gmail.com",
	"gender" : "male",
	"country" : "Indonesia",
	"isActive" : false,
	"favoriteSubjects" : [
		"maths",
		"physics",
		"compsi"
	],
	"totalSpentBooks" : 0
}
{
	"_id" : ObjectId("62d6b84946cbf0645f0a84f1"),
	"firstname" : "Emely",
	"lastname" : "Dorothy",
	"email" : "testing@gmail.com",
	"gender" : "female",
	"country" : "Indonesia",
	"isActive" : true,
	"favoriteSubjects" : [
		"biology",
		"math",
		"chem"
	],
	"totalSpentBooks" : 210
}
````
_Note:_
According to the test case above, if we are inserting a data that is already exist in a collection, the data will still be inserted, resulting in duplicated data. If we insert a lightly modified data, the data will also be inserted

**Filtering documents by certain field and value in a collection**
_Input (by name):_
```sh
db.student.find({firstname: 'Emely'}).pretty()
````
_Ouput:_
```sh
{
	"_id" : ObjectId("62d6b84946cbf0645f0a84f1"),
	"firstname" : "Emely",
	"lastname" : "Dorothy",
	"email" : "testing@gmail.com",
	"gender" : "female",
	"country" : "Indonesia",
	"isActive" : true,
	"favoriteSubjects" : [
		"biology",
		"math",
		"chem"
	],
	"totalSpentBooks" : 210
}
````
**Take particular field of the Documents in a collection**
_Input:_
```sh
> db.student.find({}, {firstname: 1, lastname: 1, gender: 1}).pretty()
````
_Output:_
```sh
{
	"_id" : ObjectId("62d6b6a246cbf0645f0a84ef"),
	"firstname" : "Christian",
	"lastname" : "Justin",
	"gender" : "male"
}
{
	"_id" : ObjectId("62d6b84946cbf0645f0a84f0"),
	"firstname" : "Christian",
	"lastname" : "Justin",
	"gender" : "male"
}
{
	"_id" : ObjectId("62d6b84946cbf0645f0a84f1"),
	"firstname" : "Yuan",
	"lastname" : "Dorothy",
	"gender" : "female"
}
````
**Update particular field**
_Input:_
```sh
db.student.update({_id: ObjectId("62d6b84946cbf0645f0a84f1")}, {$set: {firstname: 'Yuan'}})
````
_Output:_
```sh
WriteResult({ "nMatched" : 1, "nUpserted" : 0, "nModified" : 1 })

{
	"_id" : ObjectId("62d6b84946cbf0645f0a84f1"),
	"firstname" : "Yuan",
	"lastname" : "Dorothy",
	"email" : "testing@gmail.com",
	"gender" : "female",
	"country" : "Indonesia",
	"isActive" : true,
	"favoriteSubjects" : [
		"biology",
		"math",
		"chem"
	],
	"totalSpentBooks" : 210
}
````
_Note:_
Above test case required an ID to identify the object that we are going to update

**Delete particular field**
_Input:_
```sh
> db.student.update({_id: ObjectId("62d6b84946cbf0645f0a84f1")}, {$unset: {firstname: 1}})
````
_Output:_
```sh
WriteResult({ "nMatched" : 1, "nUpserted" : 0, "nModified" : 1 })
````

**Set a new particular field and value**
_Input:_
```sh
> db.student.update({_id: ObjectId("62d6b84946cbf0645f0a84f1")}, {$set: {firstname: 'Yuan'}})
WriteResult({ "nMatched" : 1, "nUpserted" : 0, "nModified" : 1 })
````
_Output:_
```sh
> db.student.find({}, {firstname: 1, lastname: 1, gender: 1}).pretty()
{
	"_id" : ObjectId("62d6b6a246cbf0645f0a84ef"),
	"firstname" : "Christian",
	"lastname" : "Justin",
	"gender" : "male"
}
{
	"_id" : ObjectId("62d6b84946cbf0645f0a84f0"),
	"firstname" : "Christian",
	"lastname" : "Justin",
	"gender" : "male"
}
{
	"_id" : ObjectId("62d6b84946cbf0645f0a84f1"),
	"lastname" : "Dorothy",
	"gender" : "female",
	"firstname" : "Yuan"
}
````
_Note:_
If we set new field and its value to a certain object, the new field will also applied to all objects in documents with empty value

There are various way to perform CRUD operations in MongoDB databases. Below list the function to perform each operation
| Operations | Functions |
| ------ | ------ |
| Insert | insertOne(), insertMany(), updateOne(), updateMany(), findAndModify(), findOneAndUpdate(), findOneAndReplace(), bulkWrite() |
| Query | find(), find({ "[FIELD]" : "[VALUE]"}),  |
| Update | findAndModify(), findOneAndUpdate(), findOneAndReplace(), bulkWrite() |
| Delete | deleteOne(), deleteMany(), findOneAndDelete(), findAndModify(), bulkWrite() |



### _API Server_
Building RESTful APIs can be completed by using Express and Node with MongoDB. In this example we are going to perform complete CRUD operations using Express, Node.js framework. Operations will be performed on MongoDB database using MongoDB Atlas to initialize a cluster. We then connect the database with our application by using MongoDB native's drivers. Once we have the uri of the MongoDB Atlas, we can connect the uri with the app using `mongoose` node package.
Example of uri:
```sh
mongodb+srv://<username>:<password>@cluster0.wgy4fcy.mongodb.net/?retryWrites=true&w=majority
````
Replace <password> with the password for the <username> user

After successfully connected our app with the database, we will start by defining the schema of our object that will be contained in the database. In this example, we are defining text (String), status (Boolean), and createdOn (Date). Then, we can create and export our model. To be able to send and receive HTTP requests, we use Express Js. We also need to extracts the incoming request, to exposes it on res.body, and to parses the JSON, buffer, string, and URL encoded data that is submitted using an HTTP POST request. To test our Express server, simply run command:
```sh
node server.js
````
_Expected Output:_
```sh
Server running at http://localhost:3000
````
If it runs well, then we can start defining our endpoint. For this example, we allow users to perform POST, GET, PUT, and DELETE requests. Therefore, we should create the controller function that implement each operations (todoController.js).

**Testing our API on Postman**
GET output:
```sh
[
    {
        "_id": "62d9509e9c34da8892ff7aa1",
        "createdOn": "2022-07-21T13:11:58.935Z",
        "__v": 0
    },
    {
        "_id": "62d950e49c34da8892ff7aa4",
        "createdOn": "2022-07-21T13:13:08.406Z",
        "__v": 0
    },
    {
        "_id": "62d953cf2b10c7e77305c3af",
        "text": "true",
        "status": true,
        "createdOn": "2022-07-21T13:25:35.654Z",
        "__v": 0
    },
    {
        "_id": "62d954d9879b9f700557330e",
        "createdOn": "2022-07-21T13:30:01.148Z",
        "__v": 0
    },
    {
        "_id": "62d95c3200c856687cb68c97",
        "createdOn": "2022-07-21T14:01:22.254Z",
        "__v": 0
    },
    {
        "_id": "62d95c3500c856687cb68c99",
        "createdOn": "2022-07-21T14:01:25.993Z",
        "__v": 0
    },
    {
        "_id": "62d95c3700c856687cb68c9b",
        "createdOn": "2022-07-21T14:01:27.081Z",
        "__v": 0
    },
    {
        "_id": "62d95c3800c856687cb68c9d",
        "createdOn": "2022-07-21T14:01:28.240Z",
        "__v": 0
    },
    {
        "_id": "62d95c4100c856687cb68c9f",
        "createdOn": "2022-07-21T14:01:37.081Z",
        "__v": 0
    },
    {
        "_id": "62d95fe2975fe41d8df15af3",
        "createdOn": "2022-07-21T14:17:06.047Z",
        "__v": 0
    },
    {
        "_id": "62d95fea975fe41d8df15af5",
        "createdOn": "2022-07-21T14:17:14.698Z",
        "__v": 0
    },
    {
        "_id": "62d95ff4975fe41d8df15af7",
        "createdOn": "2022-07-21T14:17:24.084Z",
        "__v": 0
    },
    {
        "_id": "62d95ffc975fe41d8df15af9",
        "createdOn": "2022-07-21T14:17:32.494Z",
        "__v": 0
    }
]
````
DELETE output:
```sh
[
    {
        "_id": "62d9509e9c34da8892ff7aa1",
        "createdOn": "2022-07-21T13:11:58.935Z",
        "__v": 0
    },
    {
        "_id": "62d950e49c34da8892ff7aa4",
        "createdOn": "2022-07-21T13:13:08.406Z",
        "__v": 0
    },
    {
        "_id": "62d953cf2b10c7e77305c3af",
        "text": "true",
        "status": true,
        "createdOn": "2022-07-21T13:25:35.654Z",
        "__v": 0
    },
    {
        "_id": "62d954d9879b9f700557330e",
        "createdOn": "2022-07-21T13:30:01.148Z",
        "__v": 0
    },
    {
        "_id": "62d95c3200c856687cb68c97",
        "createdOn": "2022-07-21T14:01:22.254Z",
        "__v": 0
    },
    {
        "_id": "62d95c3500c856687cb68c99",
        "createdOn": "2022-07-21T14:01:25.993Z",
        "__v": 0
    },
    {
        "_id": "62d95c3700c856687cb68c9b",
        "createdOn": "2022-07-21T14:01:27.081Z",
        "__v": 0
    },
    {
        "_id": "62d95c3800c856687cb68c9d",
        "createdOn": "2022-07-21T14:01:28.240Z",
        "__v": 0
    },
    {
        "_id": "62d95c4100c856687cb68c9f",
        "createdOn": "2022-07-21T14:01:37.081Z",
        "__v": 0
    },
    {
        "_id": "62d95fe2975fe41d8df15af3",
        "createdOn": "2022-07-21T14:17:06.047Z",
        "__v": 0
    },
    {
        "_id": "62d95fea975fe41d8df15af5",
        "createdOn": "2022-07-21T14:17:14.698Z",
        "__v": 0
    },
    {
        "_id": "62d95ff4975fe41d8df15af7",
        "createdOn": "2022-07-21T14:17:24.084Z",
        "__v": 0
    }
]
````
Notes:
Total number of object is decreasing from 10 to 9 objects

Express, Node.js framework, is a minimal and flexible node.js web application framework that provides a robust set of features for building single and multi-page, and hybrid web applications. On the other hand, Spring Boot, is detailed as production-grade applications and services.

**PS** in this assignment, i'm not completing the spring boot task due to unfamiliar with java and its environment.

## _Server Containerization using Docker_
Docker is the leading way to isolate, organize application and their dependencies after virtualization. **Virtualization** place each and every application in its own virtual machine. These machines run multiple applications on the same physical hardware. This way of isolating and organizing applications had few drawbacks, including running multiple virtual machines lead to unstable performance, the boot-up process would usually take a long time, and VM's would not solve the problems like portability, software updates, or continuous integration and continuous delivery. These drawbacks led to the emergence of a new technique called **Containerization**. Containerization is a type of virtualization which brings virtualization to the operating system level. Containerization on the operating system level, while virtualization on the hardware level. There are 3 main reasons to use containers:
- Containers use the host's operating system so they can share relevant libraries and resources as and when needed
- Application specific binaries and libraries of containers run on the host kernel so they can boost processing and execution time of applications
- Booting up a container takes only a few second

Docker is a platform that packages an application and all its dependencies together in the form of containers. This ensures that the application works in any environment. Using docker makes sure that each and every application runs on separate containers and has its own set of dependencies and libraries so that each application is independent of other applications, therefore, giving developers assurance that the app they built will not interfere with one another. QA team would only need to run the container to replicate the developer's environment. When using Docker, we will be introduced to terms such as _Docker Image_, _Docker Containers_, and _Docker Registry_.
- **Docker Image**: A template that is used to create Docker containers. These templates are the building blocks of a Docker Container. To run the image and create a container, we can use `docker run`. Docker images are stored in the Docker Registry.
- **Docker Containers**: A running instance of a Docker image. They hold the entire package needed to run the application. In other words, Docker containers are the ready applications created from Docker images.
- **Docker Registry**: A stateless, highly scalable server side application that stores and lets you distribute Docker images. We can use the registry if we want to tighyly control where the images are being stored, to fully own our images distribution pipeline, and to integrate image storage and distribution tightly into our development workflow.

## _HTTP Benchmarking_
Web server benchmarking is the process of testing a web server's performance to determine how well a server can cope with high workloads. Benchmarking helps us determine which server, tech stacks, and configuration that will perform best for our application and gives us the benchmark performance when our application become slow or break down. Various metrics, such as the number of requests served within a specified period, the latency for each new connection/request, or the throughput, can be used to show the performance benchmark. There are numerous tools designed to perform load testing and HTTP benchmarking for our application.
- wrk
wrk is a modern HTTP benchmarking tool capable of generating significant load when run on a single multi-core CPU. It uses multi-threading, which allows to leverage multi-core CPU to generate a high workload for testing HTTP connections, and gives the number of HTTP connections, threads, duration, script, and latency. To run a benchmark, we can use `wrk -t12 -c400 -d30s http://127.0.0.1:8080/index.html`, it means that we run a benchmark for 30 seconds, using 12 threads, and keeping 400 connections open. Output after running a benchmark: latency, total request per second, and total transfer per second.
- vegeta
vegeta is a versatile HTTP load testing tool built out of a need to drill HTTP services with a constant request rate. Can be used as a Comman Line Utility and as a library. It gives the output of total requests, duration of benchmark, latencies, bytes in, bytes out, and success ratio.


   [Cloud Bigtable]: <https://cloud.google.com/bigtable>
   [Amazon DynamoDB]: <https://aws.amazon.com/dynamodb/>
   [RavenDB]: <https://ravendb.net/>
   [Cassandra]: <https://cassandra.apache.org/>
   [MarkLogic Server]: <https://www.marklogic.com/>
   [DataStax Enterprise]: <https://www.datastax.com/>
   [Azure Cosmos DB]: <https://cosmos.azure.com/>
   [IBM Cloudant]: <https://www.ibm.com/cloud/cloudant>
   [Redis]: <https://redis.com/>
   [Couchbase]: <https://www.couchbase.com/>
   [MongoDB]: <https://www.mongodb.com/>

