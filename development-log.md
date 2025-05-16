<!-- My understanding

App.jsx => chief commander
Route (Page) => Layout contains different components
Header/Footer => outsides route for navigation
component = lego
api.js => all axios + API function
main.jsx => initiate react
index.html => browser first approact file -->

# Task 0 - Overview

- to create a platform for client to broswe/upload/order items from market place
- use react + router DOM create route
- use fetch/axios to connect NC API

# Task 1 - Getting the Data

- Endpoint API : https://nc-marketplace-2-g51j.onrender.com/api
- installation : npm install axios
- GET API: api.js => getProducts()

## Possible endpoint

- Get
- POST
- DELETE
- PATCH

# Task 2 - Wireframe

Things to consider:
Where is the data coming from?
How will the data look?
Will we need state?
Will this be a separate component?
Will it have it's own route?

## User Stories

As a user, I can view a list of available items.
As a user, I can view a list of items for a particular category.
As a user, I can list an item to sell.
As a user, I can order an item.
As a user, I can delete an item listing if I change my mind.
As a user, I can view which items I have previously ordered.
As a user, I can give another user kudos to provide feedback.
As a user, I can add an item to my basket to order later if I am still browsing.
As a user, I can view which items I have added to my basket.
As a user, I can remove items from my basket.
As a user, I can create a new user profile.

### all items

- GET /api/items
- an array of object
- state: items, setItems
- Component 1: ItemCard for each of item
- Component 2: ItemList for all of the items
- Route? homepage/ seperately as items

1.  useEffect call /api/items
2.  setItems => pass to ItemList
3.  ItemList render many ItemCard(s)

### List of Categories

- GET /api/categories
- OR GET /api/items?category=<categoryName> || Filter
- an array of object
- state: selectedCategory, setSelectedCategory
- Component 2: CategoryDropdownSelector
- Component 2: ItemList => filteredItems(Done in all item => ItemList)
- Route : items/:categoryName

  1. user selects category => update state:selectedCategory
  2. selectedCategory => fetch/filter setItems

### Post a item (sell)

- POST /api/items
- send a request body with a required key
- Component: SellForm
- state:[newItem, setNewItem], an object with required key(name ,desc, price..)
- route : items/new || /sell

  1. SellForm onSubmit => call POST /api/items
  2. success and redirect to home and display message

### Order an item

- POST /api/users/:username/basket
- Component : ItemDetail (items desc + button)
- no state
- route : ?

### Delete a listing item

- DELETE /api/users/:username/:item_id
- Component : ListedItemsList, ListedItemCard

### view the past order

- GET /api/users/:username/orders
- Component: OrderList + ListedItemsList

### Provide feedback/Kudos - like/ comment

- POST /api/items/:itemId/feedback
- GET /api/items/:itemId/feedback
- Component : FeedbackForm, FeedbackList

### Add item to basket for order later

- POST /api/users/:username/basket
- Component:

### View the Basket

- GET /api/users/:username/basket
- Component: BasketList, BasketItemCard
- State : basketItems, setBacksetItems

### Remove items from basket

- DELETE /api/users/:username/basket
- Component: BasketList, BasketItemCard
- State : basketItems, setBacksetItems

### Create user

- POST /api/users
- Component: RegisterForm
- Route : /register

# Task 3 Component tree

IMG path : "./component-tree.png
MD Path : "./component-tree.md

# Task 4 MVP User Stories

## Router

1. npm install react-router-dom
2. Router Structure : main.jsx => import + <BroswerRouter> wrap <App />
3. App.jsx - set Routes => import { Routes, Route, useNavigate } from "react-router-dom";
4. Apps.jxs - insert routes under return, routes could include 404
5. add all these components under page / component
6. edit component
7. useParamas for category

# Task 6

## MUI function

- Appbar => logo, profile and searchbar
