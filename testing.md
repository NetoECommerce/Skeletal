# Testing Skeletal
Many features of Neto's front end are controlled by Javascript files that are not included in themes. For this reason, it can be risky making Javascript changes to Sekeletal, or any theme, as you could break something that you cannot fix. This is especially the case when updating dependencies like Bootstrap or JQuery.

In this document is a list of all functions beyond a front-end developers control, and how to test them.

## Address Book
Neto features an address book feature which allows users who are logged in to add, edit and remove postage addresses to their account. This can be done both from the checkout and from the accounts page.

### Actions to test:
- Adding an entry to the address book (accounts page and checkout)
- Removing an entry from the address book
- Selecting an entry in the address book on the checkout

## Add To Cart
There are various places throughout the system where you can add products to cart, in different ways.

*Note: In each case it is important to test the pop-up that always follows the Add to Cart action.*

- Standard Add to Cart (thumbnails & product page)
- Adding a child item to cart (Table view on products with children)
- Multi-item Add
- Add a kit to cart
- Add a kit with variations to cart (ensure the variations are refreshing correctly)
- Remove an item from cart (cart page and cart drop down)

## Filters
In the sidebar of most themes there are filters. These are influenced by Javascript and must be tested.

- Category filter
- Variation filter
- Price slider

## Search
Neto's search feature is powered by AJAX through Neto.js

- Standard search
- Search with AJAX dropdown

## AJAX templates
On product and cart pages there are AJAX templates which can refresh based on the users input.

- Loading & refreshing AJAX templates on products with variations
- Various AJAX templates on cart & checkout pages

## Compatibility Categories
Compatibility categories can have a dropdown interface, where you select a top-level category and another will load underneath.

- Loading of additional dropdowns
- Eventual redirect to a results page

## NView for Mobile Users
Some users do not have responsive websites and instead have mobile themes. It's important to make sure the automatic redirect for mobile devices to the `nview` **mobile** is working correctly.

- Auto setting the nview for mobile users

## Shipping Calculator
The shipping calculator is also powered by `neto.js`.
- Calculate shipping
- Recalculate shipping after it has already been calculated

## Back-in-stock Notifications
If a product is out of stock Neto lets users automatically be notified when it is back in stock.
- Add a Back-in-stock notification from thumbnails and product pages

## Stockist Finder
Neto has a feature that lets users search through a database of stockists and see them on a map.

- Search for a stockist and get a successful result

## Wishlist
Neto let's users add products to a wishlist so they can purchase them at a later date.
- Add product to a wish list
- Remove product from a wish list