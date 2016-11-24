What will you find here
===

This is a demo project presenting deepdancer and more generally dependency 
injection, the different tags let you navigate between three branches:

* No dependency injection, `master` branch, with just a functional project
* Using deepdancer, `deepdancer` branch, with the same project using deepdancer
and introducing unit tests previously very hard to setup.
* Using deepdancer-darkmagic, `deepdancer-darkmagic` branch, simplifying the
setup of dependencies.

What does the test project do
===

The test project offers a single API to store users alongs side their location.
Their location is retrieved from their IP.

`GET set/{username}/{ip}`

We have two external systems:

* An IP to location resolution service, here `http://ip-api.com/`
* A storage system, here the file system, but we could also have used a database.

It has only one unit test as an example.