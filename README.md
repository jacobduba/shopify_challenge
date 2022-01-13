# Shopify Backend Developer Intern Challenge - Summer 2022
**TASK**: Build an inventory tracking web application for a logistics company.
We are looking for a web application that meets the requirements listed below, along with one additional feature, with the options also listed below.

## Requirements:
Basic CRUD Functionality. You should be able to:
* Create inventory items
* Edit Them
* Delete Them
* View a list of them

ONE OF THE FOLLOWING (We will only evaluate the first feature chosen, so please only choose one)
* **Push a button export product data to a CSV**
* Allow image uploads AND store image with generated thumbnails
* When deleting, allow deletion comments and undeletion
* Filtering based on fields/inventory count/tags/other metadata
* Ability to assign/remove inventory items to a named group/collection
* Ability to create warehouses/locations and assign inventory to specific locations
* Ability to create “shipments” and assign inventory to the shipment, and adjust inventory appropriately
* Ability to generate a report on inventory levels over time, like: most in-stock or out-of-stock last month

https://user-images.githubusercontent.com/11655457/149258709-6c97e5f8-4c27-4ed5-b6ff-b458a6a7bf89.mp4

## Installing
This has only been tested on unix systems, for Windows I reccomend developing with WSL.

Make sure you these programs installed prior:
* Node.js v16
* NPM v8

Seting up
```
git clone https://github.com/mooshoe/shopify_challenge && cd shopify-challenge
npm install
node index.js
```
